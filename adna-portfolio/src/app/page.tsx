import { HeroSection } from '@/components/sections/HeroSection';

/**
 * Digital DNA Portfolio - Main Page
 * 
 * This is the main entry point for Adna Fika Agestifanka&apos;s revolutionary portfolio.
 * The page demonstrates cutting-edge web development techniques and innovative
 * user experiences that set new standards for personal branding websites.
 * 
 * Key Features Implemented:
 * - AI-powered dynamic greetings
 * - Immersive Digital DNA visualization
 * - Advanced animations with Framer Motion
 * - Responsive design with Tailwind CSS
 * - Dark/light theme system
 * - Performance-optimized components
 * - SEO-friendly structure
 * 
 * Upcoming Features (Full Implementation):
 * - Interactive project showcase
 * - Skills visualization with neural networks
 * - Digital playground tools
 * - Blog integration
 * - Contact form with advanced interactions
 * - Testimonials carousel
 * - Achievement timeline
 * - Digital DNA personality mapper
 */

export default function HomePage() {
  return (
    <>
      {/* Revolutionary Hero Section */}
      <HeroSection />

      {/* Placeholder sections for full implementation */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50 dark:from-neural-900 dark:to-neural-800">
        <div className="section-container text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-neural-600 dark:text-neural-400 mb-8">
              The full Digital DNA experience is being crafted with revolutionary features that will redefine personal portfolios.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white text-xl">🧬</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neural-800 dark:text-neural-200">
                  Digital DNA Mapping
                </h3>
                <p className="text-sm text-neural-600 dark:text-neural-400">
                  Interactive personality and skill visualization
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-secondary-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neural-800 dark:text-neural-200">
                  Interactive Projects
                </h3>
                <p className="text-sm text-neural-600 dark:text-neural-400">
                  Immersive project showcases with live demos
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-accent-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neural-800 dark:text-neural-200">
                  Creative Playground
                </h3>
                <p className="text-sm text-neural-600 dark:text-neural-400">
                  Interactive tools and mini-applications
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-neural-500 dark:text-neural-500 italic">
                This demonstration showcases the foundation of what will be Indonesia&apos;s most innovative portfolio website.
                Each component is built with performance, accessibility, and user experience in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-secondary-50 dark:from-neural-800 dark:to-neural-900">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-12">
              Technical Mastery
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {[
                 { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
                 { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
                 { name: 'UI/UX Design', level: 88, color: 'from-purple-500 to-pink-500' },
                 { name: 'Framer Motion', level: 85, color: 'from-green-500 to-emerald-500' },
                 { name: 'TailwindCSS', level: 92, color: 'from-teal-500 to-blue-500' },
                 { name: 'Creative Coding', level: 87, color: 'from-orange-500 to-red-500' }
               ].map((skill) => (
                <div key={skill.name} className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-4 text-neural-800 dark:text-neural-200">
                    {skill.name}
                  </h3>
                  <div className="relative">
                    <div className="w-full bg-neural-200 dark:bg-neural-700 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="absolute -top-8 right-0 text-sm font-mono text-neural-600 dark:text-neural-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-50 to-accent-50 dark:from-neural-900 dark:to-neural-950">
        <div className="section-container text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-12">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Digital DNA Portfolio',
                  description: 'Revolutionary portfolio with AI-powered interactions',
                  tech: ['Next.js', 'Framer Motion', 'TypeScript'],
                  status: 'Live'
                },
                {
                  title: 'Neural E-Commerce',
                  description: 'AI-powered shopping experience with smart recommendations',
                  tech: ['React', 'Node.js', 'AI/ML'],
                  status: 'Coming Soon'
                },
                {
                  title: 'Aurora Design System',
                  description: 'Comprehensive design system with 50+ components',
                  tech: ['Storybook', 'React', 'Figma'],
                  status: 'In Progress'
                }
                             ].map((project) => (
                <div key={project.title} className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-xl">✨</span>
                    </div>
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-neural-800 dark:text-neural-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-neural-600 dark:text-neural-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent-50 to-white dark:from-neural-950 dark:to-neural-900">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-8">
               Let&apos;s Create Together
             </h2>
            
                           <p className="text-xl text-neural-600 dark:text-neural-400 mb-12">
                 Ready to build something extraordinary? Let&apos;s turn your vision into digital reality.
               </p>
            
            <div className="glass rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                                     <h3 className="text-2xl font-bold mb-4 text-neural-800 dark:text-neural-200">
                     Get In Touch
                   </h3>
                   <p className="text-neural-600 dark:text-neural-400 mb-6">
                     Whether you have a project in mind, want to collaborate, or just say hello, I&apos;d love to hear from you.
                   </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">📧</span>
                      </div>
                      <span className="text-neural-800 dark:text-neural-200">adna.fika@example.com</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🌍</span>
                      </div>
                      <span className="text-neural-800 dark:text-neural-200">Indonesia</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="space-y-4">
                    <button className="dna-button w-full">
                      Start a Project
                    </button>
                    
                    <button className="w-full px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-full font-medium hover:bg-primary-500 hover:text-white transition-all duration-300">
                      View Full Portfolio
                    </button>
                  </div>
                  
                  <p className="text-sm text-neural-500 dark:text-neural-500 mt-6">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
