import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../../data/mock';
import { Quote } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials-title">What Clients Say</h2>
          <p className="testimonials-subtitle">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="testimonial-quote-icon">
                <Quote size={40} />
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">{testimonial.author}</div>
                  <div className="testimonial-author-position">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;