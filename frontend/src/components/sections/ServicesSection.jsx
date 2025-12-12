import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../../data/mock';
import TiltCard from '../animations/TiltCard';
import { Sparkles, Layout, Code, Target, Zap, Lightbulb } from 'lucide-react';
import './ServicesSection.css';

const iconMap = {
  Sparkles,
  Layout,
  Code,
  Target,
  Zap,
  Lightbulb
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title">What We Do</h2>
          <p className="services-subtitle">
            Comprehensive digital services tailored to your unique needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard className="service-card">
                  <div className="service-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;