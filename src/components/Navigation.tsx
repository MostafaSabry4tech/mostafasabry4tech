
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
        fill="#0369a1"
        opacity="0.9"
      />
    </svg>
  </div>
);

interface NavigationProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  scrollToSection?: (sectionId: string) => void;
}

export const Navigation = ({ language, toggleLanguage, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Previous Work',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      services: {
        businesses: 'Technical Support for Businesses',
        individuals: 'Technical Support for Individuals', 
        consultations: 'Technical Consultations'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة عني',
        services: 'الخدمات',
        portfolio: 'أعمال سابقة',
        certificates: 'الشهادات',
        contact: 'تواصل معي'
      },
      services: {
        businesses: 'الدعم الفني للشركات',
        individuals: 'الدعم الفني للأفراد',
        consultations: 'الاستشارات التقنية'
      }
    }
  };

  const currentLang = t[language];

  const services = [
    { title: currentLang.services.businesses, slug: 'businesses' },
    { title: currentLang.services.individuals, slug: 'individuals' },
    { title: currentLang.services.consultations, slug: 'consultations' }
  ];

  const handleServicesClick = () => {
    if (isHomePage && scrollToSection) {
      scrollToSection('services');
    }
    setIsMenuOpen(false);
  };

  const handleServiceItemClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-sky-800/95 backdrop-blur-sm border-b border-sky-600' : 'bg-sky-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <MSLogo />
            <div className="text-2xl font-bold">
              <span className="text-sky-200">Mostafa</span>
              <span className="text-gray-300 ml-1">Sabry</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.home}
            </Link>
            {isHomePage ? (
              <button
                onClick={() => scrollToSection?.('about')}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                {currentLang.nav.about}
              </button>
            ) : (
              <Link to="/#about" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                {currentLang.nav.about}
              </Link>
            )}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={handleServicesClick}
                className="flex items-center text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                {currentLang.nav.services}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-sky-800 rounded-lg shadow-lg border border-sky-600 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      onClick={handleServiceItemClick}
                      className="block px-4 py-2 text-white/90 hover:text-white hover:bg-sky-700 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/portfolio" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.portfolio}
            </Link>
            <Link to="/certificates" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.certificates}
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.contact}
            </Link>
            
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
            <Link to="/" className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.home}
            </Link>
            {isHomePage ? (
              <button
                onClick={() => {
                  scrollToSection?.('about');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium w-full text-left"
              >
                {currentLang.nav.about}
              </button>
            ) : (
              <Link to="/#about" className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium">
                {currentLang.nav.about}
              </Link>
            )}
            <button
              onClick={handleServicesClick}
              className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium w-full text-left"
            >
              {currentLang.nav.services}
            </button>
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                onClick={handleServiceItemClick}
                className="block px-6 py-2 text-white/80 hover:text-white transition-colors duration-200 text-sm"
              >
                {service.title}
              </Link>
            ))}
            <Link to="/portfolio" className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.portfolio}
            </Link>
            <Link to="/certificates" className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.certificates}
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium">
              {currentLang.nav.contact}
            </Link>
            
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
  );
};
