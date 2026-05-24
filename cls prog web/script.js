document.addEventListener("DOMContentLoaded", () => {
    console.log("MathVerse Portal cargado correctamente.");
    
    // Un pequeño efecto interactivo: cambia el color del título según la tarjeta que pases por encima
    const cardFibo = document.querySelector('.card-fibo');
    const cardPrime = document.querySelector('.card-prime');
    const mainTitle = document.getElementById('main-title');

    if (cardFibo && cardPrime && mainTitle) {
        cardFibo.addEventListener('mouseenter', () => {
            mainTitle.style.color = '#10b981'; // Color Fibonacci
        });
        
        cardPrime.addEventListener('mouseenter', () => {
            mainTitle.style.color = '#6366f1'; // Color Primos
        });

        // Restaurar color original al salir
        [cardFibo, cardPrime].forEach(card => {
            card.addEventListener('mouseleave', () => {
                mainTitle.style.color = '#f8fafc';
            });
        });
    }
});