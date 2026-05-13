// ============================
// Particles Background
// ============================
function initParticles() {
    const container = document.getElementById('particles');
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (Math.random() * 2 + 1) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ============================
// Navbar Scroll Effect
// ============================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ============================
// Mobile Menu
// ============================
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    menu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// ============================
// FAQ Accordion
// ============================
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            items.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked (if it wasn't already open)
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ============================
// Scroll Animations (Intersection Observer)
// ============================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    document.querySelectorAll('.animate-in').forEach(el => {
        observer.observe(el);
    });
}

// ============================
// Smooth Scroll for Anchor Links
// ============================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================
// Initialize
// ============================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initMobileMenu();
    initFAQ();
    initScrollAnimations();
    initSmoothScroll();
});
