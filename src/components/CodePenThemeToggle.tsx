'use client';

import React, { useState } from 'react';
import { useTheme, useThemeToggle } from '@/providers/ThemeProvider';
import { motion } from 'framer-motion';

export default function CodePenThemeToggle() {
  const { theme } = useTheme();
  const toggleTheme = useThemeToggle();
  const isDark = theme === 'dark';
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => {
        setShowTooltip(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIsHovered(false);
      }}
    >
      {/* Toggle Container */}
      <motion.div 
        onClick={toggleTheme}
        animate={{
          backgroundColor: isHovered 
            ? (isDark ? 'rgba(240, 240, 240, 0.8)' : 'rgba(30, 30, 30, 0.8)')
            : (isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(240, 240, 240, 0.8)'),
          background: isHovered
            ? (isDark 
                ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9))'
                : 'linear-gradient(145deg, rgba(40, 40, 40, 0.9), rgba(20, 20, 20, 0.9))')
            : (isDark 
                ? 'linear-gradient(145deg, rgba(40, 40, 40, 0.9), rgba(20, 20, 20, 0.9))' 
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9))'),
          borderColor: isHovered
            ? (isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)')
            : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{
          position: 'relative',
          width: '80px',
          height: '40px',
          borderRadius: '20px',
          backdropFilter: 'blur(20px)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: isDark 
            ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          cursor: 'pointer'
        }}
        whileHover={{ 
          scale: 1.05
        }}
        whileTap={{ 
          scale: 0.98 
        }}
      >
        {/* Fixed Sun Icon (Right Side) */}
        <div
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={(el) => {
            if (el) {
              const svg = el.querySelector('svg');
              if (svg) {
                const sunColor = '#FF8C00'; // High contrast orange for both themes
                svg.style.setProperty('color', sunColor, 'important');
                const circle = svg.querySelector('circle');
                const path = svg.querySelector('path');
                if (circle) circle.style.setProperty('fill', sunColor, 'important');
                if (path) {
                  path.style.setProperty('stroke', sunColor, 'important');
                  path.style.setProperty('color', sunColor, 'important');
                }
              }
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="#FFA500" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#FFA500" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Fixed Moon Icon (Left Side) */}
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={(el) => {
            if (el) {
              const svg = el.querySelector('svg');
              if (svg) {
                const moonColor = '#6B73FF'; // High contrast purple-blue for both themes
                const craterColor = '#4F46E5'; // High contrast indigo for both themes
                svg.style.setProperty('color', moonColor, 'important');
                const path = svg.querySelector('path');
                const circles = svg.querySelectorAll('circle');
                if (path) path.style.setProperty('fill', moonColor, 'important');
                circles.forEach(circle => {
                  circle.style.setProperty('fill', craterColor, 'important');
                });
              }
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="#E6E6FA" />
            <circle cx="8" cy="8" r="1" fill="#B0C4DE" />
            <circle cx="10" cy="12" r="0.5" fill="#B0C4DE" />
          </svg>
        </div>

        {/* Toggle Ball */}
        <motion.div
          animate={{
            x: isHovered 
              ? (isDark ? 42 : 2)  // On hover, show opposite position
              : (isDark ? 2 : 42), // Normal position: light theme = right (sun), dark theme = left (moon)
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
          style={{
            position: 'absolute',
            top: '2px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: isDark 
              ? 'rgba(255, 255, 255, 0.12)' 
              : 'rgba(0, 0, 0, 0.12)',
            background: isDark 
              ? 'rgba(255, 255, 255, 0.12)' 
              : 'rgba(0, 0, 0, 0.12)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDark 
              ? '0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)' 
              : '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            zIndex: 2
          }}
          ref={(el) => {
            if (el) {
              el.style.setProperty('background', isDark 
                ? 'rgba(255, 255, 255, 0.12)' 
                : 'rgba(0, 0, 0, 0.12)', 'important');
              el.style.setProperty('background-color', isDark 
                ? 'rgba(255, 255, 255, 0.12)' 
                : 'rgba(0, 0, 0, 0.12)', 'important');
              el.style.setProperty('border', isDark 
                ? '1px solid rgba(255, 255, 255, 0.2)' 
                : '1px solid rgba(0, 0, 0, 0.1)', 'important');
            }
          }}
        />

      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            bottom: '-48px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '8px 12px',
            background: isDark 
              ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
              : 'linear-gradient(135deg, #374151, #1f2937)',
            backgroundColor: isDark ? '#f3f4f6' : '#374151',
            color: isDark ? '#374151' : '#ffffff',
            fontSize: '14px',
            borderRadius: '8px',
            boxShadow: isDark 
              ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
              : '0 8px 25px rgba(0, 0, 0, 0.4)',
            zIndex: 100,
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
          ref={(el) => {
            if (el) {
              el.style.setProperty('background', isDark 
                ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
                : 'linear-gradient(135deg, #374151, #1f2937)', 'important');
              el.style.setProperty('background-color', isDark ? '#f3f4f6' : '#374151', 'important');
              el.style.setProperty('color', isDark ? '#374151' : '#ffffff', 'important');
            }
          }}
        >
          <span 
            style={{ fontWeight: '500' }}
            ref={(el) => {
              if (el) {
                el.style.setProperty('color', isDark ? '#374151' : '#ffffff', 'important');
              }
            }}
          >
            Switch to {isDark ? 'Light' : 'Dark'} Mode
          </span>
          {/* Tooltip Arrow */}
          <div 
            style={{
              position: 'absolute',
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '8px',
              height: '8px',
              background: isDark 
                ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
                : 'linear-gradient(135deg, #374151, #1f2937)',
              backgroundColor: isDark ? '#f3f4f6' : '#374151'
            }}
            ref={(el) => {
              if (el) {
                el.style.setProperty('background', isDark 
                  ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
                  : 'linear-gradient(135deg, #374151, #1f2937)', 'important');
                el.style.setProperty('background-color', isDark ? '#f3f4f6' : '#374151', 'important');
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
