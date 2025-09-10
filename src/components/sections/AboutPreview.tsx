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
    <section id="about" className="py-24 min-h-screen flex items-center">
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
              About <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Building digital excellence through innovative solutions
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="slideRight">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                Building Digital Excellence
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed text-base">
                <p>
                  {personalInfo.bio}
                </p>
                
                <p>
                  Throughout my career, I&apos;ve led teams, architected scalable solutions, and delivered 
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
                  className="group relative px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-lg hover:shadow-xl"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Highlights */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white/90 mb-1 group-hover:text-white transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed text-sm">
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
