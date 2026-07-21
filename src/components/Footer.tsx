import React, { useState } from 'react';
import { Logo } from './Logo';
import { Send, ArrowUp, Check, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  openLegalModal: (type: 'privacy' | 'terms' | 'refund' | 'cookie') => void;
  openConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openLegalModal, openConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Megasus Group is a premier technology consulting, SAP services, enterprise software development, and fresher IT upskilling firm headquartered in Bhubaneswar, Odisha.
            </p>
            
            {/* Quick Contact Line */}
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Infocity IT Park, Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+919692373022" className="hover:text-brand-500 font-bold">+91 9692373022</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:info@themegasusgroup.com" className="hover:text-brand-500 font-bold text-brand-400">info@themegasusgroup.com</a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Subscribe to Megasus Group Insights</span>
              {subscribed ? (
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl text-xs font-semibold flex items-center space-x-2 border border-emerald-500/20">
                  <Check className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-brand-500 transition-colors">SAP S/4HANA Consulting</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">SAP FICO / MM / SD / ABAP</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Corporate Web Development</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Mobile App Dev (iOS/Android)</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Custom Business Software</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Cloud & Microservices</a></li>
            </ul>
          </div>

          {/* Col 3: Product Suite */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              SaaS Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-brand-500 transition-colors">Megasus ERP Suite</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-colors">Enterprise CRM Platform</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-colors">HRMS & Payroll System</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-colors">College ERP (CMS)</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-colors">School ERP (SMS)</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-colors">Learning LMS Platform</a></li>
            </ul>
          </div>

          {/* Col 4: Upskilling & Careers */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Training & Careers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#training" className="hover:text-brand-500 transition-colors">Fresher SAP Upskilling</a></li>
              <li><a href="#training" className="hover:text-brand-500 transition-colors">Java & React Bootcamp</a></li>
              <li><a href="#placement" className="hover:text-brand-500 transition-colors">100% Placement Support</a></li>
              <li><a href="#careers" className="hover:text-brand-500 transition-colors">Current Openings</a></li>
              <li><button onClick={openConsultation} className="hover:text-brand-500 text-left transition-colors">Free Advisory</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal Links & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © 2026 <span className="text-slate-300 font-semibold">Megasus Group</span>. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center space-x-6">
            <button onClick={() => openLegalModal('privacy')} className="hover:text-brand-500 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => openLegalModal('terms')} className="hover:text-brand-500 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => openLegalModal('refund')} className="hover:text-brand-500 transition-colors">
              Refund Policy
            </button>
            <button onClick={() => openLegalModal('cookie')} className="hover:text-brand-500 transition-colors">
              Cookie Policy
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-500 transition-all shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
