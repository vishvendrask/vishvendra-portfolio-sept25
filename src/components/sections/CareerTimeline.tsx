'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { experiences } from '@/data';
import { formatDate, calculateDuration } from '@/lib/utils';

const careerMilestones = [
  {
    year: '2017',
    title: 'Started Professional Journey',
    description: 'Began internship at JK Cement Works, UAE',
    highlight: 'International exposure early in career'
  },
  {
    year: '2020',
    title: 'Recognition & Growth',
    description: 'Best Developer of the Year award',
    highlight: 'Outstanding performance in government projects'
  },
  {
    year: '2022',
    title: 'Enterprise Leadership',
    description: 'Joined IBM India as Senior System Engineer',
    highlight: 'Leading teams for Google and DBS Bank projects'
  },
  {
    year: '2024',
    title: 'Current Role',
    description: 'Team Lead for Google Test Data Automation',
    highlight: 'Architecting enterprise-scale solutions'
  }
];

export default function CareerTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
              Career <span className="gradient-text">Journey</span>
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
              From intern to team lead - a journey of continuous growth, learning, and impactful contributions
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Career Milestones */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {careerMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-6 h-full border border-primary-100 dark:border-primary-800">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {milestone.description}
                    </p>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">
                        {milestone.highlight}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < careerMilestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-primary-300 to-purple-300 dark:from-primary-700 dark:to-purple-700" />
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Detailed Experience Timeline */}
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience Timeline
            </h3>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary-600 to-purple-600 h-full rounded-full" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceTimelineCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">7+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">{experiences.length}</div>
                <p className="text-gray-600 dark:text-gray-400">Companies</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <p className="text-gray-600 dark:text-gray-400">Countries</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <p className="text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ExperienceTimelineCard({ 
  experience, 
  index, 
  isLeft 
}: { 
  experience: any; 
  index: number; 
  isLeft: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          className="w-8 h-8 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full shadow-lg flex items-center justify-center"
        >
          <TrendingUp className="w-4 h-4 text-primary-600" />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
        isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
      }`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.title}
            </h3>
            <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
              {experience.company}
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {experience.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </div>
            </div>
            <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              {calculateDuration(experience.startDate, experience.endDate)}
            </div>
          </div>

          <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            <p>{experience.description[0]}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 3).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                +{experience.technologies.length - 3} more
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
