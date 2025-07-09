import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(54, 21, 85, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(54, 21, 85, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center center',
          }}>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl opacity-20"></div>
        
        {/* Stars - Reduced for better performance */}
        {Array.from({ length: 20 }).map((_, i) => (
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
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg p-8 rounded-xl border border-blue-800/10 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-48 h-48 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-600/20"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/afaaz.jpg" 
                  alt="Mohammed Afaaz" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Mohammed Afaaz</h3>
                
                <div className="space-y-6 text-gray-300">
                  <p>
                    I'm a B.E Undergraduate in AIML at BITM, Ballari. I'm passionate about AI innovation, real-time web apps, and smart solutions using machine learning. I'm always looking for new challenges and opportunities to expand my knowledge and skills.
                  </p>
                  
                  <p>
                    My focus is on building impactful tech projects that solve real-world problems, combining my skills in Python, React.js, and other modern technologies to create intuitive and powerful applications.
                  </p>
                  
                  <p>
                    I enjoy exploring new technologies, staying updated with the latest advancements in AI and web development, and applying these learnings to create innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg p-8 rounded-xl border border-blue-800/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">What I Do</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">AIML Student</h4>
                <p className="text-gray-300">
                  Studying AI and Machine Learning, focusing on cutting-edge technologies and innovative applications. Exploring neural networks, computer vision, and natural language processing.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Web Developer</h4>
                <p className="text-gray-300">
                  Creating responsive and interactive web applications using modern frameworks and technologies. Specialized in React.js and building user-friendly interfaces.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">Problem Solver</h4>
                <p className="text-gray-300">
                  Developing solutions for real-world challenges through innovative technology approaches. Focused on creating practical applications that address specific needs.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">UI/UX Enthusiast</h4>
                <p className="text-gray-300">
                  Crafting beautiful interfaces and seamless user experiences for applications. Combining aesthetics with functionality to create engaging digital experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
