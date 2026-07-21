import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Sun, Moon, Menu, X, PhoneCall, ChevronDown, ChevronRight, Database, Globe, Smartphone, Cpu, GraduationCap, UserCheck, Sparkles, Layers, Users, Layout } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openConsultation: () => void;
  onNavigateService?: (slug: string) => void;
  onNavigateProduct?: (slug: string) => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  openConsultation,
  onNavigateService,
  onNavigateProduct,
  onNavigateHome
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  // Mobile drawer sub-accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicePages = [
    { name: 'SAP Consulting', slug: 'sap-consulting', icon: Database, desc: 'S/4HANA, FICO, MM, SD & ABAP' },
    { name: 'Web Development', slug: 'web-development', icon: Globe, desc: 'Corporate Web, SaaS & ERP' },
    { name: 'Mobile App Dev', slug: 'mobile-app-development', icon: Smartphone, desc: 'iOS, Android & Flutter' },
    { name: 'Custom Software', slug: 'software-development', icon: Cpu, desc: 'Enterprise Systems & Cloud' },
    { name: 'Fresher Upskilling', slug: 'fresher-upskilling', icon: GraduationCap, desc: 'SAP & Full-Stack Bootcamps' },
    { name: 'Placement Support', slug: 'placement-support', icon: UserCheck, desc: 'Resume & 250+ MNC Referrals' }
  ];

  const productPages = [
    { name: 'Megasus ERP', slug: 'erp', code: 'ERP', icon: Layers, desc: 'Unified Financials & Supply Chain' },
    { name: 'Megasus CRM', slug: 'crm', code: 'CRM', icon: Users, desc: 'Sales Pipelines & AI Campaigns' },
    { name: 'Megasus HRMS', slug: 'hrms', code: 'HRMS', icon: UserCheck, desc: 'Automated Payroll & Biometrics' },
    { name: 'College ERP (CMS)', slug: 'cms', code: 'CMS', icon: GraduationCap, desc: 'Admissions & Semester Grading' },
    { name: 'School ERP (SMS)', slug: 'sms', code: 'SMS', icon: Layout, desc: 'Fee Collection & Parent App' },
    { name: 'Learning LMS', slug: 'lms', code: 'LMS', icon: GraduationCap, desc: 'HD Video Courses & Quizzes' }
  ];

  const handleGoHome = (hash?: string) => {
    if (onNavigateHome) onNavigateHome();
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 sm:py-2.5 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-brand-500/5 border-b border-slate-200/80 dark:border-slate-800/80' 
        : 'py-3 sm:py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div onClick={() => handleGoHome()} className="flex items-center">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links Container */}
          <nav className="hidden xl:flex items-center space-x-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <button
              onClick={() => handleGoHome('#hero')}
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 px-3 py-1.5 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </button>

            <button
              onClick={() => handleGoHome('#about')}
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 px-3 py-1.5 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleGoHome('#services')}
                className="text-xs font-bold text-brand-500 dark:text-brand-400 hover:text-brand-600 px-3 py-1.5 rounded-full transition-all inline-flex items-center space-x-1 hover:bg-brand-500/10"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 z-50 animate-fadeIn space-y-1">
                  <div className="flex items-center justify-between px-3 py-1 border-b border-slate-100 dark:border-slate-800 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-500 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Dedicated Service Pages
                    </span>
                  </div>
                  {servicePages.map((sp) => {
                    const IconComp = sp.icon;
                    return (
                      <div
                        key={sp.slug}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          if (onNavigateService) onNavigateService(sp.slug);
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-start space-x-3 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-500 flex items-center justify-between">
                            <span>{sp.name}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">
                            {sp.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleGoHome('#products')}
                className="text-xs font-bold text-brand-500 dark:text-brand-400 hover:text-brand-600 px-3 py-1.5 rounded-full transition-all inline-flex items-center space-x-1 hover:bg-brand-500/10"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 z-50 animate-fadeIn space-y-1">
                  <div className="flex items-center justify-between px-3 py-1 border-b border-slate-100 dark:border-slate-800 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-500 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Dedicated Product Pages
                    </span>
                  </div>
                  {productPages.map((pp) => {
                    const IconComp = pp.icon;
                    return (
                      <div
                        key={pp.slug}
                        onClick={() => {
                          setProductsDropdownOpen(false);
                          if (onNavigateProduct) onNavigateProduct(pp.slug);
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-start space-x-3 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-500 flex items-center justify-between">
                            <span>{pp.name}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">
                            {pp.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button onClick={() => handleGoHome('#training')} className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Training
            </button>
            <button onClick={() => handleGoHome('#placement')} className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Placement Support
            </button>
            <button onClick={() => handleGoHome('#portfolio')} className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Portfolio
            </button>
            <button onClick={() => handleGoHome('#careers')} className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Careers
            </button>
            <button onClick={() => handleGoHome('#contact')} className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-500 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Contact
            </button>
          </nav>

          {/* Desktop Right Actions: Theme Switcher & Consultation CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-all border border-slate-200 dark:border-slate-700 shadow-sm"
              aria-label="Toggle dark/light theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={openConsultation}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-500 via-orange-500 to-orange-600 rounded-full shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-2 animate-pulse" />
              <span>Get Free Consultation</span>
            </button>
          </div>

          {/* Ultra-Sleek Mobile Topbar Actions */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={openConsultation}
              className="px-3 py-1.5 text-[11px] font-bold text-white bg-brand-500 rounded-full shadow-md flex items-center space-x-1 sm:hidden"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Consult</span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-brand-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Ultra Mobile Responsive Menu Drawer with Smooth Accordions */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[58px] sm:top-[64px] bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 p-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn space-y-3">
          
          <div className="flex flex-col space-y-2">
            
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#hero'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Home</button>
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#about'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">About Us</button>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-sm text-slate-900 dark:text-white"
              >
                <span className="flex items-center gap-2 text-brand-500">
                  <Sparkles className="w-4 h-4" />
                  Services Pages
                </span>
                <ChevronDown className={`w-4 h-4 text-brand-500 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="p-2 space-y-1 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  {servicePages.map((sp) => (
                    <div
                      key={sp.slug}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateService) onNavigateService(sp.slug);
                      }}
                      className="flex items-center justify-between text-xs py-2 px-3 rounded-xl hover:bg-brand-500/10 text-slate-800 dark:text-slate-200 font-semibold cursor-pointer"
                    >
                      <span>{sp.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Accordion */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between p-3 text-left font-bold text-sm text-slate-900 dark:text-white"
              >
                <span className="flex items-center gap-2 text-brand-500">
                  <Sparkles className="w-4 h-4" />
                  Products Pages
                </span>
                <ChevronDown className={`w-4 h-4 text-brand-500 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="p-2 space-y-1 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  {productPages.map((pp) => (
                    <div
                      key={pp.slug}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateProduct) onNavigateProduct(pp.slug);
                      }}
                      className="flex items-center justify-between text-xs py-2 px-3 rounded-xl hover:bg-brand-500/10 text-slate-800 dark:text-slate-200 font-semibold cursor-pointer"
                    >
                      <span>{pp.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#training'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Training</button>
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#placement'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Placement Support</button>
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#portfolio'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Portfolio</button>
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#careers'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Careers</button>
            <button onClick={() => { setMobileMenuOpen(false); handleGoHome('#contact'); }} className="text-left font-bold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">Contact</button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-brand-500 via-orange-500 to-orange-600 text-white font-bold rounded-xl text-center shadow-lg shadow-brand-500/30 flex items-center justify-center space-x-2 text-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get Free Consultation</span>
            </button>

          </div>
        </div>
      )}
    </header>
  );
};
