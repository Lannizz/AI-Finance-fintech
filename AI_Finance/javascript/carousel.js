const cardContainer = document.querySelector('.card-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentCard = 1;

nextButton.addEventListener('click', () => {
    currentCard++;
    if (currentCard > 2) currentCard = 1;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentCard--;
    if (currentCard < 1) currentCard = 2;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -(currentCard - 1) * 100 / 2; /* Calcula o deslocamento para 2 cartões */
    cardContainer.style.transform = `translateX(${translateX}%)`;
}