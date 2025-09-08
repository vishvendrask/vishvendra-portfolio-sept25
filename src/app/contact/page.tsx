import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact - Vishvendra Singh Khangarot',
  description: 'Get in touch with Vishvendra Singh Khangarot. Available for new opportunities and interesting projects.',
};

export default function Contact() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
