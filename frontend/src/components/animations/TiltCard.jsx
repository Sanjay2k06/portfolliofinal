import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './TiltCard.css';

const TiltCard = ({ children, className = '', maxTilt = 15 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(card, {
        rotateX: -rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return (
    <div ref={cardRef} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
};

export default TiltCard;