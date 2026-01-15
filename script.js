// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

// Template Switching Functionality
const sdsTab = document.getElementById('sds-tab');
const srsTab = document.getElementById('srs-tab');
const sdsContent = document.getElementById('sds-content');
const srsContent = document.getElementById('srs-content');
const sdsNavItems = document.querySelectorAll('.sds-only');
const srsNavItems = document.querySelectorAll('.srs-only');

// Check for saved template preference or default to SDS
const currentTemplate = localStorage.getItem('template') || 'sds';

function switchTemplate(template) {
    if (template === 'sds') {
        sdsTab.classList.add('active');
        srsTab.classList.remove('active');
        sdsContent.classList.remove('hidden');
        srsContent.classList.add('hidden');
        sdsNavItems.forEach(item => item.classList.remove('hidden'));
        srsNavItems.forEach(item => item.classList.add('hidden'));
        localStorage.setItem('template', 'sds');
    } else {
        srsTab.classList.add('active');
        sdsTab.classList.remove('active');
        srsContent.classList.remove('hidden');
        sdsContent.classList.add('hidden');
        srsNavItems.forEach(item => item.classList.remove('hidden'));
        sdsNavItems.forEach(item => item.classList.add('hidden'));
        localStorage.setItem('template', 'srs');
    }
}

// Initialize template on load
switchTemplate(currentTemplate);

sdsTab.addEventListener('click', () => switchTemplate('sds'));
srsTab.addEventListener('click', () => switchTemplate('srs'));

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            navbar.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        if (!navbar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navbar.classList.remove('active');
        }
    }
});

// Print Functionality
const printBtn = document.getElementById('print-btn');
printBtn.addEventListener('click', () => {
    window.print();
});

// Download as HTML Functionality
const downloadHtmlBtn = document.getElementById('download-html-btn');
downloadHtmlBtn.addEventListener('click', () => {
    const activeTemplate = localStorage.getItem('template') || 'sds';
    const templateName = activeTemplate.toUpperCase();
    
    // Clone the document
    const clone = document.documentElement.cloneNode(true);
    
    // Remove control buttons and mobile menu from clone
    const controlBar = clone.querySelector('.control-bar');
    const mobileBtn = clone.querySelector('.mobile-menu-toggle');
    if (controlBar) controlBar.remove();
    if (mobileBtn) mobileBtn.remove();
    
    // Convert to string
    const htmlContent = '<!DOCTYPE html>\n' + clone.outerHTML;
    
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateName}-Template-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    showNotification(`${templateName} template downloaded successfully!`);
});

// Download as PDF Functionality
const downloadPdfBtn = document.getElementById('download-pdf-btn');
downloadPdfBtn.addEventListener('click', () => {
    const activeTemplate = localStorage.getItem('template') || 'sds';
    const templateName = activeTemplate.toUpperCase();
    
    // Show a message to use browser's print-to-PDF
    showNotification(`Please use Print dialog (Ctrl+P / Cmd+P) and select "Save as PDF" to download ${templateName} as PDF`);
    
    // Automatically open print dialog after a short delay
    setTimeout(() => {
        window.print();
    }, 1000);
});

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('notification-exit');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav items based on scroll position
const sections = document.querySelectorAll('.main-section');
const navItems = document.querySelectorAll('.nav-link a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

