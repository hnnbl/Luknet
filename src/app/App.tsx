import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <DifferentialsSection />
          <NewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
