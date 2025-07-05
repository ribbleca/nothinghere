import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Font setup with proper optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO-optimized metadata for Adna Fika Agestifanka
export const metadata: Metadata = {
  title: {
    default: "Adna Fika Agestifanka - Digital DNA Portfolio",
    template: "%s | Adna Fika Agestifanka"
  },
  description: "Revolutionary Digital DNA Portfolio of Adna Fika Agestifanka - Creative Technologist & Digital Innovator. Crafting extraordinary digital experiences through cutting-edge technology and innovative design.",
  keywords: [
    "Adna Fika Agestifanka",
    "Digital Portfolio",
    "Creative Technologist",
    "UI/UX Designer",
    "Frontend Developer",
    "Digital Innovation",
    "React Developer",
    "Next.js",
    "Creative Coding",
    "Digital DNA",
    "Interactive Design",
    "Web Development Indonesia"
  ],
  authors: [{ name: "Adna Fika Agestifanka" }],
  creator: "Adna Fika Agestifanka",
  publisher: "Adna Fika Agestifanka",
  metadataBase: new URL("https://adna-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adna-portfolio.vercel.app",
    title: "Adna Fika Agestifanka - Digital DNA Portfolio",
    description: "Revolutionary Digital DNA Portfolio showcasing innovative digital experiences and creative technology solutions.",
    siteName: "Adna Fika Agestifanka Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adna Fika Agestifanka - Digital DNA Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adna Fika Agestifanka - Digital DNA Portfolio",
    description: "Revolutionary Digital DNA Portfolio showcasing innovative digital experiences and creative technology solutions.",
    creator: "@adnafika",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add real verification code
  },
  category: "portfolio",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Theme script to prevent flash of unstyled content
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('adna-portfolio-theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var appliedTheme = theme === 'system' ? systemTheme : (theme || 'system');
      
      if (appliedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
      
      // Set theme color meta tag
      var metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', appliedTheme === 'dark' ? '#0f172a' : '#ffffff');
      }
    } catch (e) {
      console.warn('Theme initialization error:', e);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Color Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme Script */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adna Fika Agestifanka",
              "jobTitle": "Creative Technologist & Digital Innovator",
              "url": "https://adna-portfolio.vercel.app",
              "sameAs": [
                "https://github.com/adnafika",
                "https://linkedin.com/in/adnafika",
                "https://twitter.com/adnafika",
                "https://instagram.com/adnafika"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": "Universitas Indonesia",
              "knowsAbout": [
                "Frontend Development",
                "UI/UX Design",
                "Creative Technology",
                "React.js",
                "Next.js",
                "Digital Innovation"
              ],
              "description": "Creative Technologist specializing in innovative digital experiences and cutting-edge web development solutions."
            })
          }}
        />
      </head>
      <body 
        className={`${inter.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-neural-50 via-white to-primary-50 dark:from-neural-950 dark:via-neural-900 dark:to-primary-950 transition-colors duration-300`}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Main Content */}
        <main id="main-content" className="relative">
          {children}
        </main>
        
        {/* Performance and Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Add analytics scripts here if needed */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Performance monitoring
                  if ('loading' in HTMLImageElement.prototype) {
                    document.documentElement.classList.add('supports-loading');
                  }
                  
                  // Service worker registration for PWA features
                  if ('serviceWorker' in navigator) {
                    window.addEventListener('load', function() {
                      navigator.serviceWorker.register('/sw.js').catch(function() {
                        // Service worker registration failed
                      });
                    });
                  }
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
