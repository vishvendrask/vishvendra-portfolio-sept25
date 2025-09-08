'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseOptimizedParallaxOptions {
  throttleMs?: number;
  mouseSensitivity?: number;
  scrollSensitivity?: number;
}

interface ParallaxValues {
  mouseX: number;
  mouseY: number;
  scrollY: number;
  windowWidth: number;
  windowHeight: number;
}

export function useOptimizedParallax({
  throttleMs = 16, // ~60fps
  mouseSensitivity = 1,
  scrollSensitivity = 1,
}: UseOptimizedParallaxOptions = {}) {
  const [values, setValues] = useState<ParallaxValues>({
    mouseX: 0,
    mouseY: 0,
    scrollY: 0,
    windowWidth: 0,
    windowHeight: 0,
  });

  const rafRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const pendingUpdateRef = useRef<Partial<ParallaxValues>>({});

  // Throttled update function
  const throttledUpdate = useCallback(() => {
    const now = Date.now();
    if (now - lastUpdateRef.current >= throttleMs) {
      setValues(prev => ({ ...prev, ...pendingUpdateRef.current }));
      pendingUpdateRef.current = {};
      lastUpdateRef.current = now;
    } else {
      // Schedule next update
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(throttledUpdate);
    }
  }, [throttleMs]);

  // Queue update
  const queueUpdate = useCallback((updates: Partial<ParallaxValues>) => {
    pendingUpdateRef.current = { ...pendingUpdateRef.current, ...updates };
    throttledUpdate();
  }, [throttledUpdate]);

  useEffect(() => {
    // Initial window size
    const updateWindowSize = () => {
      queueUpdate({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      queueUpdate({
        mouseX: ((e.clientX - centerX) / centerX) * mouseSensitivity,
        mouseY: ((e.clientY - centerY) / centerY) * mouseSensitivity,
      });
    };

    // Scroll handler
    const handleScroll = () => {
      queueUpdate({
        scrollY: window.scrollY * scrollSensitivity,
      });
    };

    // Resize handler
    const handleResize = () => {
      updateWindowSize();
    };

    // Initialize
    updateWindowSize();

    // Add event listeners with passive option for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [queueUpdate, mouseSensitivity, scrollSensitivity]);

  // Helper function to calculate transform for a layer
  const getLayerTransform = useCallback((
    depth: number,
    mouseMultiplier: number = 1,
    scrollMultiplier: number = 1
  ) => {
    const mouseX = values.mouseX * mouseMultiplier * 10;
    const mouseY = values.mouseY * mouseMultiplier * 10;
    const scrollOffset = values.scrollY * scrollMultiplier;
    
    return {
      transform: `translate3d(${mouseX}px, ${mouseY + scrollOffset}px, ${-depth * 100}px) scale(${1 + depth * 0.05})`,
      willChange: 'transform',
    };
  }, [values]);

  // Helper function for responsive adjustments
  const getResponsiveMultiplier = useCallback(() => {
    if (values.windowWidth < 768) {
      // Mobile: reduce effects for better performance
      return 0.5;
    } else if (values.windowWidth < 1024) {
      // Tablet: slightly reduced effects
      return 0.75;
    }
    // Desktop: full effects
    return 1;
  }, [values.windowWidth]);

  return {
    values,
    getLayerTransform,
    getResponsiveMultiplier,
    isMobile: values.windowWidth < 768,
    isTablet: values.windowWidth >= 768 && values.windowWidth < 1024,
    isDesktop: values.windowWidth >= 1024,
  };
}
