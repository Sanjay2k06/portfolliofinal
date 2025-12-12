import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in up animation
export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out'
    }
  );
};

// Stagger fade in up
export const staggerFadeInUp = (elements, stagger = 0.1) => {
  gsap.fromTo(
    elements,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger,
      ease: 'power3.out'
    }
  );
};

// Scroll reveal animation
export const scrollReveal = (element, options = {}) => {
  const defaults = {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  };

  gsap.fromTo(element, { y: defaults.y, opacity: 0 }, { ...defaults, ...options });
};

// Stagger scroll reveal
export const staggerScrollReveal = (elements, stagger = 0.15) => {
  elements.forEach((element, index) => {
    scrollReveal(element, { delay: index * stagger });
  });
};

// Parallax effect
export const parallax = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

// Scale on scroll
export const scaleOnScroll = (element, from = 0.8, to = 1) => {
  gsap.fromTo(
    element,
    { scale: from },
    {
      scale: to,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'top center',
        scrub: true
      }
    }
  );
};

// Rotate animation
export const rotateElement = (element, duration = 10) => {
  gsap.to(element, {
    rotation: 360,
    duration,
    ease: 'none',
    repeat: -1
  });
};

// Magnetic effect
export const magneticEffect = (element, strength = 0.3) => {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Split text reveal
export const splitTextReveal = (element, stagger = 0.03) => {
  const text = element.textContent;
  const characters = text.split('');
  element.innerHTML = '';

  characters.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
  });

  gsap.fromTo(
    element.children,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: 'power3.out'
    }
  );
};

// Floating animation
export const floatingAnimation = (element, duration = 3, yOffset = 20) => {
  gsap.to(element, {
    y: yOffset,
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });
};