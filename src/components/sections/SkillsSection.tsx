'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { skills } from '@/data';
import { getSkillColor } from '@/lib/utils';
import { Skill } from '@/types';

const categories = [
  { id: 'all', name: 'All Skills', icon: '🚀' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'database', name: 'Database', icon: '💾' },
  { id: 'tools', name: 'Tools', icon: '🔧' },
  { id: 'languages', name: 'Languages', icon: '📝' },
  { id: 'frameworks', name: 'Frameworks', icon: '🏗️' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              My <span className="gradient-text">Skills</span>
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
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Skills Summary */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.filter(s => s.level >= 90).length}
                </div>
                <p className="text-gray-600 dark:text-gray-300">Expert Level</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.filter(s => s.level >= 80 && s.level < 90).length}
                </div>
                <p className="text-gray-600 dark:text-gray-300">Advanced Level</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.filter(s => s.level >= 70 && s.level < 80).length}
                </div>
                <p className="text-gray-600 dark:text-gray-300">Intermediate Level</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-primary-200 dark:hover:border-primary-800"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {skill.category}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
            {skill.level}%
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative overflow-hidden`}
          >
            {/* Shine effect */}
            <motion.div
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.div>
        </div>
      </div>

      {/* Skill Level Badge */}
      <div className="mt-3 flex justify-end">
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${skill.level >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
            skill.level >= 80 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
            skill.level >= 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
            'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
          }
        `}>
          {skill.level >= 90 ? 'Expert' :
           skill.level >= 80 ? 'Advanced' :
           skill.level >= 70 ? 'Intermediate' : 'Beginner'}
        </span>
      </div>
    </motion.div>
  );
}
