'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Project } from '@/types';

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { caseStudy } = project;

  if (!caseStudy) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn">
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                >
                  {project.longDescription || project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Project
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
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Timeline</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{caseStudy.timeline}</p>
                    </div>
                    {caseStudy.teamSize && (
                      <div className="text-center">
                        <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{caseStudy.teamSize}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Challenge */}
            <AnimatedSection animation="slideRight">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      The Challenge
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      The Solution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection animation="slideUp">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Key Results
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-300">{result}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Impact */}
            <AnimatedSection animation="fadeIn">
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Project Impact</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {caseStudy.impact}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss how I can help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                View More Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
