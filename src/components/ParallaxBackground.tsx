'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

interface ParallaxBackgroundProps {
  variant?: 'hero' | 'page';
  intensity?: 'low' | 'medium' | 'high';
}

export default function ParallaxBackground({ 
  variant = 'page',
  intensity = 'medium'
}: ParallaxBackgroundProps) {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Different scroll ranges for more dramatic effect
  const scrollRange = 2000;
  
  // Create distinct parallax layers with different speeds (slower = further back)
  const layer1Y = useTransform(scrollY, [0, scrollRange], [0, -50]);   // Furthest back - mountains
  const layer2Y = useTransform(scrollY, [0, scrollRange], [0, -100]);  // Mountains mid
  const layer3Y = useTransform(scrollY, [0, scrollRange], [0, -200]);  // Hills
  const layer4Y = useTransform(scrollY, [0, scrollRange], [0, -300]);  // Foreground hills
  const layer5Y = useTransform(scrollY, [0, scrollRange], [0, -400]);  // Closest objects
  const layer6Y = useTransform(scrollY, [0, scrollRange], [0, -500]);  // Floating elements

  const intensityMultiplier = {
    low: 0.5,
    medium: 0.7,
    high: 1.0
  }[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Sky Background */}
      <motion.div
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-slate-900 via-blue-900 to-purple-900'
            : 'bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100'
        }`}
      />

      {/* Layer 1: Distant Mountains/Shapes (Slowest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer1Y, opacity: intensityMultiplier * 0.6 }}
      >
        <DistantMountains theme={theme} />
      </motion.div>

      {/* Layer 2: Mid Mountains */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer2Y, opacity: intensityMultiplier * 0.7 }}
      >
        <MidMountains theme={theme} />
      </motion.div>

      {/* Layer 3: Closer Hills */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer3Y, opacity: intensityMultiplier * 0.8 }}
      >
        <CloserHills theme={theme} />
      </motion.div>

      {/* Layer 4: Foreground Elements */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer4Y, opacity: intensityMultiplier * 0.9 }}
      >
        <ForegroundElements theme={theme} />
      </motion.div>

      {/* Layer 5: Abstract Shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer5Y, opacity: intensityMultiplier * 0.5 }}
      >
        <AbstractShapes theme={theme} />
      </motion.div>

      {/* Layer 6: Floating Particles (Fastest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: layer6Y, opacity: intensityMultiplier * 0.4 }}
      >
        <FloatingParticles theme={theme} variant={variant} />
      </motion.div>
    </div>
  );
}

// Layer 1: Distant Mountains (Furthest back, slowest movement)
function DistantMountains({ theme }: { theme: string }) {
  return (
    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYEnd slice">
      <defs>
        {/* Enhanced gradients with more detail */}
        <linearGradient id="distant-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(30, 58, 138, 0.6)' : 'rgba(99, 102, 241, 0.5)'} />
          <stop offset="30%" stopColor={theme === 'dark' ? 'rgba(37, 99, 235, 0.5)' : 'rgba(129, 140, 248, 0.4)'} />
          <stop offset="70%" stopColor={theme === 'dark' ? 'rgba(29, 78, 216, 0.4)' : 'rgba(165, 180, 252, 0.3)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(191, 219, 254, 0.2)'} />
        </linearGradient>
        
        <linearGradient id="distant-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : 'rgba(139, 92, 246, 0.4)'} />
          <stop offset="50%" stopColor={theme === 'dark' ? 'rgba(71, 85, 105, 0.4)' : 'rgba(165, 180, 252, 0.3)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(203, 213, 225, 0.2)'} />
        </linearGradient>

        <linearGradient id="distant-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(67, 56, 202, 0.3)' : 'rgba(79, 70, 229, 0.3)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(30, 27, 75, 0.5)' : 'rgba(224, 231, 255, 0.2)'} />
        </linearGradient>

        {/* Texture patterns for mountain detail */}
        <pattern id="mountain-texture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.5" fill={theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(99, 102, 241, 0.15)'} />
        </pattern>
      </defs>
      
      {/* Detailed mountain range with multiple peaks */}
      <path
        d="M0,400 Q50,380 100,390 Q150,370 200,350 Q250,330 300,345 Q350,360 400,380 Q450,400 500,390 Q550,380 600,370 Q650,360 700,355 Q750,350 800,360 Q850,370 900,365 Q950,360 1000,340 Q1050,320 1100,335 Q1150,350 1200,370 L1200,800 L0,800 Z"
        fill="url(#distant-gradient-1)"
      />
      
      {/* Snow caps and highlights */}
      <path
        d="M180,350 Q200,340 220,350 M280,330 Q300,320 320,330 M480,380 Q500,370 520,380 M680,355 Q700,345 720,355 M980,340 Q1000,330 1020,340"
        stroke={theme === 'dark' ? 'rgba(248, 250, 252, 0.3)' : 'rgba(255, 255, 255, 0.6)'}
        strokeWidth="2"
        fill="none"
      />
      
      {/* Second mountain layer */}
      <path
        d="M0,450 Q80,430 160,440 Q240,450 320,435 Q400,420 480,430 Q560,440 640,425 Q720,410 800,420 Q880,430 960,415 Q1040,400 1120,410 Q1160,415 1200,410 L1200,800 L0,800 Z"
        fill="url(#distant-gradient-2)"
      />
      
      {/* Third mountain layer with texture */}
      <path
        d="M0,500 Q100,480 200,490 Q300,500 400,485 Q500,470 600,480 Q700,490 800,475 Q900,460 1000,470 Q1100,480 1200,465 L1200,800 L0,800 Z"
        fill="url(#distant-gradient-3)"
        mask="url(#mountain-texture)"
      />
    </svg>
  );
}

// Layer 2: Mid Mountains
function MidMountains({ theme }: { theme: string }) {
  return (
    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYEnd slice">
      <defs>
        {/* High-definition gradients for mid mountains */}
        <linearGradient id="mid-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.7)' : 'rgba(79, 70, 229, 0.6)'} />
          <stop offset="25%" stopColor={theme === 'dark' ? 'rgba(67, 56, 202, 0.6)' : 'rgba(99, 102, 241, 0.5)'} />
          <stop offset="60%" stopColor={theme === 'dark' ? 'rgba(55, 48, 163, 0.5)' : 'rgba(129, 140, 248, 0.4)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(165, 180, 252, 0.3)'} />
        </linearGradient>

        <linearGradient id="mid-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(79, 70, 229, 0.6)' : 'rgba(139, 92, 246, 0.5)'} />
          <stop offset="40%" stopColor={theme === 'dark' ? 'rgba(88, 28, 135, 0.5)' : 'rgba(168, 85, 247, 0.4)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(45, 55, 72, 0.7)' : 'rgba(196, 181, 253, 0.3)'} />
        </linearGradient>

        {/* Rock texture pattern */}
        <pattern id="rock-texture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="transparent" />
          <circle cx="2" cy="2" r="0.8" fill={theme === 'dark' ? 'rgba(148, 163, 184, 0.1)' : 'rgba(71, 85, 105, 0.15)'} />
          <circle cx="6" cy="6" r="0.6" fill={theme === 'dark' ? 'rgba(203, 213, 225, 0.08)' : 'rgba(100, 116, 139, 0.12)'} />
        </pattern>

        {/* Shadow pattern for depth */}
        <linearGradient id="mountain-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(51, 65, 85, 0.3)'} />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(51, 65, 85, 0.2)'} />
        </linearGradient>
      </defs>
      
      {/* Main mountain ridge with detailed peaks */}
      <path
        d="M0,500 Q60,470 120,480 Q180,490 240,460 Q300,430 360,450 Q420,470 480,440 Q540,410 600,430 Q660,450 720,420 Q780,390 840,410 Q900,430 960,400 Q1020,370 1080,390 Q1140,410 1200,380 L1200,800 L0,800 Z"
        fill="url(#mid-gradient-1)"
      />
      
      {/* Rock formations and cliff faces */}
      <path
        d="M0,520 Q80,490 160,500 Q240,510 320,485 Q400,460 480,475 Q560,490 640,465 Q720,440 800,455 Q880,470 960,445 Q1040,420 1120,435 Q1160,442 1200,430 L1200,800 L0,800 Z"
        fill="url(#mid-gradient-2)"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Shadow effects for 3D depth */}
      <path
        d="M200,460 Q300,430 400,450 M500,440 Q600,410 700,430 M800,420 Q900,390 1000,410"
        stroke="url(#mountain-shadow)"
        strokeWidth="15"
        fill="none"
        opacity="0.6"
      />
      
      {/* Rock texture overlay */}
      <path
        d="M0,500 Q60,470 120,480 Q180,490 240,460 Q300,430 360,450 Q420,470 480,440 Q540,410 600,430 Q660,450 720,420 Q780,390 840,410 Q900,430 960,400 Q1020,370 1080,390 Q1140,410 1200,380 L1200,800 L0,800 Z"
        fill="url(#rock-texture)"
        opacity="0.4"
      />

      {/* Detailed ridges and outcrops */}
      <g opacity="0.7">
        <path d="M120,480 L130,475 L140,485 L150,478 L160,490" 
              stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.4)' : 'rgba(71, 85, 105, 0.6)'} 
              strokeWidth="1.5" fill="none" />
        <path d="M360,450 L370,445 L380,455 L390,448 L400,460" 
              stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.4)' : 'rgba(71, 85, 105, 0.6)'} 
              strokeWidth="1.5" fill="none" />
        <path d="M720,420 L730,415 L740,425 L750,418 L760,430" 
              stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.4)' : 'rgba(71, 85, 105, 0.6)'} 
              strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}

// Layer 3: Closer Hills
function CloserHills({ theme }: { theme: string }) {
  return (
    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYEnd slice">
      <defs>
        {/* Enhanced gradients for rolling hills */}
        <linearGradient id="hill-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(79, 70, 229, 0.8)' : 'rgba(99, 102, 241, 0.7)'} />
          <stop offset="30%" stopColor={theme === 'dark' ? 'rgba(99, 102, 241, 0.7)' : 'rgba(129, 140, 248, 0.6)'} />
          <stop offset="70%" stopColor={theme === 'dark' ? 'rgba(109, 40, 217, 0.6)' : 'rgba(165, 180, 252, 0.5)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(51, 65, 85, 0.9)' : 'rgba(203, 213, 225, 0.4)'} />
        </linearGradient>

        <linearGradient id="hill-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(139, 92, 246, 0.7)' : 'rgba(168, 85, 247, 0.6)'} />
          <stop offset="50%" stopColor={theme === 'dark' ? 'rgba(124, 58, 237, 0.6)' : 'rgba(196, 181, 253, 0.5)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(67, 56, 202, 0.8)' : 'rgba(224, 231, 255, 0.4)'} />
        </linearGradient>

        {/* Grass/vegetation texture */}
        <pattern id="vegetation-texture" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="transparent" />
          <line x1="1" y1="0" x2="1" y2="6" stroke={theme === 'dark' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(22, 163, 74, 0.2)'} strokeWidth="0.5" />
          <line x1="3" y1="0" x2="3" y2="6" stroke={theme === 'dark' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(22, 163, 74, 0.15)'} strokeWidth="0.3" />
          <line x1="5" y1="0" x2="5" y2="6" stroke={theme === 'dark' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(22, 163, 74, 0.18)'} strokeWidth="0.4" />
        </pattern>

        {/* Tree silhouettes pattern */}
        <pattern id="tree-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <rect width="40" height="20" fill="transparent" />
          <g fill={theme === 'dark' ? 'rgba(21, 128, 61, 0.3)' : 'rgba(22, 101, 52, 0.4)'}>
            <circle cx="8" cy="15" r="3" />
            <rect x="7.5" y="15" width="1" height="5" />
            <circle cx="25" cy="12" r="4" />
            <rect x="24.5" y="12" width="1" height="8" />
            <circle cx="35" cy="14" r="2.5" />
            <rect x="34.5" y="14" width="1" height="6" />
          </g>
        </pattern>

        {/* Atmospheric perspective */}
        <linearGradient id="atmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(30, 58, 138, 0.2)' : 'rgba(147, 197, 253, 0.3)'} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {/* Main rolling hills with smooth curves */}
      <path
        d="M0,580 Q100,550 200,560 Q300,570 400,540 Q500,510 600,530 Q700,550 800,520 Q900,490 1000,510 Q1100,530 1200,500 L1200,800 L0,800 Z"
        fill="url(#hill-gradient-1)"
      />
      
      {/* Secondary hill layer for depth */}
      <path
        d="M0,620 Q150,590 300,600 Q450,610 600,580 Q750,550 900,570 Q1050,590 1200,560 L1200,800 L0,800 Z"
        fill="url(#hill-gradient-2)"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Vegetation texture overlay */}
      <path
        d="M0,580 Q100,550 200,560 Q300,570 400,540 Q500,510 600,530 Q700,550 800,520 Q900,490 1000,510 Q1100,530 1200,500 L1200,800 L0,800 Z"
        fill="url(#vegetation-texture)"
        opacity="0.6"
      />

      {/* Tree line silhouettes */}
      <path
        d="M0,580 Q100,550 200,560 Q300,570 400,540 Q500,510 600,530 Q700,550 800,520 Q900,490 1000,510 Q1100,530 1200,500 L1200,570 Q1100,540 1000,520 Q900,500 800,530 Q700,560 600,540 Q500,520 400,550 Q300,580 200,570 Q100,560 0,590 Z"
        fill="url(#tree-pattern)"
        opacity="0.5"
      />

      {/* Gentle contour lines for terrain detail */}
      <g opacity="0.4" stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.4)'} strokeWidth="0.8" fill="none">
        <path d="M50,570 Q200,540 350,550 Q500,560 650,530 Q800,500 950,520 Q1100,540 1200,510" />
        <path d="M0,590 Q150,560 300,570 Q450,580 600,550 Q750,520 900,540 Q1050,560 1200,530" />
        <path d="M100,610 Q250,580 400,590 Q550,600 700,570 Q850,540 1000,560 Q1150,580 1200,550" />
      </g>

      {/* Atmospheric haze overlay */}
      <path
        d="M0,580 Q100,550 200,560 Q300,570 400,540 Q500,510 600,530 Q700,550 800,520 Q900,490 1000,510 Q1100,530 1200,500 L1200,650 Q1100,620 1000,630 Q900,640 800,610 Q700,580 600,600 Q500,620 400,590 Q300,560 200,580 Q100,600 0,620 Z"
        fill="url(#atmosphere)"
        opacity="0.7"
      />
    </svg>
  );
}

// Layer 4: Foreground Elements
function ForegroundElements({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0">
      {/* High-tech geometric shapes with detailed designs */}
      <motion.div
        className="absolute"
        style={{ left: '8%', top: '15%' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="tech-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(99, 102, 241, 0.8)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(147, 51, 234, 0.4)' : 'rgba(168, 85, 247, 0.6)'} />
            </linearGradient>
            <filter id="glow-1">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>
          <circle cx="40" cy="40" r="35" fill="none" stroke="url(#tech-gradient-1)" strokeWidth="2" filter="url(#glow-1)" />
          <polygon points="40,15 55,35 40,25 25,35" fill="url(#tech-gradient-1)" opacity="0.6" />
          <polygon points="40,65 25,45 40,55 55,45" fill="url(#tech-gradient-1)" opacity="0.6" />
          <circle cx="40" cy="40" r="8" fill="url(#tech-gradient-1)" opacity="0.8" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute"
        style={{ left: '75%', top: '25%' }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.2, 0.9],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <defs>
            <linearGradient id="tech-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(139, 92, 246, 0.7)' : 'rgba(79, 70, 229, 0.9)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(129, 140, 248, 0.7)'} />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="url(#tech-gradient-2)" strokeWidth="2" rx="4" />
          <rect x="20" y="20" width="20" height="20" fill="url(#tech-gradient-2)" opacity="0.4" rx="2" />
          <circle cx="30" cy="30" r="6" fill="none" stroke="url(#tech-gradient-2)" strokeWidth="1.5" />
          <line x1="30" y1="5" x2="30" y2="15" stroke="url(#tech-gradient-2)" strokeWidth="2" />
          <line x1="30" y1="45" x2="30" y2="55" stroke="url(#tech-gradient-2)" strokeWidth="2" />
          <line x1="5" y1="30" x2="15" y2="30" stroke="url(#tech-gradient-2)" strokeWidth="2" />
          <line x1="45" y1="30" x2="55" y2="30" stroke="url(#tech-gradient-2)" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: '55%', top: '45%' }}
        animate={{
          x: [-15, 15, -15],
          y: [-8, 8, -8],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="100" height="40" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="tech-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(22, 163, 74, 0.8)'} />
              <stop offset="50%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(99, 102, 241, 0.7)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(147, 51, 234, 0.4)' : 'rgba(168, 85, 247, 0.6)'} />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="20" rx="45" ry="15" fill="none" stroke="url(#tech-gradient-3)" strokeWidth="2" />
          <ellipse cx="50" cy="20" rx="30" ry="10" fill="url(#tech-gradient-3)" opacity="0.3" />
          <ellipse cx="50" cy="20" rx="15" ry="5" fill="url(#tech-gradient-3)" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Tech circuit patterns */}
      <motion.div
        className="absolute"
        style={{ left: '20%', top: '60%' }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="120" height="80" viewBox="0 0 120 80">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(22, 163, 74, 0.7)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.5)'} />
            </linearGradient>
          </defs>
          <g stroke="url(#circuit-gradient)" strokeWidth="1.5" fill="none">
            <path d="M10,40 L30,40 L35,35 L40,40 L60,40" />
            <path d="M60,40 L65,35 L70,40 L90,40 L95,35 L100,40 L110,40" />
            <path d="M40,40 L40,20 L50,15 L60,20 L60,40" />
            <path d="M70,40 L70,60 L80,65 L90,60 L90,40" />
            <circle cx="40" cy="40" r="3" fill="url(#circuit-gradient)" />
            <circle cx="70" cy="40" r="3" fill="url(#circuit-gradient)" />
            <rect x="45" y="35" width="10" height="10" fill="none" stroke="url(#circuit-gradient)" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>

      {/* Floating data visualization elements */}
      <motion.div
        className="absolute"
        style={{ left: '85%', top: '55%' }}
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <defs>
            <linearGradient id="data-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(236, 72, 153, 0.6)' : 'rgba(219, 39, 119, 0.8)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(147, 51, 234, 0.4)' : 'rgba(168, 85, 247, 0.6)'} />
            </linearGradient>
          </defs>
          <g fill="url(#data-gradient)">
            <rect x="10" y="50" width="8" height="15" opacity="0.8" />
            <rect x="22" y="40" width="8" height="25" opacity="0.6" />
            <rect x="34" y="30" width="8" height="35" opacity="0.9" />
            <rect x="46" y="45" width="8" height="20" opacity="0.7" />
            <rect x="58" y="35" width="8" height="30" opacity="0.8" />
          </g>
          <g stroke="url(#data-gradient)" strokeWidth="1.5" fill="none">
            <path d="M14,50 L26,40 L38,30 L50,45 L62,35" />
            <circle cx="14" cy="50" r="2" fill="url(#data-gradient)" />
            <circle cx="26" cy="40" r="2" fill="url(#data-gradient)" />
            <circle cx="38" cy="30" r="2" fill="url(#data-gradient)" />
            <circle cx="50" cy="45" r="2" fill="url(#data-gradient)" />
            <circle cx="62" cy="35" r="2" fill="url(#data-gradient)" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

// Layer 5: Abstract Shapes
function AbstractShapes({ theme }: { theme: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
      <defs>
        {/* Enhanced abstract gradients */}
        <linearGradient id="abstract-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(99, 102, 241, 0.3)'} />
          <stop offset="50%" stopColor={theme === 'dark' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(168, 85, 247, 0.25)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(139, 92, 246, 0.2)'} />
        </linearGradient>
        
        <linearGradient id="abstract-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(22, 163, 74, 0.25)'} />
          <stop offset="50%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(99, 102, 241, 0.2)'} />
          <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(168, 85, 247, 0.15)'} />
        </linearGradient>

        <radialGradient id="abstract-radial-1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(219, 39, 119, 0.3)'} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id="abstract-radial-2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(22, 163, 74, 0.25)'} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Complex pattern definitions */}
        <pattern id="neural-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <g stroke={theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(99, 102, 241, 0.15)'} strokeWidth="0.5" fill="none">
            <circle cx="20" cy="20" r="2" fill={theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.4)'} />
            <circle cx="80" cy="30" r="2" fill={theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(168, 85, 247, 0.4)'} />
            <circle cx="50" cy="70" r="2" fill={theme === 'dark' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(22, 163, 74, 0.4)'} />
            <line x1="20" y1="20" x2="80" y2="30" />
            <line x1="80" y1="30" x2="50" y2="70" />
            <line x1="50" y1="70" x2="20" y2="20" />
          </g>
        </pattern>
      </defs>
      
      {/* Complex flowing abstract shapes */}
      <motion.path
        d="M0,150 Q200,100 400,140 Q600,180 800,120 Q1000,80 1200,110"
        stroke="url(#abstract-gradient-1)"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
        animate={{
          d: [
            "M0,150 Q200,100 400,140 Q600,180 800,120 Q1000,80 1200,110",
            "M0,130 Q200,120 400,100 Q600,160 800,140 Q1000,100 1200,90",
            "M0,150 Q200,100 400,140 Q600,180 800,120 Q1000,80 1200,110"
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.path
        d="M0,350 Q300,300 600,330 Q900,360 1200,320"
        stroke="url(#abstract-gradient-2)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
        animate={{
          d: [
            "M0,350 Q300,300 600,330 Q900,360 1200,320",
            "M0,370 Q300,320 600,310 Q900,340 1200,340",
            "M0,350 Q300,300 600,330 Q900,360 1200,320"
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating abstract blobs */}
      <motion.ellipse
        cx="200"
        cy="250"
        rx="80"
        ry="50"
        fill="url(#abstract-radial-1)"
        animate={{
          cx: [200, 250, 200],
          cy: [250, 200, 250],
          rx: [80, 100, 80],
          ry: [50, 70, 50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.ellipse
        cx="900"
        cy="400"
        rx="60"
        ry="90"
        fill="url(#abstract-radial-2)"
        animate={{
          cx: [900, 850, 900],
          cy: [400, 450, 400],
          rx: [60, 80, 60],
          ry: [90, 60, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neural network pattern overlay */}
      <rect
        width="100%"
        height="100%"
        fill="url(#neural-network)"
        opacity="0.3"
      />

      {/* Geometric mesh lines */}
      <g stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.08)' : 'rgba(71, 85, 105, 0.12)'} strokeWidth="1" fill="none" opacity="0.5">
        <motion.path
          d="M0,200 Q400,150 800,180 L1200,160"
          animate={{
            d: [
              "M0,200 Q400,150 800,180 L1200,160",
              "M0,220 Q400,170 800,160 L1200,180",
              "M0,200 Q400,150 800,180 L1200,160"
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,500 Q400,450 800,480 L1200,460"
          animate={{
            d: [
              "M0,500 Q400,450 800,480 L1200,460",
              "M0,520 Q400,470 800,460 L1200,480",
              "M0,500 Q400,450 800,480 L1200,460"
            ],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </g>
    </svg>
  );
}

// Layer 6: Floating Particles (Fastest movement)
function FloatingParticles({ theme, variant }: { theme: string; variant: string }) {
  const particleCount = variant === 'hero' ? 20 : 15;
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: particleCount }, (_, i) => {
        const particleType = i % 4;
        const size = particleType === 0 ? 'w-3 h-3' : particleType === 1 ? 'w-2 h-2' : particleType === 2 ? 'w-1.5 h-1.5' : 'w-1 h-1';
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 20, 0],
              x: [-15 + Math.random() * 10, 15 - Math.random() * 10, -15 + Math.random() * 10],
              opacity: [0, 0.8 + Math.random() * 0.2, 0],
              scale: [0.3, 1 + Math.random() * 0.3, 0.3],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            {particleType === 0 ? (
              // Large glowing orbs
              <div className={`${size} rounded-full blur-sm ${
                theme === 'dark' ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 'bg-gradient-to-br from-blue-500 to-purple-500'
              }`} style={{ opacity: 0.6 }} />
            ) : particleType === 1 ? (
              // Medium geometric shapes
              <div className={`${size} rounded-lg blur-sm transform rotate-45 ${
                theme === 'dark' ? 'bg-gradient-to-br from-green-400 to-blue-400' : 'bg-gradient-to-br from-green-500 to-blue-500'
              }`} style={{ opacity: 0.5 }} />
            ) : particleType === 2 ? (
              // Small diamonds
              <div className={`${size} blur-sm transform rotate-45 ${
                theme === 'dark' ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 'bg-gradient-to-br from-purple-500 to-pink-500'
              }`} style={{ 
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                opacity: 0.4 
              }} />
            ) : (
              // Tiny stars
              <svg className={size} viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={theme === 'dark' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(22, 163, 74, 0.8)'}
                  className="blur-sm"
                />
              </svg>
            )}
          </motion.div>
        );
      })}
      
      {/* Energy streams */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + Math.random() * 80}%`,
            width: '2px',
            height: '60px',
          }}
          animate={{
            y: [-100, 100],
            opacity: [0, 0.6, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5 + Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <div className={`w-full h-full blur-sm ${
            theme === 'dark' 
              ? 'bg-gradient-to-b from-transparent via-cyan-400 to-transparent'
              : 'bg-gradient-to-b from-transparent via-cyan-500 to-transparent'
          }`} />
        </motion.div>
      ))}
    </div>
  );
}