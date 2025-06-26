import Heros from '../components/heros/Heros';
import PosShowcase from '../components/posShowcase/PosShowcase';
import FeatureSection from '../components/features/FeatureSection';
import AudienceSection from '../components/audience/AudienceSection';
import PricingSection from '../components/princing/PricingSection';
import CTASection from '../components/cta/cta';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import FAQsSection from '../components/faqs/faqs';
import CtaMessageSection from '../components/cta/CtaMessageSection';

function App() {
  return (
    <>
      <Heros />
      <PosShowcase />
      <FeatureSection />
      <AudienceSection />
      <PricingSection />
      <CTASection />
      <TestimonialSection />
      <FAQsSection />
      <CtaMessageSection />
    </>
  );
}

export default App;