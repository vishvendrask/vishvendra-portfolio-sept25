import { Metadata } from 'next';
import ExperienceSection from '@/components/sections/ExperienceSection';

export const metadata: Metadata = {
  title: 'Experience - Vishvendra Singh Khangarot',
  description: 'Professional experience including work at IBM, Google projects, DBS Bank, and other leading companies. 7+ years in software development.',
};

export default function Experience() {
  return (
    <div className="pt-16">
      <ExperienceSection />
    </div>
  );
}
