import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import QuienSoyPage from './QuienSoyPage';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Componente de la página principal
const HomePage = () => {
  const projects = [
    {
      id: 'tienda',
      title: 'Tienda de Ropa Online',
      description: 'E-commerce completo para boutique local',
      image: '/moda.png',
      tags: ['React', 'WhatsApp API', 'Responsive'],
      route: '/tienda'
    },
    {
      id: 'turismo',
      title: 'Agencia de Turismo',
      description: 'Sitio web con catálogo de paquetes turísticos',
      image: '/viaje.png',
      tags: ['Landing Page', 'Formularios', 'Maps'],
      route: '/turismo'
    },
    {
      id: 'construccion',
      title: 'PYME Construcción',
      description: 'Sitio corporativo para empresa constructora',
      image: '/contrack-logo1.png',
      tags: ['Corporate', 'Portfolio', 'Contacto'],
      route: '/construccion'
    },
    {
      id: 'sistema',
      title: 'Sistema de Inventario',
      description: 'Dashboard administrativo interno',
      image: '/inventario.png',
      tags: ['Dashboard', 'CRUD', 'Admin Panel'],
      route: '/sistema'
    }
  ];

  return (
    <div className="min-h-screen">
    
<nav className="fixed-navbar w-full z-30 bg-black">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <motion.div
        initial={{ opacity: 100, x: 150 }}
        animate={{ opacity: 2, x: 0 }}
        className="text-2xl font-bold"
      >
        <Link to="/quien-soy" className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
  <span className="group-hover:hidden">Abel Dev</span>
  <span className="hidden group-hover:inline">¿Quién soy? →</span>
</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex space-x-6 text-white"
      >
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </motion.div>
    </div>
  </div>
</nav>
      {/* Hero Section */}
      <section id="inicio" className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Hago crecer tu
              <span className="gradient-text">
                {" "}negocio online
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Desarrollador Full Stack especializado en soluciones web para negocios locales
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center"
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <a 
                href="#proyectos" 
                className="btn-primary mb-4"
              >
                Ver mis proyectos
              </a>
              <a 
                href="https://wa.me/2613670507" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Conversemos por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300">Proyectos completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Soporte incluido</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-300">
              Proyectos reales que han transformado negocios locales
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="gradient-bg-project">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                 
                </div>
                <div className="px-4 py-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.route}
                    className="btn-primary"
                  >
                    Ver proyecto completo →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conversemos sobre tu proyecto. Primera consulta completamente gratis.
            </p>
            <a 
              href="https://wa.me/2613670507" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
            >
              📱 Hablar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Abel Alvarado-Software Dev - Desarrollo web para negocios locales en Mendoza, Argentina
          </p>
        </div>
      </footer>
    </div>
  );
};

// Componente temporal para las páginas de proyectos
const ProjectTemplate = ({ title,image,image2, image3 ,problem, solution, result, liveUrl }) => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              ← Abel Dev
            </motion.a>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header del proyecto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <a 
              href={liveUrl || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              🚀 Ver Proyecto Live
            </a>
          </motion.div>

          {/* Screenshot grande */}

       <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="h-96 w-full gradient-bg mb-16 rounded-2xl overflow-hidden"
>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop={true}
    className="h-full w-full"
  >
    {[image, image2, image3].map((img, i) => (
      <SwiperSlide 
      key={i}
        className="!h-full flex items-center justify-center bg-black"
      >
        <img
          src={img} 
          alt={`screenshot ${i + 1}`} 
          className="max-w-full max-h-full"
           style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"     // 👈 fuerza 'contain' aunque otra regla lo pise
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  
</motion.div>


          {/* Problema - Solución - Resultado */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mb-16"
          >
            <div className="project-detail">
              <h3 className="text-2xl font-bold text-red-400 mb-4">🚨 Problema</h3>
              <p className="text-gray-300">{problem}</p>
            </div>
            
            <div className="project-detail">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">💡 Solución</h3>
              <p className="text-gray-300">{solution}</p>
            </div>
            
            <div className="project-detail">
              <h3 className="text-2xl font-bold text-green-400 mb-4">📈 Resultado</h3>
              <p className="text-gray-300">{result}</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center cta-section"
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              ¿Te gusta para tu negocio?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Conversemos sobre cómo puedo ayudar a hacer crecer tu empresa
            </p>
            <a 
              href="https://wa.me/2613670507" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
            >
              📱 Hablar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Páginas específicas de proyectos
const TiendaProject = () => (
  <ProjectTemplate 
    title="Tienda de Ropa Online"
    image= "/captura.jpg"
    image2="/tienda.png"
    image3="/carrito.png"
    problem="La boutique 'Elegancia' perdía ventas porque los clientes no podían ver el catálogo completo. Solo vendían presencialmente y perdían clientes que preferían comprar online."
    solution="Desarrollé un e-commerce completo con catálogo visual, integración a WhatsApp Business, carrito de compras, sistema de tallas y galería de fotos profesional."
    result="🚀 +150% en ventas mensuales. 40+ consultas diarias por WhatsApp. Cliente expandió el negocio a delivery en toda Mendoza."
    liveUrl="https://abelemir11.github.io/Tienda-online/"
  />
);

const TurismoProject = () => (
  <ProjectTemplate 
    title="Agencia de Turismo Mendoza"
    image= "/turismo.png"
    image2="/index-viaje.png"
    image3= "tursmo3.png"
    problem="'Aventuras Cuyanas' dependía solo del boca a boca y perdía turistas que buscaban información online antes de viajar. No tenían presencia digital."
    solution="Creé un sitio web con catálogo de excursiones, formularios de reserva, integración con Google Maps, galería de fotos y testimonios de clientes."
    result="🌟 +200% en consultas mensuales. Temporada alta con reservas completas. Posicionamiento #1 en 'turismo mendoza' en Google."
    liveUrl="https://abelemir11.github.io/Viajero/"
  />
);

const ConstruccionProject = () => (
  <ProjectTemplate 
    title="Contrack - Obras y Servicios"
    image= "/screen.png"
    image2="/contrack2.png"
    image3="/contrack3.png"
    problem="'Contrack' tenía excelentes trabajos pero no sabían cómo mostrarlos. Perdían clientes frente a competidores con mejor presencia online."
    solution="Desarrollé un sitio corporativo con portfolio de obras, calculadora de presupuestos, formularios de contacto y sección de servicios detallada."
    result="💼 +300% en consultas de obra. 15 proyectos nuevos en 6 meses. Expansión por toda Mendoza y provincias vecinas."
    liveUrl="https://contrack-virid.vercel.app/"
  />
);

const SistemaProject = () => (
  <ProjectTemplate 
    title="Sistema de Inventario - Ferretería"
    image= "/inventario.png"
    image2="dashboard.png"
    image3="dash.png"
    problem="'Ferretería Central' manejaba inventario en Excel. Perdían horas diarias, tenían stock desactualizado y errores constantes en pedidos."
    solution="Creé un dashboard administrativo con control de stock en tiempo real, alertas de productos agotados, reportes automáticos y sistema de ventas."
    result="⚡ De 3 horas diarias a 15 minutos. 0 errores de stock. +50% eficiencia operativa. ROI recuperado en 2 meses."
    liveUrl="https://colorlib.com/polygon/gentelella/index.html"
  />
);

// Componente principal con routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quien-soy" element={<QuienSoyPage />} />
        <Route path="/tienda" element={<TiendaProject />} />
        <Route path="/turismo" element={<TurismoProject />} />
        <Route path="/construccion" element={<ConstruccionProject />} />
        <Route path="/sistema" element={<SistemaProject />} />
      </Routes>
    </Router>
  );
}

export default App;