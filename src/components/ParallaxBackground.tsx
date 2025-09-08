'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxBackground({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxBackgroundProps) {
  const scrollY = useParallax();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateY(${scrollY * speed}px)`
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateY(${scrollY * speed * 0.8}px)`
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateY(${scrollY * speed * 1.2}px)`
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * speed * 0.3}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
