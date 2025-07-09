import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2 
      }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <motion.div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-2 shadow-lg shadow-blue-500/20"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          animate={{
            y: [0, 8, 0],
            boxShadow: [
              '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              '0 12px 40px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={22} className="text-white/80" />
        </motion.div>
        <motion.p
          className="text-sm text-white/60 font-light tracking-wide"
          style={{
            fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif"
          }}
          animate={{
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          scroll
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
