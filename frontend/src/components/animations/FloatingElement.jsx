import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingElement = ({ children, duration = 3, yOffset = 20, xOffset = 0, className = '' }) => {
  const floatingRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!floatingRef.current) return;

    animationRef.current = gsap.timeline({ repeat: -1 })
      .to(floatingRef.current, {
        y: yOffset,
        x: xOffset,
        duration: duration / 2,
        ease: 'sine.inOut'
      })
      .to(floatingRef.current, {
        y: 0,
        x: 0,
        duration: duration / 2,
        ease: 'sine.inOut'
      });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [duration, yOffset, xOffset]);

  return (
    <div ref={floatingRef} className={`floating-element ${className}`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default FloatingElement;