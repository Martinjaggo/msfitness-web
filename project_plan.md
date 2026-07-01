# Elite Fitness - Landing Page

## 1. Project Description
Landing page minimalista para un programa de transformación física de 90 días ("Programa Élite"). El objetivo es captar leads a través de una llamada gratuita. Diseño dark-mode con acentos en azul, estilo premium y profesional, sin fotos de fitness.

**Target audience:** Personas que buscan transformar su físico y salud con un plan estructurado y acompañamiento personalizado.

**Core value:** Convertir hábitos en resultados con un sistema simple y efectivo en 90 días.

## 2. Page Structure
- `/` - Home (landing page completa con todas las secciones)

## 3. Core Features
- [ ] Hero section con programa "Élite 90", CTA principal y badges de confianza
- [ ] Presentación del programa (4 pilares del servicio)
- [ ] Espacio para video VSL (Video Sales Letter)
- [ ] Sección "¿Este programa es para vos?" (quién es el público ideal vs. quién no)
- [ ] Testimonios de clientes (cards estáticas con before/after y rating)
- [ ] Formulario de contacto para agendar llamada (integrado con Readdy Forms)
- [ ] Footer con info de contacto

## 4. Data Model Design
No se requiere base de datos. Los datos se manejan a través del formulario de Readdy Forms.

## 5. Backend / Third-party Integration Plan
- **Supabase:** No requiere (no hay login, no hay datos persistentes del usuario)
- **Shopify:** No requiere (no hay venta de productos online)
- **Stripe:** No requiere (no hay pagos online, solo agendar llamada)
- **Readdy Forms:** Sí, para capturar leads del formulario "Agendar Llamada"

## 6. Development Phase Plan

### Phase 1: Landing Page Principal
- **Goal:** Construir la landing page completa con todas las secciones visuales
- **Deliverable:** Página home funcional con hero, features, video placeholder, public fit, testimonials y footer

### Phase 2: Formulario de Contacto
- **Goal:** Implementar el formulario "Agendar Llamada" con Readdy Forms
- **Deliverable:** Formulario funcional con validación y feedback de envío

### Phase 3: Animaciones y Polish Final
- **Goal:** Agregar animaciones, scroll effects y ajustes finales de estilo
- **Deliverable:** Página pulida con animaciones de entrada y experiencia premium