'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Get stored theme or use default (dark)
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    const initialTheme = storedTheme || defaultTheme;
    
    // Apply theme immediately
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
    
    // Update state
    setTheme(initialTheme);
  }, [storageKey, defaultTheme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      const root = window.document.documentElement;
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      
      // Add new theme class
      root.classList.add(theme);
      
      // Store preference
      localStorage.setItem(storageKey, theme);
      
      // Update state
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

// Convenience hook for toggling
export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return toggle;
};
