'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import CodePenThemeToggle from './CodePenThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education & Certs', href: '/certificates-education' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update icon colors when theme changes
  useEffect(() => {
    if (menuButtonRef.current) {
      const svg = menuButtonRef.current.querySelector('svg');
      if (svg) {
        const iconColor = theme === 'dark' ? '#f3f4f6' : '#374151'; // gray-100 : gray-700
        svg.style.setProperty('color', iconColor, 'important');
        svg.style.setProperty('stroke', iconColor, 'important');
      }
    }
  }, [theme, isOpen]); // Re-run when theme changes or menu toggles

  // Update navigation link colors when theme changes
  useEffect(() => {
    if (navContainerRef.current) {
      const links = navContainerRef.current.querySelectorAll('a');
      links.forEach((link) => {
        const isActive = link.getAttribute('href') === pathname;
        if (isActive) {
          // Active link colors
          const activeColor = theme === 'dark' ? '#f3f4f6' : '#111827'; // gray-100 : gray-900
          link.style.setProperty('color', activeColor, 'important');
        } else {
          // Inactive link colors
          const inactiveColor = theme === 'dark' ? '#e5e7eb' : '#374151'; // gray-200 : gray-700
          link.style.setProperty('color', inactiveColor, 'important');
        }
        link.style.setProperty('text-shadow', 'none', 'important');
      });
    }
  }, [theme, pathname]); // Re-run when theme changes or pathname changes

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="hover:scale-105 transition-transform block"
            >
              <AnimatedLogo />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered Pill (Aayush Style) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              ref={navContainerRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card flex items-center gap-0.5 px-2 py-2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] block relative overflow-hidden",
                      pathname === item.href
                        ? "text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-white/20 shadow-lg backdrop-blur-sm"
                        : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-white/30 dark:hover:bg-white/15"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* CodePen Theme Toggle */}
            <CodePenThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-primary-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
          >
            <motion.div
              className="glass-card flex flex-col gap-1 px-3 py-2 min-w-max"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "block text-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden whitespace-nowrap",
                      pathname === item.href
                        ? "text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-white/20 shadow-lg backdrop-blur-sm"
                        : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-white/30 dark:hover:bg-white/15"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
