
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, Mail, Linkedin, MessageCircle, Send, User, Phone } from 'lucide-react';

const Contact = () => {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Create mailto link
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.fullName}`);
      const body = encodeURIComponent(`
Name: ${formData.fullName}
Email: ${formData.email}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:mostafa.sabry.it@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = {
    en: {
      title: 'Contact Me',
      subtitle: 'Ready to solve your technical challenges? Let\'s discuss how I can help you.',
      form: {
        fullName: 'Full Name',
        email: 'Email Address',
        message: 'Message',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully! I\'ll get back to you soon.',
        required: 'This field is required'
      },
      directContact: {
        title: 'Direct Contact',
        email: 'Email',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        linkedinText: 'Connect with me',
        whatsappText: 'Quick consultation'
      },
      backToHome: 'Back to Home'
    },
    ar: {
      title: 'تواصل معي',
      subtitle: 'مستعد لحل تحدياتك التقنية؟ دعنا نناقش كيف يمكنني مساعدتك.',
      form: {
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        submitting: 'جارٍ الإرسال...',
        success: 'تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.',
        required: 'هذا الحقل مطلوب'
      },
      directContact: {
        title: 'التواصل المباشر',
        email: 'البريد الإلكتروني',
        linkedin: 'لينكد إن',
        whatsapp: 'واتساب',
        linkedinText: 'تواصل معي',
        whatsappText: 'استشارة سريعة'
      },
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
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {currentLang.title}
            </h1>
          </div>
          <p className="text-xl text-white/90">
            {currentLang.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form and Direct Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-sky-800/80 rounded-xl p-8 backdrop-blur-sm border border-sky-600">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {language === 'en' ? 'Send Message' : 'إرسال رسالة'}
              </h2>
              
              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                  <p className="text-green-100">{currentLang.form.success}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-white mb-2 font-medium">
                    {currentLang.form.fullName} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-sky-700/50 border border-sky-500 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder={currentLang.form.fullName}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    {currentLang.form.email} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-sky-700/50 border border-sky-500 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder={currentLang.form.email}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    {currentLang.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-4 bg-sky-700/50 border border-sky-500 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-vertical"
                    placeholder={currentLang.form.message}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? currentLang.form.submitting : currentLang.form.submit}
                </button>
              </form>
            </div>
            
            {/* Direct Contact Options */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {currentLang.directContact.title}
              </h2>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/201559861446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-green-400 transition-all duration-300 transform hover:scale-105 group"
                >
                  <MessageCircle className="w-12 h-12 text-green-400 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {currentLang.directContact.whatsapp}
                    </h3>
                    <p className="text-white/80">{currentLang.directContact.whatsappText}</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/mostafasabry4tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105 group"
                >
                  <Linkedin className="w-12 h-12 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {currentLang.directContact.linkedin}
                    </h3>
                    <p className="text-white/80">{currentLang.directContact.linkedinText}</p>
                  </div>
                </a>
                
                <a
                  href="mailto:mostafa.sabry.it@gmail.com"
                  className="flex items-center bg-sky-800/80 rounded-xl p-6 backdrop-blur-sm border border-sky-600 hover:border-white transition-all duration-300 transform hover:scale-105 group"
                >
                  <Mail className="w-12 h-12 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {currentLang.directContact.email}
                    </h3>
                    <p className="text-white/80">mostafa.sabry.it@gmail.com</p>
                  </div>
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="bg-sky-700/50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {language === 'en' ? 'Response Time' : 'وقت الاستجابة'}
                </h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>{language === 'en' ? 'WhatsApp: Within 1 hour' : 'واتساب: خلال ساعة واحدة'}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-400" />
                    <span>{language === 'en' ? 'Email: Within 24 hours' : 'البريد الإلكتروني: خلال 24 ساعة'}</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{language === 'en' ? 'LinkedIn: Within 24 hours' : 'لينكد إن: خلال 24 ساعة'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
