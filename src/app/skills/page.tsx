import { Metadata } from 'next';
import SkillsSection from '@/components/sections/SkillsSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Skills - Vishvendra Singh Khangarot',
  description: 'Explore my technical skills including React.js, Angular, Node.js, Android development, and more. 7+ years of expertise in frontend and backend technologies.',
};

export default function Skills() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <SkillsSection />
      </div>
    </PageTransition>
  );
}
