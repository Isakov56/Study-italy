import React from 'react';
import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Container } from '../ui';
import { motion } from 'framer-motion';


export const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing.title')}{' '}
            <span className="gradient-text">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 border-blue-200" padding="lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('pricing.packages.premium.name')}
                </h3>
                <p className="text-gray-600">
                  {t('pricing.packages.premium.description')}
                </p>
              </div>

              {/* Pricing Structure */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          $1,000
                        </div>
                        <div className="text-gray-600 text-sm">
                          {t('pricing.packages.standard.price')}
                        </div>
                      </div>

                      <div className="text-2xl font-bold text-gray-400">+</div>

                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          3.5M UZS
                        </div>
                        <div className="text-gray-600 text-sm">
                          {t('pricing.packages.premium.price')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      {t('pricing.guarantee.title')}
                    </h4>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          {t('pricing.guarantee.description')}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          {t('pricing.guarantee.description')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {t('pricing.packages.premium.features.0')}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {(t('pricing.packages.premium.features', { returnObjects: true }) as string[]).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t('pricing.guarantee.title')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('pricing.guarantee.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="xl"
                  onClick={handleGetStarted}
                  className="shadow-2xl text-lg px-12 py-4"
                >
                  {t('hero.getStarted')}
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  {t('pricing.guarantee.description')}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('pricing.valueProposition.scholarshipValue')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">€21,000</div>
                <div className="text-blue-100">{t('pricing.valueProposition.scholarshipValue')}</div>
                <div className="text-sm text-blue-200 mt-1">
                  {t('pricing.valueProposition.scholarshipDescription')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$0</div>
                <div className="text-blue-100">{t('pricing.valueProposition.tuitionFees')}</div>
                <div className="text-sm text-blue-200 mt-1">
                  {t('pricing.valueProposition.tuitionDescription')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">{t('pricing.valueProposition.roiGuarantee')}</div>
                <div className="text-sm text-blue-200 mt-1">
                  {t('pricing.valueProposition.roiDescription')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;