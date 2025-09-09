'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = 'Vishvendra';
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseTime = 3000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative inline-flex items-center"
      style={{ 
        width: '180px', // Fixed width to prevent layout shift
        overflow: 'hidden'
      }}
    >
      <span className="animated-logo-text font-bold text-2xl">
        {displayText}
      </span>
      <span 
        className={`cursor text-2xl font-bold transition-opacity duration-100 ml-0.5 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ marginLeft: '2px' }}
      >
        |
      </span>
    </motion.div>
  );
}
