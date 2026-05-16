document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const updateThemeIcon = (theme) => {
        const icon = theme === 'dark' ? 'sun' : 'moon';
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5"></i>`;
            lucide.createIcons();
        }
    };
    const toggleTheme = () => {
        const html = document.documentElement;
        const currentTheme = html.hasAttribute('data-theme') && html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcon(newTheme);
    };
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        // Initialize icon
        const initialTheme = document.documentElement.hasAttribute('data-theme') ? 'dark' : 'light';
        updateThemeIcon(initialTheme);
    }
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => {
        observer.observe(el);
    });
    // Staggered Animation
    const staggerContainers = document.querySelectorAll('.stagger');
    staggerContainers.forEach(container => {
        const children = container.children;
        for (let i = 0; i < children.length; i++) {
            children[i].style.setProperty('--stagger-index', i);
        }
    });
});