import React, { useRef, useEffect, useState } from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, className }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      // Trigger radius in pixels
      const threshold = 250; 

      setIsActive(dist < threshold);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeStyle: React.CSSProperties = {
    color: 'rgb(124, 255, 152)', // Neon Green
    textShadow: '0 0 30px rgba(124, 255, 152, 0.6)',
  };

  return (
    <span 
      ref={elementRef} 
      className={`${className}`} // Removed transition-all duration-75 for instant effect
      style={isActive ? activeStyle : {}}
    >
      {children}
    </span>
  );
};

export default GlowingText;