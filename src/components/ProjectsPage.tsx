import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'VeriPass',
    description: 'A smart web app for verifying student bus passes using QR code and face recognition, with automatic data logging and daily boarding reports.',
    tags: ['React', 'Python', 'OpenCV', 'Face Recognition'],
    github: 'https://github.com/mohammedafaaz',
    demo: null,
    achievement: '4th place in HACKB2K25'
  },
  {
    id: 2,
    title: 'Pothole Detection & Reporting System',
    description: 'Built a real-time web app using YOLOv8 and Flask to detect road hazards like potholes via webcam. Integrated geolocation, severity analysis, and a user-friendly interface for reporting.',
    tags: ['YOLOv8', 'Flask', 'Machine Learning', 'Python'],
    github: 'https://github.com/mohammedafaaz',
    demo: null
  },
  {
    id: 3,
    title: 'NeoNexus36.0',
    description: 'A stunning hackathon website featuring modern design, interactive elements, and a seamless user experience for hackathon participants.',
    tags: ['React', 'TailwindCSS', 'Web Design'],
    github: null,
    demo: 'https://neonexus36.vercel.app/'
  },
  {
    id: 4,
    title: 'VibeBuild',
    description: 'An agency website showcasing creative services, portfolio works, and contact information with a focus on aesthetics and user experience.',
    tags: ['React', 'CSS', 'Web Design'],
    github: null,
    demo: 'https://vibe-build-agency.vercel.app/'
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full relative z-10"
    >
      <div className="backdrop-blur-lg rounded-xl overflow-hidden border border-blue-800/10 hover:border-blue-800/30 transition-all duration-300 h-full flex flex-col p-6">
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.achievement && (
              <div className="bg-blue-800/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-blue-700/30">
                {project.achievement}
              </div>
            )}
          </div>
          
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-transparent backdrop-blur-sm text-blue-200 border border-blue-800/20 bg-blue-900/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-transparent backdrop-blur-md text-white flex items-center space-x-2 transition-all duration-300 hover:bg-gray-700/30 border border-white/20 bg-white/5"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-transparent backdrop-blur-md text-white flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-800/20 border border-blue-800/30 bg-blue-800/10"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
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
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto relative z-10">
            Explore my latest projects showcasing my skills in web development, AI, and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
