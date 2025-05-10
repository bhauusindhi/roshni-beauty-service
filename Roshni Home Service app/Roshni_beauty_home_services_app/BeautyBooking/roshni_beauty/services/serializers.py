from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'phone', 'address', 'is_customer', 'is_beautician']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'phone', 'address']
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            phone=validated_data.get('phone', ''),
            address=validated_data.get('address', ''),
            is_customer=True
        )
        return user

class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    category = ServiceCategorySerializer(read_only=True)
    
    class Meta:
        model = Service
        fields = '__all__'

class BeauticianSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    services = ServiceSerializer(many=True, read_only=True)
    
    class Meta:
        model = Beautician
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    service = ServiceSerializer(read_only=True)
    beautician = BeauticianSerializer(read_only=True)
    
    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ['customer', 'status', 'created_at']

class TestimonialSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    
    class Meta:
        model = Testimonial
        fields = '__all__'
        read_only_fields = ['customer', 'is_approved', 'created_at']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'