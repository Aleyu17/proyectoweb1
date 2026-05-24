# proyectoweb1
un proyecto web probando html css y javascript
# MathVerse - Simuladores Matemáticos Interactivos

Este proyecto es una plataforma web interactiva diseñada con una estética de modo oscuro moderno. Su objetivo es aplicar conceptos matemáticos puros (como la Sucesión de Fibonacci y los Números Primos) a la resolución de problemas prácticos e interesantes del mundo real.

---

## 🚀 Estructura del Proyecto

La plataforma está dividida en tres secciones principales de fácil navegación:

1. **Portal Principal (`index.html`)**: Actúa como el centro de mando. Presenta tarjetas dinámicas con efectos visuales al pasar el cursor para redirigir al usuario hacia las diferentes herramientas.
2. **Estimador de Proyectos Ágiles (`webfibonacci.html`)**: Herramienta basada en la secuencia de Fibonacci orientada a la gestión de tiempo en equipos de desarrollo.
3. **Bóveda Criptográfica (`webprimos.html`)**: Simulador de seguridad informática que demuestra la utilidad de los números primos en el cifrado de datos.

---

## 🛠️ ¿Cómo funciona cada herramienta?

### 1. Estimador de Proyectos Ágiles (Sucesión de Fibonacci)
Inspirado en la dinámica real de *Planning Poker* utilizada en metodologías ágiles (Scrum). 

* **El Problema Real**: Los humanos no somos precisos calculando tiempos exactos para tareas muy grandes o complejas.
* **La Solución**: El usuario ingresa las horas estimadas para la tarea más sencilla (que equivale a 1 punto) y la cantidad de niveles que desea mapear. El sistema genera automáticamente una escala de esfuerzo multiplicando la base por la Sucesión de Fibonacci ($1, 2, 3, 5, 8, 13, \dots$).
* **Lógica**: Al forzar saltos numéricos cada vez más grandes, el simulador refleja de forma matemática la incertidumbre real de los proyectos: a mayor complejidad de la tarea, mayor es el margen de error.

### 2. Bóveda de Cifrado (Números Primos)
Una demostración simplificada del funcionamiento del algoritmo de seguridad RSA, el estándar utilizado por bancos y servidores de todo el mundo.

* **El Problema Real**: Transmitir información confidencial (como contraseñas o PINs) a través de internet de forma segura.
* **La Solución**: El usuario escribe un texto secreto. El sistema utiliza dos claves primas preestablecidas en el servidor ($P = 61$ y $Q = 53$) para transformar el texto legible en una cadena cifrada matemáticamente.
* **Lógica**: El simulador explica visualmente el principio de asimetría: es extremadamente fácil para cualquier computadora multiplicar dos números primos grandes, pero revertir el proceso para hallar los factores primos originales sin la clave correcta es un problema que tomaría años resolver, haciendo que la información sea segura.

---

## 💻 Tecnologías Utilizadas

* **HTML5 Semántico**: Estructura limpia y accesible utilizando formularios, etiquetas de control e inputs validados nativamente.
* **CSS3 Moderno**: Diseño responsivo basado en CSS Grid y Flexbox. Implementa un esquema de diseño oscuro optimizado mediante variables personalizadas (`:root`) y tipografías del sistema para asegurar un alto rendimiento y transiciones fluidas.
* **JavaScript (Vanilla)**: Manipulación nativa del DOM mediante `document.getElementById` para capturar entradas, validar datos en tiempo real y renderizar los resultados de los algoritmos sin necesidad de recargar la página.

---

## 📦 Instalación y Uso Local

El proyecto no requiere de servidores externos, compiladores ni dependencias. Para ejecutarlo localmente:

1. Descarga o clona este repositorio.
2. Asegúrate de mantener los archivos HTML, CSS y JS en sus respectivas carpetas.
3. Haz doble clic sobre el archivo `index.html` para abrir el portal directamente en cualquier navegador web moderno.
