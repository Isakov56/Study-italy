import React, { useEffect, useState } from 'react';
import { GraduationCap, Euro, University } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from '../ui';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const statistics = [
    { value: '100', labelKey: 'hero.statistics.acceptanceRate', suffix: '%' },
    { value: '21', labelKey: 'hero.statistics.totalScholarship', suffix: 'K €' },
    { value: '500', labelKey: 'hero.statistics.successfulStudents', suffix: '+' },
  ];

  const floatingCards = [
    {
      id: 'universities',
      icon: University,
      textKey: 'hero.floatingCards.universities',
      position: { top: '20%', right: '10%' },
      delay: 0,
    },
    {
      id: 'stipend',
      icon: Euro,
      textKey: 'hero.floatingCards.stipend',
      position: { top: '50%', left: '5%' },
      delay: 2,
    },
    {
      id: 'tuition',
      icon: GraduationCap,
      textKey: 'hero.floatingCards.tuition',
      position: { bottom: '20%', right: '15%' },
      delay: 4,
    },
  ];

  const [displayedStats, setDisplayedStats] = useState(statistics.map(() => 0));

  useEffect(() => {
    const animateStats = () => {
      statistics.forEach((stat, index) => {
        const targetValue = parseInt(stat.value);
        const increment = targetValue / 50;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(timer);
          }
          setDisplayedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 40);
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const handleLearnMore = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offsetTop = servicesSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 py-6">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600">
                    {displayedStats[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t(stat.labelKey)}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="xl"
                onClick={handleGetStarted}
                className="shadow-2xl"
              >
                {t('hero.getStarted')}
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={handleLearnMore}
              >
                {t('hero.learnMore')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Cards */}
          <div className="relative h-96 lg:h-[500px]">
            {floatingCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2 + card.delay * 0.3,
                  }}
                  className="absolute bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 floating-animation"
                  style={{
                    ...card.position,
                    animationDelay: `${card.delay}s`,
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800 whitespace-nowrap">
                      {t(card.textKey)}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Background Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;