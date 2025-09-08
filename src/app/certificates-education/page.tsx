import { Metadata } from 'next';
import EducationSection from '@/components/sections/EducationSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Education & Certifications - Vishvendra Singh Khangarot',
  description: 'Educational background including B.Tech in Computer Science and professional certifications in React.js, Android development, and programming.',
};

export default function CertificatesEducation() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <EducationSection />
        <CertificatesSection />
      </div>
    </PageTransition>
  );
}
