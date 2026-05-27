/* ==========================================
   FIBONACCI - SCRIPT PRINCIPAL
   Algoritmo de Fibonacci para Planning Poker
   ========================================== */

/**
 * Evento: Cuando el DOM está completamente cargado
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("✓ Módulo Fibonacci cargado correctamente");
    
    // Obtener referencia al botón de cálculo
    const btnCalcular = document.getElementById('btnCalcular');
    
    // Validar que el botón existe
    if (btnCalcular) {
        // Agregar event listener para el clic
        btnCalcular.addEventListener('click', () => {
            calcularEscalaFibonacci();
        });
        
        // Permitir envío con Enter en los inputs
        const form = document.getElementById('agileForm');
        if (form) {
            form.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    calcularEscalaFibonacci();
                }
            });
        }
    }
    
    // Agregar validación en tiempo real
    agregarValidacionTiempoReal();
});

/**
 * Función: Validar campos en tiempo real
 * Mejora la UX mostrando errores conforme escribe
 */
function agregarValidacionTiempoReal() {
    const inputBase = document.getElementById('baseHoras');
    const inputNiveles = document.getElementById('niveles');
    
    // Validar campo de horas
    if (inputBase) {
        inputBase.addEventListener('blur', () => {
            validarCampoBase();
        });
        inputBase.addEventListener('input', () => {
            // Limpiar error al escribir
            const error = document.getElementById('errorBase');
            if (error) error.style.display = 'none';
        });
    }
    
    // Validar campo de niveles
    if (inputNiveles) {
        inputNiveles.addEventListener('blur', () => {
            validarCampoNiveles();
        });
        inputNiveles.addEventListener('input', () => {
            const error = document.getElementById('errorNiveles');
            if (error) error.style.display = 'none';
        });
    }
}

/**
 * Función: Validar campo de horas base
 * @returns {boolean} true si es válido, false si no
 */
function validarCampoBase() {
    const inputBase = document.getElementById('baseHoras');
    const errorBase = document.getElementById('errorBase');
    
    if (!inputBase || !errorBase) return false;
    
    const valor = parseFloat(inputBase.value);
    
    // Validaciones
    if (isNaN(valor)) {
        mostrarError(errorBase, "Por favor, ingresa un número válido");
        return false;
    }
    
    if (valor <= 0) {
        mostrarError(errorBase, "Las horas deben ser mayores a 0");
        return false;
    }
    
    if (valor > 100) {
        mostrarError(errorBase, "Máximo 100 horas permitidas");
        return false;
    }
    
    // Si pasó todas las validaciones
    ocultarError(errorBase);
    return true;
}

/**
 * Función: Validar campo de niveles
 * @returns {boolean} true si es válido, false si no
 */
function validarCampoNiveles() {
    const inputNiveles = document.getElementById('niveles');
    const errorNiveles = document.getElementById('errorNiveles');
    
    if (!inputNiveles || !errorNiveles) return false;
    
    const valor = parseInt(inputNiveles.value);
    
    // Validaciones
    if (isNaN(valor)) {
        mostrarError(errorNiveles, "Por favor, ingresa un número válido");
        return false;
    }
    
    if (valor < 3) {
        mostrarError(errorNiveles, "Mínimo 3 niveles requeridos");
        return false;
    }
    
    if (valor > 12) {
        mostrarError(errorNiveles, "Máximo 12 niveles para mantener precisión");
        return false;
    }
    
    ocultarError(errorNiveles);
    return true;
}

/**
 * Función: Mostrar mensaje de error
 * @param {HTMLElement} element - Elemento donde mostrar el error
 * @param {string} mensaje - Mensaje de error
 */
function mostrarError(element, mensaje) {
    if (element) {
        element.textContent = mensaje;
        element.style.display = 'block';
    }
}

/**
 * Función: Ocultar mensaje de error
 * @param {HTMLElement} element - Elemento a ocultar
 */
function ocultarError(element) {
    if (element) {
        element.style.display = 'none';
        element.textContent = '';
    }
}

/**
 * FUNCIÓN PRINCIPAL: Calcular y generar escala Fibonacci
 * 
 * Algoritmo:
 * 1. Obtener valores del formulario
 * 2. Validar entrada
 * 3. Calcular secuencia Fibonacci
 * 4. Multiplicar por horas base
 * 5. Generar HTML de salida
 * 6. Mostrar resultados
 */
function calcularEscalaFibonacci() {
    // ====== PASO 1: Obtener valores ======
    const inputBase = document.getElementById('baseHoras');
    const inputNiveles = document.getElementById('niveles');
    const resultadoArea = document.getElementById('resultadoAgile');
    const placeholderResult = document.getElementById('placeholderResult');
    
    // Validar que los elementos existan
    if (!inputBase || !inputNiveles || !resultadoArea) {
        console.error("❌ Elementos del formulario no encontrados");
        return;
    }
    
    const baseHoras = parseFloat(inputBase.value);
    const niveles = parseInt(inputNiveles.value);
    
    // ====== PASO 2: Validar entrada ======
    // Validar campo base
    if (!validarCampoBase()) {
        console.warn("⚠️ Campo base inválido");
        return;
    }
    
    // Validar campo niveles
    if (!validarCampoNiveles()) {
        console.warn("⚠️ Campo niveles inválido");
        return;
    }
    
    console.log(`📊 Calculando Fibonacci: Base=${baseHoras}h, Niveles=${niveles}`);
    
    // ====== PASO 3: Generar secuencia Fibonacci ======
    const secuencia = generarFibonacci(niveles);
    
    if (secuencia.length === 0) {
        mostrarErrorEnResultado(resultadoArea, "Error al generar la secuencia Fibonacci");
        return;
    }
    
    // ====== PASO 4: Crear estructura HTML ======
    let htmlSalida = `
        <div class="escala-header">
            <span>Nivel de Complejidad</span>
            <span>Puntos → Horas Estimadas</span>
        </div>
    `;
    
    // Generar filas de la tabla
    secuencia.forEach((puntos, index) => {
        const horasCalculadas = (puntos * baseHoras).toFixed(2);
        htmlSalida += `
            <div class="escala-row" style="animation: slideIn 0.3s ease-out ${index * 0.05}s both;">
                <span class="escala-label">Nivel ${index + 1}</span>
                <span class="escala-valor">${puntos} pts → ${horasCalculadas}h</span>
            </div>
        `;
    });
    
    // Crear caja de explicación
    const secuenciaTexto = secuencia.join(', ');
    const explicacion = `
        <div class="explanation-box">
            <h4>📌 Explicación</h4>
            <p><strong>Secuencia Fibonacci generada:</strong> ${secuenciaTexto}</p>
            <p>
                Cada valor representa puntos de historia. Al multiplicar por tu base (${baseHoras}h), 
                obtienes tiempos estimados realistas. Nota cómo la incertidumbre crece 
                exponencialmente: el salto de ${secuencia[secuencia.length - 2]} a ${secuencia[secuencia.length - 1]} puntos 
                es mucho mayor que el de 1 a 2.
            </p>
            <p>
                <strong>✓ Consejo:</strong> Usa estos números en tu Planning Poker. 
                El equipo votará cuántos puntos cree que tiene cada tarea.
            </p>
        </div>
    `;
    
    // ====== PASO 5: Mostrar resultados ======
    resultadoArea.innerHTML = htmlSalida + explicacion;
    resultadoArea.style.display = 'block';
    
    // Ocultar placeholder
    if (placeholderResult) {
        placeholderResult.style.display = 'none';
    }
    
    console.log(`✓ Escala generada exitosamente con ${niveles} niveles`);
    
    // Scroll suave hacia resultados
    resultadoArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * FUNCIÓN: Generar secuencia de Fibonacci
 * 
 * Complejidad: O(n) - Iterativa sin recursión
 * Espacio: O(n) - Array de resultados
 * 
 * @param {number} cantidad - Cantidad de números Fibonacci a generar
 * @returns {array} Array con los números Fibonacci
 */
function generarFibonacci(cantidad) {
    // Validar entrada
    if (!Number.isInteger(cantidad) || cantidad < 1) {
        console.error("❌ Cantidad debe ser un número entero positivo");
        return [];
    }
    
    // Array para almacenar resultados
    const secuencia = [];
    
    // Caso 1: Solo un número
    if (cantidad === 1) {
        return [1];
    }
    
    // Caso 2: Dos primeros números
    if (cantidad >= 1) secuencia.push(1);
    if (cantidad >= 2) secuencia.push(1);
    
    // Generar resto de la secuencia iterativamente
    // Cada nuevo número es la suma de los dos anteriores
    for (let i = 2; i < cantidad; i++) {
        const nuevoNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(nuevoNumero);
    }
    
    return secuencia;
}

/**
 * FUNCIÓN: Mostrar error en el área de resultados
 * @param {HTMLElement} element - Elemento donde mostrar el error
 * @param {string} mensaje - Mensaje de error
 */
function mostrarErrorEnResultado(element, mensaje) {
    if (element) {
        element.innerHTML = `
            <div class="explanation-box" style="border-left-color: #ef4444;">
                <h4 style="color: #ef4444;">❌ Error</h4>
                <p>${mensaje}</p>
            </div>
        `;
        element.style.display = 'block';
    }
}

/**
 * FUNCIÓN AUXILIAR: Obtener elemento del DOM de forma segura
 * @param {string} id - ID del elemento
 * @returns {HTMLElement|null} El elemento o null si no existe
 */
function obtenerElemento(id) {
    const elemento = document.getElementById(id);
    if (!elemento) {
        console.warn(`⚠️ Elemento con ID '${id}' no encontrado`);
    }
    return elemento;
}

/**
 * Información del módulo en consola
 */
function registrarInfoModulo() {
    const info = `
    ╔════════════════════════════════════════╗
    ║     MÓDULO FIBONACCI - INFORMACIÓN     ║
    ╠════════════════════════════════════════╣
    ║  Fórmula: F(n) = F(n-1) + F(n-2)      ║
    ║  Inicio: 1, 1                          ║
    ║  Aplicación: Planning Poker            ║
    ║  Complejidad: O(n) tiempo, O(n) espacio║
    ║                                        ║
    ║  Números soportados: 3 a 12 niveles   ║
    ║  Horas permitidas: 0.5 a 100 horas    ║
    ╚════════════════════════════════════════╝
    `;
    console.log(info);
}

// Ejecutar al cargar
registrarInfoModulo();
