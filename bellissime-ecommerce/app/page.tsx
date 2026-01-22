"use client"

import { useState } from 'react'
import Link from 'next/link'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [cart] = useState<CartItem[]>([])

  const services = [
    {
      id: 1,
      title: "Extensiones de Pestañas",
      description: "Realza tu mirada con nuestras extensiones de pestañas premium. Técnicas personalizadas para un look natural o dramático.",
      icon: "👁️",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Micropigmentación",
      description: "Cejas perfectas las 24 horas. Técnicas de microblading y powder brows para resultados naturales y duraderos.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Faciales",
      description: "Tratamientos faciales personalizados para rejuvenecer y cuidar tu piel con productos de alta calidad.",
      icon: "💆",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      id: 4,
      title: "Depilación Láser",
      description: "Tecnología de última generación para una depilación permanente, segura y efectiva.",
      icon: "⚡",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: 5,
      title: "Venta de Insumos",
      description: "Productos profesionales de micropigmentación para artistas y profesionales de la belleza.",
      icon: "🛍️",
      gradient: "from-purple-500 to-rose-500"
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Kit Completo de Micropigmentación",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
      category: "Micropigmentación"
    },
    {
      id: 2,
      name: "Extensiones de Pestañas Premium",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1583001809515-0f9c8f6f9b8e?w=500&h=500&fit=crop",
      category: "Pestañas"
    },
    {
      id: 3,
      name: "Pigmentos Profesionales Set",
      price: 145.99,
      image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500&h=500&fit=crop",
      category: "Micropigmentación"
    },
    {
      id: 4,
      name: "Adhesivo para Pestañas Profesional",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop",
      category: "Pestañas"
    },
    {
      id: 5,
      name: "Agujas de Micropigmentación",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
      category: "Micropigmentación"
    },
    {
      id: 6,
      name: "Kit de Cuidado Post-Tratamiento",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
      category: "Cuidado"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Bellissime
              </div>
              <div className="text-sm text-gray-600 hidden sm:block">Brow & Lashes</div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Inicio</Link>
              <Link href="/productos" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Productos</Link>
              <Link href="#servicios" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Servicios</Link>
              <Link href="#instalaciones" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Instalaciones</Link>
              <Link href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contacto</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link href="/carrito" className="relative text-gray-700 hover:text-pink-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Bellissime</span>
                <br />
                Brow & Lashes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nuestra historia nace del amor por la belleza y del profundo deseo de transformar vidas a través del detalle. 
                Durante siete años hemos dedicado nuestras manos, nuestro tiempo y nuestro corazón a este arte.
              </p>
              <p className="text-lg text-gray-600">
                Un espacio más humano, más íntimo y más nuestro, donde cada persona se siente escuchada, valorada y celebrada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#servicios" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Ver Servicios
                </Link>
                <Link href="/productos" className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-all">
                  Comprar Productos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop" 
                  alt="Belleza de cejas y pestañas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">7 Años</div>
                    <div className="text-sm text-gray-600">de Experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Experiencias personalizadas que abracen el alma y eleven la belleza</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100">
                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones Section */}
      <section id="instalaciones" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestras Instalaciones</h2>
            <p className="text-xl text-gray-600">45 m² diseñados para tu comodidad y bienestar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4 Cubículos</h3>
              <p className="text-gray-600 mb-4">Estaciones de trabajo especializadas:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>2 estaciones de pestañas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>1 estación de micropigmentación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>1 estación de faciales y depilación</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Área de Productos</h3>
              <p className="text-gray-600">
                Exhibición de productos profesionales para el cuidado posterior de tus tratamientos. 
                Todo lo que necesitas para mantener los resultados en casa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sala de Espera</h3>
              <p className="text-gray-600">
                Espacio acogedor y cómodo diseñado para tu relajación. Algunos servicios requieren 15 minutos de espera 
                para resultados óptimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Profesionales</h2>
            <p className="text-xl text-gray-600">Insumos de alta calidad para profesionales de la belleza</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/productos" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-all">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">7 Años de Experiencia</h3>
              <p className="text-gray-600">Profesionales certificados y especializados</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Productos Premium</h3>
              <p className="text-gray-600">Insumos profesionales de alta calidad</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">Cada cliente es único y especial</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Resultados Garantizados</h3>
              <p className="text-gray-600">Técnicas probadas y efectivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contacto" className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mantente Conectada
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Recibe ofertas exclusivas, consejos de belleza y novedades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Bellissime
              </h3>
              <p className="text-gray-400">
                Transformando vidas a través del detalle. 7 años de experiencia en micropigmentación, 
                extensiones de pestañas, faciales y depilación láser.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#servicios" className="hover:text-pink-400 transition-colors">Extensiones de Pestañas</Link></li>
                <li><Link href="#servicios" className="hover:text-pink-400 transition-colors">Micropigmentación</Link></li>
                <li><Link href="#servicios" className="hover:text-pink-400 transition-colors">Faciales</Link></li>
                <li><Link href="#servicios" className="hover:text-pink-400 transition-colors">Depilación Láser</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Comprar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Insumos de Micropigmentación</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Productos para Pestañas</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Cuidado Post-Tratamiento</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Kits Profesionales</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Bellissime Brow & Lashes. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
