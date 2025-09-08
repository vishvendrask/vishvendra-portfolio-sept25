'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Code, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/data';

const highlights = [
  {
    icon: Code,
    title: "7+ Years Experience",
    description: "Senior Full-Stack Developer with expertise in React.js, Angular, and Node.js",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Enterprise Clients",
    description: "Worked with global clients including Google and DBS Bank",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Award,
    title: "Best Developer 2020",
    description: "Recognized for outstanding contributions to government projects",
    color: "from-yellow-500 to-yellow-600"
  }
];

export default function AboutPreview() {
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"
            />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <AnimatedSection animation="slideRight">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Building Digital Excellence
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                <p>
                  {personalInfo.bio}
                </p>
                
                <p>
                  Throughout my career, I've led teams, architected scalable solutions, and delivered 
                  high-impact projects across diverse industries including banking, government, and technology.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Highlights */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
