'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useDynamicGreeting } from '@/hooks/useDynamicGreeting';
import { heroAnimations } from '@/utils/animations';
import { personalData } from '@/data/personal';

/**
 * Revolutionary Hero Section - Digital DNA Portfolio
 * 
 * Features:
 * - AI-powered dynamic greetings
 * - Immersive 3D DNA helix animation
 * - Parallax scrolling effects
 * - Dynamic status updates
 * - Interactive elements
 * - Responsive design with wow factor
 * 
 * Reasoning:
 * This component serves as the first impression and sets the tone for the entire
 * portfolio experience. The AI-powered greeting creates personal connection,
 * while the Digital DNA visualization metaphorically represents Adna's unique
 * creative and technical makeup.
 */

interface DNAStrand {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Dynamic greeting system
  const greetingData = useDynamicGreeting();
  
  // DNA animation state
  const [dnaStrands, setDnaStrands] = useState<DNAStrand[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Initialize DNA strands
  useEffect(() => {
    const generateDNAStrands = (): DNAStrand[] => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        color: ['#0ea5e9', '#d946ef', '#f97316'][Math.floor(Math.random() * 3)],
        speed: Math.random() * 2 + 1
      }));
    };

    setDnaStrands(generateDNAStrands());
  }, []);

  // Rotating quotes effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => 
        (prev + 1) % personalData.heroQuotes.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // DNA animation loop
  useEffect(() => {
    const animateStrands = () => {
      setDnaStrands(strands => 
        strands.map(strand => ({
          ...strand,
          y: (strand.y + strand.speed * 0.1) % 100,
          x: strand.x + Math.sin(Date.now() * 0.001 + strand.id) * 0.1
        }))
      );
    };

    const animation = setInterval(animateStrands, 50);
    return () => clearInterval(animation);
  }, []);

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Dynamic DNA Background */}
      <div className="absolute inset-0 perspective-2000">
        <motion.div
          className="absolute inset-0"
          style={{ scale }}
        >
          {dnaStrands.map((strand) => (
            <motion.div
              key={strand.id}
              className="absolute rounded-full opacity-20 blur-sm"
              style={{
                left: `${strand.x}%`,
                top: `${strand.y}%`,
                width: `${strand.size}px`,
                height: `${strand.size}px`,
                backgroundColor: strand.color,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: strand.id * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 dark:from-slate-950/90 dark:via-slate-900/95 dark:to-blue-950/90" />

      {/* Main Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={heroAnimations.container}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* AI-Powered Greeting */}
          <motion.div
            variants={heroAnimations.subtitle}
            className="mb-6"
          >
            <div className="glass rounded-full px-6 py-3 inline-flex items-center gap-3 mb-4">
              <SparklesIcon className="w-5 h-5 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {greetingData.greeting} • {greetingData.currentTime} • {greetingData.dynamicStatus}
              </span>
            </div>
            
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              key={greetingData.personalMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {greetingData.personalMessage}
            </motion.p>
          </motion.div>

          {/* Main Title */}
          <motion.div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold mb-4"
              variants={heroAnimations.titleWord}
            >
              <span className="gradient-text">
                {personalData.fullName.split(' ').map((word, index) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    variants={heroAnimations.titleWord}
                    custom={index}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300"
              variants={heroAnimations.subtitle}
            >
              {personalData.title}
            </motion.h2>
          </motion.div>

          {/* Dynamic Tagline */}
          <motion.div 
            className="mb-8"
            variants={heroAnimations.description}
          >
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              &ldquo;{personalData.heroQuotes[currentQuoteIndex]}&rdquo;
            </motion.p>
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={heroAnimations.cta}
          >
            <motion.button
              className="dna-button group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Universe
                <SparklesIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>

          {/* Dynamic Status Bar */}
          <motion.div 
            className="glass rounded-2xl p-6 max-w-md mx-auto"
            variants={heroAnimations.description}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Current Status
              </span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">
              {greetingData.currentFocus}
            </p>
            
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>Energy Level</span>
              <span className="font-mono">{greetingData.energyLevel}%</span>
            </div>
            
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${greetingData.energyLevel}%` }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-500 transition-colors group"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium group-hover:text-blue-500 transition-colors">
              Discover More
            </span>
            <ChevronDownIcon className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </div>
        </motion.button>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 mix-blend-multiply" />
      </div>
    </motion.section>
  );
}