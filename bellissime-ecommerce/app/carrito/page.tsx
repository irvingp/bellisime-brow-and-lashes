"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function CarritoPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Microblading Kit Profesional",
      price: 299.99,
      image: "https://images.unsplash.com/photo-512496015851-a90fb38ba796?w=200&h=200&fit=crop",
      quantity: 1
    },
    {
      id: 2,
      name: "Extensiones de Pestañas Premium",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1583001809515-0f9c8f6f9b8e?w=200&h=200&fit=crop",
      quantity: 2
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.16
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/productos" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Productos</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Servicios</Link>
              <Link href="/sobre-nosotros" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Sobre Nosotros</Link>
              <Link href="/contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contacto</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/carrito" className="relative text-pink-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Carrito de Compras</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
              <p className="text-gray-600 mb-8">Agrega productos para comenzar tu compra</p>
              <Link href="/productos" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                Explorar Productos
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 flex gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-pink-600 mb-4">${item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 border-x border-gray-300">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 font-semibold"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Envío</span>
                      <span className="font-semibold">
                        {shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>IVA (16%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span className="text-pink-600">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {subtotal < 100 && (
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-pink-800">
                        Agrega <span className="font-bold">${(100 - subtotal).toFixed(2)}</span> más para obtener envío gratis
                      </p>
                    </div>
                  )}

                  <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 mb-4">
                    Proceder al Pago
                  </button>

                  <Link href="/productos" className="block text-center text-pink-600 font-semibold hover:text-pink-700">
                    Continuar Comprando
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">Aceptamos</h3>
                    <div className="flex gap-2">
                      <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold">VISA</div>
                      <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold">MC</div>
                      <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold">AMEX</div>
                      <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                Tu destino para productos profesionales de cejas y pestañas.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Comprar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/productos" className="hover:text-pink-400 transition-colors">Todos los Productos</Link></li>
                <li><Link href="/productos?category=cejas" className="hover:text-pink-400 transition-colors">Cejas</Link></li>
                <li><Link href="/productos?category=pestanas" className="hover:text-pink-400 transition-colors">Pestañas</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/sobre-nosotros" className="hover:text-pink-400 transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/contacto" className="hover:text-pink-400 transition-colors">Contacto</Link></li>
                <li><Link href="/envios" className="hover:text-pink-400 transition-colors">Envíos</Link></li>
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
