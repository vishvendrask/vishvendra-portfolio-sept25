import { Metadata } from 'next';
import EducationSection from '@/components/sections/EducationSection';
import CertificatesSection from '@/components/sections/CertificatesSection';

export const metadata: Metadata = {
  title: 'Education & Certifications - Vishvendra Singh Khangarot',
  description: 'Educational background including B.Tech in Computer Science and professional certifications in React.js, Android development, and programming.',
};

export default function CertificatesEducation() {
  return (
    <div className="pt-16">
      <EducationSection />
      <CertificatesSection />
    </div>
  );
}
