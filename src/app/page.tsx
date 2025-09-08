import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import QuickLinks from '@/components/sections/QuickLinks';
import GlobalBackground from '@/components/GlobalBackground';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative">
        {/* Hero section gets its own enhanced background */}
        <div className="relative min-h-screen">
          <GlobalBackground variant="hero" intensity="high" />
          <div className="relative z-10">
            <HeroSection />
          </div>
        </div>
        
        {/* Other sections */}
        <div className="relative z-10">
          <AboutPreview />
          <QuickLinks />
        </div>
      </div>
    </PageTransition>
  );
}