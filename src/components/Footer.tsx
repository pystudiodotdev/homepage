import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} pystudio. {t('footer.rights')}
          </p>
          <div className="mt-4 flex space-x-6">
            <span className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">{t('footer.privacy')}</span>
            <span className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
