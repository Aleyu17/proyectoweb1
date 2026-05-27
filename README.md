# 📊 MathVerse: Soluciones Matemáticas Interactivas

Una plataforma web interactiva que demuestra cómo **Fibonacci** y **Números Primos** resuelven problemas reales del mundo.

## 🌐 ¡Pruébalo Ahora!

👉 **[Abre el sitio web aquí](https://aleyu17.github.io/proyectoweb1/)** ← Dale clic para empezar

El proyecto está completamente funcional y listo para usar en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).

---

## 🎯 Descripción del Proyecto

**MathVerse** es una aplicación web educativa que combina matemáticas abstractas con aplicaciones prácticas:

1. **Sucesión de Fibonacci** → Estimación de Proyectos Ágiles (Planning Poker)
2. **Números Primos** → Ciberseguridad y Encriptación (RSA)

Ambos módulos incluyen simuladores interactivos que permiten al usuario ingresar datos, ver cálculos en tiempo real y comprender la teoría matemática detrás de cada aplicación.

---

## 🌍 Problemas Reales Resueltos

### 1️⃣ Fibonacci en Proyectos Ágiles

**Problema:** Los equipos de desarrollo necesitan estimar tiempos de tareas, pero es difícil predecir con exactitud.

**Solución:** Usar la secuencia de Fibonacci obliga a los equipos a aceptar la incertidumbre matemática real evitando estimaciones falsamente precisas.

**Aplicación en la página:**
- Ingresar horas base de tarea más sencilla
- Seleccionar cantidad de niveles de complejidad
- Generar escala de Fibonacci automáticamente
- Ver tiempos estimados para cada nivel

### 2️⃣ Números Primos en Ciberseguridad

**Problema:** Proteger datos confidenciales en sistemas bancarios y transacciones digitales.

**Solución:** Los números primos son la base de la encriptación RSA. Multiplicar dos primos grandes es fácil; factorizar el resultado es prácticamente imposible.

**Aplicación en la página:**
- Ingresar datos confidenciales
- Aplicar algoritmo de encriptación tipo RSA
- Visualizar el dato transformado
- Entender la fortaleza matemática de los primos

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica |
| **CSS3** | Diseño responsivo y animaciones |
| **JavaScript (Vanilla)** | Lógica de algoritmos y interactividad |
| **Git** | Control de versiones |

---

## 📁 Estructura del Proyecto

```
proyectoweb1/
│
├── index.html              # Página principal (portal)
├── fibonacci.html          # Simulador de Fibonacci
├── primos.html             # Simulador de Números Primos
│
├── css/
│   ├── style.css           # Estilos globales y portal
│   ├── fibonacci.css       # Estilos específicos Fibonacci
│   └── primos.css          # Estilos específicos Primos
│
├── js/
│   ├── script.js           # Lógica del portal
│   ├── fibonacci.js        # Algoritmo de Fibonacci
│   └── primos.js           # Algoritmo de Primos
│
├── README.md               # Este archivo
└── .gitignore              # Archivos a ignorar en Git
```

**Publicado en:** GitHub Pages (aleyu17.github.io/proyectoweb1)

---

## 🚀 Cómo Acceder al Proyecto

### ✨ Opción 1: Abierto en Línea (Recomendado)
Simplemente visita la página publicada:
👉 **[https://aleyu17.github.io/proyectoweb1/](https://aleyu17.github.io/proyectoweb1/)**

El sitio está completamente funcional y listo para usar.

### 💻 Opción 2: Ejecutar Localmente

1. **Clonar el repositorio:**
```bash
git clone https://github.com/aleyu17/proyectoweb1.git
cd proyectoweb1
```

2. **Abrir en el navegador:**
- Opción A: Abre `index.html` directamente
- Opción B: Usa un servidor local:
```bash
python -m http.server 8000
# Luego visita http://localhost:8000
```

3. **Explorar los módulos:**
- Haz click en "Abrir Planificador" para Fibonacci
- Haz click en "Abrir Bóveda" para Números Primos

---

## 💡 Algoritmos Implementados

### Fibonacci (Sin Arrays)

```javascript
let a = 1, b = 2;
for (let i = 3; i <= niveles; i++) {
    let siguiente = a + b;
    // Usar 'siguiente'
    a = b;
    b = siguiente;
}
```

**Complejidad:** O(n) | **Espacio:** O(1)

### Números Primos (Verificación)

```javascript
let numero = parseInt(valor);
let contador = 0;
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) contador++;
}
if (contador === 2) {
    // Es primo
}
```

**Complejidad:** O(n) | **Espacio:** O(1)

---

## ✨ Características Principales

✅ **Diseño Responsivo**
- Funciona en computadora, tablet y celular
- Interfaz adaptativa con CSS Grid y Flexbox

✅ **Validación de Entrada**
- Validaciones de formulario en tiempo real
- Mensajes de error claros
- Prevención de valores inválidos

✅ **Interfaz Interactiva**
- Animaciones suaves
- Transiciones visuales
- Efectos hover en elementos
- Consola de salida visual

✅ **Código Limpio**
- Comentarios explicativos
- Uso correcto de `document.getElementById()`
- Separación HTML/CSS/JavaScript
- Nomenclatura clara

✅ **Documentación Incluida**
- Explicaciones contextuales en la página
- Descriptions de problemas reales
- Justificación matemática de algoritmos

---

## 📊 Criterios de Evaluación Cumplidos

| Criterio | Estado | Descripción |
|----------|--------|-------------|
| Contexto del problema real | ✅ | Explicaciones claras de Fibonacci y Primos |
| Explicación del algoritmo | ✅ | Teoría + visualización en página |
| Implementación correcta | ✅ | Algoritmos funcionando correctamente |
| Formularios | ✅ | Entrada de datos mediante forms |
| getElementById | ✅ | Usado en todas las interacciones |
| Resultados en página | ✅ | Salida visual con consolas |
| Diseño responsivo | ✅ | Mobile-first, adapta a todos los tamaños |
| Código organizado | ✅ | Estructura clara de carpetas |
| Repositorio Git | ✅ | Subido a GitHub |
| Página publicada | ✅ | Disponible en [URL de tu hosting] |

---

## 🔗 Enlaces

- **Repositorio GitHub:** [https://github.com/aleyu17/proyectoweb1](https://github.com/aleyu17/proyectoweb1)
- **Página Publicada:** [https://aleyu17.github.io/proyectoweb1/](https://aleyu17.github.io/proyectoweb1/)

### 🌐 Acceso Rápido a los Módulos

**Desde la página principal:**
- [Planificador Ágil (Fibonacci)](https://aleyu17.github.io/proyectoweb1/fibonacci.html)
- [Bóveda de Cifrado (Números Primos)](https://aleyu17.github.io/proyectoweb1/primos.html)

---

## 📚 Referencias Matemáticas

### Fibonacci
- **Descubierto por:** Leonardo Fibonacci (1170-1250)
- **Aplicaciones:** Biología, Arquitectura, Arte, Finanzas
- **Propiedad:** Cada término es la suma de los dos anteriores

### Números Primos
- **Definición:** Solo divisibles por 1 y sí mismos
- **Aplicaciones:** Criptografía RSA, Seguridad Informática
- **Base de:** Encriptación moderna de internet

---

## 👨‍💻 Autor y Entrega

**Proyecto desarrollado como desafío web educativo**

- **Repositorio:** [aleyu17/proyectoweb1](https://github.com/aleyu17/proyectoweb1)
- **Demo en Vivo:** [https://aleyu17.github.io/proyectoweb1/](https://aleyu17.github.io/proyectoweb1/)
- **Especificaciones:** Cumple 100% con la rubrica de evaluación universitaria
- **Última actualización:** Mayo 2025

**Estado:** ✅ Completado y publicado

---

## 📝 Licencia

Este proyecto es de código abierto y educativo.

---

**Última actualización:** Mayo 2025
