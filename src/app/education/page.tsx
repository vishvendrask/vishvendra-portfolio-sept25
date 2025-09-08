import { Metadata } from 'next';
import EducationSection from '@/components/sections/EducationSection';

export const metadata: Metadata = {
  title: 'Education - Vishvendra Singh Khangarot',
  description: 'Educational background including B.Tech in Computer Science from Sir Padampat Singhania University and various achievements.',
};

export default function Education() {
  return (
    <div className="pt-16">
      <EducationSection />
    </div>
  );
}
