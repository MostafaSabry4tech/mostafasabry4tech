
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, ArrowLeft, CheckCircle, User, Smartphone, Laptop } from 'lucide-react';

const ServiceIndividuals = () => {
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
      title: 'Technical Support for Individuals',
      subtitle: 'Personalized tech solutions for your digital life',
      description: 'Get expert technical support tailored to your personal needs. From device setup to troubleshooting, I help individuals navigate technology with confidence.',
      benefits: {
        title: 'Benefits',
        items: [
          'One-on-one personalized support',
          'Device setup and configuration',
          'Software installation and updates',
          'Data backup and recovery',
          'Security and privacy guidance',
          'User training and education'
        ]
      },
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Home Computer Setup',
            description: 'Complete setup of new computers, including software installation, security configuration, and user account creation.'
          },
          {
            title: 'Smartphone & Tablet Support',
            description: 'Help with mobile device setup, app installation, synchronization, and troubleshooting common issues.'
          },
          {
            title: 'Internet & Wi-Fi Issues',
            description: 'Diagnose and resolve connectivity problems, optimize network performance, and secure your home network.'
          },
          {
            title: 'Software Troubleshooting',
            description: 'Fix software conflicts, resolve error messages, and optimize system performance for better user experience.'
          }
        ]
      },
      cta: 'Contact Me Now',
      backToServices: 'Back to Services'
    },
    ar: {
      title: 'الدعم الفني للأفراد',
      subtitle: 'حلول تقنية شخصية لحياتك الرقمية',
      description: 'احصل على دعم فني متخصص مصمم لاحتياجاتك الشخصية. من إعداد الأجهزة إلى حل المشاكل، أساعد الأفراد على التعامل مع التقنية بثقة.',
      benefits: {
        title: 'الفوائد',
        items: [
          'دعم شخصي فردي',
          'إعداد وتكوين الأجهزة',
          'تثبيت وتحديث البرامج',
          'نسخ احتياطي واستعادة البيانات',
          'إرشادات الأمان والخصوصية',
          'التدريب والتعليم للمستخدمين'
        ]
      },
      useCases: {
        title: 'حالات الاستخدام الشائعة',
        items: [
          {
            title: 'إعداد الكمبيوتر المنزلي',
            description: 'إعداد كامل للكمبيوترات الجديدة، بما في ذلك تثبيت البرامج وتكوين الأمان وإنشاء حسابات المستخدمين.'
          },
          {
            title: 'دعم الهواتف الذكية والأجهزة اللوحية',
            description: 'المساعدة في إعداد الأجهزة المحمولة وتثبيت التطبيقات والمزامنة وحل المشاكل الشائعة.'
          },
          {
            title: 'مشاكل الإنترنت والواي فاي',
            description: 'تشخيص وحل مشاكل الاتصال وتحسين أداء الشبكة وتأمين شبكتك المنزلية.'
          },
          {
            title: 'حل مشاكل البرامج',
            description: 'إصلاح تعارض البرامج وحل رسائل الخطأ وتحسين أداء النظام لتجربة مستخدم أفضل.'
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
            <User className="w-12 h-12 text-white mr-4" />
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
                  {[<Laptop className="w-8 h-8" />, <Smartphone className="w-8 h-8" />, <Globe className="w-8 h-8" />, <Code className="w-8 h-8" />][index]}
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
            {language === 'en' ? 'Ready to Get Started?' : 'مستعد للبدء؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Get personalized technical support tailored to your needs.'
              : 'احصل على دعم فني شخصي مصمم لاحتياجاتك.'
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

export default ServiceIndividuals;
