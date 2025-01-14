import React, { useEffect, useRef } from 'react';

const ScrollBaseAnimation = ({ delay = 0, baseVelocity = 1, className = '', children }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrameId;

    const animate = () => {
      if (marquee) {
        marquee.scrollLeft += baseVelocity;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        } else if (marquee.scrollLeft <= 0) {
          marquee.scrollLeft = marquee.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseVelocity, delay]);

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
      style={{ display: 'flex', width: '100%' }}
    >
      <div className='inline-block pr-[50%]'>{children}</div>
      <div className='inline-block pr-[50%]'>{children}</div>
    </div>
  );
};

export default ScrollBaseAnimation;

