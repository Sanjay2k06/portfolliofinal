import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { aboutPreview } from '../../data/mock';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import './AboutPreview.css';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="about-preview">
      <div className="about-preview-container">
        <motion.div
          className="about-preview-content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="about-preview-title">{aboutPreview.title}</h2>
          <p className="about-preview-description">{aboutPreview.description}</p>
          <Link to={aboutPreview.link}>
            <Button className="about-preview-btn">
              Learn More
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;