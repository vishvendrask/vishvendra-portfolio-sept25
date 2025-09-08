import { Metadata } from 'next';
import ProjectsSection from '@/components/sections/ProjectsSection';

export const metadata: Metadata = {
  title: 'Projects - Vishvendra Singh Khangarot',
  description: 'Portfolio of projects including Google TDM, DBS Bank platform, government portals, mobile apps, and enterprise solutions.',
};

export default function Projects() {
  return (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  );
}
