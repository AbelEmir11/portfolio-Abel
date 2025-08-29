import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QuienSoyPage = () => {
  // Agregar estilos CSS personalizados al montar el componente
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .profile-section {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
      }
      
      .tech-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        transition: all 0.3s ease;
      }
      
      .tech-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(103, 126, 234, 0.5);
        box-shadow: 0 20px 40px rgba(103, 126, 234, 0.2);
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delay {
        animation: float 6s ease-in-out infinite;
        animation-delay: 2s;
      }
      
      .animate-float-delay-2 {
        animation: float 6s ease-in-out infinite;
        animation-delay: 4s;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .timeline-item {
        border-left: 3px solid #667eea;
        position: relative;
        padding-left: 2rem;
        margin-left: 1rem;
      }
      
      .timeline-item::before {
        content: '';
        position: absolute;
        left: -8px;
        top: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        box-shadow: 0 0 10px rgba(103, 126, 234, 0.5);
      }
      
      .btn-whatsapp {
        background: #25D366;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-block;
      }
      
      .btn-whatsapp:hover {
        background: #20BA5A;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
      }
      
      .btn-whatsapp-large {
        background: #25D366;
        color: white;
        padding: 16px 32px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.125rem;
        transition: all 0.3s ease;
        display: inline-block;
      }
      
      .btn-whatsapp-large:hover {
        background: #20BA5A;
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      .tech-icon-hover {
        transition: all 0.3s ease;
      }
      
      .tech-icon-hover:hover {
        transform: scale(1.2) rotate(10deg);
      }

      /
    `;
    document.head.appendChild(style);
   
    return () => {
      document.head.removeChild(style);
   
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar Mejorado */}
   <nav className="fixed-navbar w-full z-30 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 100, x: 150 }}
              animate={{ opacity: 2, x: 0 }}
             className="text-2xl font-bold"
            >
              <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                ← Abel Alvarado Dev
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6 text-white"
            >
              <Link to="/#inicio" className="hover:text-blue-400 transition-colors">Inicio</Link>
              <Link to="/#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
              <Link to="/#contacto" className="hover:text-blue-400 transition-colors">Contacto</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Aumenté el padding-top */}
      <section className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hola, soy <span className="gradient-text">Abel Alvarado</span>
            </h1>
            <h1>
            
              Desarrollador Full Stack apasionado por crear soluciones digitales que transforman negocios locales en Mendoza, Argentina.
         
            </h1>
          </motion.div>

  
{/* Profile Section - Minimalista con foto */}
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="profile-section p-6 md:p-8 mb-16"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
    
    {/* FOTO - siempre a la izquierda */}
    <div className="order-1 flex justify-center md:justify-start">
      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
        <img 
          src="/yo.png" 
          alt="Abel Alvarado"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* TEXTO - siempre a la derecha */}
    <div className="order-2">
      <motion.h2 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-white mb-6"
      >
        Mi Historia
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-gray-300 mb-4 leading-relaxed"
      >
        Comencé en el mundo de la programación hace más de 3 años, motivado por la idea de ayudar a negocios locales a digitalizarse y crecer. 
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-gray-300 mb-4 leading-relaxed"
      >
        Me especializo en crear sitios web y sistemas que realmente resuelven problemas. No me conformo con hacer "páginas bonitas" - desarrollo soluciones que aumentan ventas, mejoran procesos y conectan negocios con sus clientes.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-gray-300 mb-6 leading-relaxed"
      >
        Vivo en Mendoza y conozco las necesidades específicas de los negocios locales. Por eso cada proyecto que desarrollo está pensado para el mercado argentino.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex gap-4 flex-wrap"
      >
        <a 
          href="https://wa.me/2613670507" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          📱 Conversemos
        </a>
        <Link 
          to="/#proyectos" 
          className="btn-primary"
        >
          Ver mis trabajos
        </Link>
      </motion.div>
    </div>
  </div>
</motion.div>
        </div>
      </section>  

      {/* Resto del código permanece igual... */}
      {/* Tecnologías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Tecnologías que <span className="gradient-text">domino</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: '⚛️', name: 'React', desc: 'Frontend moderno', delay: 0 },
              { emoji: '🟢', name: 'Node.js', desc: 'Backend escalable', delay: 0.1 },
              { emoji: '🐍', name: 'Python', desc: 'Automatización', delay: 0.2 },
              { emoji: '🎨', name: 'Tailwind', desc: 'Diseño rápido', delay: 0.3 },
              { emoji: '🗄️', name: 'MongoDB', desc: 'Base de datos', delay: 0.4 },
              { emoji: '🚀', name: 'Vercel', desc: 'Deploy rápido', delay: 0.5 },
              { emoji: '📱', name: 'WhatsApp API', desc: 'Integración', delay: 0.6 },
              { emoji: '🎯', name: 'SEO', desc: 'Posicionamiento', delay: 0.7 }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: tech.delay }}
                viewport={{ once: true }}
                className={`tech-card p-6 text-center ${
                  index % 3 === 0 ? 'animate-float' : 
                  index % 3 === 1 ? 'animate-float-delay' : 'animate-float-delay-2'
                }`}
              >
                <div className="text-4xl mb-3 tech-icon-hover">{tech.emoji}</div>
                <h3 className="text-white font-bold">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mi Enfoque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Mi <span className="gradient-text">enfoque</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎯',
                title: 'Orientado a Resultados',
                desc: 'No solo hago sitios web "bonitos". Desarrollo soluciones que aumentan ventas, mejoran procesos y hacen crecer negocios.',
                delay: 0
              },
              {
                emoji: '🏃‍♂️',
                title: 'Entrega Rápida',
                desc: 'Entiendo que el tiempo es dinero. Entrego proyectos funcionales en plazos realistas, con comunicación constante.',
                delay: 0.2
              },
              {
                emoji: '🤝',
                title: 'Soporte Continuo',
                desc: 'Ofrezco soporte, actualizaciones y estoy disponible para hacer crecer tu proyecto.',
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="tech-card p-8 text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl mb-4"
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Mi <span className="gradient-text">experiencia</span>
          </motion.h2>
          
          <div className="space-y-8">
            {[
              {
                year: '2025 - Presente',
                title: 'Desarrollador Full Stack Freelance',
                desc: 'Especializado en soluciones web para PYMES locales. +15 proyectos completados con resultados medibles en ventas y eficiencia operativa.',
                delay: 0
              },
              {
                year: '2024',
                title: 'Proyectos Destacados',
                desc: 'E-commerce para boutique (+150% ventas), sistema de inventario para ferretería (ROI en 2 meses), sitio corporativo constructora (+300% consultas).',
                delay: 0.2
              },
              {
                year: '2022-2023',
                title: 'Formación y Primeros Proyectos',
                desc: 'Intensive learning en desarrollo web moderno. Primeros proyectos para amigos y conocidos. Enfoque en React, Node.js y bases de datos.',
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
                <h4 className="text-lg text-blue-400 mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="profile-section p-12"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              ¿Trabajamos juntos?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Si tenés un negocio y querés llevarlo al siguiente nivel con una presencia digital que realmente funcione, conversemos.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <a 
                href="https://wa.me/2613670507" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-large"
              >
                📱 Hablar por WhatsApp
              </a>
              <Link to="/#proyectos" className="btn-primary text-lg px-8 py-4">
                Ver mis trabajos
              </Link>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-6"
            >
          
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2025 Abel Alvarado - Software Developer • Desarrollo web para negocios locales en Mendoza, Argentina
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default QuienSoyPage;