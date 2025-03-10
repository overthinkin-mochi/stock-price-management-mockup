# Mockup Sistema de Gestión de Precios de Acciones

Este repositorio contiene un sistema completo para la gestión y visualización de precios de acciones, desarrollado con Express.js (backend) y Angular 2 con TypeScript (frontend).

## Descripción

El sistema permite consultar información sobre acciones bursátiles y visualizar el histórico de precios de cada una. La aplicación está compuesta por:

- **Backend**: API REST desarrollada con Express.js
- **Frontend**: Interfaz de usuario desarrollada con Angular 2

## Estructura del Proyecto

El repositorio contiene tanto el backend como el frontend en el mismo proyecto.

## Backend

### Tecnologías utilizadas
- Node.js
- Express.js

### Datos
El backend utiliza dos archivos JSON para obtener la información:
- `symbols.json`: Contiene el listado de acciones disponibles
- `historical.json`: Contiene el histórico de precios por fecha de cada acción

### Endpoints API

La API REST proporciona los siguientes endpoints:

- `GET http://localhost:9090/api/symbols/`: Obtiene todos los símbolos (nemotécnicos) disponibles
- `GET http://localhost:9090/api/symbols/<symbol>`: Filtra la información por un nemotécnico específico
- `GET http://localhost:9090/api/historical`: Obtiene todo el histórico de precios
- `GET http://localhost:9090/api/historical/<symbol>`: Obtiene el histórico de precios para un nemotécnico específico

## Frontend

### Tecnologías utilizadas
- Angular 2
- TypeScript
- HTML/CSS

### Componentes principales

El frontend está dividido en tres secciones principales, siguiendo el layout especificado:

1. **Sección NEMOS**: 
   - Muestra una lista de nemotécnicos cargados desde la API
   - Permite seleccionar una acción para ver sus detalles

2. **Sección PRECIOS**: 
   - Muestra una tabla HTML con los precios históricos del nemotécnico seleccionado
   - Columnas: Precio y Fecha
   - Altura fija de 300px

3. **Sección GRAFICO**: 
   - Visualiza gráficamente los datos de precios para el nemotécnico seleccionado
   - Ocupa el espacio disponible restante

## Instalación

### Requisitos previos
- Node.js (versión recomendada: 14.x o superior)
- npm (incluido con Node.js)
- Angular CLI

