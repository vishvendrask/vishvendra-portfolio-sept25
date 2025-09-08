'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export default function ParallaxHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Transform values for different layers based on scroll
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const starsY = useTransform(scrollY, [0, 500], [0, 100]);
  const nebulaY = useTransform(scrollY, [0, 500], [0, 200]);
  const particlesY = useTransform(scrollY, [0, 500], [0, 300]);
  const gridY = useTransform(scrollY, [0, 500], [0, 400]);
  const shapesY = useTransform(scrollY, [0, 500], [0, 500]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setMousePosition({
          x: (e.clientX - rect.left - centerX) / centerX,
          y: (e.clientY - rect.top - centerY) / centerY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) {
    return (
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`} />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base Background Layer */}
      <motion.div
        className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
        }`}
        style={{ y: backgroundY }}
      />

      {/* Background: Stars and Nebula */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: starsY,
          x: mousePosition.x * 5,
        }}
      >
        <StarsLayer theme={theme} />
      </motion.div>

      {/* Mid-background: Faint Nebula Effect */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: nebulaY,
          x: mousePosition.x * 10,
        }}
      >
        <NebulaLayer theme={theme} />
      </motion.div>

      {/* Mid-background: Blurred Particles & Light Streaks */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: particlesY,
          x: mousePosition.x * 15,
        }}
      >
        <ParticlesLayer theme={theme} />
      </motion.div>

      {/* Middle: Tech Skyline & Abstract Grid */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: gridY,
          x: mousePosition.x * 20,
        }}
      >
        <TechGridLayer theme={theme} />
      </motion.div>

      {/* Mid-foreground: Curved Waves & Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: shapesY,
          x: mousePosition.x * 25,
        }}
      >
        <WavesLayer theme={theme} />
      </motion.div>

      {/* Foreground: Abstract Glowing Geometric Shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: shapesY,
          x: mousePosition.x * 30,
        }}
      >
        <FloatingShapesLayer theme={theme} />
      </motion.div>
    </div>
  );
}

// Stars and gradient sky layer
function StarsLayer({ theme }: { theme: string }) {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0">
      {/* Gradient Sky */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-purple-900/30 via-blue-900/20 to-transparent'
          : 'bg-gradient-to-b from-blue-200/30 via-purple-200/20 to-transparent'
      }`} />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute rounded-full ${
              theme === 'dark' ? 'bg-white' : 'bg-blue-600'
            }`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Faint nebula effect
function NebulaLayer({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0">
      <motion.div
        className={`absolute inset-0 opacity-40 ${
          theme === 'dark'
            ? 'bg-gradient-radial from-purple-600/30 via-blue-500/20 to-transparent'
            : 'bg-gradient-radial from-blue-300/30 via-purple-200/20 to-transparent'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `radial-gradient(circle at 30% 40%, ${
            theme === 'dark' ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.3)'
          } 0%, transparent 60%), radial-gradient(circle at 70% 60%, ${
            theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(147, 51, 234, 0.2)'
          } 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}

// Blurred particles and light streaks
function ParticlesLayer({ theme }: { theme: string }) {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 opacity-60">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-md ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400/60 to-purple-400/60'
              : 'bg-gradient-to-r from-blue-500/40 to-purple-500/40'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-30, -80, -30],
            x: [-15, 15, -15],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light streaks */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`streak-${i}`}
          className={`absolute w-px h-32 ${
            theme === 'dark' ? 'bg-gradient-to-b from-blue-400/80 to-transparent' : 'bg-gradient-to-b from-blue-600/60 to-transparent'
          } blur-sm`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${Math.random() * 60 + 10}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Tech skyline and abstract grid
function TechGridLayer({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0 opacity-30">
      {/* Abstract Grid */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={theme === 'dark' ? '#3b82f6' : '#1e40af'}
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated grid lines */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.line
            key={`grid-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="600"
            stroke={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
            strokeWidth="1"
            opacity="0"
            animate={{
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Tech Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <svg viewBox="0 0 1200 160" className="w-full h-full">
          <motion.path
            d="M0,160 L0,120 L80,120 L80,90 L160,90 L160,140 L240,140 L240,70 L320,70 L320,130 L400,130 L400,50 L480,50 L480,110 L560,110 L560,80 L640,80 L640,150 L720,150 L720,60 L800,60 L800,100 L880,100 L880,160 L960,160 L960,40 L1040,40 L1040,120 L1120,120 L1120,160 L1200,160 L1200,160 Z"
            fill={theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30, 64, 175, 0.1)'}
            animate={{
              d: [
                "M0,160 L0,120 L80,120 L80,90 L160,90 L160,140 L240,140 L240,70 L320,70 L320,130 L400,130 L400,50 L480,50 L480,110 L560,110 L560,80 L640,80 L640,150 L720,150 L720,60 L800,60 L800,100 L880,100 L880,160 L960,160 L960,40 L1040,40 L1040,120 L1120,120 L1120,160 L1200,160 L1200,160 Z",
                "M0,160 L0,110 L80,110 L80,100 L160,100 L160,130 L240,130 L240,80 L320,80 L320,120 L400,120 L400,60 L480,60 L480,100 L560,100 L560,90 L640,90 L640,140 L720,140 L720,70 L800,70 L800,110 L880,110 L880,150 L960,150 L960,50 L1040,50 L1040,110 L1120,110 L1120,150 L1200,150 L1200,160 Z",
                "M0,160 L0,120 L80,120 L80,90 L160,90 L160,140 L240,140 L240,70 L320,70 L320,130 L400,130 L400,50 L480,50 L480,110 L560,110 L560,80 L640,80 L640,150 L720,150 L720,60 L800,60 L800,100 L880,100 L880,160 L960,160 L960,40 L1040,40 L1040,120 L1120,120 L1120,160 L1200,160 L1200,160 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}

// Curved waves and gradient mesh
function WavesLayer({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0 opacity-20">
      {/* Curved Waves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#3b82f6' : '#1e40af'} stopOpacity="0.4" />
            <stop offset="50%" stopColor={theme === 'dark' ? '#8b5cf6' : '#7c3aed'} stopOpacity="0.2" />
            <stop offset="100%" stopColor={theme === 'dark' ? '#ec4899' : '#be185d'} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Animated waves */}
        <motion.path
          d="M0,300 Q250,200 500,300 T1000,300 L1000,600 L0,600 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              "M0,300 Q250,200 500,300 T1000,300 L1000,600 L0,600 Z",
              "M0,320 Q250,220 500,320 T1000,320 L1000,600 L0,600 Z",
              "M0,300 Q250,200 500,300 T1000,300 L1000,600 L0,600 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M0,400 Q500,320 1000,400 L1000,600 L0,600 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
          animate={{
            d: [
              "M0,400 Q500,320 1000,400 L1000,600 L0,600 Z",
              "M0,380 Q500,300 1000,380 L1000,600 L0,600 Z",
              "M0,400 Q500,320 1000,400 L1000,600 L0,600 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
              : 'bg-gradient-to-r from-blue-400/15 to-purple-400/15'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className={`absolute top-1/2 right-1/4 w-80 h-80 rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-to-l from-purple-500/20 to-pink-500/20'
              : 'bg-gradient-to-l from-purple-400/15 to-pink-400/15'
          } blur-3xl`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}

// Abstract glowing geometric shapes and floating icons
function FloatingShapesLayer({ theme }: { theme: string }) {
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 30 + 20,
    rotation: Math.random() * 360,
    type: i % 3, // 0: circle, 1: square, 2: triangle
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 opacity-40">
      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0.8, 1.2, 0.8],
            x: [-20, 20, -20],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === 0 && (
            <div
              className={`rounded-full border-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-400/30 to-purple-400/30 border-blue-400/50'
                  : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/40'
              } backdrop-blur-sm shadow-lg`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                boxShadow: `0 0 ${shape.size}px ${
                  theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'
                }`,
              }}
            />
          )}
          
          {shape.type === 1 && (
            <div
              className={`rounded-lg border-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-purple-400/30 to-pink-400/30 border-purple-400/50'
                  : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/40'
              } backdrop-blur-sm shadow-lg`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                boxShadow: `0 0 ${shape.size}px ${
                  theme === 'dark' ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.2)'
                }`,
              }}
            />
          )}
          
          {shape.type === 2 && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size/2}px solid transparent`,
                borderRight: `${shape.size/2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${
                  theme === 'dark' ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.3)'
                }`,
                filter: `drop-shadow(0 0 ${shape.size/2}px ${
                  theme === 'dark' ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.3)'
                })`,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-3 h-3 rounded-full ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            boxShadow: `0 0 20px ${
              theme === 'dark' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.6)'
            }`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.4, 1, 0.4],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tech Icons (simplified) */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`icon-${i}`}
          className={`absolute w-8 h-8 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-cyan-400/40 to-blue-400/40 border border-cyan-400/60'
              : 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/50'
          } rounded backdrop-blur-sm`}
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1,
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className={`w-4 h-4 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-600'
            } rounded-sm opacity-60`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}