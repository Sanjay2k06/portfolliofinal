import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { heroData } from '../../data/mock';
import Magnetic from '../animations/Magnetic';
import FloatingElement from '../animations/FloatingElement';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollCueRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });

    // Split text animation for title
    const titleText = titleRef.current;
    const text = titleText.textContent;
    const characters = text.split('');
    titleText.innerHTML = '';

    characters.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      titleText.appendChild(span);
    });

    timeline
      .to(titleRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out'
      })
      .fromTo(
        taglineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        scrollCueRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      );

    // Floating animation for scroll cue
    gsap.to(scrollCueRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-background">
        <FloatingElement duration={4} yOffset={30} xOffset={20}>
          <div className="hero-shape hero-shape-1" />
        </FloatingElement>
        <FloatingElement duration={5} yOffset={-25} xOffset={-15}>
          <div className="hero-shape hero-shape-2" />
        </FloatingElement>
        <FloatingElement duration={3.5} yOffset={20} xOffset={-10}>
          <div className="hero-shape hero-shape-3" />
        </FloatingElement>
      </div>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {heroData.title}
        </h1>
        <p ref={taglineRef} className="hero-tagline">
          {heroData.tagline}
        </p>
        <div ref={ctaRef} className="hero-cta">
          <Magnetic strength={0.2}>
            <Link to="/work">
              <Button className="hero-btn primary">
                {heroData.primaryCTA}
                <ArrowRight size={20} />
              </Button>
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link to="/about">
              <Button variant="outline" className="hero-btn secondary">
                {heroData.secondaryCTA}
              </Button>
            </Link>
          </Magnetic>
        </div>
      </div>

      <div ref={scrollCueRef} className="scroll-cue">
        <span>Scroll to explore</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;