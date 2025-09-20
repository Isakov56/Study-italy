import React from 'react';
import { Container } from '../ui';
import { motion } from 'framer-motion';
import type { ProcessStep } from '../../types';

const processSteps: ProcessStep[] = [
  {
    id: 'consultation',
    step: 1,
    title: 'Initial Consultation',
    description: 'Free consultation to assess your profile and discuss your academic goals and preferences for studying in Italy.'
  },
  {
    id: 'selection',
    step: 2,
    title: 'University Selection',
    description: 'Choose from multiple top Italian universities based on your field of study, preferences, and career objectives.'
  },
  {
    id: 'preparation',
    step: 3,
    title: 'Document Preparation',
    description: 'Prepare and submit comprehensive applications to selected universities with our expert guidance.'
  },
  {
    id: 'scholarship',
    step: 4,
    title: 'Scholarship Application',
    description: 'Apply for government programs and scholarships to secure tuition-free education and stipends.'
  },
  {
    id: 'visa',
    step: 5,
    title: 'Visa Processing',
    description: 'Complete visa application and document submission with our comprehensive support and guidance.'
  },
  {
    id: 'arrival',
    step: 6,
    title: 'Arrival Support',
    description: 'Receive assistance with settlement, housing, residence permit, and university registration in Italy.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to Italy in{' '}
            <span className="gradient-text">6 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures your success every step of the way, from initial consultation to your first day at university.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-400 to-blue-600 hidden sm:block" />
              )}

              <div className="flex items-start space-x-6 mb-12">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Guaranteed Success Process
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our streamlined 6-step process has a 100% success rate. We guarantee acceptance to at least one Italian university or your money back.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;