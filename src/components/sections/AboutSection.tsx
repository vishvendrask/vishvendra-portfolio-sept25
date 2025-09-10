'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo, accomplishments } from '@/data';

const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Enterprise Clients', value: '5+' },
  { label: 'Technologies', value: '15+' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Globe, label: 'Website', value: personalInfo.website?.replace('https://', '') || '', href: personalInfo.website },
];

export default function AboutSection() {
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
              Passionate about creating amazing digital experiences
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <AnimatedSection animation="slideRight">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                Passionate about creating amazing digital experiences
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed text-base">
                <p>
                  I&apos;m a Senior Full-Stack Developer with 7+ years of experience delivering high-performance 
                  web and mobile applications for global clients including Google and DBS Bank. My expertise 
                  spans across React.js, Angular, Node.js, RESTful APIs, and micro-frontend architectures.
                </p>
                
                <p>
                  Throughout my career, I&apos;ve worked on diverse projects ranging from government defense systems 
                  and banking platforms to e-commerce solutions and mobile applications. I&apos;ve been recognized 
                  as Best Developer of the Year 2020 for my outstanding contributions to a confidential 
                  government Android project.
                </p>
                
                <p>
                  My passion lies in creating scalable, efficient solutions that solve real-world problems. 
                  I thrive in collaborative environments and enjoy mentoring fellow developers while staying 
                  current with the latest industry trends and technologies.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6"
              >
                <h4 className="text-lg font-semibold text-white/90 mb-4">
                  What I Do Best:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Full-Stack Web Development',
                    'React.js & Angular Applications',
                    'Micro-Frontend Architecture',
                    'RESTful API Development',
                    'Android App Development',
                    'Performance Optimization',
                    'Team Leadership',
                    'Enterprise Solutions'
                  ].map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center text-white/70 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 flex-shrink-0" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
              <h4 className="text-xl font-bold text-white/90 mb-6">
                Get In Touch
              </h4>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                      <info.icon className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white/90 hover:text-white transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white/90 text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Accomplishments */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white/90 mb-8 text-center">
              Key <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Accomplishments</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {accomplishments.map((accomplishment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {accomplishment}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-white/70 font-medium text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
