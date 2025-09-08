import { Metadata } from 'next';
import CertificatesSection from '@/components/sections/CertificatesSection';

export const metadata: Metadata = {
  title: 'Certificates - Vishvendra Singh Khangarot',
  description: 'Professional certifications in React.js, Android development, and programming from Coursera, HKUST, and other institutions.',
};

export default function Certificates() {
  return (
    <div className="pt-16">
      <CertificatesSection />
    </div>
  );
}
