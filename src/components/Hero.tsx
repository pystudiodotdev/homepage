import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
       {/* Background Sun Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-amber-200/30 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
          {t('hero.title_start')} <br />
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            {t('hero.title_end')}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl">
            {t('hero.explore_btn')}
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 hover:border-amber-500 hover:text-amber-500 transition-colors shadow-sm">
            {t('hero.vision_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};
