import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './AnimatedLogo.css';

const AnimatedLogo = ({ className = '' }) => {
  const logoRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current) return;

    // Continuous subtle pulse animation
    animationRef.current = gsap.timeline({ repeat: -1 })
      .to(logoRef.current, {
        scale: 1.05,
        duration: 2,
        ease: 'sine.inOut'
      })
      .to(logoRef.current, {
        scale: 1,
        duration: 2,
        ease: 'sine.inOut'
      });

    const handleMouseEnter = () => {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    logoRef.current.addEventListener('mouseenter', handleMouseEnter);
    logoRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={logoRef} className={`animated-logo ${className}`}>
      <span className="logo-text">tækni</span>
    </div>
  );
};

export default AnimatedLogo;