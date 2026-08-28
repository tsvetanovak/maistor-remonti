import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import TrustSection from './components/TrustSection';
import InquirySection from './components/InquirySection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-foreground font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <BeforeAfterSection />
        <TrustSection />
        <InquirySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
