from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, ServiceCategory, Service, Beautician, Appointment, Testimonial, Payment

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {'fields': ('phone', 'address', 'is_customer', 'is_beautician')}),
    )
    add_fieldsets = BaseUserAdmin.add_fieldsets + (
        (None, {'fields': ('phone', 'address', 'is_customer', 'is_beautician')}),
    )
    list_display = ('username', 'email', 'phone', 'is_customer', 'is_beautician', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_customer', 'is_beautician')
    search_fields = ('username', 'email', 'phone', 'address')

@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'duration', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Beautician)
class BeauticianAdmin(admin.ModelAdmin):
    list_display = ('user', 'get_phone', 'experience', 'rating', 'is_available')
    list_filter = ('is_available', 'experience')
    search_fields = ('user__username', 'user__phone')
    filter_horizontal = ('services',)

    def get_phone(self, obj):
        return obj.user.phone
    get_phone.short_description = 'Phone'

class PaymentInline(admin.TabularInline):
    model = Payment
    extra = 0
    readonly_fields = ('payment_date',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('customer', 'beautician', 'service', 'appointment_date', 'status')
    list_filter = ('status', ('appointment_date', admin.DateFieldListFilter))
    search_fields = ('customer__username', 'beautician__user__username', 'service__name')
    inlines = [PaymentInline]
    date_hierarchy = 'appointment_date'

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('customer', 'rating', 'is_approved', 'created_at')
    list_filter = ('rating', 'is_approved', 'created_at')
    search_fields = ('customer__username', 'content')
    actions = ['approve_testimonials']

    def approve_testimonials(self, request, queryset):
        queryset.update(is_approved=True)
    approve_testimonials.short_description = "Approve selected testimonials"

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('appointment', 'amount', 'status', 'payment_method', 'payment_date')
    list_filter = ('status', 'payment_method')
    search_fields = ('appointment__customer__username', 'transaction_id')
    date_hierarchy = 'payment_date'
    readonly_fields = ('payment_date',)
