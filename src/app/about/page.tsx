import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import CareerTimeline from '@/components/sections/CareerTimeline';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'About - Vishvendra Singh Khangarot',
  description: 'Learn more about Vishvendra Singh Khangarot, Senior Full-Stack Developer with 7+ years of experience in React.js, Angular, Node.js, and mobile development.',
};

export default function About() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <AboutSection />
        <CareerTimeline />
      </div>
    </PageTransition>
  );
}
