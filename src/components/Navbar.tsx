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
      <div className="container mx-auto px-4">
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
