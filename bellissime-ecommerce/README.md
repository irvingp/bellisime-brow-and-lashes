# Bellissime Brow & Lashes - Sitio Web E-commerce

Sitio web profesional para **Bellissime Brow & Lashes**, un negocio especializado en servicios de belleza con 7 años de experiencia.

## 🌟 Sobre el Negocio

Nuestra historia nace del amor por la belleza y del profundo deseo de transformar vidas a través del detalle. Durante siete años hemos dedicado nuestras manos, nuestro tiempo y nuestro corazón a este arte. Bellissime Brow and Lashes surge del sueño de ofrecer un espacio más humano, más íntimo y más nuestro, donde cada persona se siente escuchada, valorada y celebrada.

## 💼 Servicios

1. **Extensiones de Pestañas** - Técnicas personalizadas para un look natural o dramático
2. **Micropigmentación** - Cejas perfectas las 24 horas con microblading y powder brows
3. **Faciales** - Tratamientos personalizados para rejuvenecer y cuidar tu piel
4. **Depilación Láser** - Tecnología de última generación para depilación permanente
5. **Venta de Insumos** - Productos profesionales de micropigmentación para artistas

## 🏢 Instalaciones

Nuestro local de 45 m² cuenta con:
- **4 Cubículos**: 2 estaciones de pestañas, 1 de micropigmentación, 1 de faciales y depilación
- **Área de Productos**: Exhibición de productos para cuidado post-tratamiento
- **Sala de Espera**: Espacio acogedor y cómodo para nuestras clientas

## 🚀 Instalación y Configuración

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** versión 20.x o superior
- **npm** (incluido con Node.js)

Para verificar tu versión de Node.js:
```bash
node --version
```

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica):
```bash
git clone <url-del-repositorio>
cd bellissime-ecommerce
```

2. **Instalar dependencias**:
```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`, incluyendo:
- Next.js 16.1.4
- React 19
- TypeScript
- Tailwind CSS
- Y todas las demás dependencias del proyecto

3. **Ejecutar el servidor de desarrollo**:
```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

4. **Compilar para producción**:
```bash
npm run build
```

5. **Iniciar el servidor de producción**:
```bash
npm start
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🎨 Tecnologías Utilizadas

- **Framework**: Next.js 16.1.4 (React 19)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Google Fonts (Geist Sans, Geist Mono)

## 🎨 Diseño

El diseño está inspirado en la plantilla **Astra + WooCommerce** de WordPress, adaptado con:
- Colores corporativos: Rosa (#DB2777) y Púrpura (#9333EA)
- Gradientes elegantes
- Diseño moderno y responsivo
- Interfaz intuitiva y fácil de usar

## 📄 Estructura del Proyecto

```
bellissime-ecommerce/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globales
│   ├── productos/         # Página de productos
│   │   └── page.tsx
│   └── carrito/           # Página del carrito
│       └── page.tsx
├── public/                # Archivos estáticos
├── muestra/              # Documentación del negocio
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── tailwind.config.ts    # Configuración de Tailwind
└── next.config.ts        # Configuración de Next.js
```

## 🛍️ Características

- ✅ Catálogo de productos profesionales
- ✅ Filtros por categoría y precio
- ✅ Carrito de compras
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Secciones de servicios e instalaciones
- ✅ Newsletter y formulario de contacto
- ✅ Optimizado para SEO

## 📱 Categorías de Productos

1. **Micropigmentación** - Kits, pigmentos, agujas, máquinas
2. **Extensiones de Pestañas** - Extensiones, adhesivos, herramientas
3. **Faciales** - Sérums, mascarillas, limpiadores
4. **Depilación Láser** - Productos pre y post tratamiento
5. **Cuidado Post-Tratamiento** - Kits de cuidado, bálsamos, sprays

## 🌐 Despliegue

Para desplegar en producción, puedes usar plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**

## 📞 Soporte

Para cualquier consulta o soporte técnico, contacta al equipo de desarrollo.

---

**© 2026 Bellissime Brow & Lashes. Todos los derechos reservados.**
