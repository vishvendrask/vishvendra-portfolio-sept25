import { Metadata } from 'next';
import SkillsSection from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Skills - Vishvendra Singh Khangarot',
  description: 'Explore my technical skills including React.js, Angular, Node.js, Android development, and more. 7+ years of expertise in frontend and backend technologies.',
};

export default function Skills() {
  return (
    <div className="pt-16">
      <SkillsSection />
    </div>
  );
}
