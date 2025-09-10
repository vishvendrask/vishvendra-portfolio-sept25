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
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        {/* Fintopio-style Hero Content */}
        <div className="relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                  <span className="block text-white/90 font-normal text-4xl md:text-5xl lg:text-6xl mb-4">
                    Hi, I&apos;m
                  </span>
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent font-bold">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                </h1>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-16">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80 mb-8 leading-relaxed">
                  {personalInfo.title}
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <motion.button
                  onClick={handleDownloadCV}
                  className="group relative px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.button>
                
                <Link href="/contact">
                  <motion.button
                    className="group relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </motion.button>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  >
                    {social.platform === 'GitHub' && <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />}
                    {social.platform === 'LinkedIn' && <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll indicator */}
        <FadeInUp delay={2} className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Link 
            href="#about" 
            className="group flex flex-col items-center text-white/60 hover:text-white transition-all duration-300"
          >
            <motion.span 
              className="text-sm mb-3 font-medium group-hover:text-white transition-colors duration-300"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Learn More
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}