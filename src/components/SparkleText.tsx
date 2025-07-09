import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SparkleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const SparkleText: React.FC<SparkleTextProps> = ({ text, className = "", style = {} }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [, setDimensions] = useState({ width: 0, height: 0 });
  
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
    if (textRef.current) {
      setDimensions({
        width: textRef.current.offsetWidth,
        height: textRef.current.offsetHeight
      });
    }
    
    // Update dimensions on window resize
    const handleResize = () => {
      if (textRef.current) {
        setDimensions({
          width: textRef.current.offsetWidth,
          height: textRef.current.offsetHeight
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  // Generate sparkle positions that follow the text shape
  const generateSparkles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      
      // Position sparkles exactly behind the text
      return {
        id: i,
        color,
        size: Math.random() * 2.5 + 1,
        x: Math.random() * 100, // percentage within text bounds
        y: Math.random() * 100, // percentage within text bounds
        duration: Math.random() * 2 + 1,
        delay: i * 0.05 + Math.random() * 1
      };
    });
  };

  const sparkles = generateSparkles(40); // More sparkles for a denser effect

  return (
    <div className={`relative inline-block ${className}`} style={style}>
      {/* Sparkle container - confined exactly to text boundaries */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          width: '100%', 
          height: '100%',
          zIndex: 0 // Behind text
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
              zIndex: 0
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1,
            }}
          />
        ))}
      </div>
      
      {/* Text overlay */}
      <span 
        ref={textRef} 
        className="relative z-10"
        style={{ 
          position: 'relative', 
          display: 'inline-block',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default SparkleText;
