import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './InfiniteMarquee.css';

const InfiniteMarquee = ({ items, speed = 50, direction = 'left' }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
    const contentWidth = marqueeContent.offsetWidth;

    // Duplicate content for seamless loop
    marqueeContent.innerHTML += marqueeContent.innerHTML;

    const animate = () => {
      animationRef.current = gsap.to(marqueeContent, {
        x: direction === 'left' ? -contentWidth : contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    animate();

    // Speed up on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        gsap.to(animationRef.current, { timeScale: 2, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        gsap.to(animationRef.current, { timeScale: 1, duration: 0.3 });
      }
    };

    marqueeRef.current.addEventListener('mouseenter', handleMouseEnter);
    marqueeRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [items, speed, direction]);

  return (
    <div className="marquee-wrapper" ref={marqueeRef}>
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;