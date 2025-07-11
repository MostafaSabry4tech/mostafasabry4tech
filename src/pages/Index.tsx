import { useState, useEffect } from 'react';
import { Mail, Linkedin, MessageCircle, Code, Server, Shield, Users, Download, Award, ChevronDown, Quote, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { AnimatedBackground } from '../components/AnimatedBackground';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = {
    en: {
      hero: {
        subtitle: "I'm Mostafa Sabry, with 10 years of experience in IT support and virtual assistance. I help companies and entrepreneurs solve their tech issues and manage their work in an organized and professional way, so they can focus on growing their business and leave all the tech stuff, problems, and improvements to me.",
        exploreServices: 'Explore Services',
        getInTouch: 'Get In Touch',
        downloadCV: 'Download CV'
      },
      about: {
        title: 'About Me',
        content: "I'm Mostafa Sabry, a tech expert with over 10 years of experience in IT support, networking, and freelance technical consulting. I specialize in providing comprehensive tech solutions for entrepreneurs and businesses, helping them focus on growth and improving their operations through smart technology."
      },
      services: {
        title: 'Services',
        items: [
          {
            title: 'Technical Support for Businesses',
            description: 'Enterprise IT solutions, server management, and infrastructure support for growing companies'
          },
          {
            title: 'Technical Support for Individuals', 
            description: 'Personal tech troubleshooting, device setup, and software assistance for individuals'
          },
          {
            title: 'Technical Consultations',
            description: 'Strategic technology planning, security audits, and system optimization consulting'
          }
        ]
      },
      portfolio: {
        title: 'Previous Work',
        viewAll: 'View All Projects',
        items: [
          {
            title: 'Enterprise Server Setup',
            description: 'Configured and deployed Windows Server 2019 infrastructure for 50+ user company with complete Active Directory integration',
            tags: ['Windows Server', 'Active Directory', 'Network']
          },
          {
            title: 'Network Security Implementation',
            description: 'Designed and implemented comprehensive firewall and VPN solutions for secure remote access',
            tags: ['Cybersecurity', 'Firewall', 'VPN']
          },
          {
            title: 'System Migration Project',
            description: 'Successfully migrated legacy systems to cloud-based infrastructure with zero downtime',
            tags: ['Cloud Migration', 'AWS', 'Data Transfer']
          }
        ]
      },
      trustedBy: {
        title: 'Trusted By',
        subtitle: 'Companies I\'ve Supported With Technical Services'
      },
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
      hero: {
        subtitle: 'أنا مصطفى صبري، عندى أكثر من 10 سنوات من الخبرة في الدعم التقني والمساعدة الافتراضية، أساعد الشركات ورواد الأعمال في حل مشاكلهم التقنية وإدارة أعمالهم وتطويرها بطريقة منظمة ومهنية، حتى يتمكنوا من التركيز على نمو أعمالهم.',
        exploreServices: 'استكشف الخدمات',
        getInTouch: 'تواصل معي',
        downloadCV: 'تحميل السيرة الذاتية'
      },
      about: {
        title: 'نبذة عني',
        content: 'أنا مصطفى صبري، خبير تقني بخبرة تزيد عن 10 سنوات في الدعم التقني والشبكات والاستشارات التقنية المستقلة، أتخصص في تقديم حلول تقنية شاملة لرواد الأعمال والشركات، مساعدًا إياهم في التركيز على نمو البزنس وتطور عملهم بواسطة التقنية.'
      },
      services: {
        title: 'الخدمات',
        items: [
          {
            title: 'الدعم الفني للشركات',
            description: 'حلول تقنية المعلومات للمؤسسات وإدارة الخوادم ودعم البنية التحتية للشركات النامية'
          },
          {
            title: 'الدعم الفني للأفراد',
            description: 'استكشاف أخطاء التقنية الشخصية وإعداد الأجهزة ومساعدة البرامج للأفراد'
          },
          {
            title: 'الاستشارات التقنية',
            description: 'التخطيط التقني الاستراتيجي ومراجعات الأمان وتحسين النظم الاستشارية'
          }
        ]
      },
      portfolio: {
        title: 'أعمال سابقة',
        viewAll: 'عرض جميع المشاريع',
        items: [
          {
            title: 'إعداد خادم المؤسسة',
            description: 'تكوين ونشر بنية تحتية لخادم ويندوز 2019 لشركة تضم أكثر من 50 مستخدم مع تكامل كامل للدليل النشط',
            tags: ['خادم ويندوز', 'الدليل النشط', 'الشبكة']
          },
          {
            title: 'تطبيق أمان الشبكة',
            description: 'تصميم وتطبيق حلول شاملة لجدار الحماية والشبكة الافتراضية الخاصة للوصول الآمن عن بُعد',
            tags: ['الأمن السيبراني', 'جدار الحماية', 'الشبكة الافتراضية']
          },
          {
            title: 'مشروع نقل النظام',
            description: 'نقل ناجح للأنظمة القديمة إلى بنية تحتية سحابية بدون توقف',
            tags: ['النقل السحابي', 'أمازون ويب سيرفيسز', 'نقل البيانات']
          }
        ]
      },
      trustedBy: {
        title: 'موثوق من قبل',
        subtitle: 'الشركات التي دعمتها بالخدمات التقنية'
      },
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

  const services = currentLang.services.items.map((item, index) => ({
    icon: [<Server className="w-8 h-8" />, <Code className="w-8 h-8" />, <Shield className="w-8 h-8" />][index],
    title: item.title,
    description: item.description,
    slug: ['businesses', 'individuals', 'consultations'][index]
  }));

  // Placeholder company logos for Trusted By section
  const trustedCompanies = [
    { name: 'TechFlow Solutions', tooltip: 'Server Infrastructure' },
    { name: 'Global Consulting', tooltip: 'IT Support' },
    { name: 'StartupHub', tooltip: 'Network Setup' },
    { name: 'InnovateCorp', tooltip: 'Security Audit' },
    { name: 'BusinessTech', tooltip: 'System Migration' },
    { name: 'DataSystems', tooltip: 'Database Management' }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation language={language} toggleLanguage={toggleLanguage} scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                {/* Profile Photo */}
                <div className="flex-shrink-0">
                  <img
                    src="/lovable-uploads/fbec8b21-4a26-4c9f-bb98-ab7aa87c2757.png"
                    alt="Mostafa Sabry"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
                
                {/* Hero Content */}
                <div className="text-center lg:text-left max-w-2xl">
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed">
                    {currentLang.hero.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="bg-white text-sky-600 hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                    >
                      {currentLang.hero.exploreServices}
                    </button>
                    <Link
                      to="/contact"
                      className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      {currentLang.hero.getInTouch}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white mr-3" />
                <h2 className="text-4xl font-bold text-white">{currentLang.about.title}</h2>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="bg-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-white/20 flex-1">
                <p className="text-lg sm:text-xl text-white leading-relaxed">
                  {currentLang.about.content}
                </p>
              </div>
              
              {/* CV Download Button */}
              <div className="flex-shrink-0">
                <a
                  href="/cv-mostafa.pdf"
                  download
                  className="inline-flex items-center bg-white text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {currentLang.hero.downloadCV}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Server className="w-8 h-8 text-white mr-3" />
                <h2 className="text-4xl font-bold text-white">{currentLang.services.title}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  <div className="w-full h-48 bg-gradient-to-r from-sky-600/20 to-sky-700/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white mr-3" />
                <h2 className="text-4xl font-bold text-white">{currentLang.portfolio.title}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {currentLang.portfolio.items.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-full h-48 bg-gradient-to-r from-sky-600/20 to-sky-700/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <Code className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h4>
                  <p className="text-white/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/portfolio"
                className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                {currentLang.portfolio.viewAll}
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-sky-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-800">{currentLang.trustedBy.title}</h2>
              </div>
              <p className="text-xl text-gray-600">{currentLang.trustedBy.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative"
                  title={company.tooltip}
                >
                  <div className="w-full h-20 bg-gradient-to-r from-sky-100 to-sky-200 rounded-lg flex items-center justify-center">
                    <span className="text-sky-600 font-bold text-lg">{company.name.charAt(0)}</span>
                  </div>
                  <p className="text-center text-sm font-medium text-gray-700 mt-2">{company.name}</p>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {company.tooltip}
                  </div>
                </div>
              ))}
            </div>
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
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">
                    {currentLang.footer.links.about}
                  </button>
                  <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors text-sm text-left">
                    {currentLang.footer.links.services}
                  </button>
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

export default Index;
