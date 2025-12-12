import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactInfo } from '../data/mock';
import Magnetic from '../components/animations/Magnetic';
import { Button } from '../components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Navigation, 
  ExternalLink,
  Map,
  Loader2
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);
  
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  const isMapInView = useInView(mapRef, { once: true, margin: '-100px' });
  const isInfoInView = useInView(infoRef, { once: true, margin: '-100px' });
  
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent Successfully! 🎉',
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/taekni.io/?igsh=eHZscmp0YWkxZ3Fi#',
      color: '#E4405F',
      description: 'Follow us for updates'
    },
    {
      name: 'Google Maps',
      icon: Navigation,
      url: 'https://maps.google.com/?q=1/1278c+3rd+street+south+bethel+nagar+injambakkam+Chennai-600115',
      color: '#34A853',
      description: 'Get directions'
    }
  ];

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section - Updated with Services page animation */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="contact-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              Let's Connect
            </motion.h1>
            
            <motion.p
              className="contact-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              Have a project in mind or just want to chat? <br />
              <span>We'd love to hear from you</span> and explore possibilities together.
            </motion.p>
          </motion.div>

          <motion.div 
            className="contact-social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
              >
                <social.icon size={20} className="social-icon" />
                <span>{social.name}</span>
                <ExternalLink size={14} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-content-container">
          {/* Left Column - Contact Info & Larger Map */}
          <motion.div
            ref={infoRef}
            className="contact-info-section"
            initial={{ opacity: 0, x: -40 }}
            animate={isInfoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Contact Details */}
            <div className="contact-details">
              <motion.div 
                className="contact-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <div className="contact-icon-wrapper">
                  <Mail size={24} className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-label">Email</div>
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    className="contact-value"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {contactInfo.email}
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="contact-icon-wrapper">
                  <Phone size={24} className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-label">Phone</div>
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    className="contact-value"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {contactInfo.phone}
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="contact-icon-wrapper">
                  <MapPin size={24} className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-label">Address</div>
                  <div className="contact-value">
                    1/1317, 3rd Street, South Bethel Nagar<br />
                    Injambakkam, Chennai - 600115
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Larger Map Integration */}
            <motion.div
              ref={mapRef}
              className="map-container"
              initial={{ opacity: 0, y: 40 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="map-header">
                <div className="map-title">
                  <Map size={20} />
                  <span>Our Location in Chennai</span>
                </div>
                <div className="map-actions">
                  <motion.a 
                    href="https://www.google.com/maps/dir/?api=1&destination=1%2F1278c+3rd+Street+South+Bethel+Nagar%2C+Injambakkam%2C+Chennai%2C+Tamil+Nadu+600115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-action-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Navigation size={16} />
                    <span>Directions</span>
                  </motion.a>
                  <motion.a 
                    href="https://maps.google.com/?q=1/1278c+3rd+street+south+bethel+nagar+injambakkam+Chennai-600115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-action-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Open Maps</span>
                  </motion.a>
                </div>
              </div>
              
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.039173284344!2d80.249949!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c0c9e0f3c9f%3A0x2ca5bf86c4c5e8a8!2s1%2F1278c%203rd%20Street%20South%20Bethel%20Nagar%2C%20Injambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600115!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taekni Office Location - Chennai"
                  style={{ border: 0 }}
                  aria-label="Map showing Taekni office location in Chennai"
                />
              </div>
              
              <motion.div 
                className="map-info"
                initial={{ opacity: 0 }}
                animate={isMapInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="address-display">
                  <MapPin size={18} style={{ color: '#FAFF00' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#000000' }}>
                      1/1317, 3rd Street, South Bethel Nagar
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.7)' }}>
                      Injambakkam, Chennai - 600115, Tamil Nadu
                    </div>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=1/1278c+3rd+street+south+bethel+nagar+injambakkam+Chennai-600115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-larger-btn"
                >
                  <ExternalLink size={16} />
                  View larger map
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            ref={formRef}
            className="contact-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.h2 
                className="form-title"
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                Send us a message
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    <div className="focus-indicator"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    <div className="focus-indicator"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <div className="form-input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                      rows={6}
                      disabled={isSubmitting}
                    />
                    <div className="focus-indicator"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Magnetic strength={0.2}>
                  <Button 
                    type="submit" 
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                    style={isSubmitting ? { cursor: 'not-allowed' } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Sending...
                        </motion.span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 size={20} />
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.p
                className="form-info"
                initial={{ opacity: 0 }}
                animate={isFormInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                We typically respond within 24 hours. For urgent inquiries, 
                please call us directly.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;