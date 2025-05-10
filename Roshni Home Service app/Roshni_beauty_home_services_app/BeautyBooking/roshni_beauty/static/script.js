

  // DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const servicesContainer = document.querySelector('.services-container');
const testimonialsContainer = document.querySelector('.testimonials-container');
const packageContainer = document.querySelector('.packages-container');
const beauticiansContainer = document.querySelector('.beauticians-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const bookNowBtns = document.querySelectorAll('.book-now-btn');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const bookingForm = document.getElementById('booking-form');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const okBtn = document.querySelector('.ok-btn');

// Sample Data (This would come from backend in a real app)
const services = [
    {
        id: 1,
        name: 'Classic Facial',
        description: 'Deep cleansing facial treatment with high-quality products that leaves your skin refreshed and rejuvenated.',
        category: 'facial',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Hair Spa Treatment',
        description: 'Revitalizing hair spa treatment that repairs damaged hair and adds natural shine and volume.',
        category: 'hair',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1580618864194-0fa0a6a4b214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNwYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Bridal Makeup',
        description: 'Complete bridal makeup package with premium products to make you look stunning on your special day.',
        category: 'makeup',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Manicure & Pedicure',
        description: 'Relaxing hand and foot treatment that includes nail shaping, cuticle care, and polish application.',
        category: 'nail',
        price: 800,
        image: 'https://images.unsplash.com/photo-1610992235683-e39d69f54d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuaWN1cmUlMjBwZWRpY3VyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Full Body Massage',
        description: 'Therapeutic full body massage that relieves stress and tension, improving overall wellness.',
        category: 'spa',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keSUyMG1hc3NhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: 'Party Makeup',
        description: 'Glamorous makeup for parties and special occasions to make you stand out in the crowd.',
        category: 'makeup',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1588946305279-bdb91321e635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2xhbW91ciUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];

const beauticians = [
    {
        id: 1,
        name: 'Priya Sharma',
        experience: '8 years',
        specialties: ['Facial', 'Hair Care', 'Makeup'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Anjali Patel',
        experience: '6 years',
        specialties: ['Nail Care', 'Spa', 'Makeup'],
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Deepika Mehta',
        experience: '10 years',
        specialties: ['Bridal Makeup', 'Hair Styling', 'Facial'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Sana Khan',
        experience: '5 years',
        specialties: ['Spa', 'Massage', 'Facial'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }
];

const packages = [
    {
        id: 1,
        name: 'Bridal Package',
        description: 'Complete bridal beauty package',
        price: 10000,
        features: [
            'Pre-bridal facial',
            'Bridal makeup',
            'Hair styling',
            'Mehndi application',
            'Manicure & pedicure'
        ]
    },
    {
        id: 2,
        name: 'Spa Relaxation',
        description: 'Full day spa relaxation package',
        price: 3500,
        features: [
            'Full body massage',
            'Facial treatment',
            'Foot reflexology',
            'Hair spa',
            'Steam bath'
        ]
    },
    {
        id: 3,
        name: 'Party Ready',
        description: 'Get ready for your special occasion',
        price: 2500,
        features: [
            'Party makeup',
            'Hair styling',
            'Manicure',
            'Quick facial',
            'Free touch-up kit'
        ]
    }
];

const testimonials = [
    {
        id: 1,
        content: "I had the most relaxing experience with Roshni Beauty's home services. The beautician was professional, and I didn't have to leave the comfort of my home. Highly recommended!",
        user: {
            name: 'Neha Singh',
            location: 'Mumbai',
            image: 'https://images.unsplash.com/...'
        }
    },
    // ... other testimonials
];
    {
        id: 2
        content: 'The bridal makeup package was fantastic! They made me look stunning on my wedding day, and everyone complimented my look. The team was punctual and very professional.'

        user: {
            name: 'Pooja Desai'
            location: 'Delhi'
            image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        }
    }

    {
        id: 3
        content: 'I ve been using Roshni Beauty services for over a year now, and I m always satisfied with their quality and professionalism. The beauticians are skilled and use premium products.'

        user: {
            name: 'Anita Reddy'
            location: 'Bangalore'
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
    }


// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display services
    displayServices(services);
    
    // Display beauticians
    displayBeauticians(beauticians);
    
    // Display packages
    displayPackages(packages);
    
    // Display testimonials
    displayTestimonials(testimonials);
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize modal functionality
    initModals();
    
    // Initialize form submissions
    initFormSubmissions();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Initialize filtering
    initFiltering();
});

// === Functions ===

// Display services
function displayServices(servicesArray) {
    servicesContainer.innerHTML = '';
    
    if (servicesArray.length === 0) {
        servicesContainer.innerHTML = '<p class="no-results">No services found matching your search criteria.</p>';
        return;
    }
    
    servicesArray.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.dataset.category = service.category;
        serviceCard.dataset.price = service.price;
        
        serviceCard.innerHTML = `
            <div class="service-img">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
            <div class="service-footer">
                <div class="service-price">₹${service.price}</div>
                <button class="btn book-service-btn" data-service-id="${service.id}" data-service-name="${service.name}">Book Now</button>
            </div>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });
    
    // Add event listeners to newly created book buttons
    document.querySelectorAll('.book-service-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service-id');
            const serviceName = this.getAttribute('data-service-name');
            openBookingModal(serviceId, serviceName);
        });
    });
}

// Display beauticians
function displayBeauticians(beauticiansArray) {
    beauticiansContainer.innerHTML = '';
    
    beauticiansArray.forEach(beautician => {
        const beauticianCard = document.createElement('div');
        beauticianCard.classList.add('beautician-card');
        
        const starsHTML = generateStarRating(beautician.rating);
        const specialtiesHTML = beautician.specialties.map(specialty => 
            `<span class="specialty-tag">${specialty}</span>`
        ).join('');
        
        beauticianCard.innerHTML = `
            <div class="beautician-img">
                <img src="${beautician.image}" alt="${beautician.name}">
            </div>
            <div class="beautician-content">
                <h3>${beautician.name}</h3>
                <p>${beautician.experience} Experience</p>
                <div class="beautician-rating">
                    ${starsHTML}
                </div>
                <div class="beautician-specialties">
                    ${specialtiesHTML}
                </div>
            </div>
        `;
        
        beauticiansContainer.appendChild(beauticianCard);
    });
}

// Generate star rating HTML
function generateStarRating(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && halfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    starsHTML += ` <span>${rating.toFixed(1)}</span>`;
    return starsHTML;
}

// Display packages
function displayPackages(packagesArray) {
    packageContainer.innerHTML = '';
    
    packagesArray.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.classList.add('package-card');
        
        const featuresHTML = pkg.features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
        ).join('');
        
        packageCard.innerHTML = `
            <div class="package-header">
                <h3>${pkg.name}</h3>
                <p>${pkg.description}</p>
            </div>
            <div class="package-content">
                <div class="package-price">
                    ₹${pkg.price} <span>inclusive of all taxes</span>
                </div>
                <ul class="package-features">
                    ${featuresHTML}
                </ul>
            </div>
            <div class="package-footer">
                <button class="btn book-now-btn" data-package-id="${pkg.id}" data-package-name="${pkg.name}">Book Package</button>
            </div>
        `;
        
        packageContainer.appendChild(packageCard);
    });
    
    // Add event listeners to newly created book buttons
    document.querySelectorAll('.package-footer .book-now-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const packageId = this.getAttribute('data-package-id');
            const packageName = this.getAttribute('data-package-name');
            openBookingModal(packageId, packageName, true);
        });
    });
}

// Display testimonials
function displayTestimonials(testimonialsArray) {
    const testimonialSlide = document.createElement('div');
    testimonialSlide.classList.add('testimonial-slide');
    
    testimonialsArray.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                ${testimonial.content}
            </div>
            <div class="testimonial-user">
                <img src="${testimonial.user.image}" alt="${testimonial.user.name}">
                <div class="user-info">
                    <h4>${testimonial.user.name}</h4>
                    <p>${testimonial.user.location}</p>
                </div>
            </div>
        `;
        
        testimonialSlide.appendChild(testimonialCard);
    });
    
    testimonialsContainer.innerHTML = '';
    testimonialsContainer.appendChild(testimonialSlide);
}

// Initialize mobile menu
function initMobileMenu() {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        authButtons.classList.toggle('show');
    });
}

// Initialize modals
function initModals() {
    // Open login modal
    loginBtn.addEventListener('click', function() {
        openModal('login-modal');
    });
    
    // Open signup modal
    signupBtn.addEventListener('click', function() {
        openModal('signup-modal');
    });
    
    // Open booking modal from hero section
    bookNowBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.closest('.package-footer')) {
                // Already handled in displayPackages
                return;
            }
            
            if (this.closest('.service-footer')) {
                // Already handled in displayServices
                return;
            }
            
            // If clicked from hero or CTA section
            openModal('booking-modal');
        });
    });
    
    // Close modals with close button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Switch between login and signup
    if (showSignupLink) {
        showSignupLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(document.getElementById('login-modal'));
            openModal('signup-modal');
        });
    }
    
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(document.getElementById('signup-modal'));
            openModal('login-modal');
        });
    }
    
    // Close confirmation modal with OK button
    if (okBtn) {
        okBtn.addEventListener('click', function() {
            closeModal(document.getElementById('confirmation-modal'));
        });
    }
}

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Open booking modal with service information
function openBookingModal(id, name, isPackage = false) {
    const modal = document.getElementById('booking-modal');
    const selectedServiceInput = document.getElementById('selected-service');
    
    if (modal && selectedServiceInput) {
        const prefix = isPackage ? 'Package: ' : 'Service: ';
        selectedServiceInput.value = prefix + name;
        
        // You could add more fields like price, etc.
        
        openModal('booking-modal');
    }
}

// Initialize form submissions
function initFormSubmissions() {
    // Booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const service = document.getElementById('selected-service').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const address = document.getElementById('booking-address').value;
            
            // In a real app, you would send this data to the backend
            console.log('Booking:', { service, date, time, address });
            
            // For demo purposes, show confirmation modal
            document.getElementById('conf-service').textContent = service;
            document.getElementById('conf-date').textContent = formatDate(date);
            document.getElementById('conf-time').textContent = formatTime(time);
            document.getElementById('conf-address').textContent = address;
            
            closeModal(document.getElementById('booking-modal'));
            openModal('confirmation-modal');
            
            // Reset form
            this.reset();
        });
    }
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // In a real app, you would send this data to the backend for authentication
            console.log('Login:', { email, password });
            
            // For demo purposes, just close the modal
            closeModal(document.getElementById('login-modal'));
            
            // Reset form
            this.reset();
        });
    }
    
    // Signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const phone = document.getElementById('signup-phone').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            // In a real app, you would validate and send this data to the backend
            console.log('Signup:', { name, email, phone, password });
            
            // For demo purposes, just close the modal
            closeModal(document.getElementById('signup-modal'));
            
            // Reset form
            this.reset();
        });
    }
}

// Format date (YYYY-MM-DD to DD/MM/YYYY)
function formatDate(dateString) {
    if (!dateString) return '';
    
    const parts = dateString.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Format time (24h to 12h)
function formatTime(timeString) {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes} ${ampm}`;
}

// Initialize scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .beautician-card, .step, .package-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize testimonial slider
function initTestimonialSlider() {
    let currentSlide = 0;
    const testimonialSlide = document.querySelector('.testimonial-slide');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (!testimonialSlide || testimonialCards.length === 0) return;
    
    function showSlide(index) {
        if (index < 0) index = testimonialCards.length - 1;
        if (index >= testimonialCards.length) index = 0;
        
        currentSlide = index;
        testimonialSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Auto-slide every 5 seconds
    let slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Pause auto-slide when user interacts
    testimonialSlide.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    testimonialSlide.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    });
    
    // Initialize first slide
    showSlide(0);
}

// Initialize filtering functionality
function initFiltering() {
    // Search input event
    searchInput.addEventListener('input', filterServices);
    
    // Category filter change event
    categoryFilter.addEventListener('change', filterServices);
    
    // Price filter change event
    priceFilter.addEventListener('change', filterServices);
}

// Filter services based on search input and filters
function filterServices() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const priceValue = priceFilter.value;
    
    // Create a filtered array based on the search term and filters
    const filteredServices = services.filter(service => {
        // Search term filter
        const nameMatch = service.name.toLowerCase().includes(searchTerm);
        const descMatch = service.description.toLowerCase().includes(searchTerm);
        const searchMatch = nameMatch || descMatch;
        
        // Category filter
        const categoryMatch = categoryValue === '' || service.category === categoryValue;
        
        return searchMatch && categoryMatch;
    });
    
    // Sort by price if needed
    if (priceValue === 'low') {
        filteredServices.sort((a, b) => a.price - b.price);
    } else if (priceValue === 'high') {
        filteredServices.sort((a, b) => b.price - a.price);
    }
    
    // Display filtered services
    displayServices(filteredServices);
}

// Add sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// API Configuration
const API_BASE = 'http://localhost:8000/api/';

// Get Services
async function loadServices() {
    try {
        const response = await fetch(API_BASE + 'services/');
        const services = await response.json();
        // Populate services in HTML
        const container = document.querySelector('.services-container');
        services.forEach(service => {
            container.innerHTML += `
                <div class="service-card">
                    <div class="service-img">
                        <img src="${service.image}" alt="${service.name}">
                    </div>
                    <div class="service-content">
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <div class="service-footer">
                            <span class="service-price">₹${service.price}</span>
                            <button class="btn book-service-btn" data-id="${service.id}">Book Now</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

// Login Function
async function login(email, password) {
    try {
        const response = await fetch(API_BASE + 'auth/token/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        localStorage.setItem('auth_token', data.auth_token);
        return true;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
}

// Booking Function
async function bookAppointment(serviceId, dateTime, address) {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        alert('Please login first!');
        return;
    }

    try {
        const response = await fetch(API_BASE + 'appointments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                service: serviceId,
                date_time: dateTime,
                address: address
            })
        });
        const data = await response.json();
        if (response.ok) {
            showConfirmation(data);
        } else {
            alert('Booking failed: ' + JSON.stringify(data));
        }
    } catch (error) {
        console.error('Booking error:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    
    // Add event listeners for forms
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('booking-form').addEventListener('submit', handleBooking);
});




//server

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Handle the root URL
    let filePath = req.url === '/' ? './index.html' : '.' + req.url;
    
    // Get the file extension
    const extname = path.extname(filePath);
    
    // Set the content type
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    // Read the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                fs.readFile('./index.html', (err, content) => {
                    if (err) {
                        // Server error
                        res.writeHead(500);
                        res.end('Server Error');
                    } else {
                        // Return the index.html file for any path not found
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`To access from outside, use http://0.0.0.0:${PORT}/`);
});
