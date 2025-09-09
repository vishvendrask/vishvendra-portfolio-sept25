import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import QuickLinks from '@/components/sections/QuickLinks';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Content sections with proper spacing for scroll storytelling */}
        <div className="relative z-10">
          {/* Scene 1 & 2: Hero section during day/transition */}
          <section id="hero" className="min-h-screen flex items-center">
            <HeroSection />
          </section>
          
          {/* Scene 3: About preview during night sky */}
          <section id="about-preview" className="min-h-screen flex items-center">
            <AboutPreview />
          </section>
          
          {/* Scene 4: Quick links with mountains rising */}
          <section id="quick-links" className="min-h-screen flex items-center">
            <QuickLinks />
          </section>
        </div>
      </div>
    </PageTransition>
  );
}