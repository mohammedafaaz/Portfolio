import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Open email client with form data
    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:mohammedafaaz433@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    // Show success message
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto relative z-10">
            Feel free to reach out if you have any questions or want to work together on a project.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="backdrop-blur-lg p-8 rounded-xl border border-purple-500/10 relative z-10"
            >
              <h3 className="text-2xl font-bold mb-6 relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Send Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-transparent backdrop-blur-md border border-green-500/30 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full">
                      <Check size={28} className="text-blue-500" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">Email Client Opened!</h4>
                  <p className="text-gray-300">
                    Your email client should have opened with your message. Please send the email to complete your contact request.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent backdrop-blur-sm border border-gray-700 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent backdrop-blur-sm border border-gray-700 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-transparent backdrop-blur-sm border border-gray-700 text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 bg-transparent backdrop-blur-md hover:shadow-lg hover:shadow-blue-800/20 border border-blue-800/30 text-white hover:bg-blue-800/10"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
