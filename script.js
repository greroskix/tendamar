document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".reveal-line");
    const header = document.querySelector(".luxury-header");
    const video = document.querySelector(".hero-video");

    // Fade-in inicial
    requestAnimationFrame(() => {
        lines.forEach((line, i) => {
            setTimeout(() => line.classList.add("visible"), 500 + i * 350);
        });
    });

    // Eventos de Scroll: Header inteligente e Parallax
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Header inteligente (blur)
        if (header) {
            if (scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }

        // Parallax sutil no vídeo
        if (video) {
            video.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    // Tratamento de erro no vídeo
    if (video) {
        video.addEventListener("error", () => {
            video.style.display = "none";
        });
    }

    // Observer para animações de scroll (Tutorial, etc)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animar apenas uma vez
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
});