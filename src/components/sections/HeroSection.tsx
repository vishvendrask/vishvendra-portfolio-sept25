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
    <section id="hero" className="min-h-screen relative flex items-center justify-center portfolio-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Centered Text Content */}
        <div className="relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                <span className="block">
                  Hi, I&apos;m
                </span>
                <span className="block gradient-text drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-2xl md:text-3xl mb-8 leading-relaxed text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                {personalInfo.title}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                {personalInfo.bio}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <motion.button
                  onClick={handleDownloadCV}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
                
                <Link href="/contact">
                  <motion.button
                    className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  >
                    {social.platform === 'GitHub' && <Github className="w-6 h-6 text-white" />}
                    {social.platform === 'LinkedIn' && <Linkedin className="w-6 h-6 text-white" />}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll indicator */}
        <FadeInUp delay={2} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link 
            href="#about" 
            className="group flex flex-col items-center text-white hover:text-blue-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            <motion.span 
              className="text-sm mb-2 group-hover:text-blue-400 transition-colors duration-300"
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