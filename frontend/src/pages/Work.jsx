import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/animations/TiltCard';
import './Work.css';

const Work = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  // Selected 7 best projects
  const allProjects = [
    {
      id: 1,
      title: "Smart Alcohol Detection Attendance System",
      category: "iot",
      year: "2024",
      description: "IoT system that records attendance only when no alcohol is detected using MQ-3 sensor and ESP32. Real-time monitoring dashboard included.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tags: ["ESP32", "IoT", "Safety", "Automation"],
      github: "https://github.com/example"
    },
    {
      id: 2,
      title: "AI Emotion HUD",
      category: "ai",
      year: "2024",
      description: "Real-time emotion detection using facial recognition and voice analysis with interactive HUD interfaces.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
      tags: ["Computer Vision", "AI", "ML", "Interface"],
      github: "https://github.com/example"
    },
    {
      id: 3,
      title: "Image Steganography",
      category: "software",
      year: "2024",
      description: "Hides secret information inside images without visible alteration using LSB encoding techniques.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800",
      tags: ["Python", "OpenCV", "Security", "Encryption"],
      github: "https://github.com/example"
    },
    {
      id: 4,
      title: "Weather Predictor using AI",
      category: "ai",
      year: "2024",
      description: "Machine learning system for accurate weather forecasting using historical meteorological data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800",
      tags: ["Machine Learning", "Python", "Forecasting", "AI"],
      github: "https://github.com/example"
    },
    {
      id: 5,
      title: "Smart Environment Monitoring",
      category: "iot",
      year: "2024",
      description: "Real-time environmental monitoring system tracking air quality, temperature, and gas levels.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800",
      tags: ["ESP32", "Sensors", "IoT", "Monitoring"],
      github: "https://github.com/example"
    },
    {
      id: 6,
      title: "Footstep Energy Generator",
      category: "hardware",
      year: "2024",
      description: "Sustainable energy solution converting mechanical pressure from footsteps into electrical power.",
      image: "https://images.unsplash.com/photo-1468493858157-0da43d8c3818?auto=format&fit=crop&w=800",
      tags: ["Renewable", "Hardware", "Energy", "Green Tech"],
      github: "https://github.com/example"
    },
    {
      id: 7,
      title: "AI Caption Generator Mobile App",
      category: "mobile",
      year: "2024",
      description: "Intelligent mobile application generating creative captions for images using AI models.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",
      tags: ["Mobile", "AI", "Flutter", "Social Media"],
      github: "https://github.com/example"
    }
  ];

  // Filtered projects
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'iot', label: 'IoT' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'software', label: 'Software' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'hardware', label: 'Hardware' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* New Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="services-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="services-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Showcasing technical innovation and engineering excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section Only */}
      <section className="work-projects">
        <div className="work-projects-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Selected projects showcasing our technical expertise and innovative approach
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="filter-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              ref={gridRef}
              className="work-projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              key={activeFilter}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <TiltCard className="work-project-card">
                    <div className="work-project-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="work-project-image"
                      />
                      <div className="project-category-badge">
                        {project.category.toUpperCase()}
                      </div>
                      <div className="work-project-overlay">
                        <span className="work-project-view">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="work-project-info">
                      <div className="work-project-meta">
                        <span className="work-project-category">
                          {project.category}
                        </span>
                        <span className="work-project-year">{project.year}</span>
                      </div>
                      <h3 className="work-project-title">{project.title}</h3>
                      <p className="work-project-description">{project.description}</p>
                      <div className="work-project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="work-project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.github && (
                        <motion.a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View on GitHub →
                        </motion.a>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Have a project in mind?</h3>
            <p>Let's discuss how we can bring your technical vision to life.</p>
            <motion.a
              href="/contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Work;