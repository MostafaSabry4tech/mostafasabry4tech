
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, ArrowLeft, CheckCircle, Brain, BarChart3, Settings } from 'lucide-react';

const ServiceConsultations = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = {
    en: {
      title: 'Technical Consultations',
      subtitle: 'Strategic technology guidance for informed decisions',
      description: 'Professional technical consulting services to help you make the right technology decisions. From strategic planning to security audits, I provide expert guidance to optimize your technology investments.',
      benefits: {
        title: 'Benefits',
        items: [
          'Strategic technology planning',
          'Security assessments and audits',
          'System optimization recommendations',
          'Technology roadmap development',
          'Cost-benefit analysis',
          'Implementation guidance'
        ]
      },
      useCases: {
        title: 'Consultation Areas',
        items: [
          {
            title: 'Technology Strategy',
            description: 'Develop comprehensive technology strategies aligned with your business goals and budget constraints.'
          },
          {
            title: 'Security Audits',
            description: 'Comprehensive security assessments to identify vulnerabilities and recommend protection measures.'
          },
          {
            title: 'System Analysis',
            description: 'Evaluate existing systems for performance, efficiency, and optimization opportunities.'
          },
          {
            title: 'Digital Transformation',
            description: 'Guide your organization through digital transformation initiatives with expert technical advice.'
          }
        ]
      },
      cta: 'Contact Me Now',
      backToServices: 'Back to Services'
    },
    ar: {
      title: 'الاستشارات التقنية',
      subtitle: 'إرشادات تقنية استراتيجية لاتخاذ قرارات مدروسة',
      description: 'خدمات استشارية تقنية مهنية لمساعدتك في اتخاذ القرارات التقنية الصحيحة. من التخطيط الاستراتيجي إلى مراجعات الأمان، أقدم إرشادات خبيرة لتحسين استثماراتك التقنية.',
      benefits: {
        title: 'الفوائد',
        items: [
          'التخطيط التقني الاستراتيجي',
          'تقييمات ومراجعات الأمان',
          'توصيات تحسين النظام',
          'تطوير خارطة طريق التقنية',
          'تحليل التكلفة والفائدة',
          'إرشادات التنفيذ'
        ]
      },
      useCases: {
        title: 'مجالات الاستشارة',
        items: [
          {
            title: 'استراتيجية التقنية',
            description: 'تطوير استراتيجيات تقنية شاملة متوافقة مع أهداف أعمالك وقيود الميزانية.'
          },
          {
            title: 'مراجعات الأمان',
            description: 'تقييمات أمان شاملة لتحديد نقاط الضعف والتوصية بتدابير الحماية.'
          },
          {
            title: 'تحليل النظام',
            description: 'تقييم الأنظمة الحالية للأداء والكفاءة وفرص التحسين.'
          },
          {
            title: 'التحول الرقمي',
            description: 'إرشاد مؤسستك خلال مبادرات التحول الرقمي بنصائح تقنية خبيرة.'
          }
        ]
      },
      cta: 'تواصل معي الآن',
      backToServices: 'العودة للخدمات'
    }
  };

  const currentLang = t[language as keyof typeof t];

  return (
    <div className="min-h-screen bg-sky-600 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-sky-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-sky-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {currentLang.backToServices}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-sky-200 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {currentLang.title}
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-8">
            {currentLang.subtitle}
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            {currentLang.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {currentLang.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentLang.benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-center bg-sky-800/60 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {currentLang.useCases.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentLang.useCases.items.map((useCase, index) => (
              <div key={index} className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600">
                <div className="flex items-center mb-4">
                  {[<BarChart3 className="w-8 h-8" />, <Shield className="w-8 h-8" />, <Settings className="w-8 h-8" />, <Brain className="w-8 h-8" />][index]}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-white/80">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {language === 'en' ? 'Need Expert Technical Guidance?' : 'تحتاج إرشادات تقنية خبيرة؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Get professional technical consultations to make informed technology decisions.'
              : 'احصل على استشارات تقنية مهنية لاتخاذ قرارات تقنية مدروسة.'
            }
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            {currentLang.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceConsultations;
