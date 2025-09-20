import React from 'react';
import { University, Euro, FileText, Home } from 'lucide-react';
import { Card, Container } from '../ui';
import { motion } from 'framer-motion';
import type { Service } from '../../types';

const services: Service[] = [
  {
    id: 'university-applications',
    title: 'University Applications',
    description: 'Apply to multiple Italian universities with 100% acceptance guarantee to at least one prestigious institution.',
    features: [
      'Multiple university applications',
      'Document preparation',
      'Application tracking',
      'Acceptance guarantee'
    ],
    icon: 'University'
  },
  {
    id: 'scholarship-program',
    title: 'Government Scholarship Program',
    description: 'Secure tuition-free education with €7,000 annual stipend through Italian government programs.',
    features: [
      '€21,000 total scholarship (3 years)',
      'Tuition fee waiver',
      'Living allowance',
      'Government backing'
    ],
    icon: 'Euro'
  },
  {
    id: 'visa-processing',
    title: 'Visa Processing',
    description: 'Complete visa application support with document preparation and submission assistance.',
    features: [
      'Document checklist',
      'Application preparation',
      'Embassy appointment',
      'Follow-up support'
    ],
    icon: 'FileText'
  },
  {
    id: 'settlement-support',
    title: 'Settlement Support',
    description: 'Complete assistance with residence permit, tax code, housing, and university registration in Italy.',
    features: [
      'Residence permit application',
      'Tax code acquisition',
      'Housing assistance',
      'University registration'
    ],
    icon: 'Home'
  }
];

const iconMap = {
  University,
  Euro,
  FileText,
  Home,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Services for Your{' '}
            <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to graduation, we handle everything so you can focus on what matters most - your education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center lg:text-left" padding="lg">
                  <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                    {/* Icon */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose StudyItaly Pro?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Students Placed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;