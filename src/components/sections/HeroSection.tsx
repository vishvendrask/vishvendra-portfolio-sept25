'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/PageTransition';
import Image from 'next/image';

export default function HeroSection() {

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/Vishvendra resume data.pdf';
    link.download = 'Vishvendra_Khangarot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <SlideInLeft className="text-center lg:text-left">
            <StaggerContainer>
              <StaggerItem>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="block text-gray-900 dark:text-white transition-colors duration-500">
                    Hi, I&apos;m
                  </span>
                  <span className="block gradient-text text-glow">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-500">
                  {personalInfo.title}
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-500">
                  {personalInfo.bio}
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    onClick={handleDownloadCV}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download CV
                  </motion.button>
                  
                  <Link href="/contact">
                    <motion.button
                      className="group border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 group-hover:animate-pulse" />
                      Get In Touch
                    </motion.button>
                  </Link>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex justify-center lg:justify-start gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                    >
                      {social.platform === 'GitHub' && <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />}
                      {social.platform === 'LinkedIn' && <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />}
                    </motion.a>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </SlideInLeft>

          {/* Profile Image */}
          <SlideInRight className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Floating background elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-4 bg-gradient-to-l from-purple-400 to-pink-500 rounded-full blur-2xl opacity-15"
              />

              {/* Profile image container */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-2 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  <Image
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white font-bold text-lg">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-white font-bold text-lg">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -left-8 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  x: [0, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <span className="text-white font-bold text-sm">💻</span>
              </motion.div>
            </div>
          </SlideInRight>
        </div>

        {/* Scroll indicator */}
        <FadeInUp delay={2} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link 
            href="#about" 
            className="group flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            <motion.span 
              className="text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Learn More
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}