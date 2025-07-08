
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Globe, ArrowLeft, CheckCircle, Building, Shield, Database } from 'lucide-react';

const ServiceBusinesses = () => {
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
      title: 'Technical Support for Businesses',
      subtitle: 'Enterprise-grade IT solutions for your business growth',
      description: 'Comprehensive technical support designed to keep your business running smoothly. From server management to network security, I provide reliable IT solutions that scale with your business.',
      benefits: {
        title: 'Benefits',
        items: [
          'Enterprise server management',
          'Network infrastructure setup',
          'Security implementation',
          'Data backup and disaster recovery',
          'Employee IT training',
          '24/7 monitoring and support'
        ]
      },
      useCases: {
        title: 'Business Solutions',
        items: [
          {
            title: 'Server Infrastructure',
            description: 'Design, setup, and manage Windows/Linux servers, Active Directory, and enterprise-level network infrastructure.'
          },
          {
            title: 'Network Security',
            description: 'Implement firewalls, VPNs, and security protocols to protect your business data and ensure compliance.'
          },
          {
            title: 'System Integration',
            description: 'Integrate various business systems, automate processes, and ensure seamless data flow across platforms.'
          },
          {
            title: 'IT Maintenance',
            description: 'Regular system maintenance, updates, monitoring, and proactive issue resolution to minimize downtime.'
          }
        ]
      },
      cta: 'Contact Me Now',
      backToServices: 'Back to Services'
    },
    ar: {
      title: 'الدعم الفني للشركات',
      subtitle: 'حلول تقنية على مستوى المؤسسات لنمو أعمالك',
      description: 'دعم فني شامل مصمم للحفاظ على سير أعمالك بسلاسة. من إدارة الخوادم إلى أمان الشبكة، أقدم حلول تقنية موثوقة تنمو مع أعمالك.',
      benefits: {
        title: 'الفوائد',
        items: [
          'إدارة خوادم المؤسسات',
          'إعداد البنية التحتية للشبكة',
          'تطبيق الأمان',
          'النسخ الاحتياطي واستعادة الكوارث',
          'تدريب الموظفين على تقنية المعلومات',
          'المراقبة والدعم على مدار الساعة'
        ]
      },
      useCases: {
        title: 'حلول الأعمال',
        items: [
          {
            title: 'البنية التحتية للخوادم',
            description: 'تصميم وإعداد وإدارة خوادم ويندوز/لينكس والدليل النشط والبنية التحتية للشبكة على مستوى المؤسسات.'
          },
          {
            title: 'أمان الشبكة',
            description: 'تطبيق جدران الحماية والشبكات الافتراضية الخاصة وبروتوكولات الأمان لحماية بيانات أعمالك وضمان الامتثال.'
          },
          {
            title: 'تكامل الأنظمة',
            description: 'دمج أنظمة الأعمال المختلفة وأتمتة العمليات وضمان تدفق البيانات السلس عبر المنصات.'
          },
          {
            title: 'صيانة تقنية المعلومات',
            description: 'صيانة النظام المنتظمة والتحديثات والمراقبة وحل المشاكل الاستباقي لتقليل وقت التوقف.'
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
            <Building className="w-12 h-12 text-white mr-4" />
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
                  {[<Server className="w-8 h-8" />, <Shield className="w-8 h-8" />, <Database className="w-8 h-8" />, <Building className="w-8 h-8" />][index]}
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
            {language === 'en' ? 'Ready to Scale Your Business?' : 'مستعد لتوسيع نطاق أعمالك؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Get enterprise-grade IT solutions that grow with your business.'
              : 'احصل على حلول تقنية معلومات على مستوى المؤسسات تنمو مع أعمالك.'
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

export default ServiceBusinesses;
