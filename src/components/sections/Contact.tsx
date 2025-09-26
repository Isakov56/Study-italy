import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Container } from '../ui';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { ContactForm } from '../../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  education: z.string().min(1, 'Please select your education level'),
  message: z.string().optional(),
});

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      label: t('contact.form.phone'),
      value: t('contact.info.phone'),
      href: 'tel:+998901234567',
    },
    {
      icon: Mail,
      label: t('contact.form.email'),
      value: t('contact.info.email'),
      href: 'mailto:info@studyitalypro.com',
    },
    {
      icon: MapPin,
      label: t('contact.office'),
      value: t('contact.info.address'),
      href: null,
    },
  ];

  const educationLevels = [
    { value: '', label: t('contact.education.select') },
    { value: 'highSchool', label: t('contact.education.highSchool') },
    { value: 'bachelor', label: t('contact.education.bachelor') },
    { value: 'master', label: t('contact.education.master') },
    { value: 'phd', label: t('contact.education.phd') },
  ];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card padding="lg">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t('contact.form.success')}
                </h2>
                <p className="text-xl text-gray-600">
                  {t('contact.form.success')}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What happens next?
                  </h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Our expert will call you within 24 hours</li>
                    <li>• We'll assess your profile and goals</li>
                    <li>• You'll receive a personalized study plan</li>
                    <li>• We'll answer all your questions</li>
                  </ul>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                  size="lg"
                >
                  Submit Another Request
                </Button>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}{' '}
            <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.title')}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;

                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{method.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">
                {t('contact.consultation.title')}
              </h4>
              <ul className="space-y-3 text-gray-600">
                {(t('contact.consultation.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card padding="lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.form.success')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder={t('contact.form.placeholders.firstName')}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('contact.form.placeholders.email')}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder={t('contact.form.placeholders.phone')}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <select
                      {...register('education')}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.education ? 'border-red-300' : 'border-gray-200'
                      }`}
                    >
                      {educationLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                    {errors.education && (
                      <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder={t('contact.form.placeholders.message')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  loading={isSubmitting}
                  className="w-full shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communication from our team.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;