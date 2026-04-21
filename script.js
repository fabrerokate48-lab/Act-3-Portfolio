// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form reload
    
    // Get form values (optional: add validation here)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate submission success
    alert('Thankyou, $ {name } Your message has been sent');
    contactForm.reset(); // Clear form fields
});