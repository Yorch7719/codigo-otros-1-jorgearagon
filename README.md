# Proyecto: Consumo de API de GitHub con JavaScript

Este proyecto consiste en una página web que consume la API pública de GitHub para mostrar información de un usuario específico.

## 💡 Objetivo

Aplicar conocimientos de **HTML**, **CSS** y **JavaScript** para realizar una petición a una API externa y mostrar los datos dinámicamente en una interfaz web.

## 🔧 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API de GitHub (`https://api.github.com/users/`)

## 🧩 Estructura del proyecto

/codigo-otros-1-jorgearagon/
│
├── index.html # Estructura HTML de la página
├── README.md # Este archivo con la descripción del proyecto
└── assets/
├── css/
│ └── styles.css # Estilos personalizados
└── js/
└── app.js # Código JavaScript que consume la API


## 📦 Funcionalidad

- El archivo `app.js` hace una solicitud `fetch()` a la API de GitHub para obtener datos de un usuario.
- Muestra su **nombre**, **blog** y **ubicación** en pantalla.
- Incluye manejo de errores si la API no responde o hay un problema de red.

## 🚀 Cómo probarlo

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Yorch7719/codigo-otros-1-jorgearagon.git

2. Abre index.html en tu navegador.

3. Verás cargada la información del usuario de GitHub por defecto (stolinski).

🛠️ Autor

Jorge Daniel Aragón

Proyecto realizado como parte del bootcamp de Generation México.
