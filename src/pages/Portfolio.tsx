
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, Code, Server, Shield, Database, CheckCircle } from 'lucide-react';

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
      title: 'Portfolio',
      subtitle: 'Successful projects and satisfied clients',
      techProjects: {
        title: 'Technical Projects',
        items: [
          {
            title: 'Enterprise Server Setup',
            description: 'Configured and deployed Windows Server 2019 infrastructure for a 50+ user company, including Active Directory, DNS, DHCP, and file sharing services. The project resulted in improved network security and centralized user management.',
            fullDescription: 'This comprehensive server infrastructure project involved designing and implementing a complete Windows Server 2019 environment from scratch. The solution included domain controller setup, Group Policy configuration, network security implementation, and user training. The client experienced a 40% improvement in network performance and significantly enhanced security posture.',
            tags: ['Windows Server', 'Active Directory', 'Network Security', 'DNS/DHCP'],
            duration: '2 weeks',
            outcome: 'Improved network performance by 40% and enhanced security'
          },
          {
            title: 'Network Security Implementation',
            description: 'Designed and implemented comprehensive firewall and VPN solutions for a medium-sized business, ensuring secure remote access and data protection.',
            fullDescription: 'A complete network security overhaul that included firewall configuration, VPN setup for remote workers, intrusion detection systems, and security policy implementation. The project also included employee training on cybersecurity best practices and ongoing monitoring setup.',
            tags: ['Cybersecurity', 'Firewall', 'VPN', 'Monitoring'],
            duration: '3 weeks',
            outcome: 'Zero security incidents and 100% secure remote access'
          },
          {
            title: 'System Migration Project',
            description: 'Successfully migrated legacy systems to cloud-based infrastructure, resulting in improved performance and cost savings.',
            fullDescription: 'Led a complex migration project moving on-premises servers and applications to AWS cloud infrastructure. This included data migration, application reconfiguration, security setup, and user training. The project reduced operational costs by 35% and improved system reliability.',
            tags: ['Cloud Migration', 'AWS', 'Data Transfer', 'Cost Optimization'],
            duration: '4 weeks',
            outcome: 'Reduced operational costs by 35% and improved reliability'
          },
          {
            title: 'Database Management System',
            description: 'Implemented and optimized database systems for improved data management and reporting capabilities.',
            fullDescription: 'Designed and implemented a comprehensive database management solution including data modeling, performance optimization, backup strategies, and reporting systems. The solution improved data processing speed by 60% and provided real-time analytics.',
            tags: ['Database Design', 'SQL Server', 'Performance Optimization', 'Reporting'],
            duration: '3 weeks',
            outcome: 'Improved data processing speed by 60%'
          },
          {
            title: 'IT Infrastructure Audit',
            description: 'Conducted comprehensive IT infrastructure assessment and provided optimization recommendations.',
            fullDescription: 'Performed a thorough audit of existing IT infrastructure, identifying security vulnerabilities, performance bottlenecks, and optimization opportunities. Delivered detailed recommendations that resulted in 25% cost reduction and improved system performance.',
            tags: ['Infrastructure Audit', 'Security Assessment', 'Optimization', 'Cost Analysis'],
            duration: '2 weeks',
            outcome: '25% cost reduction and improved performance'
          },
          {
            title: 'Network Monitoring Solution',
            description: 'Implemented 24/7 network monitoring and alerting system for proactive issue detection.',
            fullDescription: 'Deployed comprehensive network monitoring solution with real-time alerting, performance dashboards, and automated reporting. The system enabled proactive issue resolution and reduced network downtime by 80%.',
            tags: ['Network Monitoring', 'Alerting', 'Performance', 'Automation'],
            duration: '1 week',
            outcome: 'Reduced network downtime by 80%'
          }
        ]
      },
      cta: 'Request Similar Service',
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'أعمالي',
      subtitle: 'مشاريع ناجحة وعملاء راضون',
      techProjects: {
        title: 'المشاريع التقنية',
        items: [
          {
            title: 'إعداد خادم المؤسسة',
            description: 'تكوين ونشر بنية تحتية لخادم ويندوز 2019 لشركة تضم أكثر من 50 مستخدم، بما في ذلك الدليل النشط وDNS وDHCP وخدمات مشاركة الملفات. أدى المشروع إلى تحسين أمان الشبكة والإدارة المركزية للمستخدمين.',
            fullDescription: 'شمل هذا المشروع الشامل للبنية التحتية للخادم تصميم وتنفيذ بيئة كاملة لخادم ويندوز 2019 من الصفر. تضمن الحل إعداد وحدة تحكم المجال، وتكوين سياسة المجموعة، وتنفيذ أمان الشبكة، وتدريب المستخدمين. شهد العميل تحسناً بنسبة 40% في أداء الشبكة وتعزيز كبير في الوضع الأمني.',
            tags: ['خادم ويندوز', 'الدليل النشط', 'أمان الشبكة', 'DNS/DHCP'],
            duration: 'أسبوعان',
            outcome: 'تحسين أداء الشبكة بنسبة 40% وتعزيز الأمان'
          },
          {
            title: 'تطبيق أمان الشبكة',
            description: 'تصميم وتطبيق حلول شاملة لجدار الحماية والشبكة الافتراضية الخاصة لشركة متوسطة الحجم، مما يضمن الوصول الآمن عن بُعد وحماية البيانات.',
            fullDescription: 'إصلاح شامل لأمان الشبكة شمل تكوين جدار الحماية وإعداد VPN للعمال عن بُعد وأنظمة كشف التسلل وتنفيذ سياسة الأمان. شمل المشروع أيضاً تدريب الموظفين على أفضل ممارسات الأمن السيبراني وإعداد المراقبة المستمرة.',
            tags: ['الأمن السيبراني', 'جدار الحماية', 'VPN', 'المراقبة'],
            duration: '3 أسابيع',
            outcome: 'صفر حوادث أمنية و100% وصول آمن عن بُعد'
          },
          {
            title: 'مشروع نقل النظام',
            description: 'نقل ناجح للأنظمة القديمة إلى بنية تحتية سحابية، مما أدى إلى تحسين الأداء وتوفير التكاليف.',
            fullDescription: 'قدت مشروع نقل معقد لنقل الخوادم والتطبيقات المحلية إلى البنية التحتية السحابية لAWS. شمل ذلك نقل البيانات وإعادة تكوين التطبيقات وإعداد الأمان وتدريب المستخدمين. قلل المشروع التكاليف التشغيلية بنسبة 35% وحسن موثوقية النظام.',
            tags: ['النقل السحابي', 'AWS', 'نقل البيانات', 'تحسين التكلفة'],
            duration: '4 أسابيع',
            outcome: 'تقليل التكاليف التشغيلية بنسبة 35% وتحسين الموثوقية'
          },
          {
            title: 'نظام إدارة قواعد البيانات',
            description: 'تنفيذ وتحسين أنظمة قواعد البيانات لتحسين إدارة البيانات وقدرات التقارير.',
            fullDescription: 'صممت ونفذت حلاً شاملاً لإدارة قواعد البيانات بما في ذلك نمذجة البيانات وتحسين الأداء واستراتيجيات النسخ الاحتياطي وأنظمة التقارير. حسن الحل سرعة معالجة البيانات بنسبة 60% ووفر تحليلات في الوقت الفعلي.',
            tags: ['تصميم قواعد البيانات', 'SQL Server', 'تحسين الأداء', 'التقارير'],
            duration: '3 أسابيع',
            outcome: 'تحسين سرعة معالجة البيانات بنسبة 60%'
          },
          {
            title: 'مراجعة البنية التحتية لتقنية المعلومات',
            description: 'أجريت تقييماً شاملاً للبنية التحتية لتقنية المعلومات وقدمت توصيات للتحسين.',
            fullDescription: 'أجريت مراجعة شاملة للبنية التحتية الحالية لتقنية المعلومات، وحددت نقاط الضعف الأمنية واختناقات الأداء وفرص التحسين. قدمت توصيات مفصلة أدت إلى تقليل التكلفة بنسبة 25% وتحسين أداء النظام.',
            tags: ['مراجعة البنية التحتية', 'تقييم الأمان', 'التحسين', 'تحليل التكلفة'],
            duration: 'أسبوعان',
            outcome: 'تقليل التكلفة بنسبة 25% وتحسين الأداء'
          },
          {
            title: 'حل مراقبة الشبكة',
            description: 'تنفيذ نظام مراقبة وتنبيه للشبكة على مدار الساعة للكشف الاستباقي عن المشاكل.',
            fullDescription: 'نشرت حلاً شاملاً لمراقبة الشبكة مع التنبيه في الوقت الفعلي ولوحات أداء الأداء والتقارير الآلية. مكّن النظام من حل المشاكل الاستباقي وقلل وقت توقف الشبكة بنسبة 80%.',
            tags: ['مراقبة الشبكة', 'التنبيه', 'الأداء', 'الأتمتة'],
            duration: 'أسبوع واحد',
            outcome: 'تقليل وقت توقف الشبكة بنسبة 80%'
          }
        ]
      },
      cta: 'اطلب خدمة مماثلة',
      backToHome: 'العودة للرئيسية'
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {currentLang.title}
          </h1>
          <p className="text-xl text-white/90">
            {currentLang.subtitle}
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            {currentLang.techProjects.title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentLang.techProjects.items.map((project, index) => (
              <div
                key={index}
                className="bg-sky-800/80 rounded-xl backdrop-blur-sm border border-sky-600 overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-r from-sky-600 to-sky-700 flex items-center justify-center">
                  {[<Server className="w-20 h-20 text-white opacity-50" />, 
                    <Shield className="w-20 h-20 text-white opacity-50" />, 
                    <Code className="w-20 h-20 text-white opacity-50" />,
                    <Database className="w-20 h-20 text-white opacity-50" />,
                    <CheckCircle className="w-20 h-20 text-white opacity-50" />,
                    <Globe className="w-20 h-20 text-white opacity-50" />][index]}
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-sky-200 bg-sky-700 px-2 py-1 rounded">
                      {project.duration}
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t border-sky-600 pt-4">
                    <div className="flex items-center text-green-400 mb-3">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">
                        {language === 'en' ? 'Outcome:' : 'النتيجة:'}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">
                      {project.outcome}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      {currentLang.cta}
                    </Link>
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
            {language === 'en' ? 'Ready to Start Your Project?' : 'مستعد لبدء مشروعك؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Let\'s discuss how I can help you achieve similar results for your business.'
              : 'دعنا نناقش كيف يمكنني مساعدتك في تحقيق نتائج مماثلة لأعمالك.'
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

export default Portfolio;
