import React, { useEffect,  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages - Use normal imports instead of lazy loading for initial troubleshooting
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPageWrapper';
import SkillsPage from './pages/SkillsPageWrapper';
import ContactPage from './pages/ContactPage';


export function App() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=Tangerine:wght@400;700&family=Quicksand:wght@300;400;500&family=Comfortaa:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Background particles with grid
  const BackgroundParticles = () => (
    <div className="fixed inset-0 z-0 bg-black will-change-transform">
      {/* Grid overlay */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(54, 21, 85, 0.15) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(54, 21, 85, 0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
        }}>
      </div>
      
      {/* Dark background with gradients */}
      <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full will-change-transform"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );

  return (
    <Router>
      <div className="relative min-h-screen font-sans overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <BackgroundParticles />
        <Navbar />
        {/* Removed Suspense for troubleshooting */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
