import React from 'react';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = {
    services: [
      { labelKey: 'footer.links.services.universityPlacement', href: '#services' },
      { labelKey: 'footer.links.services.scholarships', href: '#services' },
      { labelKey: 'footer.links.services.visaSupport', href: '#services' },
      { labelKey: 'footer.links.services.accommodation', href: '#services' },
    ],
    quickLinks: [
      { labelKey: 'nav.home', href: '#home' },
      { labelKey: 'nav.process', href: '#process' },
      { labelKey: 'nav.pricing', href: '#pricing' },
      { labelKey: 'nav.contact', href: '#contact' },
    ],
  };
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
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
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">StudyItaly Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+998901234567" className="hover:text-white transition-colors">
                    {t('contact.info.phone')}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:info@studyitalypro.com" className="hover:text-white transition-colors">
                    {t('contact.info.email')}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{t('contact.info.address')}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.services.title')}</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.labelKey}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {t(link.labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.company.title')}</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.labelKey}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {t(link.labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.support.title')}</h4>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">{t('footer.stats.successRate')}</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">{t('footer.stats.students')}</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">€21K</div>
                  <div className="text-sm text-gray-400">{t('footer.stats.scholarship')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                {t('footer.links.support.privacy')}
              </button>
              <button className="hover:text-white transition-colors">
                {t('footer.links.support.help')}
              </button>
              <button className="hover:text-white transition-colors">
                {t('footer.links.support.documentation')}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;