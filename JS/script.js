document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    const header = document.querySelector('header');
    const transitionOverlay = document.getElementById('transition-overlay');
    const transitionImage = transitionOverlay.querySelector('img');
    const appContainer = document.getElementById('app-container');

    let isTransitioning = false;
    let currentPage = null;
    const navLinks = header.querySelectorAll('nav a');

    window.loadPage = (targetId) => {
        console.log('loadPage called for:', targetId);
        if (isTransitioning || currentPage === targetId) {
            console.log('Transition in progress or already on target page. Aborting load.');
            return;
        }

        isTransitioning = true;
        transitionOverlay.classList.add('show');
        console.log('Transition overlay added show class.');

        // 1. Esperar a que la animación de entrada (crecer) termine
        transitionImage.addEventListener('animationend', function onGrowEnd() {
            console.log('Grow animation ended.');
            
            // 2. Cambiar el contenido de la página
            appContainer.innerHTML = pageContent[targetId];
            currentPage = targetId;

            // Actualizar el enlace activo en la navegación
            navLinks.forEach(link => {
                link.classList.toggle('active-link', link.getAttribute('data-target') === targetId);
            });

            // Actualizar visibilidad del header
            header.classList.toggle('visible', targetId !== 'Entrada');

            // Añadir listeners específicos de la página
            attachPageSpecificListeners(currentPage, appContainer);

            // Inicializar el carrusel si estamos en la página 3
            if (targetId === 'page3') {
                setTimeout(() => {
                    initCarousel();
                }, 100); 
            }

            // 3. Iniciar la animación de salida (encoger)
            transitionOverlay.classList.remove('show');
            transitionOverlay.classList.add('hide');
            console.log('Starting shrink animation.');

            // 4. Esperar a que la animación de salida termine
            transitionImage.addEventListener('animationend', function onShrinkEnd() {
                transitionOverlay.classList.remove('hide');
                isTransitioning = false;
                console.log('Shrink animation ended. Transition complete.');
            }, { once: true }); // El listener se auto-elimina después de ejecutarse
        }, { once: true }); // El listener se auto-elimina después de ejecutarse
    };

    // Global listener for closing modals when clicking outside
    window.addEventListener('click', (event) => {
        if (currentPage === 'page2') {
            const infoModals = appContainer.querySelectorAll('.info-modal');
            infoModals.forEach(modal => {
                if (event.target == modal) {
                    modal.classList.remove('show');
                }
            });
        }
    });

    // Attach listeners to header navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('data-target');
            loadPage(targetId);
        });
    });

    loadPage('Entrada');
});