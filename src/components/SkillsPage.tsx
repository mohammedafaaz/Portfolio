import { motion } from 'framer-motion';
import { 
  BsFiletypeHtml, 
  BsFiletypeCss, 
  BsFiletypeJs, 
  BsGithub 
} from 'react-icons/bs';
import { 
  FaReact, 
  FaPython, 
  FaFlask
} from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <BsFiletypeHtml size={24} className="text-orange-500" /> },
  { name: 'CSS', icon: <BsFiletypeCss size={24} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <BsFiletypeJs size={24} className="text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact size={24} className="text-cyan-400" /> },
  { name: 'Python', icon: <FaPython size={24} className="text-blue-400" /> },
  { name: 'Flask', icon: <FaFlask size={24} className="text-gray-300" /> },
  { name: 'C/C++', icon: <SiCplusplus size={24} className="text-blue-600" /> },
  { name: 'Git/GitHub', icon: <BsGithub size={24} className="text-white" /> }
];

const interests = [
  'Basketball',
  'Photo Editing',
  'Video Editing',
  'Photography'
];

const SkillsPage = () => {
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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto relative z-10">
            A showcase of my technical abilities and expertise in various domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg p-8 rounded-xl border border-blue-800/10 mb-12 relative z-10"
        >
          <h3 className="text-2xl font-semibold mb-8 relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-gray-800/40 backdrop-blur-md p-4 rounded-lg border border-blue-800/10 hover:border-blue-800/30 transition-all duration-300 group"
              >
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black/30 backdrop-blur-lg border border-blue-800/10 text-center relative z-10"
        >
          <h3 className="text-2xl font-semibold mb-4 relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Other Interests</h3>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-lg text-sm bg-transparent backdrop-blur-md text-gray-300 border border-blue-800/20 bg-blue-800/10"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
