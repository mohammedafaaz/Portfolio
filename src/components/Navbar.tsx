import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Code, House, Mail } from 'lucide-react';

const navLinks = [
  { name: 'House', path: '/', icon: <House size={20} /> },
  { name: 'Projects', path: '/projects', icon: <Code size={20} /> },
  { name: 'Skills', path: '/skills', icon: <Briefcase size={20} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating Hexagons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute border border-purple-400/40 rotate-45"
            style={{
              width: '20px',
              height: '20px',
              left: 20 + i * 25 + '%',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            animate={{
              rotate: [45, 405],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20">
          <motion.path
            d="M0,10 Q25,5 50,10 T100,10"
            stroke="rgba(147, 51, 234, 0.4)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,15 Q30,8 60,15 T100,15"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center">
          {/* Centered Navigation for both mobile and desktop */}
          <div className="flex space-x-1 bg-blue-900/20 backdrop-blur-md rounded-full border border-blue-800/20 p-1 overflow-x-auto hide-scrollbar">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative p-2 md:p-3 rounded-full transition-all duration-300 flex items-center justify-center group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label={link.name}
                >
                  <span className="relative">
                    {link.icon}
                    {isActive && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                        layoutId="navbar-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30 
                        }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;