import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/Button';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { Gallery } from './components/sections/Gallery';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Admin } from './components/sections/Admin';
import { AIConceptGenerator } from './components/AIConceptGenerator';
import { ArrowDown, Construction } from 'lucide-react';

// Simple hash router hook
const useHashPath = () => {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return path;
};

const Hero: React.FC = () => (
  <section className="relative min-h-[85vh] md:min-h-[85dvh] flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-white/40 to-nish-ivory/20">
    {/* Background Texture Element - Subtle parallax effect */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
       <div className="absolute top-20 left-0 w-72 h-72 md:w-96 md:h-96 bg-nish-brown rounded-full blur-[120px] opacity-5 animate-pulse"></div>
       <div className="absolute -bottom-20 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-nish-gold rounded-full blur-[150px] opacity-4 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto space-y-8 md:space-y-12">
      {/* Icon - Animated entrance */}
      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-nish-brown to-nish-brown/80 rounded-full flex items-center justify-center text-nish-gold border-2 border-nish-gold/40 shadow-luxury-lg mb-8 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
        <span className="text-2xl md:text-4xl">🕉️</span>
      </div>

      {/* Hero Title with staggered animation */}
      <div className="space-y-6">
        <h1
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-nish-brown tracking-tighter leading-tight animate-fadeInUp"
          style={{ animationDelay: '100ms' }}
        >
          NISHKALYA
        </h1>
        <p className="font-serif italic text-lg md:text-xl text-nish-gold/80 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
          निष्कालय
        </p>
      </div>

      {/* Tagline and description */}
      <div className="space-y-4 max-w-2xl mx-auto px-4 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <p className="font-serif italic text-base md:text-xl text-nish-grey leading-relaxed">
          Power in Stillness — Crafted with Śuddhatā & Precision
        </p>
        <p className="font-body text-sm md:text-base text-nish-grey/85 leading-relaxed font-light">
          A sanctuary of thoughtfully built digital solutions, blending modern engineering with the calm clarity of ancient design wisdom.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fadeInUp" style={{ animationDelay: '250ms' }}>
        <a href="#/projects">
          <Button variant="primary" className="!px-8 !py-3 md:!py-4 text-sm md:text-base shadow-luxury-lg hover:shadow-luxury-hover transition-all duration-300 w-full sm:w-auto">
            Explore Projects
          </Button>
        </a>
        <a href="#/about">
          <Button variant="outline" className="!px-8 !py-3 md:!py-4 text-sm md:text-base border-2 border-nish-brown hover:bg-nish-brown hover:text-white transition-all duration-300 w-full sm:w-auto">
            Our Story
          </Button>
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 animate-bounce text-nish-brown/40 hover:text-nish-brown/60 transition-colors cursor-pointer">
      <ArrowDown size={24} />
    </div>
  </section>
);

// Layout wrapper for inner pages
const PageLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-16 sm:pt-24 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
        <main className="lg:col-span-8 min-h-[60vh]">
          {title && (
            <div className="mb-6 sm:mb-8 border-b border-nish-brown/10 pb-4">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-nish-brown font-bold tracking-tight">{title}</h1>
            </div>
          )}
          {children}
        </main>
        <aside className="lg:col-span-4 hidden lg:block">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

// Placeholder Project Detail
const ProjectDetail: React.FC = () => {
  const projectId = window.location.hash.split('/').pop() || '';
  const formattedTitle = projectId.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="bg-white p-6 md:p-12 rounded-lg shadow-sm border border-nish-ivory text-center py-20 md:py-32 animate-in fade-in zoom-in duration-500 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-nish-brown via-nish-gold to-nish-brown"></div>
       <div className="w-16 h-16 md:w-20 md:h-20 bg-nish-ivory/50 rounded-full flex items-center justify-center mx-auto mb-6">
         <Construction className="w-8 h-8 md:w-10 md:h-10 text-nish-gold" />
       </div>
       <h2 className="font-serif text-2xl md:text-3xl text-nish-brown mb-2 font-bold">{formattedTitle}</h2>
       <p className="font-sans text-xs md:text-sm text-nish-gold uppercase tracking-widest mb-6">Case Study Coming Soon</p>
       <p className="text-nish-grey max-w-md mx-auto mb-8 leading-relaxed text-sm md:text-base">
         We are currently documenting the intricate details, code architecture, and design decisions for <strong>{formattedTitle}</strong>. The full case study will be available shortly.
       </p>
       <a href="#/projects">
         <Button variant="outline">Back to Projects</Button>
       </a>
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          <main className="lg:col-span-8 space-y-12 sm:space-y-16">
            <About />
            <div className="text-center py-8 sm:py-12">
               <h3 className="font-serif text-xl sm:text-2xl text-nish-brown mb-4">Discover More</h3>
               <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                 <a href="#/highlights" className="w-full sm:w-auto"><Button variant="outline" fullWidth className="sm:w-auto">Highlights</Button></a>
                 <a href="#/projects" className="w-full sm:w-auto"><Button variant="outline" fullWidth className="sm:w-auto">Projects</Button></a>
               </div>
            </div>
            <AIConceptGenerator />
          </main>
          <aside className="lg:col-span-4 hidden lg:block">
            <Sidebar />
          </aside>
       </div>
    </div>
  </>
);

const App: React.FC = () => {
  const path = useHashPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  let Content = <HomePage />;
  if (path === '/' || path === '') {
    Content = <HomePage />;
  } else if (path === '/about') {
    Content = <PageLayout title="Our Story"><About /></PageLayout>;
  } else if (path === '/highlights') {
    Content = <PageLayout title="Highlights"><Highlights /></PageLayout>;
  } else if (path === '/gallery') {
    Content = <PageLayout title="Gallery"><Gallery /></PageLayout>;
  } else if (path === '/projects') {
    Content = <PageLayout title="Projects"><Projects /></PageLayout>;
  } else if (path === '/contact') {
    Content = <PageLayout title="Contact"><Contact /></PageLayout>;
  } else if (path === '/admin') {
    Content = <PageLayout title="Backend Admin"><Admin /></PageLayout>;
  } else if (path.startsWith('/project/')) {
    Content = <PageLayout title="Project Detail"><ProjectDetail /></PageLayout>;
  }

  return (
    <div className="min-h-screen bg-[#F3E9D2] bg-opacity-40 font-body text-nish-brown selection:bg-nish-gold selection:text-white flex flex-col justify-between">
      <Header />
      {Content}
      <Footer />
    </div>
  );
};

export default App;