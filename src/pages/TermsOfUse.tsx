
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, FileText } from 'lucide-react';

const TermsOfUse = () => {
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
      title: 'Terms of Use',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          title: 'Use License',
          content: 'Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.'
        },
        {
          title: 'Service Disclaimer',
          content: 'The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.'
        },
        {
          title: 'Limitations',
          content: 'In no event shall Mostafa Sabry or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.'
        },
        {
          title: 'Accuracy of Materials',
          content: 'The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.'
        },
        {
          title: 'Contact Information',
          content: 'If you have any questions about these Terms of Use, please contact us at mostafa.sabry.it@gmail.com'
        }
      ],
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'شروط الاستخدام',
      lastUpdated: 'آخر تحديث: يناير 2025',
      sections: [
        {
          title: 'قبول الشروط',
          content: 'بالوصول واستخدام هذا الموقع، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية.'
        },
        {
          title: 'ترخيص الاستخدام',
          content: 'يُمنح الإذن بتنزيل نسخة واحدة مؤقتة من المواد على هذا الموقع للعرض الشخصي غير التجاري المؤقت فقط.'
        },
        {
          title: 'إخلاء مسؤولية الخدمة',
          content: 'المعلومات على هذا الموقع مقدمة على أساس "كما هي". إلى أقصى حد يسمح به القانون، نستبعد جميع التمثيلات والضمانات والشروط المتعلقة بموقعنا واستخدام هذا الموقع.'
        },
        {
          title: 'القيود',
          content: 'لن يكون مصطفى صبري أو مورديه مسؤولين في أي حال عن أي أضرار (بما في ذلك، دون حصر، الأضرار لفقدان البيانات أو الربح، أو بسبب انقطاع الأعمال) الناشئة عن استخدام أو عدم القدرة على استخدام المواد على هذا الموقع.'
        },
        {
          title: 'دقة المواد',
          content: 'المواد التي تظهر على هذا الموقع قد تتضمن أخطاء تقنية أو مطبعية أو فوتوغرافية. لا نضمن أن أي من المواد على موقعنا دقيقة أو كاملة أو حديثة.'
        },
        {
          title: 'معلومات الاتصال',
          content: 'إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى الاتصال بنا على mostafa.sabry.it@gmail.com'
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
            <FileText className="w-8 h-8 text-white mr-3" />
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

export default TermsOfUse;
