'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, GraduationCap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { education } from '@/data';
import { formatDate } from '@/lib/utils';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              My <span className="gradient-text">Education</span>
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
              My academic journey and the institutions that shaped my knowledge and skills.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary-600 to-purple-600 h-full rounded-full" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.id}
                education={edu}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ 
  education: edu, 
  index, 
  isLeft 
}: { 
  education: any; 
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
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-16 h-16 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full shadow-lg flex items-center justify-center"
        >
          <GraduationCap className="w-8 h-8 text-primary-600" />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
        isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
      }`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
              {edu.institution}
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {edu.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </div>
            </div>
            {edu.gpa && (
              <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                <Award className="w-4 h-4 mr-1" />
                GPA: {edu.gpa}
              </div>
            )}
          </div>

          {/* Description */}
          {edu.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {edu.description}
            </p>
          )}

          {/* Achievements */}
          {edu.achievements && edu.achievements.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Key Achievements:
              </h5>
              <div className="space-y-2">
                {edu.achievements.map((achievement: string, achievementIndex: number) => (
                  <motion.div
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
