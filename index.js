document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 1) {
        const slides = document.querySelectorAll(".slide");
        const indicators = document.querySelectorAll(".indicator");
        let currentSlide = 0;
        const slideInterval = 5000000; /* 5000 = 5 segundos */
        let interval;

        function showSlide(index) {
            // Oculta todos os slides
            slides.forEach(slide => {
                slide.classList.remove("active");
            });

            // Mostra o slide atual
            slides[index].classList.add("active");

            // Atualiza indicadores
            indicators.forEach(indicator => {
                indicator.classList.remove("active");
            });
            indicators[index].classList.add("active");

            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function startSlideShow() {
            interval = setInterval(nextSlide, slideInterval);
        }

        function resetSlideShow() {
            clearInterval(interval);
            startSlideShow();
        }

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                showSlide(index);
                resetSlideShow();
            });
        });

        startSlideShow();
    }
});


