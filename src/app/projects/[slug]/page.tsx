import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study | Vishvendra Singh Khangarot`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects
    .filter(project => project.caseStudy)
    .map((project) => ({
      slug: project.id,
    }));
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = projects.find(p => p.id === params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <div className="pt-16">
      <ProjectCaseStudy project={project} />
    </div>
  );
}
