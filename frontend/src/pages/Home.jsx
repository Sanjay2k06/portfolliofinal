import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesSection from '../components/sections/ServicesSection';
import WorkSection from '../components/sections/WorkSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactCTA from '../components/sections/ContactCTA';
import InfiniteMarquee from '../components/animations/InfiniteMarquee';
import { marqueeText } from '../data/mock';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <motion.div
      ref={homeRef}
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <InfiniteMarquee items={marqueeText} speed={30} />
      <AboutPreview />
      <ServicesSection />
      <WorkSection />
      <StatsSection />
      <TestimonialsSection />
      <InfiniteMarquee items={marqueeText} speed={25} direction="right" />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;