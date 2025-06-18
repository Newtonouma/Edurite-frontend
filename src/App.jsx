import Heros from './components/Heros';
import PosShowcase from './components/PosShowcase';
import FeatureSection from './components/FeatureSection';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <>
      <Heros />
      <PosShowcase />
      <FeatureSection />
      <AudienceSection />
      <PricingSection />
      {/* ...other homepage content... */}
    </>
  );
}

export default App;