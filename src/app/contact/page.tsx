import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Contact - Vishvendra Singh Khangarot',
  description: 'Get in touch with Vishvendra Singh Khangarot. Available for new opportunities and interesting projects.',
};

export default function Contact() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
