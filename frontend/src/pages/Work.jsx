import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/mock';
import TiltCard from '../components/animations/TiltCard';
import './Work.css';

const Work = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      className="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="work-hero">
        <div className="work-hero-container">
          <motion.h1
            className="work-hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Work
          </motion.h1>
          <motion.p
            className="work-hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our portfolio of exceptional digital experiences
          </motion.p>
        </div>
      </section>

      <section className="work-projects">
        <div className="work-projects-container">
          <div ref={gridRef} className="work-projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard className="work-project-card">
                  <div className="work-project-image-wrapper">
                    <img src={project.image} alt={project.title} className="work-project-image" />
                    <div className="work-project-overlay">
                      <span className="work-project-view">View Project</span>
                    </div>
                  </div>
                  <div className="work-project-info">
                    <div className="work-project-meta">
                      <span className="work-project-category">{project.category}</span>
                      <span className="work-project-year">{project.year}</span>
                    </div>
                    <h3 className="work-project-title">{project.title}</h3>
                    <p className="work-project-description">{project.description}</p>
                    <div className="work-project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="work-project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Work;