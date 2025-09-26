import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from './ui';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../utils/cn';

const navigationItems = [
  { labelKey: 'nav.home', href: '#home' },
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.process', href: '#process' },
  { labelKey: 'nav.pricing', href: '#pricing' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              StudyItaly Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.labelKey}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {t(item.labelKey)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              onClick={() => handleNavClick('#contact')}
              size="lg"
              className="shadow-lg"
            >
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.labelKey}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {t(item.labelKey)}
                </button>
              ))}
              <div className="px-4 pt-2 space-y-3">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full"
                  size="lg"
                >
                  {t('nav.getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navigation;