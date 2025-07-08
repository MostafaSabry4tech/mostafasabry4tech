
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          title: 'Information We Collect',
          content: 'We collect information you provide directly to us, such as when you contact us through our website, email, or social media channels. This may include your name, email address, phone number, and any messages you send to us.'
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to respond to your inquiries, provide technical support services, communicate with you about our services, and improve our website and services.'
        },
        {
          title: 'Information Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.'
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          title: 'Contact Information',
          content: 'If you have any questions about this Privacy Policy, please contact us at mostafa.sabry.it@gmail.com'
        }
      ],
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يناير 2025',
      sections: [
        {
          title: 'المعلومات التي نجمعها',
          content: 'نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تتواصل معنا من خلال موقعنا الإلكتروني أو البريد الإلكتروني أو قنوات التواصل الاجتماعي. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي رسائل ترسلها إلينا.'
        },
        {
          title: 'كيف نستخدم معلوماتك',
          content: 'نستخدم المعلومات التي نجمعها للرد على استفساراتك وتقديم خدمات الدعم التقني والتواصل معك حول خدماتنا وتحسين موقعنا الإلكتروني وخدماتنا.'
        },
        {
          title: 'مشاركة المعلومات',
          content: 'لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة دون موافقتك، باستثناء ما هو موضح في سياسة الخصوصية هذه أو كما يقتضيه القانون.'
        },
        {
          title: 'أمان البيانات',
          content: 'نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.'
        },
        {
          title: 'معلومات الاتصال',
          content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على mostafa.sabry.it@gmail.com'
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
            <Shield className="w-8 h-8 text-white mr-3" />
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

export default PrivacyPolicy;
