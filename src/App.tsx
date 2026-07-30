import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Skills from './components/Skills';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Publications />
          <Awards />
          <Skills />
          <CVSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
