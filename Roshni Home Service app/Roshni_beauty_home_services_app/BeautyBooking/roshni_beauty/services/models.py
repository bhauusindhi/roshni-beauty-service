from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.core.validators import MinValueValidator, MaxValueValidator

# models.py
class User(AbstractUser):
    is_customer = models.BooleanField(default=True)
    is_beautician = models.BooleanField(default=False)
    phone = models.CharField(max_length=15, blank=True)
    address = models.TextField(blank=True)

    # Remove the groups and user_permissions fields
    # They are already inherited from AbstractUser
    
    # These fields should be in the User model
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name="custom_user_set",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="custom_user_set",
        related_query_name="user",
    )

    def __str__(self):
        return self.username

class ServiceCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration = models.PositiveIntegerField(help_text="Duration in minutes")
    image = models.ImageField(upload_to='services/')
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name

class Beautician(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    user = models.OneToOneField('services.User', on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    experience = models.PositiveIntegerField(help_text="Years of experience")
    image = models.ImageField(upload_to='beauticians/')
    services = models.ManyToManyField(Service)
    is_available = models.BooleanField(default=True)
    rating = models.FloatField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    
    def __str__(self):
        return self.user.get_full_name()

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    # customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer_appointments')
    customer = models.ForeignKey('services.User', on_delete=models.CASCADE, related_name='customer_appointments')
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True, blank=True)
    beautician = models.ForeignKey(Beautician, on_delete=models.SET_NULL, null=True, blank=True)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    address = models.TextField()
    special_instructions = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.customer.username} - {self.service.name if self.service else 'Package'} on {self.appointment_date}"

class Testimonial(models.Model):
    # 
    customer = models.ForeignKey('services.User', on_delete=models.CASCADE)
    content = models.TextField()
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    is_approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Testimonial by {self.customer.username}"

class Payment(models.Model):
    PAYMENT_STATUS = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    ]
    
    PAYMENT_METHOD = [
        ('cash', 'Cash'),
        ('online', 'Online Payment'),
        ('card', 'Credit/Debit Card'),
        ('upi', 'UPI'),
    ]
    
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD)
    transaction_id = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default='pending')
    payment_date = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return f"Payment #{self.id} for {self.appointment}"