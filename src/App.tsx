import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { Portfolio } from './components/Portfolio';
import { StudentSuccess } from './components/StudentSuccess';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CareerModal } from './components/CareerModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWidgets } from './components/FloatingWidgets';
import { CookieConsent } from './components/CookieConsent';
import { SEO } from './components/SEO';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { serviceDetailsData } from './data/serviceDetails';
import { productDetailsData } from './data/productDetails';
import { CareerOpening } from './types';
import { Logo } from './components/Logo';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'refund' | 'cookie' | null>(null);
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Dynamic Theme Class sync
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Initial loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigateService = (slug: string) => {
    setActiveProductSlug(null);
    setActiveServiceSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProduct = (slug: string) => {
    setActiveServiceSlug(null);
    setActiveProductSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveServiceSlug(null);
    setActiveProductSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F17] text-white space-y-4">
        <Logo size="lg" />
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-brand-500 via-orange-400 to-blue-500 animate-pulse"></div>
        </div>
        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Megasus Group Portal Loading...</span>
      </div>
    );
  }

  const currentServiceDetail = activeServiceSlug ? serviceDetailsData[activeServiceSlug] : null;
  const currentProductDetail = activeProductSlug ? productDetailsData[activeProductSlug] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 font-sans selection:bg-brand-500 selection:text-white transition-colors duration-300">
      
      {/* Home SEO Markup */}
      {!currentServiceDetail && !currentProductDetail && (
        <SEO
          title="Megasus Group | SAP Consulting, Enterprise Software & IT Upskilling"
          description="Megasus Group delivers world-class SAP consulting, enterprise custom software, SaaS products (ERP, CRM, HRMS, CMS, SMS, LMS), and fresher IT upskilling."
          canonicalUrl="https://megasusgroup.com"
          schemaJson={{
            '@context': 'https://schema.org',
            '@type': 'Corporation',
            'name': 'Megasus Group',
            'url': 'https://megasusgroup.com',
            'logo': 'https://megasusgroup.com/logo.png',
            'description': 'Technology consulting, SAP services, enterprise software development, IT training, and placement support.',
            'sameAs': [
              'https://www.linkedin.com/company/megasus-group',
              'https://facebook.com/megasusgroup'
            ]
          }}
        />
      )}

      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openConsultation={() => setConsultationOpen(true)}
        onNavigateService={handleNavigateService}
        onNavigateProduct={handleNavigateProduct}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main View Router */}
      <main>
        {currentServiceDetail ? (
          <ServiceDetailPage
            service={currentServiceDetail}
            onBackToHome={handleNavigateHome}
            openConsultation={() => setConsultationOpen(true)}
          />
        ) : currentProductDetail ? (
          <ProductDetailPage
            product={currentProductDetail}
            onBackToHome={handleNavigateHome}
            openConsultation={() => setConsultationOpen(true)}
          />
        ) : (
          <>
            <Hero openConsultation={() => setConsultationOpen(true)} />
            <About />
            <Services 
              openConsultation={() => setConsultationOpen(true)} 
              onNavigateService={handleNavigateService}
            />
            <Products 
              openConsultation={() => setConsultationOpen(true)} 
              onNavigateProduct={handleNavigateProduct}
            />
            <WhyChooseUs />
            <Industries />
            <Portfolio />
            <StudentSuccess openConsultation={() => setConsultationOpen(true)} />
            <Testimonials />
            <FAQ />
            <Blog />
            <Careers onApply={(job) => setSelectedJob(job)} />
            <Contact />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        openLegalModal={(type) => setLegalType(type)}
        openConsultation={() => setConsultationOpen(true)}
      />

      {/* Modals & Floating Components */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <CareerModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      <FloatingWidgets
        openConsultation={() => setConsultationOpen(true)}
      />

      {/* Interactive Cookie Consent Banner */}
      <CookieConsent
        openCookiePolicy={() => setLegalType('cookie')}
      />

    </div>
  );
};

export default App;
