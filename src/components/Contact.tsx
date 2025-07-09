import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // EmailJS configuration (verified)
    const serviceId = 'service_x8v9ypr';
    const templateId = 'template_19p96gi';
    const publicKey = 'DpVFhVvAzGSEm27wq';
    
    // Initialize EmailJS
    emailjs.init(publicKey);
    
    // Ensure template parameters match exactly what your EmailJS template expects
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_name: "Mohammed Afaaz", // Add recipient name for template
      to_email: "mohammedafaaz433@gmail.com" // Add recipient email for template
    };

    // EmailJS is already initialized above
    
    // Log to confirm params
    console.log("Sending email with params:", templateParams);
    
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully, response:', response);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
        // Reset submission status after a delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('EmailJS error details:', err);
        setIsSubmitting(false);
        
        // More descriptive error message based on error type
        if (err.status === 400) {
          setError('Invalid form data. Please check your inputs and try again.');
        } else if (err.status === 403 || err.status === 401) {
          setError('Authentication error with email service. Please try again or contact directly.');
        } else if (err.status >= 500) {
          setError('Email server error. Please try again later.');
        } else if (!navigator.onLine) {
          setError('No internet connection. Please check your network and try again.');
        } else {
          setError('Message could not be sent. Please try again or contact directly at mohammedafaaz433@gmail.com');
        }
      });
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative z-10" style={{ fontFamily: "'Playfair Display', serif, 'Times New Roman', Times, serif", color: "white" }}>Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto relative z-10">
            Feel free to reach out if you have any questions or want to work together on a project.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <>
                  {error && (
                    <div className="p-4 mb-4 rounded-lg bg-transparent backdrop-blur-md border border-red-500/30 text-red-200">
                      {error}
                    </div>
                  )}
                  
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
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-blue-800/30 cursor-not-allowed'
                          : 'bg-transparent backdrop-blur-md hover:shadow-lg hover:shadow-blue-800/20 border border-blue-800/30'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
