import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const splashRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 300);
      }
    });

    timeline
      .fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .to(
        [logoRef.current, taglineRef.current],
        { opacity: 0, duration: 0.5, ease: 'power2.in' },
        '+=0.5'
      )
      .to(
        splashRef.current,
        { opacity: 0, duration: 0.5, ease: 'power2.in' },
        '-=0.3'
      );

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div ref={splashRef} className="splash-screen">
      <div className="splash-content">
        <h1 ref={logoRef} className="splash-logo">
          tækni
        </h1>
        <p ref={taglineRef} className="splash-tagline">
          Digital Studio
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;