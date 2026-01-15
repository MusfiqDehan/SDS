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

// Download as DOCX Functionality
const downloadDocxBtn = document.getElementById('download-docx-btn');
const editDocsBtn = document.getElementById('edit-docs-btn');

function buildDocxContent() {
    const activeTemplate = document.querySelector('.template-content:not(.hidden)');
    if (!activeTemplate) {
        return null;
    }

    const docxClone = activeTemplate.cloneNode(true);
    
    // Remove elements that shouldn't be in the DOCX
    docxClone.querySelectorAll('iframe, .not-for-print, .print-only-div').forEach(element => {
        element.remove();
    });
    
    // Remove box-shadow from elements that typically have them
    const elementsToClean = 'img, table, .article, .control-btn, .notification, div, section';
    docxClone.querySelectorAll(elementsToClean).forEach(element => {
        if (element.style) {
            element.style.boxShadow = 'none';
            element.style.webkitBoxShadow = 'none';
            element.style.mozBoxShadow = 'none';
        }
    });

    return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    * { 
                        box-shadow: none !important; 
                        -webkit-box-shadow: none !important;
                        -moz-box-shadow: none !important;
                    }
                    body { 
                        font-family: "Times New Roman", Times, serif; 
                        color: #000; 
                        background: #fff;
                    }
                    h1 { font-size: 20px; margin: 16px 0 8px; font-weight: bold; }
                    h2 { font-size: 16px; margin: 14px 0 6px; font-weight: bold; }
                    h3 { font-size: 14px; margin: 12px 0 6px; font-weight: bold; }
                    p, li { font-size: 12px; line-height: 1.6; }
                    ul, ol { margin: 12px 0; padding-left: 24px; }
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 12px 0; 
                    }
                    table, th, td { border: 1px solid #000; }
                    th, td { padding: 6px; text-align: left; font-size: 12px; }
                    th { background-color: #3b82f6; color: #fff; font-weight: bold; }
                    img { 
                        max-width: 100%; 
                        height: auto; 
                        display: block;
                        margin: 12px 0;
                    }
                    .article { 
                        margin: 12px 0;
                        background: transparent;
                    }
                </style>
            </head>
            <body>
                ${docxClone.innerHTML}
            </body>
        </html>`;
}

function downloadDocx() {
    if (typeof htmlDocx === 'undefined') {
        showNotification('DOCX library failed to load. Please refresh and try again.');
        return null;
    }

    const activeTemplate = localStorage.getItem('template') || 'sds';
    const templateName = activeTemplate.toUpperCase();
    const content = buildDocxContent();
    if (!content) {
        return null;
    }

    const docxBlob = htmlDocx.asBlob(content);
    const url = URL.createObjectURL(docxBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${templateName}-Template-${new Date().toISOString().split('T')[0]}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return templateName;
}

downloadDocxBtn.addEventListener('click', () => {
    const templateName = downloadDocx();
    if (templateName) {
        showNotification(`${templateName} template downloaded as DOCX.`);
    }
});

editDocsBtn.addEventListener('click', () => {
    const templateName = downloadDocx();
    if (!templateName) {
        return;
    }
    
    // Open Google Docs in a new tab with instructions
    showNotification(`${templateName} template downloaded. Opening Google Docs...`, 4000);
    
    // Wait a moment before opening Google Docs so user sees the download
    setTimeout(() => {
        window.open('https://docs.google.com/document/u/0/', '_blank');
        setTimeout(() => {
            showNotification('Upload the downloaded DOCX file to Google Docs using File > Open > Upload', 5000);
        }, 500);
    }, 1000);
});

// Download as PDF Functionality
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const PDF_DIALOG_DELAY = 1000; // Delay before opening print dialog (ms)

downloadPdfBtn.addEventListener('click', () => {
    const activeTemplate = localStorage.getItem('template') || 'sds';
    const templateName = activeTemplate.toUpperCase();
    
    // Show a message to use browser's print-to-PDF
    showNotification(`Please use Print dialog (Ctrl+P / Cmd+P) and select "Save as PDF" to download ${templateName} as PDF`);
    
    // Automatically open print dialog after a short delay
    setTimeout(() => {
        window.print();
    }, PDF_DIALOG_DELAY);
});

// Notification function
function showNotification(message, duration = 3000) {
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
    }, duration);
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
const desktopNavItems = document.querySelectorAll('.nav-link > a');
const mobileNavItems = document.querySelectorAll('#mobile-bottom-nav a');
const navItems = [...desktopNavItems, ...mobileNavItems];

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
