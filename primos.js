/* ==========================================
   PRIMOS - SCRIPT PRINCIPAL
   Encriptación RSA simulada con números primos
   ========================================== */

/**
 * Evento: Cuando el DOM está completamente cargado
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("✓ Módulo Números Primos cargado correctamente");
    
    // Obtener referencia al botón de encriptación
    const btnEncrypt = document.getElementById('btnEncrypt');
    
    // Validar que el botón existe
    if (btnEncrypt) {
        // Agregar event listener para el clic
        btnEncrypt.addEventListener('click', () => {
            encriptarDatos();
        });
    }
    
    // Agregar contador de caracteres
    agregarContadorCaracteres();
    
    // Permitir envío con Ctrl+Enter en textarea
    const inputSecret = document.getElementById('inputSecret');
    if (inputSecret) {
        inputSecret.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                encriptarDatos();
            }
        });
    }
});

/**
 * Función: Agregar contador de caracteres dinámico
 * Actualiza mientras el usuario escribe
 */
function agregarContadorCaracteres() {
    const inputSecret = document.getElementById('inputSecret');
    const charCount = document.getElementById('charCount');
    
    if (inputSecret && charCount) {
        inputSecret.addEventListener('input', () => {
            const count = inputSecret.value.length;
            charCount.textContent = count;
            
            // Cambiar color según cantidad de caracteres
            const counter = inputSecret.parentElement.querySelector('.input-counter');
            if (counter) {
                counter.classList.remove('warning', 'danger');
                
                if (count > 80) {
                    counter.classList.add('danger');
                } else if (count > 60) {
                    counter.classList.add('warning');
                }
            }
        });
    }
}

/**
 * FUNCIÓN PRINCIPAL: Encriptar datos usando RSA simulado
 * 
 * Proceso:
 * 1. Obtener texto del formulario
 * 2. Validar entrada
 * 3. Convertir caracteres a códigos ASCII
 * 4. Aplicar encriptación RSA simulada
 * 5. Generar salida HTML
 * 6. Mostrar resultado
 */
function encriptarDatos() {
    // ====== PASO 1: Obtener valores ======
    const inputSecret = document.getElementById('inputSecret');
    const cryptoConsole = document.getElementById('cryptoConsole');
    const placeholderCrypto = document.getElementById('placeholderCrypto');
    
    // Validar que los elementos existan
    if (!inputSecret || !cryptoConsole) {
        console.error("❌ Elementos del formulario no encontrados");
        return;
    }
    
    const texto = inputSecret.value.trim();
    
    // ====== PASO 2: Validar entrada ======
    if (!validarTextoSecreteo(texto)) {
        return;
    }
    
    console.log(`🔐 Encriptando: "${texto}"`);
    
    // ====== PASO 3: Encriptar ======
    const datosEncriptados = encriptarConRSA(texto);
    
    if (!datosEncriptados || datosEncriptados.length === 0) {
        mostrarErrorEncriptacion(cryptoConsole, "Error al encriptar los datos");
        return;
    }
    
    // ====== PASO 4: Generar HTML ======
    let htmlSalida = crearSalidaEncriptacion(datosEncriptados, texto);
    
    // ====== PASO 5: Mostrar resultados ======
    cryptoConsole.innerHTML = htmlSalida;
    cryptoConsole.style.display = 'block';
    
    // Ocultar placeholder
    if (placeholderCrypto) {
        placeholderCrypto.style.display = 'none';
    }
    
    console.log(`✓ Encriptación completada: ${datosEncriptados.length} bloques generados`);
    
    // Scroll suave hacia resultados
    cryptoConsole.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Función: Validar texto de secreto
 * @param {string} texto - Texto a validar
 * @returns {boolean} true si es válido, false si no
 */
function validarTextoSecreteo(texto) {
    const errorSecret = document.getElementById('errorSecret');
    
    // Validación 1: No está vacío
    if (texto === '' || texto.length === 0) {
        mostrarError(errorSecret, "Por favor, ingresa un mensaje para encriptar");
        return false;
    }
    
    // Validación 2: No excede 100 caracteres
    if (texto.length > 100) {
        mostrarError(errorSecret, "El mensaje no puede exceder 100 caracteres");
        return false;
    }
    
    // Validación 3: Solo caracteres imprimibles
    const caracteresValidos = /^[\x20-\x7E]*$/.test(texto);
    if (!caracteresValidos) {
        mostrarError(errorSecret, "Solo se permiten caracteres ASCII estándar");
        return false;
    }
    
    ocultarError(errorSecret);
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
 * FUNCIÓN: Encriptación RSA Simulada
 * 
 * Algoritmo:
 * 1. Obtener código ASCII de cada carácter
 * 2. Aplicar función de encriptación RSA: E = (codigo^e) mod n
 * 3. Convertir resultado a hexadecimal
 * 4. Retornar array de valores encriptados
 * 
 * Claves RSA (para demostración):
 * - P = 61, Q = 53 (números primos pequeños)
 * - N = P × Q = 3233
 * - e = 17 (exponente público)
 * 
 * @param {string} texto - Texto a encriptar
 * @returns {array} Array con bloques encriptados en hexadecimal
 */
function encriptarConRSA(texto) {
    // ====== Parámetros RSA ======
    const P = 61;           // Número primo 1
    const Q = 53;           // Número primo 2
    const N = P * Q;        // Módulo RSA = 3233
    const e = 17;           // Exponente público
    
    console.log(`🔑 Parámetros RSA: P=${P}, Q=${Q}, N=${N}, e=${e}`);
    
    // Array para almacenar datos encriptados
    const datosEncriptados = [];
    
    // Procesar cada carácter
    for (let i = 0; i < texto.length; i++) {
        // Obtener código ASCII del carácter
        const codigoASCII = texto.charCodeAt(i);
        
        // Aplicar encriptación RSA
        // E = (M^e) mod N
        // Donde M es el mensaje (código ASCII)
        const encriptado = modularExponentiation(codigoASCII, e, N);
        
        // Convertir a hexadecimal para visualización
        const hex = encriptado.toString(16).toUpperCase().padStart(4, '0');
        
        datosEncriptados.push({
            original: texto[i],
            ascii: codigoASCII,
            encriptado: encriptado,
            hex: hex
        });
    }
    
    return datosEncriptados;
}

/**
 * FUNCIÓN AUXILIAR: Exponenciación Modular
 * Calcula (base^exponente) mod modulo de forma eficiente
 * 
 * Complejidad: O(log exponente)
 * 
 * @param {number} base - Base
 * @param {number} exponente - Exponente
 * @param {number} modulo - Módulo
 * @returns {number} Resultado de (base^exponente) mod modulo
 */
function modularExponentiation(base, exponente, modulo) {
    // Caso especial
    if (modulo === 1) return 0;
    
    let resultado = 1;
    base = base % modulo;
    
    // Algoritmo: exponenciación binaria modular
    while (exponente > 0) {
        // Si exponente es impar, multiplicar resultado por base
        if (exponente % 2 === 1) {
            resultado = (resultado * base) % modulo;
        }
        
        // Exponente es par, elevar base al cuadrado
        exponente = Math.floor(exponente / 2);
        base = (base * base) % modulo;
    }
    
    return resultado;
}

/**
 * Función: Crear HTML con salida de encriptación
 * @param {array} datosEncriptados - Array de datos encriptados
 * @param {string} textoOriginal - Texto original
 * @returns {string} HTML formateado
 */
function crearSalidaEncriptacion(datosEncriptados, textoOriginal) {
    const n = 3233; // Clave pública
    
    // Encabezado de estado
    let html = `
        <div class="crypto-status">
            <div class="status-icon">🔒</div>
            <div class="status-text">
                <h4>Cifrado Completado</h4>
                <p>Tu mensaje ha sido transformado mediante RSA (P=61, Q=53, N=${n})</p>
            </div>
        </div>
    `;
    
    // Caja con datos encriptados
    html += `
        <div class="encrypted-box">
            <h4>📊 Secuencia Encriptada (Hexadecimal)</h4>
            <div class="encrypted-data">
                ${datosEncriptados.map((item, idx) => `
                    <div style="margin-bottom: 0.5rem;">
                        <span style="color: #a7f3d0;">${item.hex}</span>
                        <span style="color: #64748b; font-size: 0.8rem;"> ← '${item.original}'(ASCII ${item.ascii})</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Resumen de encriptación
    html += `
        <div class="crypto-status" style="background-color: rgba(139, 92, 246, 0.05); border-color: #64748b;">
            <div class="status-icon">📈</div>
            <div class="status-text">
                <h4 style="color: #cbd5e1;">Resumen de Encriptación</h4>
                <p>
                    <strong>${datosEncriptados.length}</strong> caracteres encriptados → 
                    <strong>${datosEncriptados.length}</strong> bloques de 4 dígitos hexadecimales
                </p>
            </div>
        </div>
    `;
    
    // Explicación teórica
    html += `
        <div class="explanation-box">
            <h4>🔍 ¿Qué sucedió aquí?</h4>
            <p>
                <strong>Cada carácter fue transformado:</strong><br>
                1. Se convirtió a código ASCII (número)<br>
                2. Se aplicó la fórmula: E = (ASCII^17) mod 3233<br>
                3. Se convirtió el resultado a hexadecimal
            </p>
            <p>
                <strong>Seguridad matemática:</strong><br>
                Un atacante vería solo: ${datosEncriptados.map(d => d.hex).join('-')}<br>
                Sin conocer P=61 y Q=53, no puede decodificar el mensaje. 
                Con primos de miles de bits, esto tomaría siglos de cálculo.
            </p>
        </div>
    `;
    
    return html;
}

/**
 * Función: Mostrar error en la salida
 * @param {HTMLElement} element - Elemento donde mostrar el error
 * @param {string} mensaje - Mensaje de error
 */
function mostrarErrorEncriptacion(element, mensaje) {
    if (element) {
        element.innerHTML = `
            <div class="explanation-box" style="border-left-color: #ef4444;">
                <h4 style="color: #ef4444;">❌ Error de Encriptación</h4>
                <p>${mensaje}</p>
            </div>
        `;
        element.style.display = 'block';
    }
}

/**
 * Información del módulo en consola
 */
function registrarInfoModulo() {
    const info = `
    ╔════════════════════════════════════════╗
    ║     MÓDULO PRIMOS - INFORMACIÓN        ║
    ╠════════════════════════════════════════╣
    ║  Algoritmo: Encriptación RSA           ║
    ║  P = 61, Q = 53                        ║
    ║  N = 3233                              ║
    ║  e = 17 (exponente público)            ║
    ║                                        ║
    ║  Fórmula: E = (M^e) mod N              ║
    ║  Complejidad: O(n log m) por carácter  ║
    ║                                        ║
    ║  Máximo: 100 caracteres ASCII          ║
    ║  Salida: Hexadecimal de 4 dígitos      ║
    ╚════════════════════════════════════════╝
    `;
    console.log(info);
}

// Ejecutar al cargar
registrarInfoModulo();

/**
 * Información sobre RSA en la consola
 */
console.log(`
🔐 ENCRIPTACIÓN RSA EXPLICADA
────────────────────────────────────────

En el mundo real:
• Los números primos P y Q tienen miles de dígitos
• El módulo N es imposible de factorizar
• Solo quien conoce P y Q puede descifrar

En esta demostración:
• Usamos primos pequeños (P=61, Q=53)
• N = 3233 es fácil de factorizar (educativo)
• Pero el concepto es idéntico al RSA de 2048+ bits

Matemáticas que protegen internet desde los 80s ✓
`);
