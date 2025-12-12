import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data/mock';
import TiltCard from '../components/animations/TiltCard';
import { Sparkles, Layout, Code, Target, Zap, Lightbulb } from 'lucide-react';
import './Services.css';

const iconMap = { Sparkles, Layout, Code, Target, Zap, Lightbulb };

const Services = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.h1
            className="services-hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="services-hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            End-to-end digital solutions tailored to your business
          </motion.p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-list-container">
          <div ref={gridRef} className="services-list-grid">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TiltCard className="service-list-card">
                    <div className="service-list-icon">
                      <Icon size={48} />
                    </div>
                    <h3 className="service-list-title">{service.title}</h3>
                    <p className="service-list-description">{service.description}</p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;