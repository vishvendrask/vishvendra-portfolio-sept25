'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import ParallaxHeroBackground from '@/components/ParallaxHeroBackground';
import { personalInfo, socialLinks } from '@/data';
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
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ParallaxHeroBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left relative z-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="block text-gray-900 dark:text-white">
                  Hi, I&apos;m
                </span>
                <span className="block gradient-text text-glow">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-700 hover:to-primary-800"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </motion.button>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 dark:text-primary-400 bg-transparent border-2 border-primary-600 dark:border-primary-400 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {social.icon === 'github' && <Github className="w-6 h-6" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-6 h-6" />}
                    {social.icon === 'mail' && <Mail className="w-6 h-6" />}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Floating background elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 opacity-20 blur-xl"
                />
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 opacity-15 blur-lg"
                />

                {/* Profile Image Container */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                >
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Uncomment and update when you have a profile image */}
                  {/* <Image
                    src={personalInfo.profileImage || '/images/profile.jpg'}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link
              href="/about"
              className="flex flex-col items-center text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group"
            >
              <span className="text-sm mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Learn More
              </span>
              <ChevronDown className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
