'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'page';
  intensity?: 'low' | 'medium' | 'high';
}

export default function AnimatedBackground({ 
  variant = 'page',
  intensity = 'medium'
}: AnimatedBackgroundProps) {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Scroll transforms for parallax layers
  const scrollRange = variant === 'hero' ? 1000 : 1500;
  const layer1Y = useTransform(scrollY, [0, scrollRange], [0, 50]);
  const layer2Y = useTransform(scrollY, [0, scrollRange], [0, 100]);
  const layer3Y = useTransform(scrollY, [0, scrollRange], [0, 150]);
  const layer4Y = useTransform(scrollY, [0, scrollRange], [0, 200]);
  const layer5Y = useTransform(scrollY, [0, scrollRange], [0, 250]);

  const intensityMultiplier = {
    low: 0.4,
    medium: 0.6,
    high: 0.8
  }[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base background - always visible */}
      <motion.div
        className={`absolute inset-0 transition-colors duration-700 ${
          theme === 'dark' 
            ? variant === 'hero'
              ? 'bg-gradient-to-br from-slate-900 via-blue-900/60 to-purple-900/40'
              : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
            : variant === 'hero'
              ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
              : 'bg-gradient-to-br from-slate-50 via-white to-slate-50'
        }`}
        style={{ y: layer1Y }}
      />

      {/* Layer 2: Animated stars */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer2Y, opacity: intensityMultiplier * 0.7 }}
      >
        <StarsLayer theme={theme} variant={variant} />
      </motion.div>

      {/* Layer 3: Subtle glow effects */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer3Y, opacity: intensityMultiplier * 0.4 }}
      >
        <GlowLayer theme={theme} />
      </motion.div>

      {/* Layer 4: Grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer4Y, opacity: intensityMultiplier * 0.3 }}
      >
        <GridLayer theme={theme} variant={variant} />
      </motion.div>

      {/* Layer 5: Floating particles */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer5Y, opacity: intensityMultiplier * 0.5 }}
      >
        <ParticlesLayer theme={theme} variant={variant} />
      </motion.div>

      {/* Hero-only floating elements */}
      {variant === 'hero' && (
        <motion.div
          className="absolute inset-0"
          style={{ y: layer5Y, opacity: intensityMultiplier * 0.3 }}
        >
          <FloatingElements theme={theme} />
        </motion.div>
      )}
    </div>
  );
}

function StarsLayer({ theme, variant }: { theme: string; variant: string }) {
  const starCount = variant === 'hero' ? 30 : 20;
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: starCount }, (_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-blue-200' : 'bg-blue-400'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlowLayer({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 30% 40%, ${
              theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)'
            } 0%, transparent 50%)`,
            `radial-gradient(circle at 70% 60%, ${
              theme === 'dark' ? 'rgba(147, 51, 234, 0.08)' : 'rgba(147, 51, 234, 0.12)'
            } 0%, transparent 50%)`,
            `radial-gradient(circle at 30% 40%, ${
              theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)'
            } 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function GridLayer({ theme, variant }: { theme: string; variant: string }) {
  const gridSize = variant === 'hero' ? 50 : 80;
  
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full opacity-50" viewBox="0 0 1000 1000">
        <defs>
          <pattern 
            id={`animated-grid-${theme}-${variant}`} 
            width={gridSize} 
            height={gridSize} 
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)'}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#animated-grid-${theme}-${variant})`} />
      </svg>
    </div>
  );
}

function ParticlesLayer({ theme, variant }: { theme: string; variant: string }) {
  const particleCount = variant === 'hero' ? 12 : 8;
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: particleCount }, (_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full blur-sm ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400 to-purple-400'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            x: [-5, 5, -5],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function FloatingElements({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 rounded-lg border ${
            theme === 'dark'
              ? 'bg-blue-500/10 border-blue-400/20'
              : 'bg-blue-400/10 border-blue-500/20'
          } backdrop-blur-sm`}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [-5, 5, -5],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
