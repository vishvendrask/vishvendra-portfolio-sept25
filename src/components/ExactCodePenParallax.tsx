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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shootingStarsCanvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    // Draw static starfield on canvas
    const drawStarfield = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        console.log('Canvas not found');
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.log('Canvas context not available');
        return;
      }

      // Set canvas size to match viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only draw stars in dark theme
      if (isDark) {
        // Draw 60 random stars in top 60% of screen
        const starCount = 60;
        const topHeight = canvas.height * 0.6; // Top 60% of screen

        console.log(`Drawing ${starCount} stars on canvas ${canvas.width}x${canvas.height}`);

        for (let i = 0; i < starCount; i++) {
          // Random position in top 60% of screen
          const x = Math.random() * canvas.width;
          const y = Math.random() * topHeight;
          
          // Random star size (0.3 to 1.2px radius)
          const radius = Math.random() * 0.9 + 0.3;
          
          // Draw white star
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = 'white';
          ctx.fill();
        }
        
        console.log('Stars drawn successfully');
      }
    };

    // Draw stars on load with a small delay to ensure canvas is mounted
    setTimeout(() => {
      drawStarfield();
    }, 100);

    // Shooting Stars System
    let shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      angle: number;
      tailLength: number;
      fadeInMiddle: boolean;
      originalMaxLife: number;
      clusterId: string | null;
    }> = [];
    let animationId: number;
    let lastSpawnTime = 0;

    const createShootingStar = (clusterId?: string) => {
      const canvas = shootingStarsCanvasRef.current;
      if (!canvas) return;

      // Always start from top-left corner
      const startX = -50 - Math.random() * 100; // Off-screen left
      const startY = -50 - Math.random() * 100; // Off-screen top
      
      // Random target direction (any direction from top-left)
      const angle = Math.random() * Math.PI * 2; // 0 to 2π (full circle)
      
      // Random speed and properties
      const speed = 2 + Math.random() * 6; // 2-8 pixels per frame
      const tailLength = 80 + Math.random() * 120; // 80-200px tail
      const maxLife = 1500 + Math.random() * 3000; // 1.5-4.5 seconds
      
      // Random fade behavior (some fade in middle, some travel full screen)
      const fadeInMiddle = Math.random() < 0.3; // 30% chance to fade in middle
      const fadeDistance = fadeInMiddle ? 0.3 + Math.random() * 0.4 : 1; // 30-70% or full travel
      
      const shootingStar = {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: maxLife * fadeDistance, // Shorter life if fading in middle
        size: 1.5 + Math.random() * 3, // 1.5-4.5px head size
        angle: angle,
        tailLength: tailLength,
        fadeInMiddle: fadeInMiddle,
        originalMaxLife: maxLife,
        clusterId: clusterId || null
      };
      
      shootingStars.push(shootingStar);
    };

    const createShootingStarCluster = () => {
      const canvas = shootingStarsCanvasRef.current;
      if (!canvas) return;

      const clusterId = `cluster_${Date.now()}_${Math.random()}`;
      const clusterSize = 3 + Math.floor(Math.random() * 4); // 3-6 stars per cluster
      
      // Create cluster center point in top-left
      const clusterCenterX = -30 - Math.random() * 50;
      const clusterCenterY = -30 - Math.random() * 50;
      
      for (let i = 0; i < clusterSize; i++) {
        // Small random offset from cluster center
        const offsetX = (Math.random() - 0.5) * 60; // ±30px spread
        const offsetY = (Math.random() - 0.5) * 60; // ±30px spread
        
        const startX = clusterCenterX + offsetX;
        const startY = clusterCenterY + offsetY;
        
        // Random target direction (any direction from top-left)
        const angle = Math.random() * Math.PI * 2; // 0 to 2π (full circle)
        
        // Random speed and properties
        const speed = 2 + Math.random() * 6; // 2-8 pixels per frame
        const tailLength = 80 + Math.random() * 120; // 80-200px tail
        const maxLife = 1500 + Math.random() * 3000; // 1.5-4.5 seconds
        
        // Random fade behavior
        const fadeInMiddle = Math.random() < 0.3; // 30% chance to fade in middle
        const fadeDistance = fadeInMiddle ? 0.3 + Math.random() * 0.4 : 1;
        
        const shootingStar = {
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: maxLife * fadeDistance,
          size: 1.5 + Math.random() * 3, // 1.5-4.5px head size
          angle: angle,
          tailLength: tailLength,
          fadeInMiddle: fadeInMiddle,
          originalMaxLife: maxLife,
          clusterId: clusterId
        };
        
        shootingStars.push(shootingStar);
      }
    };

    const updateShootingStars = () => {
      const canvas = shootingStarsCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only update shooting stars in dark theme
      if (!isDark) {
        // Clear all shooting stars in light theme
        shootingStars = [];
        animationId = requestAnimationFrame(updateShootingStars);
        return;
      }

      // Update and draw shooting stars
      shootingStars = shootingStars.filter(star => {
        star.x += star.vx;
        star.y += star.vy;
        star.life += 16; // Assuming 60fps (16ms per frame)

        const progress = star.life / star.maxLife;
        let alpha = Math.max(0, 1 - progress);

        // Add random flickering for some stars
        if (Math.random() < 0.1) { // 10% chance to flicker
          alpha *= 0.3 + Math.random() * 0.7; // Random brightness variation
        }

        // Check if star is still visible and on screen
        const isOnScreen = star.x > -200 && star.x < canvas.width + 200 && 
                          star.y > -200 && star.y < canvas.height + 200;

        if (alpha > 0.01 && isOnScreen) {
          // Calculate tail position (behind the star)
          const tailX = star.x - Math.cos(star.angle) * star.tailLength;
          const tailY = star.y - Math.sin(star.angle) * star.tailLength;

          // Create linear gradient for the trail (head to tail)
          const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`); // Bright head
          grad.addColorStop(0.2, `rgba(255, 255, 255, ${alpha * 0.9})`); // Slight fade
          grad.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.6})`); // More fade
          grad.addColorStop(0.8, `rgba(255, 255, 255, ${alpha * 0.2})`); // Almost transparent
          grad.addColorStop(1, `rgba(255, 255, 255, 0)`); // Fully transparent tail

          // Draw the trail
          ctx.strokeStyle = grad;
          ctx.lineWidth = star.size;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();

          // Draw bright head with glow effect
          const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2.5);
          headGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          headGradient.addColorStop(0.3, `rgba(255, 255, 255, ${alpha * 0.8})`);
          headGradient.addColorStop(0.6, `rgba(255, 255, 255, ${alpha * 0.4})`);
          headGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

          ctx.fillStyle = headGradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Add extra bright core
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
          ctx.fill();

          return true;
        }
        return false;
      });

      // Only spawn shooting stars in dark theme
      if (isDark) {
        // Spawn shooting stars simultaneously (individual stars and clusters)
        const currentTime = Date.now();
        const maxStars = 8 + Math.floor(Math.random() * 7); // 8-14 stars max
        const spawnInterval = 2000 + Math.random() * 4000; // 2-6 seconds
        
        if (shootingStars.length < maxStars && currentTime - lastSpawnTime > spawnInterval) {
          // Decide what to spawn (individual stars or cluster)
          const spawnType = Math.random();
          
          if (spawnType < 0.4) {
            // 40% chance: Create a cluster (3-6 stars)
            createShootingStarCluster();
          } else {
            // 60% chance: Create multiple individual stars simultaneously
            const individualCount = 2 + Math.floor(Math.random() * 4); // 2-5 individual stars
            for (let i = 0; i < individualCount; i++) {
              createShootingStar();
            }
          }
          
          lastSpawnTime = currentTime;
        }
      }

      animationId = requestAnimationFrame(updateShootingStars);
    };

    const initShootingStars = () => {
      const canvas = shootingStarsCanvasRef.current;
      if (!canvas) return;

      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Start animation
      updateShootingStars();
    };

    // Initialize shooting stars
    setTimeout(() => {
      initShootingStars();
    }, 200);

    // Redraw on window resize
    const handleResize = () => {
      drawStarfield();
      
      // Resize shooting stars canvas
      const canvas = shootingStarsCanvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

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

    // About section meteors - scroll-synced entry from left and right
    gsap.fromTo(".meteor-about-left", 
      { 
        x: "-100vw",
        opacity: 0,
        scale: 0.8
      },
      { 
        x: "20vw",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(".meteor-about-right", 
      { 
        x: "100vw",
        opacity: 0,
        scale: 0.8
      },
      { 
        x: "-20vw",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        }
      }
    );



    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [theme, isDark]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: -10 }}>
      {/* Theme-based Background */}
      <div 
        className="sky-background fixed inset-0 w-full h-full"
        style={{
          background: isDark 
            ? 'linear-gradient(180deg, #000000 0%, #1C2243 100%)'
            : 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)',
          zIndex: 1,
          height: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />

      {/* Static Canvas Starfield */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Shooting Stars Canvas */}
      <canvas 
        ref={shootingStarsCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
      />

      {/* Vertical Glowing Light Beam */}
      <motion.div
        className="light-beam fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 20%, rgba(147, 51, 234, 0.2) 50%, rgba(59, 130, 246, 0.1) 80%, transparent 100%)',
          width: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5
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



      {/* First Section Meteors - HD, Center Left & Right (Dark Theme Only) */}
      {isDark && (
        <div className="first-section-meteors absolute w-full h-full" style={{ zIndex: 10 }}>
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
      )}

      {/* About Section Meteors - HD, Enter from left and right sides (Dark Theme Only) */}
      {isDark && (
        <div className="about-section-meteors fixed w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
          <div className="meteor-about-left fixed top-1/2 left-0 w-24 h-24 transform -translate-y-1/2" style={{ transform: 'translateX(-100vw) translateY(-50%)', opacity: 0 }}>
            <img src="/images/meteor4.png" alt="Meteor" className="w-full h-full object-contain" />
          </div>
          <div className="meteor-about-right fixed top-1/2 right-0 w-24 h-24 transform -translate-y-1/2" style={{ transform: 'translateX(100vw) translateY(-50%)', opacity: 0 }}>
            <img src="/images/meteor5.png" alt="Meteor" className="w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* Scroll Element */}
      <div 
        className="scrollElement absolute top-0 w-full pointer-events-none"
        style={{
          height: '6000px',
          zIndex: 2
        }}
      />
    </div>
  );
}
