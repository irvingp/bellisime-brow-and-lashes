# Bellissime Brow & Lashes - E-commerce

Sitio web de comercio electrónico profesional para **Bellissime Brow and Lashes**, especialistas en servicios de cejas y pestañas con sede en Miami, FL.

## 🏢 Acerca del Negocio

**Bellissime Brow and Lashes** es un salón de belleza especializado en:
- Microblading y diseño de cejas
- Extensiones de pestañas
- Laminado de cejas y pestañas
- Tinte de cejas y pestañas
- Servicios profesionales de belleza facial

**Ubicación**: Miami, FL  
**Contacto**: [Información disponible en el sitio web]

## 🎨 Diseño y Colores

El diseño utiliza una paleta de colores elegante y femenina inspirada en la identidad de marca:
- **Rosa Principal**: `#DB2777` (pink-600)
- **Púrpura Acento**: `#9333EA` (purple-600)
- **Gradientes**: Combinaciones de rosa a púrpura para elementos destacados
- **Fondos Suaves**: Rosa y púrpura claros para secciones

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16.1.4 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Imágenes**: Unsplash (configurado en next.config.ts)

## 📋 Características

### Páginas Implementadas

1. **Página Principal (/)** 
   - Hero section con llamados a la acción
   - Categorías destacadas con imágenes
   - Productos destacados (6 productos)
   - Sección de características (calidad, envío, soporte, pago seguro)
   - Newsletter
   - Footer completo con enlaces y redes sociales

2. **Catálogo de Productos (/productos)**
   - Filtros por categoría (Todos, Cejas, Pestañas, Herramientas, Kits)
   - Filtro por rango de precio
   - Grid responsivo de productos
   - Indicadores de stock
   - Sistema de calificaciones
   - Ordenamiento de productos

3. **Carrito de Compras (/carrito)**
   - Lista de productos agregados
   - Control de cantidad (+/-)
   - Eliminación de productos
   - Resumen del pedido con:
     - Subtotal
     - Envío (gratis en compras >$100)
     - IVA (16%)
     - Total
   - Indicador de envío gratis
   - Métodos de pago aceptados

### Componentes Destacados

- **Header**: Navegación sticky con logo, menú y carrito
- **Hero Section**: Diseño moderno con gradientes y CTA
- **Product Cards**: Tarjetas con hover effects y badges
- **Footer**: Completo con múltiples secciones y redes sociales

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 20.x o superior
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio (si aplica)
git clone <repository-url>

# 2. Navegar al directorio del proyecto
cd bellissime-ecommerce

# 3. Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Modo desarrollo (puerto 3000 por defecto)
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción (después de build)
npm start

# Ejecutar linter
npm run lint
```

### Acceso Local

El sitio estará disponible en `http://localhost:3000`

## 📱 Responsive Design

El sitio es completamente responsivo con breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Plantilla de Referencia

Este proyecto está inspirado en **Astra + WooCommerce**, una de las plantillas más populares de WordPress para e-commerce, conocida por:
- Diseño limpio y moderno
- Excelente rendimiento
- Navegación intuitiva
- Enfoque en conversión

## 🌈 Paleta de Colores Completa

```css
/* Colores Principales */
Pink-50:  #FDF2F8
Pink-100: #FCE7F3
Pink-600: #DB2777
Purple-50: #FAF5FF
Purple-100: #F3E8FF
Purple-600: #9333EA

/* Grises */
Gray-50:  #F9FAFB
Gray-600: #4B5563
Gray-900: #111827
```

## 📦 Productos de Ejemplo

El sitio incluye 9 productos de ejemplo en categorías:
- **Cejas**: Microblading Kit, Tinte Orgánico, Kit de Laminado, Gel Fijador
- **Pestañas**: Extensiones Premium, Sérum de Crecimiento, Adhesivo Profesional, Kit Completo
- **Herramientas**: Pinzas de Precisión

## 🔄 Próximas Mejoras Sugeridas

- Integración con pasarela de pago real
- Sistema de autenticación de usuarios
- Panel de administración
- Base de datos para productos
- Sistema de reviews y comentarios
- Búsqueda avanzada de productos
- Wishlist / Lista de deseos
- Comparador de productos

## 📄 Licencia

Proyecto de demostración para Bellissime Brow & Lashes.

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
