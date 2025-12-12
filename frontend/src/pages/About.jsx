import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { aboutContent, teamMembers } from '../data/mock';
import TiltCard from '../components/animations/TiltCard';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const philosophyRef = useRef(null);
  const processRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: '-100px' });
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-container">
          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About tækni
          </motion.h1>
          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A digital studio where innovation meets execution
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={philosophyRef} className="about-philosophy">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{aboutContent.philosophy.title}</h2>
            <p className="section-content">{aboutContent.philosophy.content}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="about-process">
        <div className="about-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 60 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {aboutContent.process.title}
          </motion.h2>
          <div className="process-steps">
            {aboutContent.process.steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="process-number">{String(step.id).padStart(2, '0')}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="about-values">
        <div className="about-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 60 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <TiltCard className="value-card">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="about-team">
        <div className="about-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 60 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Meet the Founders
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TiltCard className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
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

export default About;