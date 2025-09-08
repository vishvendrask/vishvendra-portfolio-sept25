'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { experiences } from '@/data';
import { formatDate, calculateDuration } from '@/lib/utils';
import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              Work <span className="gradient-text">Experience</span>
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
              My professional journey and the amazing companies I&apos;ve had the privilege to work with.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary-600 to-purple-600 h-full rounded-full" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {experiences.length}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Companies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  3+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  15+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Technologies Used</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ExperienceCard({ 
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-8 h-8 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full shadow-lg"
        />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
        isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
      }`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center mb-2">
                <motion.h4
                  whileHover={{ scale: 1.05 }}
                  className="text-lg font-semibold text-primary-600 dark:text-primary-400 mr-2 cursor-pointer"
                >
                  {experience.company}
                </motion.h4>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
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

            {/* Company Logo */}
            {experience.companyLogo && (
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                {/* Placeholder for company logo */}
                <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                  {experience.company.charAt(0)}
                </div>
                {/* Uncomment when you have company logos */}
                {/* <Image
                  src={experience.companyLogo}
                  alt={experience.company}
                  width={48}
                  height={48}
                  className="rounded-lg"
                /> */}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3 mb-6">
            {experience.description.map((item: string, itemIndex: number) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used:
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
