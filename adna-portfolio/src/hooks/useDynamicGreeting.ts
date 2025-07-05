'use client';

import { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';

interface GreetingData {
  greeting: string;
  timeContext: string;
  personalMessage: string;
  mood: string;
  energyLevel: number;
  currentFocus: string;
  backgroundContext: string;
}

interface VisitorContext {
  isReturning: boolean;
  visitCount: number;
  lastVisit?: Date;
  referrer?: string;
  timeSpent?: number;
}

/**
 * AI-powered dynamic greeting system
 * Features:
 * - Time-based greetings
 * - Visitor context awareness
 * - Dynamic personal messages
 * - Mood and energy level simulation
 * - Contextual background information
 */
export function useDynamicGreeting() {
  const [visitorContext, setVisitorContext] = useState<VisitorContext>({
    isReturning: false,
    visitCount: 0
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Initialize visitor context
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const visitData = localStorage.getItem('adna-portfolio-visits');
    const lastVisit = localStorage.getItem('adna-portfolio-last-visit');
    
    let context: VisitorContext = {
      isReturning: false,
      visitCount: 1
    };

    if (visitData) {
      const visits = parseInt(visitData, 10);
      context = {
        isReturning: visits > 1,
        visitCount: visits + 1,
        lastVisit: lastVisit ? new Date(lastVisit) : undefined,
        referrer: document.referrer || undefined
      };
    }

    // Update visit data
    localStorage.setItem('adna-portfolio-visits', context.visitCount.toString());
    localStorage.setItem('adna-portfolio-last-visit', new Date().toISOString());

    setVisitorContext(context);
  }, []);

  // Generate greeting data based on context
  const greetingData = useMemo((): GreetingData => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    const isWeekend = day === 0 || day === 6;
    
    // Time-based greeting
    let greeting = 'Hello';
    let timeContext = '';
    
    if (hour >= 5 && hour < 12) {
      greeting = 'Good morning';
      timeContext = 'Perfect time for fresh creativity';
    } else if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon';
      timeContext = 'Hope your day is productive';
    } else if (hour >= 17 && hour < 22) {
      greeting = 'Good evening';
      timeContext = 'Time to unwind and explore';
    } else {
      greeting = 'Working late?';
      timeContext = 'The night is perfect for deep work';
    }

    // Personal message based on visitor context
    let personalMessage = "Welcome to my digital DNA!";
    
    if (visitorContext.isReturning) {
      const messages = [
        "Great to see you again! 🎉",
        "Welcome back, friend! 👋",
        "You're becoming a regular! ❤️",
        "Another visit? I'm honored! ✨",
        "Back for more digital magic? 🪄"
      ];
      personalMessage = messages[Math.floor(Math.random() * messages.length)];
    } else {
      const newVisitorMessages = [
        "Welcome to my creative universe! 🌟",
        "Ready to explore something extraordinary? 🚀",
        "Let's embark on a digital journey! ⭐",
        "Buckle up for an amazing experience! 🎨",
        "Welcome to where creativity meets code! 💫"
      ];
      personalMessage = newVisitorMessages[Math.floor(Math.random() * newVisitorMessages.length)];
    }

    // Mood simulation based on time and day
    let mood = 'Inspired & Energized';
    if (hour >= 22 || hour < 6) {
      mood = 'Focused & Creative';
    } else if (isWeekend) {
      mood = 'Relaxed & Innovative';
    } else if (hour >= 9 && hour < 17) {
      mood = 'Productive & Collaborative';
    }

    // Energy level simulation (70-95%)
    const baseEnergy = 85;
    const timeModifier = hour >= 9 && hour < 17 ? 10 : 0;
    const weekendModifier = isWeekend ? 5 : 0;
    const energyLevel = Math.min(95, baseEnergy + timeModifier + weekendModifier + Math.random() * 5);

    // Current focus based on time and context
    const focusAreas = [
      'Building AI-powered experiences',
      'Exploring creative animations',
      'Optimizing user interactions',
      'Crafting beautiful interfaces',
      'Learning new technologies',
      'Mentoring fellow developers',
      'Contributing to open source'
    ];
    
    let currentFocus = focusAreas[Math.floor(Math.random() * focusAreas.length)];
    if (hour >= 22 || hour < 6) {
      currentFocus = 'Deep focus coding session';
    }

    // Background context
    let backgroundContext = '';
    if (visitorContext.referrer) {
      if (visitorContext.referrer.includes('google')) {
        backgroundContext = 'I see you found me through Google! 🔍';
      } else if (visitorContext.referrer.includes('github')) {
        backgroundContext = 'Coming from GitHub? A fellow developer! 👨‍💻';
      } else if (visitorContext.referrer.includes('linkedin')) {
        backgroundContext = 'LinkedIn brought you here? Let\'s connect! 💼';
      }
    }

    return {
      greeting,
      timeContext,
      personalMessage,
      mood,
      energyLevel: Math.round(energyLevel),
      currentFocus,
      backgroundContext
    };
  }, [currentTime, visitorContext]);

  // Generate dynamic status based on current context
  const dynamicStatus = useMemo(() => {
    const statuses = [
      `Currently ${greetingData.currentFocus.toLowerCase()}`,
      `Mood: ${greetingData.mood}`,
      `Energy: ${greetingData.energyLevel}%`,
      `${format(currentTime, 'EEEE, MMMM do')} vibes`,
      'Ready to create something amazing'
    ];

    return statuses[Math.floor(Date.now() / 10000) % statuses.length];
  }, [greetingData, currentTime]);

  return {
    ...greetingData,
    dynamicStatus,
    visitorContext,
    currentTime: format(currentTime, 'HH:mm')
  };
}