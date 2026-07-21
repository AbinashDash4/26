import React, { useState } from 'react';
import { DetailedService } from '../data/serviceDetails';
import { SEO } from '../components/SEO';
import { ArrowLeft, CheckCircle2, ChevronRight, PhoneCall, Sparkles, Database, Layers, Check, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceDetailPageProps {
  service: DetailedService;
  onBackToHome: () => void;
  openConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBackToHome,
  openConsultation
}) => {
  const [activeSubTab, setActiveSubTab] = useState<number>(0);
  const currentSub = service.subModules[activeSubTab] || service.subModules[0];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 min-h-screen">
      
      {/* Dynamic SEO Meta Tag Management */}
      <SEO
        title={`${service.title} | Megasus`}
        description={service.metaDescription}
        canonicalUrl={`https://megasusgroup.com/services/${service.slug}`}
        schemaJson={service.schemaJson}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Megasus Portal</span>
          </button>

          {/* Breadcrumb Trail */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
            <span className="hover:text-brand-500 cursor-pointer" onClick={onBackToHome}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-bold">{service.title.split(' ')[0]}</span>
          </nav>

        </div>

        {/* Dedicated Page Hero Banner */}
        <div className="relative rounded-3xl p-6 sm:p-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800 space-y-4 sm:space-y-6">
          
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-[11px] sm:text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
            <span>{service.heroBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight max-w-3xl">
            {service.title}
          </h1>

          <p className="text-brand-400 text-sm sm:text-lg font-semibold max-w-2xl">
            {service.tagline}
          </p>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-3xl">
            {service.overview}
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={openConsultation}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-500 to-orange-600 hover:from-brand-600 hover:to-orange-700 text-white font-bold text-xs rounded-full shadow-xl shadow-brand-500/30 flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Free Advisory Session</span>
            </button>

            <a
              href="#capabilities"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-full text-center border border-slate-700"
            >
              Explore Capabilities & Deliverables
            </a>
          </div>

        </div>

        {/* Sub-Modules Capabilities Tabs Section */}
        <div id="capabilities" className="space-y-6 sm:space-y-8">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Core Capabilities & Sub-Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Select a functional module below to inspect technical scope and deliverables.
            </p>
          </div>

          {/* Swipeable Sub-module Tabs on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
            {service.subModules.map((sub, idx) => (
              <button
                key={sub.name}
                onClick={() => setActiveSubTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                  activeSubTab === idx
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Sub-module Details Display */}
          <motion.div
            key={currentSub.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-lg"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-500 uppercase">Module Detail</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                {currentSub.name}
              </h3>
              <p className="text-xs text-brand-500 font-semibold mt-1">
                {currentSub.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                {currentSub.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables & Specifications:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentSub.deliverables.map((del) => (
                  <div key={del} className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center space-x-3 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Business Benefits */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Measurable Business Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.businessBenefits.map((b) => (
              <div key={b.title} className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold font-heading text-slate-900 dark:text-white">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Badges */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
            Technologies & Frameworks Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-brand-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
              Featured Case Study
            </span>
            <span className="text-xs text-emerald-400 font-bold">
              {service.caseStudy.impact}
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold font-heading text-white">
            {service.caseStudy.title}
          </h3>

          <p className="text-xs text-brand-400 font-semibold">
            Client: {service.caseStudy.client}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.caseStudy.summary}
          </p>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-brand-500 text-white text-center space-y-3 sm:space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading">
            Need Expert Consulting on {service.title.split(' ')[0]}?
          </h2>
          <p className="text-xs sm:text-sm text-brand-100 max-w-xl mx-auto">
            Get a tailored architecture roadmap, milestone timeline, and fixed quote from certified Megasus directors.
          </p>
          <button
            onClick={openConsultation}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs rounded-full shadow-lg transition-all"
          >
            Get Free Technical Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
