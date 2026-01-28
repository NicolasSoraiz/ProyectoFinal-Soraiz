# 🛒 Digital Market

**Digital Market** es una aplicación web de e-commerce desarrollada con **React**, que permite visualizar productos, filtrarlos por categorías, ver el detalle de cada producto, agregarlos a un carrito y finalizar una compra guardando la orden en **Firebase Firestore**.


## 🚀 Tecnologías utilizadas

- **React**
- **React Router**
- **Context API** (manejo global del carrito)
- **Firebase Firestore**
- **Vite**
- **Tailwind CSS**

## 📦 Funcionalidades

- 📋 Listado de productos
- 🗂️ Filtrado por categorías
- 🔍 Vista de detalle de producto
- ➕ Agregar productos al carrito
- 🛒 Carrito de compras:
  - Cantidad total de productos
  - Precio total
  - Eliminar productos individuales
  - Vaciar carrito
- 🧾 Formulario de compra con validaciones
- ☁️ Generación de orden de compra en Firebase
- 🔔 Notificación (toast) al agregar productos


## 🔥 Firebase

La aplicación utiliza **Firebase Firestore** para:

- Obtener productos
- Obtener categorías
- Obtener el detalle de un producto
- Crear órdenes de compra

Las órdenes se guardan en la colección:

Cada orden contiene:
- Datos del comprador
- Productos comprados
- Total de la compra
- Fecha (serverTimestamp)