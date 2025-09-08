'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useParallax';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scale';
}

const animations = {
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'slideUp'
}: AnimatedSectionProps) {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
