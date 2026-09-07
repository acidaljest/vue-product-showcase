# Vue Product Showcase

## Descripción
SPA desarrollada con Vue.js 3 como proyecto de cierre del Módulo 7. Consume
un catálogo de productos desde una API REST (FakeStoreAPI), gestiona el
estado global con Vuex, y utiliza Vuetify como librería de componentes UI.

## Instalación
\`\`\`bash
npm install
npm run serve
\`\`\`

## Ejecutar pruebas
\`\`\`bash
npm run test:unit   # Pruebas unitarias con Jest + Vue Test Utils
npm run test:e2e    # Pruebas E2E con Cypress
\`\`\`

## Decisiones técnicas
- **Vuex modularizado** (`productos`, `filtros`) en vez de un store único, para
  mantener el código organizado a medida que crezca la aplicación.
- **Vuetify** elegido por su sistema de componentes completo (Material Design)
  que acelera el maquetado sin sacrificar consistencia visual.
- **API pública FakeStoreAPI** usada como fuente de datos real para simular
  el escenario de e-commerce descrito en la consigna.
- **Getters computados en el componente** (`productosFiltrados`) en vez de un
  getter en Vuex, para mantener la lógica de presentación cerca de donde se usa.

## Estado del proyecto
✅ Componentes reutilizables con ciclo de vida
✅ Consumo de API con manejo de loading/error/vacío
✅ Estado centralizado con Vuex (módulos namespaced)
✅ Pruebas unitarias (render + eventos) y E2E (flujo de filtrado)
✅ Interfaz con Vuetify, responsive

## Mejoras futuras
- Migración a Nuxt para agregar SSR y mejorar SEO si el catálogo se vuelve público.
- Módulo de favoritos con persistencia en localStorage.

## Autor
Carolina — Bootcamp Desarrollo Front-End

## Declaración de uso de IA
Este proyecto fue desarrollado con apoyo de inteligencia artificial (Claude)
para guía y revisión de código, siguiendo el principio de autoaprendizaje
del bootcamp. El código final fue comprendido, adaptado y validado por la estudiante.