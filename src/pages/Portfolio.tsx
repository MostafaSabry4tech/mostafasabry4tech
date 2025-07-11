
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Code, ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
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
      title: 'Previous Work',
      subtitle: 'A showcase of successful technical projects and solutions',
      projects: [
        {
          title: 'Enterprise Server Setup',
          description: 'Configured and deployed Windows Server 2019 infrastructure for 50+ user company with complete Active Directory integration, DNS configuration, and security policies implementation.',
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
          tags: ['Windows Server', 'Active Directory', 'Network', 'DNS'],
          cta: 'Request Similar Service'
        },
        {
          title: 'Network Security Implementation',
          description: 'Designed and implemented comprehensive firewall and VPN solutions for secure remote access, including multi-factor authentication and intrusion detection systems.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
          tags: ['Cybersecurity', 'Firewall', 'VPN', 'MFA'],
          cta: 'Request Similar Service'
        },
        {
          title: 'System Migration Project',
          description: 'Successfully migrated legacy systems to cloud-based infrastructure with zero downtime, including data migration, application modernization, and staff training.',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
          tags: ['Cloud Migration', 'AWS', 'Data Transfer', 'Training'],
          cta: 'Request Similar Service'
        },
        {
          title: 'Database Optimization',
          description: 'Optimized MySQL database performance for e-commerce platform, reducing query response time by 75% and improving overall system reliability.',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
          tags: ['MySQL', 'Performance', 'E-commerce', 'Optimization'],
          cta: 'Request Similar Service'
        },
        {
          title: 'Automated Backup System',
          description: 'Implemented automated backup and disaster recovery solutions with real-time monitoring and automated failover capabilities for critical business systems.',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
          tags: ['Backup', 'Disaster Recovery', 'Automation', 'Monitoring'],
          cta: 'Request Similar Service'
        },
        {
          title: 'IT Infrastructure Audit',
          description: 'Conducted comprehensive IT infrastructure audit for manufacturing company, identifying security vulnerabilities and providing detailed improvement recommendations.',
          image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
          tags: ['Security Audit', 'Infrastructure', 'Assessment', 'Recommendations'],
          cta: 'Request Similar Service'
        }
      ]
    },
    ar: {
      title: 'أعمال سابقة',
      subtitle: 'عرض للمشاريع التقنية الناجحة والحلول المبتكرة',
      projects: [
        {
          title: 'إعداد خادم المؤسسة',
          description: 'تكوين ونشر بنية تحتية لخادم ويندوز 2019 لشركة تضم أكثر من 50 مستخدم مع تكامل كامل للدليل النشط وتكوين DNS وتطبيق سياسات الأمان.',
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
          tags: ['خادم ويندوز', 'الدليل النشط', 'الشبكة', 'DNS'],
          cta: 'اطلب خدمة مماثلة'
        },
        {
          title: 'تطبيق أمان الشبكة',
          description: 'تصميم وتطبيق حلول شاملة لجدار الحماية والشبكة الافتراضية الخاصة للوصول الآمن عن بُعد، بما في ذلك المصادقة متعددة العوامل وأنظمة كشف التسلل.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
          tags: ['الأمن السيبراني', 'جدار الحماية', 'الشبكة الافتراضية', 'المصادقة متعددة العوامل'],
          cta: 'اطلب خدمة مماثلة'
        },
        {
          title: 'مشروع نقل النظام',
          description: 'نقل ناجح للأنظمة القديمة إلى بنية تحتية سحابية بدون توقف، بما في ذلك نقل البيانات وتحديث التطبيقات وتدريب الموظفين.',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
          tags: ['النقل السحابي', 'أمازون ويب سيرفيسز', 'نقل البيانات', 'التدريب'],
          cta: 'اطلب خدمة مماثلة'
        },
        {
          title: 'تحسين قاعدة البيانات',
          description: 'تحسين أداء قاعدة بيانات MySQL لمنصة التجارة الإلكترونية، مما قلل من وقت الاستجابة للاستعلامات بنسبة 75% وحسن الموثوقية العامة للنظام.',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
          tags: ['MySQL', 'الأداء', 'التجارة الإلكترونية', 'التحسين'],
          cta: 'اطلب خدمة مماثلة'
        },
        {
          title: 'نظام النسخ الاحتياطي الآلي',
          description: 'تطبيق حلول النسخ الاحتياطي الآلي واستعادة الكوارث مع المراقبة في الوقت الفعلي وقدرات التبديل الآلي للأنظمة التجارية الحرجة.',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
          tags: ['النسخ الاحتياطي', 'استعادة الكوارث', 'الأتمتة', 'المراقبة'],
          cta: 'اطلب خدمة مماثلة'
        },
        {
          title: 'مراجعة البنية التحتية للتقنية',
          description: 'إجراء مراجعة شاملة للبنية التحتية لتقنية المعلومات لشركة تصنيع، وتحديد الثغرات الأمنية وتقديم توصيات مفصلة للتحسين.',
          image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
          tags: ['مراجعة الأمان', 'البنية التحتية', 'التقييم', 'التوصيات'],
          cta: 'اطلب خدمة مماثلة'
        }
      ]
    }
  };

  const currentLang = t[language as keyof typeof t];

  return (
    <div className="min-h-screen text-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation language={language} toggleLanguage={toggleLanguage} />

        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">{currentLang.title}</h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {currentLang.subtitle}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentLang.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-white text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Start Your Project?' : 'مستعد لبدء مشروعك؟'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en' 
                ? "Let's discuss how I can help you achieve similar results for your business."
                : 'دعنا نناقش كيف يمكنني مساعدتك في تحقيق نتائج مماثلة لعملك.'
              }
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              {language === 'en' ? 'Contact Me Now' : 'تواصل معي الآن'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
