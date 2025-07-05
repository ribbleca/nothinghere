'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isLoaded: boolean;
}

/**
 * Custom hook for theme management with system preference detection
 * Features:
 * - Smooth transitions between themes
 * - System preference detection
 * - Local storage persistence
 * - SSR-safe implementation
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>('system');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  // Get system preference
  const getSystemTheme = useCallback((): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Update actual theme based on current theme setting
  const updateActualTheme = useCallback((currentTheme: Theme) => {
    const newActualTheme = currentTheme === 'system' ? getSystemTheme() : currentTheme;
    setActualTheme(newActualTheme);
    
    // Update DOM
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newActualTheme);
      root.setAttribute('data-theme', newActualTheme);
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content', 
          newActualTheme === 'dark' ? '#0f172a' : '#ffffff'
        );
      }
    }
  }, [getSystemTheme]);

  // Set theme with persistence
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    updateActualTheme(newTheme);
    
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('adna-portfolio-theme', newTheme);
    }
  }, [updateActualTheme]);

  // Toggle between light and dark (ignoring system)
  const toggleTheme = useCallback(() => {
    const newTheme = actualTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [actualTheme, setTheme]);

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get saved theme or default to system
    const savedTheme = localStorage.getItem('adna-portfolio-theme') as Theme | null;
    const initialTheme = savedTheme || 'system';
    
    setThemeState(initialTheme);
    updateActualTheme(initialTheme);
    setIsLoaded(true);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateActualTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    theme,
    actualTheme,
    setTheme,
    toggleTheme,
    isLoaded
  };
}