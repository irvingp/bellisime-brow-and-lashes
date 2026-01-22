"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [priceRange, setPriceRange] = useState([0, 500])

  const products = [
    // Micropigmentación
    {
      id: 1,
      name: "Kit Completo de Micropigmentación",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 5,
      inStock: true,
      description: "Kit profesional completo con todo lo necesario para micropigmentación"
    },
    {
      id: 2,
      name: "Pigmentos Profesionales Set (12 colores)",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 5,
      inStock: true,
      description: "Set de 12 pigmentos de alta calidad para cejas"
    },
    {
      id: 3,
      name: "Agujas de Micropigmentación (50 unidades)",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 5,
      inStock: true,
      description: "Agujas estériles desechables para microblading"
    },
    {
      id: 4,
      name: "Máquina de Micropigmentación Digital",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 5,
      inStock: true,
      description: "Máquina digital profesional con control de velocidad"
    },
    {
      id: 5,
      name: "Crema Anestésica Profesional",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 4,
      inStock: true,
      description: "Anestésico tópico para procedimientos de micropigmentación"
    },
    {
      id: 6,
      name: "Plantillas de Cejas (100 pares)",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&h=500&fit=crop",
      category: "Micropigmentación",
      rating: 4,
      inStock: true,
      description: "Plantillas desechables para diseño de cejas perfectas"
    },
    
    // Extensiones de Pestañas
    {
      id: 7,
      name: "Extensiones de Pestañas Premium (Volumen Ruso)",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1583001809515-0f9c8f6f9b8e?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 5,
      inStock: true,
      description: "Pestañas de seda premium para volumen ruso"
    },
    {
      id: 8,
      name: "Adhesivo para Pestañas Profesional",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 5,
      inStock: true,
      description: "Adhesivo de secado rápido, hipoalergénico"
    },
    {
      id: 9,
      name: "Kit Completo de Extensiones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 5,
      inStock: true,
      description: "Kit completo con pestañas, adhesivo y herramientas"
    },
    {
      id: 10,
      name: "Pinzas de Precisión para Pestañas",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 5,
      inStock: true,
      description: "Pinzas profesionales de acero inoxidable"
    },
    {
      id: 11,
      name: "Removedor de Extensiones",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 4,
      inStock: true,
      description: "Removedor suave y efectivo para extensiones"
    },
    {
      id: 12,
      name: "Sérum de Crecimiento para Pestañas",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
      category: "Extensiones de Pestañas",
      rating: 5,
      inStock: true,
      description: "Sérum nutritivo para fortalecer pestañas naturales"
    },

    // Productos Faciales
    {
      id: 13,
      name: "Sérum Facial Vitamina C",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
      category: "Faciales",
      rating: 5,
      inStock: true,
      description: "Sérum iluminador con vitamina C pura"
    },
    {
      id: 14,
      name: "Mascarilla Facial Hidratante",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
      category: "Faciales",
      rating: 4,
      inStock: true,
      description: "Mascarilla de hidratación profunda"
    },
    {
      id: 15,
      name: "Limpiador Facial Profesional",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
      category: "Faciales",
      rating: 5,
      inStock: true,
      description: "Limpiador suave para todo tipo de piel"
    },

    // Depilación Láser
    {
      id: 16,
      name: "Gel Post-Depilación Láser",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
      category: "Depilación Láser",
      rating: 5,
      inStock: true,
      description: "Gel calmante para después de depilación láser"
    },
    {
      id: 17,
      name: "Crema Protectora Pre-Láser",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
      category: "Depilación Láser",
      rating: 4,
      inStock: true,
      description: "Protección para la piel antes del tratamiento"
    },

    // Cuidado Post-Tratamiento
    {
      id: 18,
      name: "Kit de Cuidado Post-Micropigmentación",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
      category: "Cuidado Post-Tratamiento",
      rating: 5,
      inStock: true,
      description: "Kit completo para cuidado posterior"
    },
    {
      id: 19,
      name: "Bálsamo Cicatrizante",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
      category: "Cuidado Post-Tratamiento",
      rating: 5,
      inStock: true,
      description: "Bálsamo para acelerar la cicatrización"
    },
    {
      id: 20,
      name: "Spray Antibacterial",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
      category: "Cuidado Post-Tratamiento",
      rating: 4,
      inStock: true,
      description: "Spray protector antibacterial"
    }
  ]

  const categories = [
    'Todos', 
    'Micropigmentación', 
    'Extensiones de Pestañas', 
    'Faciales', 
    'Depilación Láser',
    'Cuidado Post-Tratamiento'
  ]

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Todos' || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Bellissime
              </div>
              <div className="text-sm text-gray-600 hidden sm:block">Brow & Lashes</div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Inicio</Link>
              <Link href="/productos" className="text-pink-600 font-bold">Productos</Link>
              <Link href="/#servicios" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Servicios</Link>
              <Link href="/#instalaciones" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Instalaciones</Link>
              <Link href="/#contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contacto</Link>
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
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Productos Profesionales</h1>
          <p className="text-xl text-white/90">Insumos de alta calidad para profesionales de la belleza</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-72 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Categorías</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-md'
                          : 'hover:bg-pink-50 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Rango de Precio</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-pink-600"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
                <p className="text-sm text-gray-600 mb-4">Nuestro equipo está listo para asesorarte</p>
                <Link href="/#contacto" className="block text-center bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                  Contactar
                </Link>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Mostrando <span className="font-semibold text-pink-600">{filteredProducts.length}</span> productos
                </p>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600">
                  <option>Más Recientes</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                  <option>Más Populares</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
                            Agotado
                          </span>
                        </div>
                      )}
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'fill-gray-300'}`} 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                      </div>
                      <button 
                        disabled={!product.inStock}
                        className={`w-full py-3 rounded-full font-semibold transition-all ${
                          product.inStock
                            ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
                  <p className="text-gray-600">Intenta ajustar los filtros</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Bellissime
              </h3>
              <p className="text-gray-400">
                Insumos profesionales de micropigmentación y extensiones de pestañas. 7 años de experiencia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Micropigmentación</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Extensiones de Pestañas</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Faciales</Link></li>
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Depilación Láser</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-pink-400 transition-colors">Inicio</Link></li>
                <li><Link href="/#servicios" className="hover:text-pink-400 transition-colors">Servicios</Link></li>
                <li><Link href="/#instalaciones" className="hover:text-pink-400 transition-colors">Instalaciones</Link></li>
                <li><Link href="/#contacto" className="hover:text-pink-400 transition-colors">Contacto</Link></li>
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
