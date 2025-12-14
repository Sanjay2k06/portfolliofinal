import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesSection from '../components/sections/ServicesSection';
import WorkSection from '../components/sections/WorkSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactCTA from '../components/sections/ContactCTA';
import InfiniteMarquee from '../components/animations/InfiniteMarquee';
import { marqueeText } from '../data/mock';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

// Featured projects with prominent project numbers
const FEATURED_PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Radar Detector Using ESP32",
    description: "A radar-based system that detects motion, object presence, and speed using Doppler radar. The ESP32 analyzes reflected microwave signals to identify movement direction and velocity. Readings are displayed on OLED or streamed via WiFi. Ideal for robotics, automation, and intrusion detection.",
    tags: ["ESP32", "Radar", "IoT", "Automation"],
    gradient: "from-purple-600 via-violet-500 to-indigo-600 gradient-neon-purple"
  },
  {
    id: 2,
    number: "02",
    title: "T-Type Traffic Signal Controller",
    description: "An automated traffic controller for T-junction road systems. Manages signal cycles using timing algorithms or sensor-based control to improve traffic flow efficiency and reduce waiting times. Perfect for traffic engineering models and smart city demonstrations.",
    tags: ["Embedded Systems", "Automation", "Smart City"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500 gradient-sunset-orange"
  },
  {
    id: 3,
    number: "03",
    title: "Smart Agriculture Monitoring Using ESP32",
    description: "An IoT solution tracking soil moisture, humidity, temperature, and sunlight. ESP32 sends real-time data to dashboards and automates irrigation. Supports precision farming, water conservation, and improved crop health.",
    tags: ["ESP32", "Agriculture", "IoT", "Precision Farming"],
    gradient: "from-green-600 via-emerald-500 to-teal-500 gradient-forest-green"
  },
  {
    id: 4,
    number: "04",
    title: "Smart Water Monitoring System",
    description: "Monitors water level, capacity, and flow rate. Provides leakage alerts and automates pump control. Designed for households and industries to optimize water usage and prevent wastage.",
    tags: ["IoT", "Water Management", "Automation"],
    gradient: "from-blue-600 via-cyan-500 to-sky-500 gradient-electric-blue"
  },
  {
    id: 5,
    number: "05",
    title: "CogniScope – AI Literature Review Assistant",
    description: "NLP-based assistant analyzing academic papers to extract summaries, citations, keywords, and research gaps. Generates structured review reports, saving time for students and researchers.",
    tags: ["AI", "NLP", "Academic Research", "Automation"],
    gradient: "from-indigo-600 via-purple-500 to-fuchsia-600 gradient-neon-purple"
  },
  {
    id: 6,
    number: "06",
    title: "One-Time Link Generator",
    description: "Secure system that creates temporary links which expire after a single use. Ensures safe sharing of confidential data by encrypting content and deleting it immediately after access.",
    tags: ["Security", "Web App", "Encryption", "Backend"],
    gradient: "from-emerald-600 via-teal-500 to-cyan-600 gradient-aqua-marine"
  }
];

const STATS = [
  { 
    value: "25+", 
    label: "Projects Delivered", 
    gradient: "from-blue-500 via-cyan-400 to-sky-500",
    description: "Successfully completed and deployed"
  },
  { 
    value: "100%", 
    label: "Client Satisfaction", 
    gradient: "from-green-500 via-emerald-400 to-lime-500",
    description: "Excellent feedback and reviews"
  },
  { 
    value: "1", 
    label: "Years of Excellence", 
    gradient: "from-orange-500 via-amber-400 to-yellow-500",
    description: "Industry experience"
  },
  { 
    value: "50K+", 
    label: "Lines of Code", 
    gradient: "from-purple-500 via-violet-400 to-fuchsia-500",
    description: "Clean and efficient code"
  }
];

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const sectionHeaderAnimation = gsap.from('.section-header', {
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });

    const projectCardsAnimation = gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    return () => {
      // Cleanup animations
      sectionHeaderAnimation.kill();
      projectCardsAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleViewAllProjects = () => {
    console.log('View all projects clicked');
  };

  const handleProjectClick = (projectId) => {
    console.log(`Project ${projectId} clicked`);
  };

  return (
    <motion.div
      ref={homeRef}
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <InfiniteMarquee items={marqueeText} speed={30} />
      <AboutPreview />
      <ServicesSection />
      
      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="projects-container">
          <div className="section-header">
            <div className="section-badge">
              <span>Featured Work</span>
            </div>
            <h2 className="section-title">Shaping the Future with Tækni</h2>
            <p className="section-subtitle">
              Explore our cutting-edge solutions where Tækni meets creativity to build transformative digital experiences
            </p>
          </div>

          <div className="projects-grid">
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleProjectClick(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleProjectClick(project.id);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className={`project-gradient ${project.gradient}`}></div>
                <div className="project-content">
                  {/* Large Project Number */}
                  <div className="project-number-large">{project.number}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={`${project.id}-tag-${idx}`} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FAFF00" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="projects-cta">
            <button 
              className="view-all-projects"
              onClick={handleViewAllProjects}
              aria-label="View all projects"
            >
              View All Projects
              <span className="arrow-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`stat-gradient ${stat.gradient}`}></div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <InfiniteMarquee 
        items={marqueeText} 
        speed={25} 
        direction="right"
        gradient={true}
      />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;