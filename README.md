# 🛍️ ReactJS Challenge

Este proyecto es una prueba técnica para HEB. Se pide crear algunos componentes esenciales para una tienda línea desarrollada en React, usando la API de Fake Store de Platzi. Permite visualizar productos, filtrarlos y agregarlos al carrito de compras. Incluye tests básicos con React Testing Library y Vitest.

---

## 🧩 Tecnologías utilizadas

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![HeroUI](https://img.shields.io/badge/@heroui/react-2.8.2-7F56D9?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing%20Library-16.3.0-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

---

## 🚀 Instalación y ejecución

### 🔧 Clonar el repositorio

```bash
git clone https://github.com/leonelvalentinn/ReactJS-Challenge.git
cd ReactJS-Challenge
```

### 📦 Instalar dependencias

```bash
npm install
```

### ▶️ Ejecutar el proyecto

```bash
npm run dev
```

---

## 🧪 Ejecutar los tests

Este proyecto utiliza [Vitest](https://vitest.dev/) junto a [React Testing Library](https://testing-library.com/) y [JSDOM](https://github.com/jsdom/jsdom).

```bash
npm run test
```

> Puedes usar `npm run test:watch` para correr los tests en modo observador.

---

## ✅ Funcionalidades implementadas

- Visualización de productos desde Fake Store API.
- Filtro de productos por título.
- Agregado de productos al carrito.
- Persistencia del carrito con `localStorage`.
- Total de productos y precio en el carrito.
- UI estilizada con TailwindCSS y HeroUI.
- Tests básicos de:
  - Filtro de productos
  - Añadir productos al carrito

---

## 📁 Estructura base del proyecto

```
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── context/           # Contexto del carrito
│   ├── hooks/             # Custom hooks
│   ├── layout/            # Layout para envolver la app
│   ├── mocks/             # Datos de prueba para el desarrollo
│   ├── tests/             # Pruebas unitarias
│   ├── utils/             # Funciones auxiliares
│   └── App.jsx
│   └── providers.jsx      # Componente para envolver los providers
├── public/
├── index.html
└── vite.config.js
```

---
