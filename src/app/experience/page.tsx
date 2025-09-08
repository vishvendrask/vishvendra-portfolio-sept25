import { Metadata } from 'next';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Experience - Vishvendra Singh Khangarot',
  description: 'Professional experience including work at IBM, Google projects, DBS Bank, and other leading companies. 7+ years in software development.',
};

export default function Experience() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <ExperienceSection />
      </div>
    </PageTransition>
  );
}
