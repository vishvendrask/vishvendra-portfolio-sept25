import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import QuickLinks from '@/components/sections/QuickLinks';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative">
        {/* Hero section - background handled by layout */}
        <div className="relative z-10">
          <HeroSection />
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