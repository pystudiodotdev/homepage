import React from 'react';
import { useTranslation } from 'react-i18next';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      name: t('products.solaris.name'),
      description: t('products.solaris.desc'),
      color: 'bg-amber-100 text-amber-600',
    },
    {
      name: t('products.lumina.name'),
      description: t('products.lumina.desc'),
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: t('products.ray.name'),
      description: t('products.ray.desc'),
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t('products.title')}</h2>
          <p className="mt-4 text-gray-600">{t('products.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center mb-6`}>
                <span className="text-xl font-bold">{product.name[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700">
                {t('products.learn_more')} 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
