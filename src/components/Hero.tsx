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
      
      {/* 3D Spline Model Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* 3D Spline Model Iframe */}
        <iframe
          src='https://my.spline.design/orb-RlZ322UktdCdmp3DWg9jtXRn/'
          width='100%'
          height='100%'
          className="absolute inset-0 w-full h-full border-0"
          style={{ zIndex: 1 }}
          title="3D Spline Model Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />

        {/* Optional overlay for text readability - adjust opacity as needed */}
        <div className="absolute inset-0 bg-black/10" style={{ zIndex: 2 }}></div>

        {/* Gradient overlays - positioned above 3D model */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-purple-900/20 via-transparent to-black/30" style={{ zIndex: 3 }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full filter blur-3xl opacity-20" style={{ zIndex: 3 }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/15 rounded-full filter blur-3xl opacity-20" style={{ zIndex: 3 }}></div>



        {/* Stars - positioned behind 3D model */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full will-change-transform"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              zIndex: 0
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
