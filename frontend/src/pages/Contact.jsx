import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactInfo } from '../data/mock';
import Magnetic from '../components/animations/Magnetic';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you soon."
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-hero">
        <div className="contact-hero-container">
          <motion.h1
            className="contact-hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Talk
          </motion.h1>
          <motion.p
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-content-container">
          <div className="contact-info-section">
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-description">
                Whether you have a question, a project idea, or just want to say hello, we're here to help.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <Mail size={24} className="contact-icon" />
                  <div>
                    <div className="contact-label">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="contact-value">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <Phone size={24} className="contact-icon" />
                  <div>
                    <div className="contact-label">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="contact-value">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <MapPin size={24} className="contact-icon" />
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={formRef}
            className="contact-form-section"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                  rows={6}
                />
              </div>
              <Magnetic strength={0.2}>
                <Button type="submit" className="contact-submit-btn">
                  Send Message
                  <Send size={20} />
                </Button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;