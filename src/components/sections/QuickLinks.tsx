'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  User, 
  Code, 
  Briefcase, 
  FolderOpen, 
  GraduationCap, 
  Mail,
  ArrowRight 
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const quickLinks = [
  {
    href: '/about',
    title: 'About Me',
    description: 'Learn about my journey, accomplishments, and what drives me',
    icon: User,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    href: '/skills',
    title: 'Skills',
    description: 'Explore my technical expertise and proficiency levels',
    icon: Code,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    href: '/experience',
    title: 'Experience',
    description: 'Professional journey from startups to enterprise companies',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    href: '/projects',
    title: 'Projects',
    description: 'Featured projects and case studies from my portfolio',
    icon: FolderOpen,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    href: '/certificates-education',
    title: 'Education & Certifications',
    description: 'Academic background and professional certifications',
    icon: GraduationCap,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    href: '/contact',
    title: 'Get In Touch',
    description: 'Ready to work together? Let&apos;s start a conversation',
    icon: Mail,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  }
];

export default function QuickLinks() {
  return (
    <section className="py-20 portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-overlay">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Explore My <span className="gradient-text">Portfolio</span>
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
              Discover my journey through different sections of my professional portfolio
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <AnimatedSection
              key={link.href}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group h-full"
              >
                <Link href={link.href} className="block h-full">
                  <div className={`${link.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-primary-200 dark:group-hover:border-primary-800`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
