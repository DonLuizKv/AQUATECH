"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Droplets, Building, Recycle, Calendar, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TalksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <Droplets className="h-8 w-8 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-bold text-cyan-700">AQUATECH</h1>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link href="#about" className="px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
            Nosotros
          </Link>
          <Link href="#services" className="px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
            Servicios
          </Link>
          <Link href="#talks" className="px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
            Charlas
          </Link>
          <Link href="#contact" className="px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
            Contacto
          </Link>
          <Link
            href="#contact"
            className="mt-2 md:mt-0 md:ml-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
          >
            Consultar
          </Link>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20 px-8 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900 opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyan-900 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-900 to-transparent opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones innovadoras para la recolección y reutilización de agua
          </h2>
          <p className="text-xl mb-8">
            Transformando la industria de la construcción con tecnologías sostenibles para un futuro con agua para
            todos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium flex items-center justify-center"
            >
              Nuestras soluciones
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#talks"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
            >
              Próximas charlas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre AQUATECH</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra misión</h3>
            <p className="text-gray-600 mb-6">
              En AQUATECH, nos dedicamos a desarrollar e implementar tecnologías innovadoras para la recolección y
              reutilización de agua en proyectos de construcción, contribuyendo a un futuro más sostenible y consciente
              del valor de nuestros recursos hídricos.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos trabaja constantemente en la investigación y desarrollo de soluciones que
              permitan aprovechar al máximo cada gota de agua, reduciendo el impacto ambiental de la industria de la
              construcción.
            </p>
            <div className="flex items-center text-cyan-600">
              <span className="font-medium mr-2">Conoce más sobre nuestra historia</span>
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">+200</h4>
                <p className="text-gray-600">Proyectos completados</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">+500M</h4>
                <p className="text-gray-600">Litros de agua ahorrados</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">+50</h4>
                <p className="text-gray-600">Charlas realizadas</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">+15</h4>
                <p className="text-gray-600">Tecnologías patentadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para la gestión del agua en proyectos de construcción, desde la fase de
            diseño hasta la implementación y mantenimiento.
          </p>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="h-[15rem] bg-cyan-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/aguaPluvial.webp"
                alt="Sistema de recolección de agua pluvial"
                width={400}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sistemas de recolección de agua pluvial</h3>
              <p className="text-gray-600 mb-4">
                Diseñamos e instalamos sistemas eficientes para captar y almacenar agua de lluvia en edificaciones,
                aprovechando este recurso natural.
              </p>
              <Link href="#" className="text-cyan-600 font-medium flex items-center">
                Más información
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-[13rem] bg-cyan-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/linea-de-tratamiento-aguas-grises.png"
                alt="Tratamiento y reutilización de aguas grises"
                width={400}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tratamiento y reutilización de aguas grises</h3>
              <p className="text-gray-600 mb-4">
                Implementamos tecnologías para tratar y reutilizar aguas grises en edificios, reduciendo el consumo de
                agua potable.
              </p>
              <Link href="#" className="text-cyan-600 font-medium flex items-center">
                Más información
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-[13rem] bg-cyan-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/images.jpeg"
                alt="Consultoría en gestión sostenible del agua"
                width={400}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Consultoría en gestión sostenible del agua</h3>
              <p className="text-gray-600 mb-4">
                Asesoramos a empresas constructoras y arquitectos en la implementación de estrategias sostenibles para
                la gestión del agua.
              </p>
              <Link href="#" className="text-cyan-600 font-medium flex items-center">
                Más información
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TalksSection() {
  return (
    <section id="talks" className="py-20 bg-gradient-to-r px-8 from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestras Charlas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compartimos nuestro conocimiento a través de charlas y talleres sobre recolección y reutilización de agua en
            la construcción.
          </p>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
            <div className="flex items-start">
              <div className="bg-cyan-100 text-cyan-700 rounded-lg p-3 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <span className="text-sm font-medium text-cyan-600 block mb-1">Próximo evento - 15 de Mayo, 2023</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sistemas innovadores de recolección de agua en edificios modernos
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprende sobre las últimas tecnologías para la recolección eficiente de agua en edificaciones y cómo
                  implementarlas en tus proyectos.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 mr-2">Virtual</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">2 horas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
            <div className="flex items-start">
              <div className="bg-cyan-100 text-cyan-700 rounded-lg p-3 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <span className="text-sm font-medium text-cyan-600 block mb-1">Próximo evento - 28 de Mayo, 2023</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Reutilización de agua en proyectos residenciales
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubre cómo implementar sistemas de reutilización de agua en proyectos residenciales, reduciendo
                  costos y el impacto ambiental.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 mr-2">Presencial</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">3 horas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Charlas anteriores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Normativas para la gestión del agua en construcciones</h4>
              <p className="text-sm text-gray-600">Abril 2023</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Tecnologías para el ahorro de agua en hoteles</h4>
              <p className="text-sm text-gray-600">Marzo 2023</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Diseño de sistemas de captación pluvial</h4>
              <p className="text-sm text-gray-600">Febrero 2023</p>
            </div>
          </div>

          <Link
            href="#"
            className="inline-block mt-8 bg-cyan-600 text-white hover:bg-cyan-700 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Ver todas las charlas
          </Link>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Interesado en nuestras soluciones o charlas? Ponte en contacto con nosotros y un especialista te atenderá a
            la brevedad.
          </p>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="services">Información sobre servicios</option>
                  <option value="talks">Información sobre charlas</option>
                  <option value="quote">Solicitar presupuesto</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white hover:bg-cyan-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Correo electrónico</h4>
                    <p>info@aquatech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p>Av. del Agua 123, Ciudad Sostenible</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-6 w-6 text-cyan-400 mr-2" />
              <h3 className="text-xl font-bold">AQUATECH</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones innovadoras para la recolección y reutilización de agua en la industria de la construcción,
              contribuyendo a un futuro más sostenible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#talks" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Charlas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sistemas de recolección
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Reutilización de aguas grises
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Boletín informativo</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir noticias y actualizaciones sobre nuestras charlas y tecnologías.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
              />
              <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-r-lg transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AQUATECH. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Política de privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
