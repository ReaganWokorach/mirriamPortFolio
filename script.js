const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const icon = hamburger.querySelector('i');

// Toggle Menu Logic
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon between bars and X
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close menu when clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});