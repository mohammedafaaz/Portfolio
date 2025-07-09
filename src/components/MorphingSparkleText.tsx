import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MorphingSparkleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const MorphingSparkleText: React.FC<MorphingSparkleTextProps> = ({ 
  text, 
  className = "", 
  style = {},
  delay = 0 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Define colorful sparkle colors (blue theme)
  const sparkleColors = [
    '#60A5FA', // blue-400
    '#3B82F6', // blue-500
    '#2563EB', // blue-600
    '#8B5CF6', // violet-500
    '#A78BFA', // violet-400
    '#38BDF8', // sky-400
    '#93C5FD', // blue-300
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Split text into individual characters for animation
  const characters = text.split('');

  // Generate sparkle positions
  const generateSparkles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      
      return {
        id: i,
        color,
        size: Math.random() * 2.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 2 + 1,
        delay: i * 0.05 + Math.random() * 1
      };
    });
  };

  const sparkles = generateSparkles(30);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Background blur layer */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 2, delay: delay / 1000 + 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{
          background: 'linear-gradient(90deg, rgba(156,163,175,0.15) 0%, rgba(156,163,175,0.08) 50%, rgba(156,163,175,0.15) 100%)',
          filter: 'blur(12px)',
          transform: 'scale(1.05)',
          borderRadius: '8px'
        }}
      />

      {/* Sparkle container - appears after text reveal */}
      {isRevealed && (
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            width: '100%', 
            height: '100%',
            zIndex: 1
          }}
        >
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute rounded-full will-change-transform"
              style={{
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                backgroundColor: sparkle.color,
                boxShadow: `0 0 3px ${sparkle.color}`,
                filter: `blur(0.5px)`,
                zIndex: 1
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: sparkle.duration,
                delay: delay / 1000 + 1.5 + sparkle.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2 + 1,
              }}
            />
          ))}
        </div>
      )}

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
              delay: delay / 1000 + (index * 0.015),
              ease: [0.23, 1, 0.32, 1]
            }}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              color: '#9CA3AF', // grey-400 color
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
          duration: 1.2,
          delay: delay / 1000 + 0.6,
          ease: 'easeInOut'
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          transform: 'skewX(-20deg)',
        }}
      />

      {/* Particle reveal effect */}
      {isRevealed && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              initial={{ 
                opacity: 0,
                scale: 0,
                y: 15
              }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                y: [15, -15, -30]
              }}
              transition={{
                duration: 1.8,
                delay: delay / 1000 + 0.8 + (i * 0.08),
                ease: 'easeOut'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MorphingSparkleText;
