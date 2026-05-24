document.getElementById('btn-calcular').onclick = function() {
    let baseHoras = parseFloat(document.getElementById('baseHoras').value);
    let niveles = parseInt(document.getElementById('niveles').value);
    let consola = document.getElementById('resultado-agile');

    if (isNaN(baseHoras) || isNaN(niveles) || baseHoras <= 0 || niveles < 3) {
        consola.style.display = "block";
        consola.innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    if (niveles > 12) {
        consola.style.display = "block";
        consola.innerHTML = "Límite excedido. Ingresa un máximo de 12 niveles para mantener la precisión.";
        return;
    }

    let a = 1;
    let b = 2;
    let htmlSalida = "<strong style='color: var(--accent-fibo); display:block; margin-bottom:10px;'>Escala de Estimación:</strong>";
    
    htmlSalida += "<div class='escala-item'><span>Nivel 1 (1 Punto)</span><span>" + (1 * baseHoras) + " horas</span></div>";
    htmlSalida += "<div class='escala-item'><span>Nivel 2 (2 Puntos)</span><span>" + (2 * baseHoras) + " horas</span></div>";

    let secuenciaPuntos = "1, 2";

    for (let i = 3; i <= niveles; i++) {
        let fiboActual = a + b;
        let horasCalculadas = fiboActual * baseHoras;
        
        secuenciaPuntos += ", " + fiboActual;
        htmlSalida += "<div class='escala-item'><span>Nivel " + i + " (" + fiboActual + " Puntos)</span><span>" + horasCalculadas + " horas</span></div>";
        
        a = b;
        b = fiboActual;
    }

    let htmlExplicacion = "<div style='margin-top: 15px; padding-top: 15px; border-top: 1px dashed #22324d; color: #94a3b8; font-size: 0.9rem;'>" +
        "<h4 style='color: var(--text-light); font-size: 0.95rem; margin-bottom: 8px;'>¿Cómo aplicamos Fibonacci aquí?</h4>" +
        "<p style='margin-bottom: 8px;'>Los 'Puntos' generados siguen exactamente la Sucesión de Fibonacci (<strong>" + secuenciaPuntos + "</strong>). Cada nuevo nivel se obtiene sumando los dos puntos anteriores.</p>" +
        "<p>Al multiplicar esta secuencia por tu base (" + baseHoras + " horas), los tiempos crecen con saltos cada vez más grandes. Esto modela la realidad perfectamente: una tarea pequeña es fácil de predecir, pero mientras más grande es el proyecto, mayor es la incertidumbre matemática. Fibonacci evita que des estimaciones falsamente precisas al obligarte a saltar a un número mucho mayor.</p>" +
        "</div>";

    consola.style.display = "block";
    consola.innerHTML = htmlSalida + htmlExplicacion;
};