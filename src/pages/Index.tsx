import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import IntroScreen from '@/components/IntroScreen';
import Navbar from '@/components/Navbar';
import LandingSection from '@/components/LandingSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence>
        {showIntro && <IntroScreen onEnter={handleEnter} />}
      </AnimatePresence>

      <ParticleBackground />
      
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navbar visible={showNavbar} />
            <main>
              <LandingSection />
              <TechStackSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
