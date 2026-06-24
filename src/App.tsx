import { useState, useEffect } from 'react';

// Components
import Navigation from './components/sections/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        {/* Navigation */}
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/30">
          <AboutSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <ExperienceSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-900/30">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-slate-900/30">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer scrollToSection={scrollToSection} />
      </div>
    </>
  )
}

export default App
