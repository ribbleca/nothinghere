import { Variants } from 'framer-motion';

/**
 * Advanced animation utilities for the Digital DNA Portfolio
 * Features custom easing functions, complex animation sequences,
 * and performance-optimized motion variants
 */

// Custom easing functions for organic, DNA-inspired movement
export const easings = {
  dnaHelix: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  neuralPulse: [0.4, 0, 0.2, 1] as [number, number, number, number],
  organicBounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  smoothGlide: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  sharpEntry: [0.55, 0, 0.1, 1] as [number, number, number, number],
  gentleExit: [0.25, 0, 0.5, 1] as [number, number, number, number],
  elasticOut: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
  backOut: [0.34, 1.56, 0.64, 1] as [number, number, number, number]
};

// Page transition variants
export const pageTransitions: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    filter: 'blur(10px)'
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easings.smoothGlide,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -20,
    filter: 'blur(10px)',
    transition: {
      duration: 0.5,
      ease: easings.gentleExit
    }
  }
};

// Hero section animations with DNA-inspired movement
export const heroAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  },
  titleWord: {
    initial: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transformPerspective: 1000
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: easings.organicBounce
      }
    }
  },
  subtitle: {
    initial: {
      opacity: 0,
      x: -30,
      filter: 'blur(5px)'
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: easings.smoothGlide,
        delay: 0.5
      }
    }
  },
  description: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easings.elasticOut,
        delay: 0.8
      }
    }
  },
  cta: {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateZ: -5
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: easings.backOut,
        delay: 1.1
      }
    }
  }
};

// Card animations with hover states
export const cardAnimations = {
  container: {
    initial: {
      opacity: 0,
      y: 60,
      rotateY: -15,
      transformPerspective: 1000
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: easings.smoothGlide
      }
    },
    hover: {
      y: -8,
      rotateY: 5,
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      transition: {
        duration: 0.3,
        ease: easings.neuralPulse
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  }
};

// Skills visualization with neural network effect
export const skillsAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  },
  skillItem: {
    initial: {
      opacity: 0,
      scale: 0,
      rotateZ: -180
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: easings.elasticOut
      }
    },
    hover: {
      scale: 1.1,
      rotateZ: 360,
      transition: {
        duration: 0.5,
        ease: easings.organicBounce
      }
    }
  },
  progressBar: {
    initial: { scaleX: 0, originX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: easings.smoothGlide,
        delay: 0.5
      }
    }
  }
};

// Project showcase with 3D transforms
export const projectAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  },
  projectCard: {
    initial: {
      opacity: 0,
      z: -100,
      rotateX: -45,
      transformPerspective: 1200
    },
    animate: {
      opacity: 1,
      z: 0,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: easings.backOut
      }
    },
    hover: {
      z: 50,
      rotateX: 5,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: easings.neuralPulse
      }
    }
  }
};

// Digital DNA visualization animations
export const dnaAnimations = {
  helix: {
    animate: {
      rotateY: 360,
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity
      }
    }
  },
  strand: {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: easings.smoothGlide,
        delay: 0.5
      }
    }
  },
  nucleotide: {
    initial: {
      scale: 0,
      opacity: 0,
      rotateZ: -180
    },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: easings.elasticOut,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.3,
      rotateZ: 180,
      transition: {
        duration: 0.3,
        ease: easings.organicBounce
      }
    }
  }
};

// Text reveal animations
export const textAnimations = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  },
  letter: {
    initial: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transformPerspective: 1000
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: easings.backOut
      }
    }
  },
  word: {
    initial: {
      opacity: 0,
      x: -20,
      filter: 'blur(8px)'
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: easings.smoothGlide
      }
    }
  }
};

// Loading and state transitions
export const loadingAnimations = {
  spinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: 'linear',
        repeat: Infinity
      }
    }
  },
  pulse: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        ease: easings.neuralPulse,
        repeat: Infinity
      }
    }
  },
  breathe: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        ease: easings.smoothGlide,
        repeat: Infinity
      }
    }
  }
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInUp: {
    initial: {
      opacity: 0,
      y: 40,
      filter: 'blur(6px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: easings.smoothGlide
      }
    }
  },
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -50,
      rotateY: -15
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: easings.backOut
      }
    }
  },
  slideInRight: {
    initial: {
      opacity: 0,
      x: 50,
      rotateY: 15
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: easings.backOut
      }
    }
  },
  scaleIn: {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateZ: -10
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: easings.elasticOut
      }
    }
  }
};

// Interactive button animations
export const buttonAnimations = {
  primary: {
    initial: {
      scale: 1,
      backgroundPosition: '0% 50%'
    },
    hover: {
      scale: 1.05,
      backgroundPosition: '100% 50%',
      boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)',
      transition: {
        duration: 0.3,
        ease: easings.neuralPulse
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },
  ghost: {
    initial: {
      borderColor: 'rgba(14, 165, 233, 0.3)',
      color: '#0ea5e9'
    },
    hover: {
      borderColor: 'rgba(14, 165, 233, 1)',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: easings.neuralPulse
      }
    },
    tap: {
      scale: 0.98
    }
  }
};

// Utility function to create staggered children animation
export const createStaggerContainer = (staggerDelay = 0.1, delayChildren = 0.2): Variants => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

// Utility function for custom spring animation
export const createSpringAnimation = (
  stiffness = 100,
  damping = 10,
  mass = 1
) => ({
  type: 'spring',
  stiffness,
  damping,
  mass
});

// Neural network connection animation
export const neuralConnections = {
  line: {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: [0, 1, 0.7],
      transition: {
        duration: 2,
        ease: easings.smoothGlide,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  },
  node: {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easings.elasticOut,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }
};