// =============================================
//  DARK CAFE — INTERACTIVE SCRIPTS
// =============================================

// --- Mobile navigation toggle ---
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.textContent = '☰';
        });
    });
}

// --- Navbar background on scroll ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.92)';
    }
});

// --- Highlight active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        const link   = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
            if (link) link.style.color = '#d4af37';
        }
    });
}

window.addEventListener('scroll', highlightNav);

// --- Fade-in on scroll (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    '.menu-item, .dessert-card, .shisha-card, .gallery-item, .about-image-card, .lll'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Initialize EmailJS
emailjs.init({
    publicKey: 'rrhOvBXMWvgLU_84N'
});

// --- Booking form submit feedback ---
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = '✅ Reservation Confirmed!';
        btn.style.background = '#2a9d2a';
        setTimeout(() => {
            btn.textContent = 'Book Now';
            btn.style.background = '';
            form.reset();
        }, 3000);
    });
}


