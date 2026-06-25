// Torneo de Robótica 2026 | script.js (Updated: 2026-06-25)
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
            // Prevent scrolling behind mobile menu
            document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : 'auto';
        });

        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                mainNav.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    /* ==========================================================================
       STICKY HEADER & BACK-TO-TOP BUTTON
       ========================================================================== */
    const header = document.querySelector('.site-header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Header scrolled effect
        if (scrollPos > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top visibility
        if (scrollPos > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    /* ==========================================================================
       LIVE COUNTDOWN TIMER
       ========================================================================== */
    // Target date: Sábado, 18 de Julio de 2026, 9:00 AM (GMT-4 / República Dominicana)
    const targetDate = new Date('July 18, 2026 09:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');

        // Check if countdown elements exist
        if (!dEl || !hEl || !mEl || !sEl) return;

        if (difference <= 0) {
            // Target date reached / passed
            dEl.innerText = '00';
            hEl.innerText = '00';
            mEl.innerText = '00';
            sEl.innerText = '00';
            document.querySelector('.countdown-heading').innerText = '¡ENTRENAMIENTO EN CURSO / FINALIZADO!';
            return;
        }

        // Calculations
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Render
        dEl.innerText = String(days).padStart(2, '0');
        hEl.innerText = String(hours).padStart(2, '0');
        mEl.innerText = String(minutes).padStart(2, '0');
        sEl.innerText = String(seconds).padStart(2, '0');
    };

    // Run immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ==========================================================================
       FAQ ACCORDION
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const collapse = item.querySelector('.faq-collapse');

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    otherItem.querySelector('.faq-collapse').style.maxHeight = null;
                }
            });

            // Toggle current FAQ
            if (isOpen) {
                item.classList.remove('open');
                collapse.style.maxHeight = null;
            } else {
                item.classList.add('open');
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       INTERACTIVE MOUSE-FOLLOW GLOW EFFECT
       ========================================================================== */
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* ==========================================================================
       SCROLLSPY (ACTIVE LINK ON SCROLL)
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Offset to trigger earlier
            if (window.scrollY >= (sectionTop - 150)) {
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

});

    /* ==========================================================================
       LOCALIZATION (i18n)
       ========================================================================== */
    const translations = {
        es: {
            "Inicio": "Inicio",
            "Categorías": "Categorías",
            "Cronograma": "Cronograma",
            "Reglas": "Reglas",
            "Preguntas": "Preguntas",
            "Contacto": "Contacto",
            "Registrarse": "Registrarse",
            "hero_title": "Competencia Interuniversitaria de Robótica 2026",
            "hero_desc": "Organizado por el Club de Robótica y la Escuela de Ingeniería en Computación y Telecomunicaciones de PUCMM. Estudiantes compiten programando robots móviles TI-RSLK MAX + robots propios para superar pruebas autónomas."
        },
        en: {
            "Inicio": "Home",
            "Categorías": "Categories",
            "Cronograma": "Schedule",
            "Reglas": "Rules",
            "Preguntas": "FAQs",
            "Contacto": "Contact",
            "Registrarse": "Register",
            "hero_title": "2026 Interuniversity Robotics Competition",
            "hero_desc": "Organized by the Robotics Club and the School of Computing and Telecommunications of PUCMM. Students compete by programming TI-RSLK MAX mobile robots + their own robots to overcome autonomous challenges."
        }
    };
    
    window.setLang = function(lang) {
        document.documentElement.lang = lang;
        const els = document.querySelectorAll('.main-nav a, .btn-nav');
        els.forEach(el => {
            const key = el.innerText.trim();
            // simple replacement for nav, a more complete setup would use data-i18n
            if(translations['es'][key] || translations['en'][key]) {
                 for(let k in translations['es']) {
                     if (translations['es'][k] === key || translations['en'][k] === key) {
                         el.innerText = translations[lang][k];
                     }
                 }
            }
        });
        
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.innerHTML = translations[lang]['hero_title'];
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.innerHTML = translations[lang]['hero_desc'];
        
        // update buttons
        const langBtns = document.querySelectorAll('.lang-switcher button');
        langBtns.forEach(btn => {
            if (btn.innerText.toLowerCase() === lang) {
                btn.style.color = 'var(--text-white)';
            } else {
                btn.style.color = 'var(--text-gray)';
            }
        });
    };
    