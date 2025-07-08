
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, Cookie } from 'lucide-react';

const CookiePolicy = () => {
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
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          title: 'What Are Cookies',
          content: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.'
        },
        {
          title: 'How We Use Cookies',
          content: 'We use cookies to improve your experience on our website, analyze website traffic, and understand where our visitors are coming from. The cookies we use do not store personally identifiable information.'
        },
        {
          title: 'Types of Cookies We Use',
          content: 'We use essential cookies that are necessary for the website to function properly, and analytics cookies that help us understand how visitors interact with our website.'
        },
        {
          title: 'Managing Cookies',
          content: 'You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.'
        },
        {
          title: 'Third-Party Cookies',
          content: 'We may use third-party services that place cookies on your device. These services have their own privacy policies and we have no control over their cookies.'
        },
        {
          title: 'Contact Information',
          content: 'If you have any questions about our Cookie Policy, please contact us at mostafa.sabry.it@gmail.com'
        }
      ],
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'سياسة ملفات تعريف الارتباط',
      lastUpdated: 'آخر تحديث: يناير 2025',
      sections: [
        {
          title: 'ما هي ملفات تعريف الارتباط',
          content: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول عند زيارة موقع ويب. تُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أكبر وتوفير معلومات لأصحاب الموقع.'
        },
        {
          title: 'كيف نستخدم ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا وتحليل حركة المرور على الموقع وفهم من أين يأتي زوارنا. ملفات تعريف الارتباط التي نستخدمها لا تخزن معلومات شخصية قابلة للتحديد.'
        },
        {
          title: 'أنواع ملفات تعريف الارتباط التي نستخدمها',
          content: 'نستخدم ملفات تعريف الارتباط الأساسية الضرورية لعمل الموقع بشكل صحيح، وملفات تعريف الارتباط التحليلية التي تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا.'
        },
        {
          title: 'إدارة ملفات تعريف الارتباط',
          content: 'يمكنك التحكم وإدارة ملفات تعريف الارتباط في إعدادات المتصفح. يرجى ملاحظة أن إزالة أو حظر ملفات تعريف الارتباط قد يؤثر على تجربة المستخدم وقد لا تعود أجزاء من موقعنا قابلة للوصول بالكامل.'
        },
        {
          title: 'ملفات تعريف الارتباط للطرف الثالث',
          content: 'قد نستخدم خدمات طرف ثالث تضع ملفات تعريف الارتباط على جهازك. هذه الخدمات لها سياسات خصوصية خاصة بها وليس لدينا تحكم في ملفات تعريف الارتباط الخاصة بها.'
        },
        {
          title: 'معلومات الاتصال',
          content: 'إذا كان لديك أي أسئلة حول سياسة ملفات تعريف الارتباط، يرجى الاتصال بنا على mostafa.sabry.it@gmail.com'
        }
      ],
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-sky-800/80 rounded-xl p-8 backdrop-blur-sm border border-sky-600">
          <div className="flex items-center mb-6">
            <Cookie className="w-8 h-8 text-white mr-3" />
            <h1 className="text-3xl font-bold text-white">{currentLang.title}</h1>
          </div>
          
          <p className="text-white/80 mb-8">{currentLang.lastUpdated}</p>
          
          <div className="space-y-8">
            {currentLang.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                <p className="text-white/90 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
