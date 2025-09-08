import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import CareerTimeline from '@/components/sections/CareerTimeline';

export const metadata: Metadata = {
  title: 'About - Vishvendra Singh Khangarot',
  description: 'Learn more about Vishvendra Singh Khangarot, Senior Full-Stack Developer with 7+ years of experience in React.js, Angular, Node.js, and mobile development.',
};

export default function About() {
  return (
    <div className="pt-16">
      <AboutSection />
      <CareerTimeline />
    </div>
  );
}
