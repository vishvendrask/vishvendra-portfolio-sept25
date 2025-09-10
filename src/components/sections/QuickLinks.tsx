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
    <section id="quick-links" className="py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/90"
            >
              Explore My <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
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
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group h-full"
              >
                <Link href={link.href} className="block h-full">
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 h-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-white/60 group-hover:text-white font-medium group-hover:translate-x-1 transition-all duration-300 text-sm">
                      <span className="mr-1">Explore</span>
                      <ArrowRight className="w-3 h-3" />
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
