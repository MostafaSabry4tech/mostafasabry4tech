
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, Award, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const Certificates = () => {
  const [language, setLanguage] = useState('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredCertificates.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const scrollToAllCertificates = () => {
    const element = document.getElementById('all-certificates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredCertificates = [
    {
      id: 1,
      title: language === 'en' ? 'Microsoft Certified: Azure Administrator Associate' : 'مايكروسوفت معتمد: مسؤول أزور المشارك',
      description: language === 'en' ? 'Cloud administration and Azure services management' : 'إدارة السحابة وإدارة خدمات أزور',
      year: '2023',
      issuer: 'Microsoft'
    },
    {
      id: 2,
      title: language === 'en' ? 'CompTIA Security+ Certified' : 'كومبتيا سكيورتي+ معتمد',
      description: language === 'en' ? 'Cybersecurity fundamentals and network security' : 'أساسيات الأمن السيبراني وأمان الشبكة',
      year: '2022',
      issuer: 'CompTIA'
    },
    {
      id: 3,
      title: language === 'en' ? 'Cisco Certified Network Associate (CCNA)' : 'سيسكو معتمد شريك الشبكة (CCNA)',
      description: language === 'en' ? 'Network infrastructure and routing protocols' : 'البنية التحتية للشبكة وبروتوكولات التوجيه',
      year: '2021',
      issuer: 'Cisco'
    }
  ];

  const allCertificates = [
    {
      id: 1,
      title: language === 'en' ? 'Microsoft Certified: Azure Administrator Associate' : 'مايكروسوفت معتمد: مسؤول أزور المشارك',
      description: language === 'en' ? 'Comprehensive cloud administration skills' : 'مهارات إدارة السحابة الشاملة',
      year: '2023',
      issuer: 'Microsoft'
    },
    {
      id: 2,
      title: language === 'en' ? 'CompTIA Security+ Certified' : 'كومبتيا سكيورتي+ معتمد',
      description: language === 'en' ? 'Advanced cybersecurity knowledge' : 'معرفة متقدمة بالأمن السيبراني',
      year: '2022',
      issuer: 'CompTIA'
    },
    {
      id: 3,
      title: language === 'en' ? 'Cisco Certified Network Associate (CCNA)' : 'سيسكو معتمد شريك الشبكة (CCNA)',
      description: language === 'en' ? 'Network infrastructure expertise' : 'خبرة البنية التحتية للشبكة',
      year: '2021',
      issuer: 'Cisco'
    },
    {
      id: 4,
      title: language === 'en' ? 'ITIL Foundation Certificate' : 'شهادة أساسيات ITIL',
      description: language === 'en' ? 'IT service management best practices' : 'أفضل ممارسات إدارة خدمات تقنية المعلومات',
      year: '2021',
      issuer: 'AXELOS'
    },
    {
      id: 5,
      title: language === 'en' ? 'VMware Certified Professional' : 'VMware محترف معتمد',
      description: language === 'en' ? 'Virtualization and cloud infrastructure' : 'المحاكاة الافتراضية والبنية التحتية السحابية',
      year: '2020',
      issuer: 'VMware'
    },
    {
      id: 6,
      title: language === 'en' ? 'Google Cloud Professional Cloud Architect' : 'جوجل كلاود مهندس سحابة محترف',
      description: language === 'en' ? 'Cloud architecture and design patterns' : 'هندسة السحابة وأنماط التصميم',
      year: '2023',
      issuer: 'Google Cloud'
    }
  ];

  const t = {
    en: {
      title: 'Certificates',
      subtitle: 'Professional certifications and qualifications',
      featured: 'Featured Certificates',
      viewAll: 'View All Certificates',
      allCertificates: 'All Certificates',
      year: 'Year',
      issuer: 'Issuer',
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'الشهادات',
      subtitle: 'الشهادات والمؤهلات المهنية',
      featured: 'الشهادات المميزة',
      viewAll: 'عرض جميع الشهادات',
      allCertificates: 'جميع الشهادات',
      year: 'السنة',
      issuer: 'الجهة المصدرة',
      backToHome: 'العودة للرئيسية'
    }
  };

  const currentLang = t[language as keyof typeof t];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredCertificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredCertificates.length) % featuredCertificates.length);
  };

  return (
    <div className="min-h-screen bg-sky-600 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-sky-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-sky-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {currentLang.backToHome}
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
            <Award className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {currentLang.title}
            </h1>
          </div>
          <p className="text-xl text-white/90">
            {currentLang.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Certificates Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {currentLang.featured}
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredCertificates.map((cert, index) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="bg-sky-800/80 rounded-xl p-8 backdrop-blur-sm border border-sky-600 mx-2">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/3">
                          <div className="w-full h-64 bg-gradient-to-r from-sky-600 to-sky-700 rounded-lg flex items-center justify-center">
                            <Award className="w-20 h-20 text-white opacity-50" />
                          </div>
                        </div>
                        <div className="w-full lg:w-2/3 text-center lg:text-left">
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {cert.title}
                          </h3>
                          <p className="text-white/80 text-lg mb-6">
                            {cert.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <div className="bg-white/20 rounded-lg px-4 py-2">
                              <span className="text-white font-medium">
                                {currentLang.year}: {cert.year}
                              </span>
                            </div>
                            <div className="bg-white/20 rounded-lg px-4 py-2">
                              <span className="text-white font-medium">
                                {currentLang.issuer}: {cert.issuer}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredCertificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={scrollToAllCertificates}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              {currentLang.viewAll}
            </button>
          </div>
        </div>
      </section>

      {/* All Certificates Grid */}
      <section id="all-certificates" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {currentLang.allCertificates}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-sky-600 to-sky-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                        {cert.year}
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {language === 'en' ? 'Ready to Work Together?' : 'مستعد للعمل معاً؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'With these certifications and years of experience, I\'m ready to help solve your technical challenges.'
              : 'مع هذه الشهادات وسنوات من الخبرة، أنا مستعد لمساعدتك في حل تحدياتك التقنية.'
            }
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            {language === 'en' ? 'Get In Touch' : 'تواصل معي'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
