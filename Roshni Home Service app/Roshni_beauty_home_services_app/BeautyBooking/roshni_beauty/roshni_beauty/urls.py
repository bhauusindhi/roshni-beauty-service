from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token  # यह import जोड़ें
from services import views

# API Router Configuration
router = routers.DefaultRouter()
router.register(r'services', views.ServiceViewSet)
router.register(r'beauticians', views.BeauticianViewSet)
router.register(r'appointments', views.AppointmentViewSet)
router.register(r'testimonials', views.TestimonialViewSet)

urlpatterns = [
    # Admin URL
    path('admin/', admin.site.urls),
    
    # Home Page URL
    path('', views.home_view, name='home'),
    
    # API URLs
    path('api/', include(router.urls)),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    
    # सही Token Authentication URL (डुप्लीकेट को हटा दिया)
    path('api/auth/token/', obtain_auth_token, name='api_token_auth')
]