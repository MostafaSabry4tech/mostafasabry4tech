
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, MessageCircle, Code, Server, Shield, FileText, Database, BarChart3, ChevronDown, Quote, Globe } from 'lucide-react';

// Custom MS Logo Component
const MSLogo = () => (
  <div className="flex items-center justify-center w-10 h-10 mr-3">
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      {/* M letter */}
      <path
        d="M5 30 L5 10 L12 10 L20 22 L28 10 L35 10 L35 30 L30 30 L30 18 L24 26 L16 26 L10 18 L10 30 Z"
        fill="url(#logoGradient)"
        opacity="0.9"
      />
      {/* S letter overlapping */}
      <path
        d="M15 35 C12 35 10 33 10 30 L14 30 C14 31 15 31 16 31 L24 31 C25 31 26 30 26 29 C26 28 25 27 24 27 L16 27 C12 27 10 25 10 22 C10 19 12 17 16 17 L24 17 C27 17 29 19 29 22 L25 22 C25 21 24 21 23 21 L17 21 C16 21 15 22 15 23 C15 24 16 25 17 25 L25 25 C29 25 31 27 31 30 C31 33 29 35 25 35 Z"
        fill="#6b7280"
        opacity="0.8"
      />
    </svg>
  </div>
);

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const t = {
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      hero: {
        title: 'Senior IT Specialist',
        subtitle: "I'm Mostafa Sabry, with 10 years of experience in IT support and virtual assistance. I help companies and entrepreneurs solve their tech issues and manage their work in an organized and professional way, so they can focus on growing their business — and leave all the tech stuff, problems, and improvements to me.",
        exploreServices: 'Explore Services',
        getInTouch: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        content: "I'm Mostafa Sabry, a tech expert with over 10 years of experience in IT support, networking, and freelance technical consulting. I specialize in providing comprehensive tech solutions for entrepreneurs and businesses, helping them focus on growth and improving their operations through smart technology."
      },
      services: {
        title: 'Services',
        items: [
          {
            title: 'Technical Support for Individuals',
            description: 'Personal tech troubleshooting, device setup, and software assistance'
          },
          {
            title: 'Technical Support for Companies',
            description: 'Enterprise IT solutions, server management, and infrastructure support'
          },
          {
            title: 'IT Consulting',
            description: 'Strategic technology planning, security audits, and system optimization'
          },
          {
            title: 'Tech Virtual Assistance',
            description: 'Remote administrative support, documentation, and project management'
          }
        ]
      },
      portfolio: {
        title: 'Portfolio',
        techProjects: {
          title: 'Technical Projects',
          items: [
            {
              title: 'Enterprise Server Setup',
              description: 'Configured and deployed Windows Server 2019 infrastructure for 50+ user company',
              tags: ['Windows Server', 'Active Directory', 'Network']
            },
            {
              title: 'Network Security Implementation',
              description: 'Designed and implemented comprehensive firewall and VPN solutions',
              tags: ['Cybersecurity', 'Firewall', 'VPN']
            },
            {
              title: 'System Migration Project',
              description: 'Successfully migrated legacy systems to cloud-based infrastructure',
              tags: ['Cloud Migration', 'AWS', 'Data Transfer']
            }
          ]
        },
        vaProjects: {
          title: 'Virtual Assistant Work',
          items: [
            {
              title: 'Executive Email Management',
              description: 'Streamlined email workflows and automated responses for C-level executives',
              tags: ['Email Management', 'Automation', 'Productivity']
            },
            {
              title: 'Data Entry & Analysis',
              description: 'Processed and analyzed 10,000+ customer records with 99.9% accuracy',
              tags: ['Data Entry', 'Excel', 'Analysis']
            },
            {
              title: 'Document Standardization',
              description: 'Created professional templates and formatting standards for corporate documents',
              tags: ['Documentation', 'Templates', 'Formatting']
            }
          ]
        }
      },
      testimonials: {
        title: 'Client Testimonials',
        items: [
          {
            name: 'Ahmed Hassan',
            company: 'TechFlow Solutions',
            text: "Mostafa's technical expertise saved our company during a critical server outage. His quick response and professional approach were exceptional."
          },
          {
            name: 'Sarah Mitchell',
            company: 'Global Consulting Group',
            text: 'Working with Mostafa as our virtual assistant has been transformative. He handles all our technical documentation with precision and efficiency.'
          }
        ]
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
        links: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
          cookies: 'Cookie Policy',
          contact: 'Contact'
        }
      }
    },
    ar: {
      nav: {
        about: 'نبذة عني',
        services: 'الخدمات',
        portfolio: 'أعمالي',
        testimonials: 'آراء العملاء',
        contact: 'تواصل معي'
      },
      hero: {
        title: 'أخصائي تقنية معلومات أول',
        subtitle: 'أنا مصطفى صبري، عندى أكثر من 10 سنوات من الخبرة في الدعم التقني والمساعدة الافتراضية، أساعد الشركات ورواد الأعمال في حل مشاكلهم التقنية وإدارة أعمالهم وتطويرها بطريقة منظمة ومهنية، حتى يتمكنوا من التركيز على نمو أعمالهم.',
        exploreServices: 'استكشف الخدمات',
        getInTouch: 'تواصل معي'
      },
      about: {
        title: 'نبذة عني',
        content: 'أنا مصطفى صبري، خبير تقني بخبرة تزيد عن 10 سنوات في الدعم التقني والشبكات والاستشارات التقنية المستقلة، أ specialize في تقديم حلول تقنية شاملة لرواد الأعمال والشركات، مساعدًا إياهم في التركيز على نمو البزنس وتطور عملهم بواسطة التقنية.'
      },
      services: {
        title: 'الخدمات',
        items: [
          {
            title: 'الدعم التقني للأفراد',
            description: 'استكشاف أخطاء التقنية الشخصية وإعداد الأجهزة ومساعدة البرامج'
          },
          {
            title: 'الدعم التقني للشركات',
            description: 'حلول تقنية المعلومات للمؤسسات وإدارة الخوادم ودعم البنية التحتية'
          },
          {
            title: 'الاستشارات التقنية',
            description: 'التخطيط التقني الاستراتيجي ومراجعات الأمان وتحسين النظم'
          },
          {
            title: 'المساعد الافتراضي التقني',
            description: 'الدعم الإداري عن بُعد والتوثيق وإدارة المشاريع'
          }
        ]
      },
      portfolio: {
        title: 'أعمالي',
        techProjects: {
          title: 'المشاريع التقنية',
          items: [
            {
              title: 'إعداد خادم المؤسسة',
              description: 'تكوين ونشر بنية تحتية لخادم ويندوز 2019 لشركة تضم أكثر من 50 مستخدم',
              tags: ['خادم ويندوز', 'الدليل النشط', 'الشبكة']
            },
            {
              title: 'تطبيق أمان الشبكة',
              description: 'تصميم وتطبيق حلول شاملة لجدار الحماية والشبكة الافتراضية الخاصة',
              tags: ['الأمن السيبراني', 'جدار الحماية', 'الشبكة الافتراضية']
            },
            {
              title: 'مشروع نقل النظام',
              description: 'نقل ناجح للأنظمة القديمة إلى بنية تحتية سحابية',
              tags: ['النقل السحابي', 'أمازون ويب سيرفيسز', 'نقل البيانات']
            }
          ]
        },
        vaProjects: {
          title: 'أعمال المساعد الافتراضي',
          items: [
            {
              title: 'إدارة البريد الإلكتروني للمديرين',
              description: 'تبسيط سير عمل البريد الإلكتروني والردود الآلية للمديرين التنفيذيين',
              tags: ['إدارة البريد', 'الأتمتة', 'الإنتاجية']
            },
            {
              title: 'إدخال البيانات والتحليل',
              description: 'معالجة وتحليل أكثر من 10,000 سجل عميل بدقة 99.9%',
              tags: ['إدخال البيانات', 'إكسل', 'التحليل']
            },
            {
              title: 'توحيد المستندات',
              description: 'إنشاء قوالب احترافية ومعايير تنسيق للمستندات المؤسسية',
              tags: ['التوثيق', 'القوالب', 'التنسيق']
            }
          ]
        }
      },
      testimonials: {
        title: 'آراء العملاء',
        items: [
          {
            name: 'أحمد حسن',
            company: 'تك فلو سولوشنز',
            text: 'الخبرة التقنية لمصطفى أنقذت شركتنا أثناء انقطاع خادم حرج. استجابته السريعة ونهجه المهني كانا استثنائيين.'
          },
          {
            name: 'سارة ميتشل',
            company: 'مجموعة الاستشارات العالمية',
            text: 'العمل مع مصطفى كمساعد افتراضي كان تحويليًا. يتعامل مع جميع وثائقنا التقنية بدقة وكفاءة.'
          }
        ]
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
        links: {
          privacy: 'سياسة الخصوصية',
          terms: 'شروط الاستخدام',
          cookies: 'سياسة ملفات تعريف الارتباط',
          contact: 'تواصل معي'
        }
      }
    }
  };

  const currentLang = t[language as keyof typeof t];

  const services = currentLang.services.items.map((item, index) => ({
    icon: [<Code className="w-8 h-8" />, <Server className="w-8 h-8" />, <Shield className="w-8 h-8" />, <FileText className="w-8 h-8" />][index],
    title: item.title,
    description: item.description
  }));

  return (
    <div className="min-h-screen bg-sky-600 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-sky-800/95 backdrop-blur-sm border-b border-sky-600' : 'bg-sky-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <MSLogo />
              <div className="text-2xl font-bold">
                <span className="text-sky-200">Mostafa</span>
                <span className="text-gray-300 ml-1">Sabry</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: 'about', label: currentLang.nav.about },
                { key: 'services', label: currentLang.nav.services },
                { key: 'portfolio', label: currentLang.nav.portfolio },
                { key: 'testimonials', label: currentLang.nav.testimonials },
                { key: 'contact', label: currentLang.nav.contact }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/90 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-sky-800/95 backdrop-blur-sm border-t border-sky-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { key: 'about', label: currentLang.nav.about },
                { key: 'services', label: currentLang.nav.services },
                { key: 'portfolio', label: currentLang.nav.portfolio },
                { key: 'testimonials', label: currentLang.nav.testimonials },
                { key: 'contact', label: currentLang.nav.contact }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium w-full"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700/20 to-sky-900/40"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/fbec8b21-4a26-4c9f-bb98-ab7aa87c2757.png"
                  alt="Mostafa Sabry"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover object-center border-8 border-white/20 shadow-2xl"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              
              {/* Hero Content */}
              <div className="text-center lg:text-left max-w-2xl">
                <h1 className={`font-bold mb-6 text-white ${language === 'ar' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}>
                  {currentLang.hero.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed">
                  {currentLang.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="bg-white text-sky-600 hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    {currentLang.hero.exploreServices}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    {currentLang.hero.getInTouch}
                  </button>
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">{currentLang.about.title}</h2>
          <div className="bg-sky-800/80 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-sky-600">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              {currentLang.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">{currentLang.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-700/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">{currentLang.portfolio.title}</h2>
          
          {/* Tech Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">{currentLang.portfolio.techProjects.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentLang.portfolio.techProjects.items.map((project, index) => (
                <div
                  key={index}
                  className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105"
                >
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
          </div>

          {/* VA Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">{currentLang.portfolio.vaProjects.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentLang.portfolio.vaProjects.items.map((project, index) => (
                <div
                  key={index}
                  className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105"
                >
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">{currentLang.testimonials.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentLang.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sky-800/80 rounded-xl p-8 backdrop-blur-sm border border-sky-600 relative"
              >
                <Quote className="w-8 h-8 text-white mb-4" />
                <p className="text-white text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-sky-200 rounded-full flex items-center justify-center text-sky-600 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-300">★</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">{currentLang.contact.title}</h2>
          <p className="text-xl text-white mb-12">
            {currentLang.contact.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp - Left */}
            <a
              href="https://wa.me/201559861446"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-green-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.whatsapp}</h3>
              <p className="text-white/80">{currentLang.contact.whatsappText}</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/mostafasabry4tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.linkedin}</h3>
              <p className="text-white/80">{currentLang.contact.linkedinText}</p>
            </a>
            
            {/* Email - Right */}
            <a
              href="mailto:mostafa.sabry.it@gmail.com"
              className="bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{currentLang.contact.email}</h3>
              <p className="text-white/80">mostafa.sabry.it@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-sky-800 border-t border-sky-600">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">
              {currentLang.footer.links.privacy}
            </a>
            <a href="#terms-of-use" className="text-white/70 hover:text-white text-sm transition-colors">
              {currentLang.footer.links.terms}
            </a>
            <a href="#cookie-policy" className="text-white/70 hover:text-white text-sm transition-colors">
              {currentLang.footer.links.cookies}
            </a>
            <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">
              {currentLang.footer.links.contact}
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white text-sm">
              {currentLang.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
