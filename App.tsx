import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/Button';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { Gallery } from './components/sections/Gallery';
import { Projects } from './components/sections/Projects';
import { AIConceptGenerator } from './components/AIConceptGenerator';
import { ArrowDown } from 'lucide-react';

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
  <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 mb-16 overflow-hidden">
    {/* Background Texture Element */}
    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
       <div className="absolute top-10 left-10 w-64 h-64 bg-nish-brown rounded-full blur-[100px]"></div>
       <div className="absolute bottom-10 right-10 w-96 h-96 bg-nish-gold rounded-full blur-[120px]"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <div className="w-20 h-20 md:w-28 md:h-28 mx-auto bg-nish-brown rounded-full flex items-center justify-center text-nish-gold border-2 border-nish-gold shadow-2xl mb-6">
          <span className="text-4xl md:text-5xl">🕉️</span>
      </div>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-nish-brown tracking-tighter leading-none">
        NISHKALYA
      </h1>
      <p className="font-serif italic text-xl md:text-2xl text-nish-grey max-w-2xl mx-auto">
        Power in Stillness — Handcrafted & Premium
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
        <a href="#/projects">
          <Button variant="primary" className="!px-8 !py-4 text-base shadow-xl">Explore Projects</Button>
        </a>
        <a href="#/gallery">
          <Button variant="secondary" className="!px-8 !py-4 text-base shadow-lg">View Gallery</Button>
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 animate-bounce text-nish-brown/50">
      <ArrowDown size={24} />
    </div>
  </section>
);

// Layout wrapper for inner pages
const PageLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 min-h-[60vh]">
          {title && (
            <div className="mb-8 border-b border-nish-brown/10 pb-4">
              <h1 className="font-serif text-4xl md:text-5xl text-nish-brown font-bold tracking-tight">{title}</h1>
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

const HomePage: React.FC = () => (
  <>
    <Hero />
    <div className="max-w-7xl mx-auto px-4 md:px-6">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 space-y-16">
            <About />
            <div className="text-center py-12">
               <h3 className="font-serif text-2xl text-nish-brown mb-4">Discover More</h3>
               <div className="flex justify-center gap-4">
                 <a href="#/highlights"><Button variant="outline">Highlights</Button></a>
                 <a href="#/projects"><Button variant="outline">Projects</Button></a>
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