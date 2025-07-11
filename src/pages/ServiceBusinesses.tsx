import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';
import { Code, Server, Shield, Users, Download, Award, ChevronDown, Quote, Globe, Mail, Linkedin, MessageCircle } from 'lucide-react';

const ServiceBusinesses = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

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
      subtitle: 'Comprehensive IT solutions, server management, and infrastructure support for growing companies',
      features: [
        '24/7 Server Monitoring',
        'Network Security Audits',
        'Cloud Infrastructure Management',
        'Data Backup and Recovery',
        'IT Consulting Services'
      ],
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to solve your technical challenges? Let\'s discuss how I can help you.',
        email: 'Email',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        linkedinText: 'Connect with me',
        whatsappText: 'Quick consultation'
      },
      footer: {
        copyright: '© 2025 Mostafa Sabry. All rights reserved. | Senior IT Specialist & Tech Virtual Assistant',
        quickLinks: 'Quick Links',
        followMe: 'Follow Me',
        links: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          portfolio: 'Previous Work',
          contact: 'Contact',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
          cookies: 'Cookie Policy'
        }
      }
    },
    ar: {
      title: 'الدعم الفني للشركات',
      subtitle: 'حلول تقنية معلومات شاملة وإدارة خوادم ودعم بنية تحتية للشركات النامية',
      features: [
        'مراقبة الخادم على مدار الساعة',
        'تدقيق أمان الشبكة',
        'إدارة البنية التحتية السحابية',
        'النسخ الاحتياطي للبيانات والاستعادة',
        'خدمات استشارات تكنولوجيا المعلومات'
      ],
      contact: {
        title: 'تواصل معي',
        subtitle: 'مستعد لحل تحدياتك التقنية؟ دعنا نناقش كيف يمكنني مساعدتك.',
        email: 'البريد الإلكتروني',
        linkedin: 'لينكد إن',
        whatsapp: 'واتساب',
        linkedinText: 'تواصل معي',
        whatsappText: 'استشارة سريعة'
      },
      footer: {
        copyright: 'جميع الحقوق محفوظة © موقع مصطفى صبري 2025',
        quickLinks: 'روابط سريعة',
        followMe: 'تابعني',
        links: {
          home: 'الرئيسية',
          about: 'نبذة عني',
          services: 'الخدمات',
          portfolio: 'أعمال سابقة',
          contact: 'تواصل معي',
          privacy: 'سياسة الخصوصية',
          terms: 'شروط الاستخدام',
          cookies: 'سياسة ملفات تعريف الارتباط'
        }
      }
    }
  };

  const currentLang = t[language];

  return (
    <div className="min-h-screen text-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation language={language} toggleLanguage={toggleLanguage} />
        
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Server className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">{currentLang.title}</h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {currentLang.subtitle}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
            </h2>
            <ul className="list-disc list-inside text-lg text-white/80">
              {currentLang.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white mr-3" />
              <h2 className="text-4xl font-bold text-white">{currentLang.contact.title}</h2>
            </div>
            <p className="text-xl text-white mb-12">
              {currentLang.contact.subtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a
                href="https://wa.me/201559861446"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.whatsapp}</h3>
                <p className="text-white/80">{currentLang.contact.whatsappText}</p>
              </a>
              
              <a
                href="https://www.linkedin.com/in/mostafasabry4tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.linkedin}</h3>
                <p className="text-white/80">{currentLang.contact.linkedinText}</p>
              </a>
              
              <a
                href="mailto:mostafa.sabry.it@gmail.com"
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.email}</h3>
                <p className="text-white/80">mostafa.sabry.it@gmail.com</p>
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-sky-900/90 text-white backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div>
                <Link to="/" className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 mr-3">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <defs>
                        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0284c7" />
                          <stop offset="100%" stopColor="#0369a1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M5 30 L5 10 L12 10 L20 22 L28 10 L35 10 L35 30 L30 30 L30 18 L24 26 L16 26 L10 18 L10 30 Z"
                        fill="url(#footerLogoGradient)"
                        opacity="0.9"
                      />
                      <path
                        d="M15 35 C12 35 10 33 10 30 L14 30 C14 31 15 31 16 31 L24 31 C25 31 26 30 26 29 C26 28 25 27 24 27 L16 27 C12 27 10 25 10 22 C10 19 12 17 16 17 L24 17 C27 17 29 19 29 22 L25 22 C25 21 24 21 23 21 L17 21 C16 21 15 22 15 23 C15 24 16 25 17 25 L25 25 C29 25 31 27 31 30 C31 33 29 35 25 35 Z"
                        fill="#0369a1"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                  <div className="text-xl font-bold">
                    <span className="text-sky-200">Mostafa</span>
                    <span className="text-gray-300 ml-1">Sabry</span>
                  </div>
                </Link>
                <p className="text-gray-300 text-sm">
                  {language === 'en' ? 'Professional IT Support & Technical Consulting Services' : 'خدمات الدعم التقني والاستشارات التقنية المهنية'}
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{currentLang.footer.quickLinks}</h3>
                <div className="flex flex-wrap gap-4">
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {currentLang.footer.links.home}
                  </Link>
                  <Link to="/#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {currentLang.footer.links.about}
                  </Link>
                  <Link to="/#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {currentLang.footer.links.services}
                  </Link>
                  <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {currentLang.footer.links.portfolio}
                  </Link>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {currentLang.footer.links.contact}
                  </Link>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{currentLang.footer.followMe}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/mostafasabry4tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/201559861446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 hover:scale-110 transition-all duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:mostafa.sabry.it@gmail.com"
                    className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            <div className="border-t border-sky-800 pt-8">
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <Link to="/privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                  {currentLang.footer.links.privacy}
                </Link>
                <Link to="/terms-of-use" className="text-white/70 hover:text-white text-sm transition-colors">
                  {currentLang.footer.links.terms}
                </Link>
                <Link to="/cookie-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                  {currentLang.footer.links.cookies}
                </Link>
                <Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  {currentLang.footer.links.contact}
                </Link>
              </div>
              
              {/* Copyright */}
              <div className="text-center">
                <p className="text-white text-sm">
                  {currentLang.footer.copyright}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ServiceBusinesses;
