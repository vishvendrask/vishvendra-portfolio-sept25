'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, FileText } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { projects } from '@/data';
import { Project } from '@/types';
import Image from 'next/image';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'api', name: 'APIs' },
  { id: 'other', name: 'Other' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A showcase of my recent work, demonstrating my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Featured Projects Grid */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* All Projects Section */}
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              All Projects
            </h3>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105
                    ${activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

function FeaturedProjectCard({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number; 
  onClick: () => void; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-300 dark:text-gray-600">
          {project.title.charAt(0)}
        </div>
        {/* Uncomment when you have project images */}
        {/* <Image
          src={project.image || '/images/project-placeholder.jpg'}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {project.caseStudy && (
              <Link
                href={`/projects/${project.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                </motion.div>
              </Link>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            <motion.button
              onClick={onClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Featured Badge */}
        <div className="absolute top-4 left-4">
          <span className="flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-medium rounded-full">
            <Star className="w-4 h-4 mr-1" />
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
            >
              <FileText className="w-4 h-4 mr-1" />
              Case Study
            </Link>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number; 
  onClick: () => void; 
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-300 dark:text-gray-600">
          {project.title.charAt(0)}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: Project | null; 
  onClose: () => void; 
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.longDescription || project.description}
            </p>

            {/* Features */}
            {project.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.caseStudy && (
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Case Study
                </Link>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
