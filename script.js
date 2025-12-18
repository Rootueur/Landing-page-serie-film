// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor. addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navigation active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section. getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link. classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll carousel smoothly
function scrollCarousel(carouselId, distance) {
    const carousel = document. getElementById(carouselId);
    carousel.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

// Intersection Observer pour les animations au scroll
const observerOptions = {
    threshold:  0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry. target);
        }
    });
}, observerOptions);

document.querySelectorAll('.movie-card').forEach(el => {
    observer.observe(el);
});

// Button hover effect
const buttons = document.querySelectorAll('.btn, .play-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style. transform = 'translateY(0)';
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('. btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Message envoyé ! ';
        btn.style.background = '#00ff00';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
        hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Movie card click animation
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', function() {
        const playBtn = this.querySelector('.play-btn');
        if (playBtn) {
            playBtn.style.animation = 'pulse 0.6s ease-out';
        }
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.3);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Cursor glow effect on movie cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('. movie-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const distance = Math.sqrt(x * x + y * y);
        
        if (distance < 300) {
            const wrapper = card.querySelector('.movie-image-wrapper');
            wrapper.style.boxShadow = `0 0 ${20 + (300 - distance) / 15}px rgba(229, 9, 20, 0.6)`;
        }
    });
});