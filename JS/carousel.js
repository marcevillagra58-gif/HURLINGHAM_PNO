// Define the global function to initialize the carousel
function initCarousel() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    let swiper;

    if (!swiperWrapper) {
        console.error("Error: No se encontró el elemento .swiper-wrapper. Asegúrate de que el HTML de la página 3 se haya insertado.");
        return;
    }

    // Static array of image paths and descriptions for the carousel
    const carouselImages = [
        { imagePath: "ASSETS/Carrusel/imagen 1.jpg", description: "Centro Cultural Leopoldo Marechal" },
        { imagePath: "ASSETS/Carrusel/imagen 10.jpg", description: "Centro Comercial Peseo Florido" },
        { imagePath: "ASSETS/Carrusel/imagen 2.jpg", description: "Estación Hurlingham" },
        { imagePath: "ASSETS/Carrusel/imagen 3.jpg", description: "Edificio Municipal de noche" },
        { imagePath: "ASSETS/Carrusel/imagen 4.jpg", description: "Hospital San Bernardino" },
        { imagePath: "ASSETS/Carrusel/imagen 5.jpg", description: "Edificio Municipal" },
        { imagePath: "ASSETS/Carrusel/imagen 6.jpg", description: "Parroquia Nuestra Señora del Camino" },
        { imagePath: "ASSETS/Carrusel/imagen 7.jpeg", description: "Plaza Jhon Ravenscroft" },
        { imagePath: "ASSETS/Carrusel/imagen 8.webp", description: "Hurlingham Club" },
        { imagePath: "ASSETS/Carrusel/imagen 9.jpg", description: "Universidad de Hurlingham" }
    ];

    // --- RENDER CAROUSEL ---
    function renderCarousel(images) {
        swiperWrapper.innerHTML = ''; // Clear existing slides
        
        images.forEach(image => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            
            const cardContent = `
                <div class="img-card">
                    <img src="${image.imagePath}" alt="Carousel Image">
                    <p>${image.description}</p>
                </div>
            `;
            slide.innerHTML = cardContent;
            swiperWrapper.appendChild(slide);
        });

        if (swiper) {
            swiper.update();
        } else {
            swiper = new Swiper('.swiper-container', {
                loop: true, // Enable continuous loop
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: { el: '.swiper-pagination' },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                breakpoints: {
                    480: { slidesPerView: 1, coverflowEffect: { rotate: 0, stretch: 0, depth: 200, modifier: 2 } },
                    768: { slidesPerView: 2, coverflowEffect: { rotate: 30, stretch: 10, depth: 150, modifier: 1 } }
                }
            });
        }
    }

    // Initial render of the carousel with static images
    renderCarousel(carouselImages);
}