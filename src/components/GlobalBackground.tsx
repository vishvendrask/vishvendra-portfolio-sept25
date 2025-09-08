'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface GlobalBackgroundProps {
  variant?: 'hero' | 'page' | 'subtle';
  showParticles?: boolean;
  showGrid?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlobalBackground({ 
  variant = 'page',
  showParticles = true,
  showGrid = true,
  intensity = 'medium'
}: GlobalBackgroundProps) {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Different scroll transforms based on variant
  const baseRange = variant === 'hero' ? 800 : 1200;
  const backgroundY = useTransform(scrollY, [0, baseRange], [0, variant === 'hero' ? 200 : 100]);
  const particlesY = useTransform(scrollY, [0, baseRange], [0, variant === 'hero' ? 300 : 150]);
  const gridY = useTransform(scrollY, [0, baseRange], [0, variant === 'hero' ? 400 : 200]);

  const intensityMap = {
    low: { opacity: 0.3, scale: 0.8 },
    medium: { opacity: 0.6, scale: 1 },
    high: { opacity: 0.9, scale: 1.2 }
  };

  const currentIntensity = intensityMap[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base gradient background */}
      <motion.div
        className={`absolute inset-0 transition-all duration-700 ${
          theme === 'dark' 
            ? variant === 'hero'
              ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'
              : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : variant === 'hero'
              ? 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
              : 'bg-gradient-to-br from-white via-slate-50 to-white'
        }`}
        style={{ y: backgroundY }}
      />

      {/* Ambient particles */}
      {showParticles && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: particlesY,
            opacity: currentIntensity.opacity * 0.6,
            scale: currentIntensity.scale
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIntensity.opacity * 0.6 }}
          transition={{ duration: 2 }}
        >
          <AmbientParticles theme={theme} variant={variant} />
        </motion.div>
      )}

      {/* Subtle grid pattern */}
      {showGrid && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: gridY,
            opacity: currentIntensity.opacity * 0.4,
            scale: currentIntensity.scale
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIntensity.opacity * 0.4 }}
          transition={{ duration: 2.5, delay: 0.3 }}
        >
          <SubtleGrid theme={theme} variant={variant} />
        </motion.div>
      )}

      {/* Floating elements for hero variant */}
      {variant === 'hero' && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: particlesY,
            opacity: currentIntensity.opacity * 0.8
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIntensity.opacity * 0.8 }}
          transition={{ duration: 3, delay: 0.6 }}
        >
          <FloatingElements theme={theme} />
        </motion.div>
      )}
    </div>
  );
}

// Ambient particles for all pages
function AmbientParticles({ theme, variant }: { theme: string; variant: string }) {
  const particleCount = variant === 'hero' ? 20 : 12;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-sm ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400/40 to-indigo-400/40'
              : 'bg-gradient-to-r from-blue-500/30 to-indigo-500/30'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-30, -60, -30],
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

// Subtle grid pattern
function SubtleGrid({ theme, variant }: { theme: string; variant: string }) {
  const gridSize = variant === 'hero' ? 50 : 80;
  
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <pattern 
            id={`grid-${variant}`} 
            width={gridSize} 
            height={gridSize} 
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={theme === 'dark' ? '#1e40af' : '#3b82f6'}
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
        
        {/* Animated accent lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.line
            key={`accent-${i}`}
            x1={i * 160}
            y1="0"
            x2={i * 160}
            y2="1000"
            stroke={theme === 'dark' ? '#6366f1' : '#4f46e5'}
            strokeWidth="1"
            opacity="0"
            animate={{
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Floating elements for hero
function FloatingElements({ theme }: { theme: string }) {
  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 20 + 15,
    rotation: Math.random() * 360,
    duration: Math.random() * 12 + 8,
  }));

  return (
    <div className="absolute inset-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            rotate: [element.rotation, element.rotation + 360],
            scale: [0.8, 1.1, 0.8],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`rounded-lg border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-400/30'
                : 'bg-gradient-to-br from-blue-400/15 to-indigo-400/15 border-blue-500/25'
            } backdrop-blur-sm`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Glowing orbs */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            boxShadow: `0 0 15px ${
              theme === 'dark' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)'
            }`,
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
