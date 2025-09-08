// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks2 = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks2.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                // For this demo, we'll just show an alert
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Add animation to elements when they come into view with smooth transitions
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-item, .project-item, .about-img, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        const scrollThreshold = 50; // Reduced threshold for earlier animation trigger
        
        if (elementPosition < screenPosition - scrollThreshold) {
            // Calculate how far the element is in the viewport as a percentage
            const scrollPercentage = 1 - (elementPosition / window.innerHeight);
            
            // Only add the class if it's not already there
            if (!element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        }
    });
};

// Initial check for elements in view
setTimeout(animateOnScroll, 300); // Slight delay on initial load for better visual effect

// Check for elements in view on scroll
window.addEventListener('scroll', animateOnScroll);

// Add resize listener to handle animations on window resize
window.addEventListener('resize', animateOnScroll);

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .skill-item, .project-item, .about-img, .contact-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .skill-item.animate, .project-item.animate, .about-img.animate, .contact-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-item:nth-child(1), .project-item:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .skill-item:nth-child(2), .project-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .skill-item:nth-child(3), .project-item:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .skill-item:nth-child(4), .project-item:nth-child(4) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);

    // Typing effect for hero section
    const typingElement = document.querySelector('.hero-content h2');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(function() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    }
});