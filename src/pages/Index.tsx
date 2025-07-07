
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, MessageCircle, Code, Server, Shield, FileText, Database, BarChart3, ChevronDown, Quote } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Support for Individuals",
      description: "Personal tech troubleshooting, device setup, and software assistance"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Technical Support for Companies",
      description: "Enterprise IT solutions, server management, and infrastructure support"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology planning, security audits, and system optimization"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Tech Virtual Assistance",
      description: "Remote administrative support, documentation, and project management"
    }
  ];

  const techProjects = [
    {
      title: "Enterprise Server Setup",
      description: "Configured and deployed Windows Server 2019 infrastructure for 50+ user company",
      tags: ["Windows Server", "Active Directory", "Network"]
    },
    {
      title: "Network Security Implementation",
      description: "Designed and implemented comprehensive firewall and VPN solutions",
      tags: ["Cybersecurity", "Firewall", "VPN"]
    },
    {
      title: "System Migration Project",
      description: "Successfully migrated legacy systems to cloud-based infrastructure",
      tags: ["Cloud Migration", "AWS", "Data Transfer"]
    }
  ];

  const vaProjects = [
    {
      title: "Executive Email Management",
      description: "Streamlined email workflows and automated responses for C-level executives",
      tags: ["Email Management", "Automation", "Productivity"]
    },
    {
      title: "Data Entry & Analysis",
      description: "Processed and analyzed 10,000+ customer records with 99.9% accuracy",
      tags: ["Data Entry", "Excel", "Analysis"]
    },
    {
      title: "Document Standardization",
      description: "Created professional templates and formatting standards for corporate documents",
      tags: ["Documentation", "Templates", "Formatting"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      company: "TechFlow Solutions",
      text: "Mostafa's technical expertise saved our company during a critical server outage. His quick response and professional approach were exceptional.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      company: "Global Consulting Group",
      text: "Working with Mostafa as our virtual assistant has been transformative. He handles all our technical documentation with precision and efficiency.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-400">
              Mostafa Sabry
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
              Senior IT Specialist
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
              I help individuals and companies solve technical problems with ease
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Based in Cairo, Egypt • 10+ Years of Experience • Tech Virtual Assistant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">About Me</h2>
          <div className="bg-gray-800/80 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-gray-700">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-blue-400 font-semibold">Mostafa Sabry</span>, a tech expert with 10+ years of experience in IT support, networks, and freelance tech consulting. Based in Cairo, Egypt, I specialize in providing comprehensive technical solutions for both individuals and businesses, helping them navigate the complex world of technology with confidence and ease.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Portfolio</h2>
          
          {/* Tech Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">Technical Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30"
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
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">Virtual Assistant Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vaProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-600/20 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/30"
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
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Client Testimonials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm border border-gray-700 relative"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to solve your technical challenges? Let's discuss how I can help you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:mostafa.sabry@example.com"
              className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">mostafa.sabry@example.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/mostafasabry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400">Quick consultation</p>
            </a>
          </div>

          <div className="bg-gray-800/80 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you need technical support, IT consulting, or virtual assistance, I'm here to help you succeed.
            </p>
            <button
              onClick={() => window.open('mailto:mostafa.sabry@example.com', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mostafa Sabry. All rights reserved. | Senior IT Specialist & Tech Virtual Assistant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
