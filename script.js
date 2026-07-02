// ===== MENU MOBILE =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navList.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navList.classList.remove('active');
    });
});

// ===== FILTRO DO PORTFÓLIO =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover classe active de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adicionar classe active ao botão clicado
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category');
            if (filter === 'todos' || categories.includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===== SCROLL SUAVE PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
    }
});

// ===== ANIMAÇÃO DE ENTRADA (INTERSECTION OBSERVER) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação de entrada nas seções
document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
