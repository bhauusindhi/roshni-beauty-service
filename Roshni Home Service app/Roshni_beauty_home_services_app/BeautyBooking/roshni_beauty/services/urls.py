from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register(r'service-categories', ServiceCategoryViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'beauticians', BeauticianViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'testimonials', TestimonialViewSet)

urlpatterns = [
    path('', home_view, name='home'),
    path('api/', include(router.urls)),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/profile/', UserProfileView.as_view(), name='profile'),
    path('api/auth/token/', obtain_auth_token, name='api_token_auth')
]