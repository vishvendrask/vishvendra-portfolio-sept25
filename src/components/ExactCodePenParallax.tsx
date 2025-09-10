'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ExactCodePenParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    /* PARALLAX ANIMATIONS FOR HOME PAGE ELEMENTS */
    
    // Background parallax
    gsap.to(".sky-background", { 
      y: 50, 
      scale: 1.05,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "top top",
        end: "100% 100%",
        scrub: 2
      }
    });
    
    // First section meteors - exit when scrolling
    gsap.to(".first-section-meteors", { 
      y: -200, 
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "30% top",
        scrub: 1,
      }
    });

    // About section meteors - enter when reaching about section
    gsap.fromTo(".about-section-meteors", 
      { 
        y: -100, 
        opacity: 0,
        scale: 0.5
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      }
    );



    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [theme, isDark]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: -10 }}>
      {/* Dark Purple Gradient Background */}
      <div 
        className="sky-background fixed inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #1C2243 100%)',
          zIndex: 1
        }}
      />

      {/* Vertical Glowing Light Beam */}
      <motion.div
        className="light-beam fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 20%, rgba(147, 51, 234, 0.2) 50%, rgba(59, 130, 246, 0.1) 80%, transparent 100%)',
          width: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* First Section Meteors - HD, Center Left & Right */}
      <div className="first-section-meteors absolute w-full h-full" style={{ zIndex: 4 }}>
        <div className="meteor-left absolute top-1/3 left-1/4 w-20 h-20 opacity-80">
          <img src="/images/meteor1.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
        <div className="meteor-right absolute top-1/2 right-1/4 w-20 h-20 opacity-75">
          <img src="/images/meteor2.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
        <div className="meteor-center absolute top-2/3 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-70">
          <img src="/images/meteor3.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* About Section Meteors - HD, Enter from outside */}
      <div className="about-section-meteors absolute w-full h-full" style={{ zIndex: 4 }}>
        <div className="meteor-about-1 absolute top-1/4 left-1/6 w-24 h-24 opacity-0">
          <img src="/images/meteor4.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
        <div className="meteor-about-2 absolute top-1/2 right-1/6 w-24 h-24 opacity-0">
          <img src="/images/meteor5.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
        <div className="meteor-about-3 absolute top-3/4 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-0">
          <img src="/images/meteor6.png" alt="Meteor" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Scroll Element */}
      <div 
        className="scrollElement absolute top-0 w-full pointer-events-none"
        style={{
          height: '6000px',
          zIndex: 4
        }}
      />
    </div>
  );
}
