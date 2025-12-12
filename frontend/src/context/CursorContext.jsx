import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CursorContext.css';

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }) => {
  const [cursorMode, setCursorMode] = useState('default');
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const trailRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: 'none'
      });

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseDown = () => {
      gsap.to([cursor, cursorDot], {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorDot], {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    
    const handleEnter = () => setCursorMode('hover');
    const handleLeave = () => setCursorMode('default');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    if (cursorMode === 'hover') {
      gsap.to(cursor, {
        width: 60,
        height: 60,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.2
      });
    } else {
      gsap.to(cursor, {
        width: 40,
        height: 40,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.2
      });
    }
  }, [cursorMode]);

  return (
    <CursorContext.Provider value={{ cursorMode, setCursorMode }}>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      {children}
    </CursorContext.Provider>
  );
};