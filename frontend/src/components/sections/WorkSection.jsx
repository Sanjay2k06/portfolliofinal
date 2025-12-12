import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/mock';
import TiltCard from '../animations/TiltCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import './WorkSection.css';

const WorkSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="work-section">
      <div className="work-container">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="work-title">Featured Work</h2>
          <p className="work-subtitle">
            Exploring our latest projects and success stories
          </p>
        </motion.div>

        <div className="work-grid">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              className="work-item"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TiltCard className="work-card">
                <div className="work-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-image"
                  />
                  <div className="work-overlay">
                    <span className="work-view">View Project</span>
                  </div>
                </div>
                <div className="work-info">
                  <div className="work-meta">
                    <span className="work-category">{project.category}</span>
                    <span className="work-year">{project.year}</span>
                  </div>
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-description">{project.description}</p>
                  <div className="work-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="work-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/work">
            <Button className="work-cta-btn">
              View All Projects
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;