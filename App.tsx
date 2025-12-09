import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Highlights } from './components/sections/Highlights';
import { Gallery } from './components/sections/Gallery';
import { Projects } from './components/sections/Projects';
import { AIConceptGenerator } from './components/AIConceptGenerator';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
        <Button variant="primary" className="!px-8 !py-4 text-base shadow-xl">Explore Projects</Button>
        <Button variant="secondary" className="!px-8 !py-4 text-base shadow-lg">View Gallery</Button>
      </div>
    </div>

    <div className="absolute bottom-8 animate-bounce text-nish-brown/50">
      <ArrowDown size={24} />
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3E9D2] bg-opacity-40 font-body text-nish-brown selection:bg-nish-gold selection:text-white">
      <Header />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-lg shadow-sm border border-nish-ivory">
                <div className="flex-1 space-y-6">
                  <h2 className="font-serif text-3xl text-nish-brown font-bold tracking-wide">ABOUT US</h2>
                  <p className="text-lg leading-relaxed text-nish-grey font-light">
                    Founded by <strong>Vishal Kumar</strong>, Nishkalya is a creative study in visual identity and digital craft. 
                    We build premium branded work rooted in calm, clarity, and detail. Our process values composition, material feel, and slow design that ages well.
                  </p>
                  <Button variant="text" className="!p-0 !text-nish-gold font-bold flex items-center mt-4">
                    Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center p-8 bg-nish-ivory/30 rounded-lg border border-nish-brown/10 w-64 h-64 text-center">
                   <span className="text-4xl mb-4">✨</span>
                   <span className="block font-serif font-bold text-nish-brown tracking-[0.2em] mb-2">PREMIUM</span>
                   <span className="block font-serif font-bold text-nish-brown tracking-[0.2em] mb-2">TIMELESS</span>
                   <span className="block font-serif font-bold text-nish-brown tracking-[0.2em]">CLEAN</span>
                </div>
              </div>
            </section>

            <Highlights />
            <Gallery />
            <Projects />
            
            {/* AI Feature - Branding Muse */}
            <div id="muse" className="scroll-mt-24">
              <AIConceptGenerator />
            </div>

          </main>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;