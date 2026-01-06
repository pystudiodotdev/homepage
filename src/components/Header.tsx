import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (lng: string) => i18n.resolvedLanguage === lng || i18n.language === lng;

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              pystudio
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#vision" className="text-gray-700 hover:text-amber-600 transition-colors">{t('header.vision')}</a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">{t('header.products')}</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">{t('header.contact')}</a>
            
            <div className="flex items-center space-x-2 border-l pl-6 border-gray-200">
               <button 
                onClick={() => changeLanguage('en')}
                className={`text-sm font-medium ${isActive('en') ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => changeLanguage('vi')}
                className={`text-sm font-medium ${isActive('vi') ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
              >
                VI
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
