# Calculadora Web

Una calculadora web sencilla construida con HTML, CSS y JavaScript vanilla.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Vista previa

La calculadora cuenta con un diseño moderno de tema oscuro, con botones diferenciados por color según su función.

## Funcionalidades

- Operaciones básicas: suma, resta, multiplicación y división
- Soporte para números decimales
- Botón **AC** para limpiar toda la pantalla
- Botón **⌫** para borrar el último carácter ingresado
- Validación de entrada: no permite operadores consecutivos ni múltiples puntos decimales en un mismo número
- Manejo de errores: muestra un mensaje breve ante expresiones inválidas o división por cero
- Corrección de errores de punto flotante (ej: `0.1 + 0.2 = 0.3`)

## Tecnologías

- **HTML5** — estructura semántica con elementos `<button>` y CSS Grid para el layout
- **CSS3** — diseño responsivo, variables de color, transiciones y efecto glassmorphism
- **JavaScript** — validación de expresiones con regex, evaluación segura con `new Function()` y manejo de errores con `try/catch`

## Cómo usar

No requiere instalación ni dependencias. Simplemente abre `index.html` en tu navegador.

```bash
# Clonar el repositorio
git clone https://github.com/jabssdev/practica-ramas-merge.git

# Abrir en el navegador
open index.html
```

## Estructura del proyecto

```
├── index.html   # Estructura y botones de la calculadora
├── style.css    # Estilos y diseño visual
└── script.js    # Lógica de la calculadora
```

## Contexto

Este proyecto fue desarrollado como práctica de control de versiones con Git, trabajando con ramas y merges. El código fue posteriormente refactorizado para mejorar el diseño y aplicar buenas prácticas de JavaScript.
