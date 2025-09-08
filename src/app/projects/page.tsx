import { Metadata } from 'next';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Projects - Vishvendra Singh Khangarot',
  description: 'Portfolio of projects including Google TDM, DBS Bank platform, government portals, mobile apps, and enterprise solutions.',
};

export default function Projects() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
}
