from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.exceptions import PermissionDenied

def home_view(request):
    return render(request, 'index.html')

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'user': UserSerializer(user).data,
                'token': token.key
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            login(request, user)
            return Response({
                'user': UserSerializer(user).data,
                'token': token.key
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=status.HTTP_200_OK)

class ServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BeauticianViewSet(viewsets.ModelViewSet):
    queryset = Beautician.objects.filter(is_available=True)
    serializer_class = BeauticianSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()  # यह लाइन जोड़ें
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_beautician:
            return Appointment.objects.filter(beautician__user=self.request.user)
        return Appointment.objects.filter(customer=self.request.user)

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()  # यह लाइन जोड़ें
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset  # या return Testimonial.objects.all()
        return self.queryset.filter(is_approved=True)

    def perform_create(self, serializer):
        if self.request.user.is_customer:
            serializer.save(customer=self.request.user)
        else:
            raise PermissionDenied("Only customers can create testimonials")

class UserProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    def put(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)