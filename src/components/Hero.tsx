import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import MorphingBlurText from './MorphingBlurText';
import MorphingSparkleText from './MorphingSparkleText';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Clean Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Grid overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(54, 21, 85, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(54, 21, 85, 0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center center',
          }}>
        </div>

        {/* Enhanced Subtle Dots Pattern - Multiple Layers */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}>
          <motion.div
            className="w-full h-full"
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Secondary Dot Layer - Larger Spacing */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px',
          backgroundPosition: '30px 30px',
        }}>
          <motion.div
            className="w-full h-full"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Tertiary Dot Layer - Even Larger Spacing */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 2px, transparent 2px)',
          backgroundSize: '120px 120px',
          backgroundPosition: '60px 60px',
        }}>
          <motion.div
            className="w-full h-full"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-purple-900/30 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl opacity-20"></div>

        {/* Animated Code Brackets */}
        <motion.div
          className="absolute top-1/3 left-10 text-purple-400/40 text-6xl font-mono"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {'<'}
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 text-purple-400/40 text-6xl font-mono"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          {'>'}
        </motion.div>

        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full will-change-transform"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              zIndex: 1
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
      
      {/* Content */}
      <div className="container mx-auto px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-left md:text-left"
        >
          {/* Main Heading */}
          <MorphingBlurText
            text="Hey! I'm,"
            className="text-3xl md:text-7xl leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif",
              fontWeight: "400",
              letterSpacing: "0px",
              color: "white"
            }}
            delay={200}
          />

          <MorphingBlurText
            text="Mohammed Afaaz,"
            className="text-4xl md:text-7xl mb-6 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif",
              fontWeight: "400",
              letterSpacing: "0px",
              color: "white"
            }}
            delay={300}
          />

          {/* Subtitle with sparkles */}
          <div className="mb-8">
            <MorphingSparkleText
              text="AIML Undergrad & Web Developer"
              className="text-3xl md:text-5xl font-light tracking-wide inline-block relative z-10 italic"
              style={{
                fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif",
                fontWeight: "400",
                letterSpacing: "0px"
              }}
              delay={1200}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-start mt-12"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-transparent text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-800/20 flex items-center justify-center backdrop-blur-md border border-blue-800/30 bg-blue-800/10"
              style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif" }}
            >
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;