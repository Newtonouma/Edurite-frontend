import Navbar from './components/Navbar/navbar';
import Heros from './components/Heros';
import PosShowcase from './components/PosShowcase';
import FeatureSection from './components/FeatureSection';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/cta/cta';
import TestimonialSection from './components/TestimonialSection';
import FAQsSection from './components/faqs/faqs';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Heros />
      <PosShowcase />
      <FeatureSection />
      <AudienceSection />
      <PricingSection />
      <CTASection />
      <TestimonialSection />
      <FAQsSection />
      <Footer />
    </>
  );
}

export default App;