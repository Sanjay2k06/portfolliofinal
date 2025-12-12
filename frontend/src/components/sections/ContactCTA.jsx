import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Magnetic from '../animations/Magnetic';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import './ContactCTA.css';

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="contact-cta-section">
      <div className="contact-cta-container">
        <motion.div
          className="contact-cta-content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-cta-title">Let's Create Something Amazing</h2>
          <p className="contact-cta-description">
            Ready to elevate your digital presence? Let's talk about your next project.
          </p>
          <Magnetic strength={0.2}>
            <Link to="/contact">
              <Button className="contact-cta-btn">
                Start a Project
                <ArrowRight size={20} />
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;