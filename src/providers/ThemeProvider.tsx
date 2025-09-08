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
  theme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Get stored theme or system preference
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
    
    const initialTheme = storedTheme || systemTheme;
    
    // Apply theme immediately
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
    
    // Update state
    setTheme(initialTheme);
  }, [storageKey]);

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
