document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carrusel-track");
    const items = document.querySelectorAll(".carrusel-item");
    const dots = document.querySelectorAll(".dot");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    let currentIndex = 0;
    const totalItems = items.length;

    // Función para mover el carrusel
    function moveToSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Mueve la pista en X segun el porcentaje
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualiza puntos activos
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    // Clic en botones
    btnNext.addEventListener("click", () => moveToSlide(currentIndex + 1));
    btnPrev.addEventListener("click", () => moveToSlide(currentIndex - 1));

    // Clic en puntos
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => moveToSlide(idx));
    });

    // Auto-reproducción cada 4 segundos
    setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 4000);
});