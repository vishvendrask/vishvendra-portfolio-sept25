'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Award, Shield } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { certificates } from '@/data';
import { formatDate } from '@/lib/utils';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
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
              <span className="gradient-text">Certificates</span> & Credentials
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
              Professional certifications and credentials that validate my expertise 
              in various technologies and methodologies.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {certificates.length}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Total Certificates</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {new Set(certificates.map(cert => cert.issuer)).size}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Trusted Issuers</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {certificates.filter(cert => cert.expiryDate && new Date(cert.expiryDate) > new Date()).length}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Active Credentials</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CertificateCard({ 
  certificate, 
  index 
}: { 
  certificate: any; 
  index: number;
}) {
  const isExpired = certificate.expiryDate && new Date(certificate.expiryDate) < new Date();
  const isExpiringSoon = certificate.expiryDate && 
    new Date(certificate.expiryDate) > new Date() && 
    new Date(certificate.expiryDate) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
        transition-all duration-300 border border-gray-100 dark:border-gray-700
        ${isExpired ? 'opacity-75' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center mr-3
              ${isExpired ? 'bg-gray-100 dark:bg-gray-700' : 'bg-primary-100 dark:bg-primary-900/30'}
            `}>
              {isExpired ? (
                <Shield className="w-6 h-6 text-gray-400" />
              ) : (
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                {certificate.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {certificate.issuer}
              </p>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex flex-col gap-2">
          {!isExpired && !isExpiringSoon && (
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded-full">
              Active
            </span>
          )}
          {isExpiringSoon && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-medium rounded-full">
              Expiring Soon
            </span>
          )}
          {isExpired && (
            <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium rounded-full">
              Expired
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {certificate.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {certificate.description}
        </p>
      )}

      {/* Skills */}
      {certificate.skills && certificate.skills.length > 0 && (
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Skills Covered:
          </h5>
          <div className="flex flex-wrap gap-1">
            {certificate.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Issued: {formatDate(certificate.issueDate)}</span>
        </div>
        
        {certificate.expiryDate && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              Expires: {formatDate(certificate.expiryDate)}
              {isExpired && <span className="text-red-500 ml-1">(Expired)</span>}
              {isExpiringSoon && <span className="text-yellow-500 ml-1">(Expiring Soon)</span>}
            </span>
          </div>
        )}

        {certificate.credentialId && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium">ID:</span> {certificate.credentialId}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {certificate.credentialUrl && (
          <motion.a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Verify
          </motion.a>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
