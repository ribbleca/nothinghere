// Personal data for Adna Fika Agestifanka
// This file contains all the content and data for the Digital DNA Portfolio

export interface PersonalData {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  socialLinks: SocialLink[];
  avatar: string;
  heroQuotes: string[];
  about: AboutSection;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  blog: BlogPost[];
  philosophy: string[];
  funFacts: string[];
  currentFocus: string[];
  digitalDna: DigitalDnaData;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  platform: string;
}

export interface AboutSection {
  journey: JourneyMilestone[];
  values: string[];
  interests: string[];
  personalQuote: string;
  vision: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  highlight: boolean;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  experience: string;
  category: string;
  icon?: string;
  description?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: 'work' | 'education' | 'volunteer';
  current: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  category: string;
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  impact: string;
  learnings: string[];
  challenges: string[];
  date: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  icon: string;
  organization?: string;
  certificateUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  relationship: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured: boolean;
  image: string;
  slug: string;
}

export interface DigitalDnaData {
  personalityTraits: PersonalityTrait[];
  creativeElements: CreativeElement[];
  workingStyle: WorkingStyleData;
  inspiration: InspirationSource[];
  currentMood: string;
  energyLevel: number;
  focusAreas: string[];
}

export interface PersonalityTrait {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

export interface CreativeElement {
  name: string;
  value: string;
  category: string;
  description: string;
}

export interface WorkingStyleData {
  preferredTime: string;
  environment: string;
  methodology: string[];
  tools: string[];
  musicGenre: string;
}

export interface InspirationSource {
  name: string;
  category: string;
  impact: number;
  description: string;
}

// Main personal data for Adna Fika Agestifanka
export const personalData: PersonalData = {
  name: "Adna",
  fullName: "Adna Fika Agestifanka",
  title: "Digital Innovator & Creative Technologist",
  tagline: "Crafting Digital Experiences That Inspire & Transform",
  bio: "A passionate digital creator who transforms ideas into extraordinary digital experiences. I believe in the power of technology to tell stories, solve problems, and create meaningful connections between people and digital products.",
  location: "Indonesia",
  email: "adna.fika@example.com", // Update with real email
  avatar: "/images/adna-avatar.jpg",
  
  heroQuotes: [
    "Innovation is where creativity meets possibility.",
    "Design is not just what it looks like—it's how it works.",
    "Every pixel tells a story, every interaction creates connection.",
    "Building the future, one line of code at a time."
  ],
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/adnafika",
      icon: "github",
      handle: "@adnafika",
      platform: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adnafika",
      icon: "linkedin",
      handle: "Adna Fika Agestifanka",
      platform: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/adnafika",
      icon: "twitter",
      handle: "@adnafika",
      platform: "twitter"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/adnafika",
      icon: "instagram",
      handle: "@adnafika",
      platform: "instagram"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/adnafika",
      icon: "dribbble",
      handle: "adnafika",
      platform: "dribbble"
    }
  ],
  
  about: {
    journey: [
      {
        year: "2024",
        title: "Digital Innovation Era",
        description: "Pushing boundaries in digital experiences and creative technology",
        highlight: true,
        icon: "rocket"
      },
      {
        year: "2023",
        title: "Creative Expansion",
        description: "Explored new frontiers in UI/UX design and full-stack development",
        highlight: false,
        icon: "paint-brush"
      },
      {
        year: "2022",
        title: "Tech Foundation",
        description: "Built strong foundation in modern web technologies and design principles",
        highlight: false,
        icon: "code"
      },
      {
        year: "2021",
        title: "Digital Journey Begins",
        description: "Started the adventure into the world of digital creation and innovation",
        highlight: false,
        icon: "spark"
      }
    ],
    values: [
      "Innovation through empathy",
      "Quality over quantity",
      "Continuous learning",
      "Collaborative spirit",
      "User-centered design",
      "Sustainable development"
    ],
    interests: [
      "Digital Art & Design",
      "Emerging Technologies",
      "Psychology & UX",
      "Photography",
      "Music Production",
      "Sustainable Tech",
      "AI & Machine Learning",
      "Creative Coding"
    ],
    personalQuote: "I believe that the best digital experiences are born from the intersection of human empathy and technological innovation.",
    vision: "To create digital experiences that not only solve problems but also inspire and empower people to achieve their dreams."
  },
  
  skills: [
    {
      name: "Frontend Development",
      icon: "code",
      color: "#0ea5e9",
      description: "Building beautiful, responsive, and interactive user interfaces",
      skills: [
        { name: "React.js", level: 90, experience: "2+ years", category: "Framework" },
        { name: "Next.js", level: 85, experience: "1.5+ years", category: "Framework" },
        { name: "TypeScript", level: 80, experience: "1+ years", category: "Language" },
        { name: "JavaScript", level: 95, experience: "3+ years", category: "Language" },
        { name: "HTML5", level: 98, experience: "4+ years", category: "Markup" },
        { name: "CSS3", level: 95, experience: "4+ years", category: "Styling" },
        { name: "Tailwind CSS", level: 90, experience: "2+ years", category: "Framework" },
        { name: "Framer Motion", level: 75, experience: "1+ years", category: "Animation" }
      ]
    },
    {
      name: "Design & Creativity",
      icon: "paint-brush",
      color: "#d946ef",
      description: "Crafting beautiful and user-centered digital experiences",
      skills: [
        { name: "UI/UX Design", level: 88, experience: "2+ years", category: "Design" },
        { name: "Figma", level: 85, experience: "2+ years", category: "Tool" },
        { name: "Adobe Creative Suite", level: 80, experience: "3+ years", category: "Tool" },
        { name: "Prototyping", level: 85, experience: "2+ years", category: "Design" },
        { name: "User Research", level: 70, experience: "1+ years", category: "Research" },
        { name: "Visual Design", level: 88, experience: "3+ years", category: "Design" },
        { name: "Design Systems", level: 75, experience: "1+ years", category: "Design" }
      ]
    },
    {
      name: "Backend & Tools",
      icon: "server",
      color: "#f97316",
      description: "Building robust and scalable backend solutions",
      skills: [
        { name: "Node.js", level: 75, experience: "1.5+ years", category: "Runtime" },
        { name: "Python", level: 70, experience: "1+ years", category: "Language" },
        { name: "PostgreSQL", level: 65, experience: "1+ years", category: "Database" },
        { name: "Git", level: 85, experience: "2+ years", category: "Tool" },
        { name: "Docker", level: 60, experience: "6 months", category: "DevOps" },
        { name: "Vercel", level: 80, experience: "1.5+ years", category: "Platform" },
        { name: "Firebase", level: 70, experience: "1+ years", category: "Platform" }
      ]
    }
  ],
  
  experience: [
    {
      title: "Creative Technologist",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description: "Creating innovative digital solutions and helping clients transform their ideas into exceptional digital experiences.",
      highlights: [
        "Developed 15+ unique web applications with focus on user experience",
        "Implemented modern design systems and component libraries",
        "Collaborated with international clients on various creative projects",
        "Mentored junior developers in modern web development practices"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      type: "work",
      current: true
    },
    {
      title: "Frontend Developer",
      company: "Tech Startup",
      location: "Jakarta, Indonesia",
      period: "2022 - 2023",
      description: "Developed user-facing features for a growing fintech platform, focusing on performance and user experience.",
      highlights: [
        "Improved application performance by 40% through optimization",
        "Built responsive components used by 50,000+ users",
        "Collaborated with design team to implement pixel-perfect interfaces",
        "Established frontend testing practices and documentation"
      ],
      technologies: ["React", "Redux", "JavaScript", "SCSS", "Jest"],
      type: "work",
      current: false
    },
    {
      title: "Computer Science",
      company: "Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "2020 - 2024",
      description: "Focused on software engineering, human-computer interaction, and digital innovation.",
      highlights: [
        "GPA: 3.8/4.0",
        "Thesis on 'AI-Powered User Experience Optimization'",
        "Active in programming competitions and hackathons",
        "Founded university tech community with 200+ members"
      ],
      technologies: ["Java", "Python", "C++", "Machine Learning", "Databases"],
      type: "education",
      current: false
    }
  ],
  
  projects: [
    {
      id: "digital-dna-portfolio",
      title: "Digital DNA Portfolio",
      description: "Revolutionary personal portfolio with AI-powered interactions and immersive storytelling",
      longDescription: "A groundbreaking portfolio website that redefines personal branding through interactive storytelling, AI-powered features, and innovative user experiences. Built with Next.js 14 and cutting-edge technologies.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS", "AI Integration"],
      features: [
        "AI-powered greeting system",
        "Interactive Digital DNA visualization",
        "Immersive storytelling experience",
        "Advanced animations and micro-interactions",
        "Dark/light mode with smooth transitions",
        "Responsive design for all devices"
      ],
      status: "completed",
      featured: true,
      category: "Personal Branding",
      image: "/projects/digital-dna-portfolio.jpg",
      gallery: ["/projects/dna-1.jpg", "/projects/dna-2.jpg", "/projects/dna-3.jpg"],
      liveUrl: "https://adna-portfolio.vercel.app",
      githubUrl: "https://github.com/adnafika/digital-dna-portfolio",
      impact: "Set new standards for personal portfolio websites in Indonesia",
      learnings: ["Advanced animation techniques", "AI integration", "Performance optimization"],
      challenges: ["Creating unique user experiences", "Performance with complex animations"],
      date: "2024-01"
    },
    {
      id: "ecommerce-platform",
      title: "NextGen E-Commerce Platform",
      description: "Modern e-commerce solution with AI recommendations and seamless checkout",
      longDescription: "A comprehensive e-commerce platform featuring AI-powered product recommendations, advanced search capabilities, and streamlined checkout process.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      features: [
        "AI-powered product recommendations",
        "Advanced search and filtering",
        "Real-time inventory management",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Mobile-first responsive design"
      ],
      status: "completed",
      featured: true,
      category: "E-Commerce",
      image: "/projects/ecommerce-platform.jpg",
      gallery: ["/projects/ecom-1.jpg", "/projects/ecom-2.jpg"],
      githubUrl: "https://github.com/adnafika/nextgen-ecommerce",
      impact: "Increased client's online sales by 300%",
      learnings: ["Full-stack development", "Payment integration", "Performance optimization"],
      challenges: ["Scalability", "Security implementation"],
      date: "2023-09"
    },
    {
      id: "design-system",
      title: "Aurora Design System",
      description: "Comprehensive design system with React components and design tokens",
      longDescription: "A complete design system featuring reusable components, design tokens, and documentation for consistent user experiences across multiple products.",
      technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Figma"],
      features: [
        "50+ reusable components",
        "Design tokens system",
        "Comprehensive documentation",
        "Accessibility-first approach",
        "Dark/light theme support",
        "Figma design kit integration"
      ],
      status: "in-progress",
      featured: true,
      category: "Design System",
      image: "/projects/design-system.jpg",
      gallery: ["/projects/design-1.jpg", "/projects/design-2.jpg"],
      githubUrl: "https://github.com/adnafika/aurora-design-system",
      liveUrl: "https://aurora-design-system.vercel.app",
      impact: "Improved development speed by 60% across teams",
      learnings: ["Design system architecture", "Component API design"],
      challenges: ["Consistency across platforms", "Adoption strategies"],
      date: "2023-06"
    }
  ],
  
  achievements: [
    {
      title: "Best UI/UX Design",
      description: "Won first place in National Design Competition for innovative mobile app interface",
      date: "2023-11",
      category: "Design",
      icon: "trophy",
      organization: "Indonesian Design Association"
    },
    {
      title: "Frontend Developer Certification",
      description: "Advanced certification in modern frontend development practices",
      date: "2023-08",
      category: "Certification",
      icon: "certificate",
      organization: "Meta",
      certificateUrl: "https://example.com/certificate"
    },
    {
      title: "Hackathon Winner",
      description: "First place in 48-hour hackathon for AI-powered education platform",
      date: "2023-05",
      category: "Competition",
      icon: "code",
      organization: "TechCrunch Disrupt Jakarta"
    }
  ],
  
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Adna's ability to translate complex ideas into beautiful, functional interfaces is remarkable. Her attention to detail and user-centered approach consistently delivers exceptional results.",
      avatar: "/testimonials/sarah.jpg",
      rating: 5,
      relationship: "Collaborator"
    },
    {
      name: "David Chen",
      role: "Senior Developer",
      company: "StartupXYZ",
      content: "Working with Adna has been an incredible experience. Her technical skills combined with creative vision make her a standout developer. Highly recommended!",
      avatar: "/testimonials/david.jpg",
      rating: 5,
      relationship: "Team Member"
    },
    {
      name: "Lisa Anderson",
      role: "Design Director",
      company: "Creative Agency",
      content: "Adna brings a fresh perspective to every project. Her innovative solutions and collaborative approach have elevated our team's output significantly.",
      avatar: "/testimonials/lisa.jpg",
      rating: 5,
      relationship: "Client"
    }
  ],
  
  blog: [
    {
      id: "future-of-web-design",
      title: "The Future of Web Design: AI-Powered Experiences",
      excerpt: "Exploring how artificial intelligence is reshaping the way we design and build digital experiences.",
      content: "Full blog content here...",
      category: "Design",
      tags: ["AI", "UX", "Future Tech"],
      date: "2024-01-15",
      readTime: 8,
      featured: true,
      image: "/blog/ai-web-design.jpg",
      slug: "future-of-web-design"
    },
    {
      id: "micro-interactions-guide",
      title: "Mastering Micro-Interactions: A Complete Guide",
      excerpt: "Learn how to create delightful user experiences through thoughtful micro-interactions and animations.",
      content: "Full blog content here...",
      category: "Development",
      tags: ["UX", "Animation", "React"],
      date: "2023-12-08",
      readTime: 12,
      featured: true,
      image: "/blog/micro-interactions.jpg",
      slug: "micro-interactions-guide"
    }
  ],
  
  philosophy: [
    "Great design is invisible - it just works",
    "Code is poetry written for humans and machines",
    "Innovation happens at the intersection of technology and empathy",
    "The best user experience is the one that doesn't need explanation",
    "Continuous learning is the key to staying relevant in tech"
  ],
  
  funFacts: [
    "Can code for 12 hours straight fueled only by coffee ☕",
    "Has a collection of 50+ design books 📚",
    "Speaks 3 programming languages and 2 human languages 🗣️",
    "Can spot bad UX from across the room 👀",
    "Dreams in wireframes and thinks in components 🎨",
    "Has never met a coding challenge she couldn't solve 💪"
  ],
  
  currentFocus: [
    "Building AI-powered user experiences",
    "Exploring Web3 and blockchain technology",
    "Mentoring aspiring developers",
    "Contributing to open-source projects",
    "Writing about design and development"
  ],
  
  digitalDna: {
    personalityTraits: [
      { name: "Creative", percentage: 95, description: "Constantly generating innovative ideas", color: "#d946ef" },
      { name: "Analytical", percentage: 88, description: "Love solving complex problems", color: "#0ea5e9" },
      { name: "Collaborative", percentage: 92, description: "Thrive in team environments", color: "#f97316" },
      { name: "Perfectionist", percentage: 85, description: "Attention to detail matters", color: "#10b981" },
      { name: "Empathetic", percentage: 90, description: "User-centered approach always", color: "#8b5cf6" }
    ],
    creativeElements: [
      { name: "Favorite Color", value: "#0ea5e9", category: "Visual", description: "Represents trust and innovation" },
      { name: "Design Philosophy", value: "Simplicity", category: "Approach", description: "Less is more, but better" },
      { name: "Coding Style", value: "Clean & Modular", category: "Technical", description: "Readable and maintainable code" },
      { name: "Innovation Level", value: "Disruptive", category: "Mindset", description: "Always pushing boundaries" }
    ],
    workingStyle: {
      preferredTime: "Late Night (10 PM - 2 AM)",
      environment: "Minimalist setup with plants",
      methodology: ["Agile", "Design Thinking", "Test-Driven Development"],
      tools: ["VS Code", "Figma", "Notion", "Linear"],
      musicGenre: "Lo-fi Hip Hop & Ambient"
    },
    inspiration: [
      { name: "Dieter Rams", category: "Design", impact: 95, description: "Good design principles" },
      { name: "Sarah Drasner", category: "Development", impact: 90, description: "Animation and Vue.js expertise" },
      { name: "Nature", category: "General", impact: 85, description: "Organic patterns and systems" },
      { name: "Sci-Fi Movies", category: "Futurism", impact: 80, description: "Vision of future interfaces" }
    ],
    currentMood: "Inspired & Energized",
    energyLevel: 92,
    focusAreas: ["AI Integration", "Performance Optimization", "User Psychology"]
  }
};