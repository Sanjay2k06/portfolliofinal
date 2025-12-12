import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/animations/TiltCard';
import { 
  Sparkles, Layout, Code, Zap, Cpu, 
  ShoppingCart, Smartphone, Cloud, Package, HeadphonesIcon,
  ClipboardCheck, Users as UsersIcon, MessageSquare, ArrowRight,
  GraduationCap, Globe, Rocket, CheckCircle,
  Target, Award, Shield, Clock, BarChart, Users
} from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    number: "01",
    title: "Final Year Projects",
    description: "End-to-end project development for engineering, arts, science, diploma, and research students with modern tools and complete documentation.",
    icon: GraduationCap,
    highlights: ["Complete Documentation", "Viva Support", "Source Code", "Working Models"],
    moreInfo: "Complete working model with source code, reports, diagrams, explanation videos, and full viva support."
  },
  {
    id: 2,
    number: "02",
    title: "IoT Projects",
    description: "Real-time IoT systems with sensors, cloud connectivity, automation logic, dashboards, and embedded hardware.",
    icon: Cpu,
    highlights: ["Real-time Systems", "Cloud Connectivity", "Dashboards", "Embedded Hardware"],
    moreInfo: "Built using ESP32, Arduino, Raspberry Pi, and cloud platforms for real-world applications."
  },
  {
    id: 3,
    number: "03",
    title: "Hackathanos",
    description: "Hackathon solutions with quick, powerful prototypes and idea executions for winning competitions.",
    icon: Zap,
    highlights: ["Quick Prototypes", "Powerful Solutions", "Competition Ready", "Idea Execution"],
    moreInfo: "UI/UX prototypes, working demos, APIs, and real-time support during hackathons."
  },
  {
    id: 4,
    number: "04",
    title: "Web Development",
    description: "Beautiful, fast, and scalable web applications with modern frameworks like React, Next.js, and Node.js.",
    icon: Layout,
    highlights: ["React/Next.js", "Scalable Apps", "Modern Design", "Fast Performance"],
    moreInfo: "Dashboards, admin panels, SaaS apps, business tools, and e-commerce portals."
  },
  {
    id: 5,
    number: "05",
    title: "Mobile App Development",
    description: "Android and iOS apps with strong performance, clean UI, and cloud integration.",
    icon: Smartphone,
    highlights: ["Android & iOS", "Clean UI", "Cloud Integration", "High Performance"],
    moreInfo: "Real-time data, payment systems, notifications, authentication, and IoT controls."
  },
  {
    id: 6,
    number: "06",
    title: "SaaS Development",
    description: "Fully scalable SaaS products with authentication, data storage, dashboards, and automation.",
    icon: Cloud,
    highlights: ["Scalable Architecture", "Authentication", "Data Storage", "Automation"],
    moreInfo: "Subscription models, cloud hosting, analytics, monitoring, and business workflows."
  },
  {
    id: 7,
    number: "07",
    title: "Full Stack Development",
    description: "Combined frontend, backend, database, and cloud deployment into unified development systems.",
    icon: Code,
    highlights: ["Frontend & Backend", "Database Design", "Cloud Deployment", "Unified Systems"],
    moreInfo: "React, Next.js, Node.js, FastAPI, MongoDB, PostgreSQL, AWS, and Firebase."
  },
  {
    id: 8,
    number: "08",
    title: "E-Commerce Development",
    description: "Feature-rich online stores, business catalogues, and sales websites with payment integration.",
    icon: ShoppingCart,
    highlights: ["Payment Integration", "Inventory Management", "Customer Accounts", "Admin Analytics"],
    moreInfo: "Inventory control, customer accounts, cart systems, tracking, and admin analytics."
  },
  {
    id: 9,
    number: "09",
    title: "Portfolio Development",
    description: "High-quality digital portfolios for individuals, startups, and creators.",
    icon: Sparkles,
    highlights: ["Digital Portfolios", "Brand Identity", "Showcase Work", "Professional Design"],
    moreInfo: "Branding, achievements, skills, testimonials, identity, and animated components."
  },
  {
    id: 10,
    number: "10",
    title: "Hardware Supplies",
    description: "Wide range of electronic and embedded hardware components with quality assurance.",
    icon: Package,
    highlights: ["Electronic Components", "Embedded Hardware", "Quality Assurance", "Wide Range"],
    moreInfo: "Sensors, boards, controllers, modules, robotics parts, and IoT kits."
  },
  {
    id: 11,
    number: "11",
    title: "Customer Service",
    description: "Strong post-delivery support through multiple channels for troubleshooting and improvements.",
    icon: HeadphonesIcon,
    highlights: ["Post-delivery Support", "Multiple Channels", "Troubleshooting", "Improvements"],
    moreInfo: "Mobile, WhatsApp, email support with code explanation and project improvements."
  }
];

const features = [
  {
    id: 1,
    title: "Expert Team",
    description: "Highly skilled professionals with industry experience and technical expertise.",
    icon: Users
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks ensuring flawless project delivery.",
    icon: Award
  },
  {
    id: 3,
    title: "Timely Delivery",
    description: "Adherence to deadlines with efficient project management and agile methodologies.",
    icon: Clock
  },
  {
    id: 4,
    title: "Innovative Solutions",
    description: "Cutting-edge technologies and creative approaches for unique challenges.",
    icon: Target
  },
  {
    id: 5,
    title: "Client Collaboration",
    description: "Transparent communication and regular updates throughout the development process.",
    icon: Shield
  },
  {
    id: 6,
    title: "Performance Focus",
    description: "Optimized solutions ensuring speed, scalability, and excellent user experience.",
    icon: BarChart
  }
];

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    description: "Detailed discussions to understand your requirements, goals, and project timeline.",
    icon: MessageSquare
  },
  {
    id: 2,
    number: "02",
    title: "Planning",
    description: "Comprehensive project plan with milestones, technologies, and deliverables.",
    icon: ClipboardCheck
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    description: "Agile development with regular updates, testing, and quality assurance.",
    icon: Code
  },
  {
    id: 4,
    number: "04",
    title: "Testing",
    description: "Rigorous testing across all scenarios to ensure flawless performance.",
    icon: CheckCircle
  },
  {
    id: 5,
    number: "05",
    title: "Deployment",
    description: "Smooth deployment with documentation, training, and support handover.",
    icon: Rocket
  },
  {
    id: 6,
    number: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and support for long-term success.",
    icon: UsersIcon
  }
];

const Services = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="services-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="services-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming ideas into reality with <span>expert digital solutions</span> and innovative technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="services-list">
        <div className="services-list-container">
          <div className="services-list-header">
            <motion.h2 
              className="services-list-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What We Offer
            </motion.h2>
            <motion.p 
              className="services-list-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive services designed to meet your unique needs and exceed expectations
            </motion.p>
          </div>
          
          <div ref={gridRef} className="services-list-grid">
            <AnimatePresence>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.05,
                        ease: "backOut"
                      }
                    } : {}}
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <TiltCard className="service-list-card">
                      <div className="service-list-card-number">{service.number}</div>
                      <motion.div 
                        className="service-list-icon"
                        whileHover={{ rotate: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon size={48} />
                      </motion.div>
                      <h3 className="service-list-title">{service.title}</h3>
                      <p className="service-list-description">{service.description}</p>
                      
                      <div className="service-list-highlights">
                        {service.highlights.map((highlight, idx) => (
                          <span key={idx} className="service-list-highlight">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="service-more-info"
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="service-more-divider" />
                        <p className="service-know-more">
                          <strong>Details:</strong> {service.moreInfo}
                        </p>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* White Features Section */}
      <section className="features-white-section">
        <div className="features-white-container">
          <div className="features-white-header">
            <motion.h2 
              className="features-white-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="features-white-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We combine expertise, innovation, and dedication to deliver exceptional results
            </motion.p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className="feature-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="feature-icon-wrapper">
                    <FeatureIcon className="feature-icon" size={36} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="features-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-description">Successfully delivered</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-description">Positive feedback</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <div className="stat-label">On-Time Delivery</div>
              <div className="stat-description">Deadlines met</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <div className="stat-label">Support Available</div>
              <div className="stat-description">Round the clock</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <motion.h2 
              className="process-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Process
            </motion.h2>
            <motion.p 
              className="process-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A structured approach ensuring quality, transparency, and successful project delivery
            </motion.p>
          </div>
          
          <div className="process-grid">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="process-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <span className="process-number">{step.number}</span>
                  <div className="process-icon-wrapper">
                    <StepIcon className="process-icon" size={36} />
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-description">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to <span>Transform</span> Your Ideas?
          </motion.h2>
          <motion.p 
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your project and create something extraordinary together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="cta-button">
              Start Your Project Now
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;