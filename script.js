// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form reload
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // FIX: Changed single quotes to backticks for template literals
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); // Clear form fields
    });
}

const container = document.getElementById('gallery-container');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

// We calculate the width of one item + the gap
// Card width (240px) + Gap (20px) = 260px
const scrollAmount = 260; 

rightBtn.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});
