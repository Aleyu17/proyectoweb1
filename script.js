/* ==========================================
   MATHVERSE - SCRIPT PRINCIPAL
   Portal de inicio y efectos interactivos
   ========================================== */

/**
 * Evento: Cuando el DOM está completamente cargado
 * Ejecuta la inicialización de la página
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎓 MathVerse cargado correctamente");
    
    // Inicializar efectos interactivos
    initializeInteractions();
});

/**
 * Función: Inicializar todas las interacciones de la página
 * - Cambio de color del título al pasar por cards
 * - Efectos hover en elementos
 * - Validaciones previas
 */
function initializeInteractions() {
    // Obtener referencias a elementos del DOM
    const mainTitle = document.getElementById('main-title');
    const fibonacciCard = document.querySelector('.card-fibonacci');
    const primesCard = document.querySelector('.card-primes');
    
    // Validar que los elementos existan
    if (!mainTitle || !fibonacciCard || !primesCard) {
        console.warn("⚠️ No se encontraron todos los elementos esperados");
        return;
    }
    
    // ====== EFECTO 1: Cambio de color dinámico del título ======
    // Cuando el usuario pasa sobre la card de Fibonacci
    fibonacciCard.addEventListener('mouseenter', () => {
        mainTitle.style.color = '#10b981'; // Verde (color Fibonacci)
        mainTitle.style.filter = 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))';
    });
    
    // Cuando el usuario pasa sobre la card de Primos
    primesCard.addEventListener('mouseenter', () => {
        mainTitle.style.color = '#8b5cf6'; // Púrpura (color Primos)
        mainTitle.style.filter = 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))';
    });
    
    // ====== EFECTO 2: Restaurar color original al salir ======
    // Aplicar a ambas cards
    const cards = [fibonacciCard, primesCard];
    
    cards.forEach(card => {
        card.addEventListener('mouseleave', () => {
            // Restaurar al color original con transición suave
            mainTitle.style.transition = 'color 0.3s ease, filter 0.3s ease';
            mainTitle.style.color = '#f8fafc';
            mainTitle.style.filter = 'drop-shadow(0 0 0px transparent)';
        });
    });
    
    // ====== EFECTO 3: Log de información del proyecto ======
    logProjectInfo();
}

/**
 * Función: Mostrar información del proyecto en consola
 * Ayuda a desarrolladores a entender la estructura
 */
function logProjectInfo() {
    const info = `
    ╔════════════════════════════════════════╗
    ║         MATHVERSE PROJECT INFO         ║
    ╠════════════════════════════════════════╣
    ║  📊 Módulo 1: Sucesión de Fibonacci   ║
    ║     → Aplicación: Planning Poker      ║
    ║     → Archivo: fibonacci.html         ║
    ║                                        ║
    ║  🔐 Módulo 2: Números Primos          ║
    ║     → Aplicación: Encriptación RSA    ║
    ║     → Archivo: primos.html            ║
    ║                                        ║
    ║  🎨 Diseño: Responsivo y Moderno      ║
    ║  📱 Testeado en: Desktop/Tablet/Móvil ║
    ║  🔧 Tecnologías: HTML5, CSS3, JS     ║
    ╚════════════════════════════════════════╝
    `;
    console.log(info);
}

/**
 * Función auxiliar: Agregar clase a un elemento
 * @param {HTMLElement} element - Elemento del DOM
 * @param {string} className - Nombre de la clase a agregar
 */
function addClass(element, className) {
    if (element) {
        element.classList.add(className);
    }
}

/**
 * Función auxiliar: Remover clase de un elemento
 * @param {HTMLElement} element - Elemento del DOM
 * @param {string} className - Nombre de la clase a remover
 */
function removeClass(element, className) {
    if (element) {
        element.classList.remove(className);
    }
}

/**
 * Función auxiliar: Verificar si un elemento existe
 * @param {string} elementId - ID del elemento
 * @returns {boolean} true si existe, false si no
 */
function elementExists(elementId) {
    return document.getElementById(elementId) !== null;
}

// ==========================================
// EFECTOS VISUALES AVANZADOS
// ==========================================

/**
 * Efecto de paralaje en fondo (si se requiere en el futuro)
 */
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        // Aplicar efecto de paralaje suave
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

/**
 * Detectar preferencias del usuario
 */
function detectUserPreferences() {
    // Verificar si el usuario prefiere animaciones reducidas
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
        console.log("✓ Se detectó preferencia de movimiento reducido");
        document.body.style.animationDuration = '0.01ms';
    }
    
    // Verificar tema preferido
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(`✓ Tema preferido: ${prefersDarkMode ? 'Oscuro' : 'Claro'}`);
}

// Ejecutar detección de preferencias
detectUserPreferences();

/**
 * Monitorear cambios en las preferencias del usuario
 */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    console.log(`Tema cambiado a: ${e.matches ? 'Oscuro' : 'Claro'}`);
});
