import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MorphingBlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const MorphingBlurText: React.FC<MorphingBlurTextProps> = ({ 
  text, 
  className = "", 
  style = {},
  delay = 0 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Split text into individual characters for animation
  const characters = text.split('');

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Background blur layer */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 2, delay: delay / 1000 + 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)',
          filter: 'blur(12px)',
          transform: 'scale(1.05)',
          borderRadius: '8px'
        }}
      />

      {/* Morphing text reveal */}
      <div className="relative z-10">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              filter: 'blur(8px)',
              scale: 1.05,
              y: 10
            }}
            animate={isRevealed ? {
              opacity: 1,
              filter: 'blur(0px)',
              scale: 1,
              y: 0
            } : {}}
            transition={{
              duration: 1.2,
              delay: delay / 1000 + (index * 0.02),
              ease: [0.23, 1, 0.32, 1]
            }}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isRevealed ? { x: '100%', opacity: [0, 1, 0] } : {}}
        transition={{
          duration: 1.5,
          delay: delay / 1000 + 0.8,
          ease: 'easeInOut'
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          transform: 'skewX(-20deg)',
        }}
      />

      {/* Particle reveal effect */}
      {isRevealed && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              initial={{ 
                opacity: 0,
                scale: 0,
                y: 20
              }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                y: [20, -20, -40]
              }}
              transition={{
                duration: 2,
                delay: delay / 1000 + 1 + (i * 0.1),
                ease: 'easeOut'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MorphingBlurText;
