const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Smooth Scroll for Navigation & Footer Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        }
    });
});
