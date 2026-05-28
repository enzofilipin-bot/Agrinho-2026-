// Aguarda o DOM carregar totalmente
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
       ========================================================================== */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Abre e fecha o menu ao clicar no hambúrguer
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fecha o menu móvel ao clicar em qualquer link de seção
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    /* ==========================================================================
       2. MUDANÇA DE COR DO HEADER E BOTÃO BACK TO TOP NO SCROLL
       ========================================================================== */
    const header = document.querySelector(".header");
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        // Se passar de 50px de rolagem, adiciona sombra mais densa no header
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }

        // Mostra o botão de Voltar ao topo se descer mais de 400px
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Evento de clique para voltar ao topo suavemente
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* ==========================================================================
       3. INDICADOR DE SEÇÃO ATIVA NO MENU (SCROLL SPY)
       ========================================================================== */
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Verifica se a seção está visível na maior parte da tela
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Remove a classe active de todos e adiciona apenas na seção atual
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
