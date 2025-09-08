'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useOptimizedParallax } from '@/hooks/useOptimizedParallax';

interface ParallaxLayer {
  id: string;
  depth: number;
  component: React.ReactNode;
  mouseMultiplier: number;
  scrollMultiplier: number;
}

export default function ParallaxHeroBackground() {
  const [isClient, setIsClient] = useState(false);
  const { theme, mounted } = useTheme();
  const { getLayerTransform, getResponsiveMultiplier, isMobile } = useOptimizedParallax({
    throttleMs: 16, // Will be adjusted based on device capabilities
    mouseSensitivity: 0.8,
    scrollSensitivity: 0.3,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Parallax layers with different depths and movements
  const responsiveMultiplier = getResponsiveMultiplier();
  
  const parallaxLayers: ParallaxLayer[] = [
    {
      id: 'base-background',
      depth: 0,
      mouseMultiplier: 0,
      scrollMultiplier: 0,
      component: <BaseBackground theme={theme} />
    },
    {
      id: 'stars',
      depth: 1,
      mouseMultiplier: 0.3 * responsiveMultiplier,
      scrollMultiplier: 0.05 * responsiveMultiplier,
      component: <StarsLayer isMobile={isMobile} />
    },
    {
      id: 'nebula',
      depth: 2,
      mouseMultiplier: 0.6 * responsiveMultiplier,
      scrollMultiplier: 0.1 * responsiveMultiplier,
      component: <NebulaLayer theme={theme} />
    },
    {
      id: 'particles',
      depth: 3,
      mouseMultiplier: 1.2 * responsiveMultiplier,
      scrollMultiplier: 0.15 * responsiveMultiplier,
      component: <ParticlesLayer isMobile={isMobile} />
    },
    {
      id: 'tech-grid',
      depth: 4,
      mouseMultiplier: 1.8 * responsiveMultiplier,
      scrollMultiplier: 0.2 * responsiveMultiplier,
      component: <TechGridLayer theme={theme} isMobile={isMobile} />
    },
    {
      id: 'floating-shapes',
      depth: 5,
      mouseMultiplier: 2.4 * responsiveMultiplier,
      scrollMultiplier: 0.25 * responsiveMultiplier,
      component: <FloatingShapesLayer theme={theme} isMobile={isMobile} />
    },
  ];

  if (!isClient || !mounted) {
    return (
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`} />
    );
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: isMobile ? '500px' : '1000px' }}
    >
      {parallaxLayers.map((layer) => {
        const layerStyle = getLayerTransform(
          layer.depth,
          layer.mouseMultiplier,
          layer.scrollMultiplier
        );

        return (
          <motion.div
            key={layer.id}
            className="absolute inset-0"
            style={{
              ...layerStyle,
              zIndex: -layer.depth,
            }}
            transition={{
              type: "spring",
              stiffness: isMobile ? 30 : 50,
              damping: isMobile ? 25 : 20,
              mass: isMobile ? 0.8 : 0.5,
            }}
          >
            {layer.component}
          </motion.div>
        );
      })}
    </div>
  );
}

// Base background layer
function BaseBackground({ theme }: { theme: string }) {
  return (
    <div className={`absolute inset-0 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
    }`} />
  );
}

// Stars layer
function StarsLayer({ isMobile }: { isMobile: boolean }) {
  const stars = Array.from({ length: isMobile ? 50 : 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 dark:opacity-100 opacity-30">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Nebula/gradient mesh layer
function NebulaLayer({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0">
      <motion.div
        className={`absolute inset-0 opacity-30 ${
          theme === 'dark'
            ? 'bg-gradient-radial from-purple-600/20 via-blue-500/10 to-transparent'
            : 'bg-gradient-radial from-blue-300/20 via-purple-200/10 to-transparent'
        }`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, ${
            theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(59, 130, 246, 0.1)'
          } 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${
            theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(147, 51, 234, 0.1)'
          } 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

// Floating particles layer
function ParticlesLayer({ isMobile }: { isMobile: boolean }) {
  const particles = Array.from({ length: isMobile ? 15 : 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 dark:opacity-60 opacity-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Tech grid/skyline layer
function TechGridLayer({ theme, isMobile }: { theme: string; isMobile: boolean }) {
  const gridLines = Array.from({ length: isMobile ? 12 : 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 dark:opacity-20 opacity-10">
      {/* Vertical grid lines */}
      {gridLines.map((i) => (
        <motion.div
          key={`v-${i}`}
          className={`absolute w-px h-full ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{ left: `${i * 5}%` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Horizontal grid lines */}
      {gridLines.slice(0, 10).map((i) => (
        <motion.div
          key={`h-${i}`}
          className={`absolute h-px w-full ${
            theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
          }`}
          style={{ top: `${i * 10}%` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tech skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          viewBox="0 0 1200 200"
          className={`w-full h-full ${
            theme === 'dark' ? 'fill-blue-500/10' : 'fill-blue-600/10'
          }`}
        >
          <motion.path
            d="M0,200 L0,150 L100,150 L100,120 L200,120 L200,180 L300,180 L300,100 L400,100 L400,160 L500,160 L500,80 L600,80 L600,140 L700,140 L700,110 L800,110 L800,170 L900,170 L900,90 L1000,90 L1000,130 L1100,130 L1100,190 L1200,190 L1200,200 Z"
            animate={{
              d: [
                "M0,200 L0,150 L100,150 L100,120 L200,120 L200,180 L300,180 L300,100 L400,100 L400,160 L500,160 L500,80 L600,80 L600,140 L700,140 L700,110 L800,110 L800,170 L900,170 L900,90 L1000,90 L1000,130 L1100,130 L1100,190 L1200,190 L1200,200 Z",
                "M0,200 L0,140 L100,140 L100,130 L200,130 L200,170 L300,170 L300,110 L400,110 L400,150 L500,150 L500,90 L600,90 L600,130 L700,130 L700,120 L800,120 L800,160 L900,160 L900,100 L1000,100 L1000,140 L1100,140 L1100,180 L1200,180 L1200,200 Z",
                "M0,200 L0,150 L100,150 L100,120 L200,120 L200,180 L300,180 L300,100 L400,100 L400,160 L500,160 L500,80 L600,80 L600,140 L700,140 L700,110 L800,110 L800,170 L900,170 L900,90 L1000,90 L1000,130 L1100,130 L1100,190 L1200,190 L1200,200 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}

// Floating geometric shapes layer
function FloatingShapesLayer({ theme, isMobile }: { theme: string; isMobile: boolean }) {
  const shapes = Array.from({ length: isMobile ? 4 : 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 40 + 20,
    rotation: Math.random() * 360,
    type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="absolute inset-0 dark:opacity-30 opacity-20">
      {shapes.map((shape) => {
        const ShapeComponent = () => {
          const baseClasses = `absolute ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-blue-400/30' 
              : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30'
          } border backdrop-blur-sm`;

          switch (shape.type) {
            case 0: // Circle
              return (
                <div
                  className={`${baseClasses} rounded-full`}
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                  }}
                />
              );
            case 1: // Square
              return (
                <div
                  className={`${baseClasses} rounded-lg`}
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                  }}
                />
              );
            case 2: // Triangle
              return (
                <div
                  className={`${baseClasses}`}
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: `${shape.size/2}px solid transparent`,
                    borderRight: `${shape.size/2}px solid transparent`,
                    borderBottom: `${shape.size}px solid ${
                      theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.3)'
                    }`,
                    background: 'none',
                  }}
                />
              );
            default:
              return null;
          }
        };

        return (
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
              y: [-10, 10, -10],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShapeComponent />
          </motion.div>
        );
      })}

      {/* Glowing orbs */}
      {Array.from({ length: isMobile ? 3 : 5 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          } shadow-lg`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            boxShadow: `0 0 20px ${
              theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.7)'
            }`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
