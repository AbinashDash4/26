import React from 'react';
import { PhoneCall, ArrowRight, ShieldCheck, Cpu, Database, Cloud, Code, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  openConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openConsultation }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-[#0B0F17] dark:via-[#0E1524] dark:to-[#0B0F17]">
      
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-brand-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20 dark:border-brand-500/30 text-brand-600 dark:text-brand-400 text-[11px] sm:text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse shrink-0" />
              <span>Next-Gen Enterprise IT & SAP Solutions</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <span className="hidden sm:inline-block text-[11px] font-normal text-slate-500 dark:text-slate-400">100% Placement Record</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Transforming Businesses Through <span className="text-orange-gradient">SAP</span>, Digital Innovation & Enterprise Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Megasus Group helps businesses accelerate digital transformation through SAP consulting, enterprise software solutions, web and mobile application development, while empowering fresh graduates with industry-ready training and placement support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={openConsultation}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-500 to-orange-600 hover:from-brand-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-full border border-slate-200 dark:border-slate-700 transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Enterprise Clients
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-brand-500 font-heading">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  SAP & Tech Practice
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  10,000+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Students Upskilled
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual: Responsive 3D Dashboard Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Enterprise Visual Card */}
              <div className="relative glass-card rounded-3xl p-5 sm:p-8 overflow-hidden shadow-2xl border border-brand-500/20 dark:border-slate-700">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800 pb-3 sm:pb-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 ml-1">megasus-cloud-console</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    ONLINE
                  </span>
                </div>

                {/* Dashboard Widgets */}
                <div className="space-y-3 sm:space-y-4">
                  
                  {/* SAP S/4HANA Enterprise Workflow */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-brand-500/10 text-brand-500 rounded-xl">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">SAP S/4HANA Cloud</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">FICO & ABAP Live Sync</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-500 flex items-center space-x-1 justify-end">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>99.99%</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Zero Downtime</div>
                    </div>
                  </div>

                  {/* Cloud Computing & AI Engine */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                      <div className="flex items-center space-x-1.5 text-blue-500 mb-1">
                        <Cloud className="w-4 h-4" />
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">AWS Cloud</span>
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">Auto-Scaled</div>
                      <div className="text-[10px] text-slate-400">Multi-Region</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                      <div className="flex items-center space-x-1.5 text-amber-500 mb-1">
                        <Cpu className="w-4 h-4" />
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">AI Engine</span>
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">Active ERP</div>
                      <div className="text-[10px] text-slate-400">Automation</div>
                    </div>
                  </div>

                  {/* Code & Upskilling Tracker Widget */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-1.5 border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1">
                      <span className="flex items-center gap-1">
                        <Code className="w-3.5 h-3.5 text-brand-500" />
                        Megasus Group Talent Pipeline
                      </span>
                      <span className="text-brand-400">Verified</span>
                    </div>
                    <div className="text-emerald-400 truncate">
                      &gt; deployCandidate(stack: ["SAP", "React", "Java"]);
                    </div>
                    <div className="text-slate-400 text-[10px]">
                      ✔ Certified | Hired at MNC Partner
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Badges */}
              <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
                <div className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-800 dark:text-white flex items-center space-x-1 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                  <span>SAP Certified Consultants</span>
                </div>
                <div className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-800 dark:text-white flex items-center space-x-1 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Placement Support</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
