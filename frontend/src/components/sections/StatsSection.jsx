import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../data/mock';
import CountUp from '../animations/CountUp';
import './StatsSection.css';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-item"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="stat-value">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;