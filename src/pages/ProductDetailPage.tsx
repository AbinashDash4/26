import React, { useState } from 'react';
import { DetailedProduct } from '../data/productDetails';
import { SEO } from '../components/SEO';
import { ArrowLeft, CheckCircle2, ChevronRight, PhoneCall, Sparkles, Layers, Users, UserCheck, Layout, GraduationCap, Check, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductDetailPageProps {
  product: DetailedProduct;
  onBackToHome: () => void;
  openConsultation: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToHome,
  openConsultation
}) => {
  const [activeModuleTab, setActiveModuleTab] = useState<number>(0);
  const currentModule = product.modules[activeModuleTab] || product.modules[0];

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-7 h-7 sm:w-8 sm:h-8" />;
      case 'Users': return <Users className="w-7 h-7 sm:w-8 sm:h-8" />;
      case 'UserCheck': return <UserCheck className="w-7 h-7 sm:w-8 sm:h-8" />;
      case 'Layout': return <Layout className="w-7 h-7 sm:w-8 sm:h-8" />;
      case 'GraduationCap': return <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />;
      default: return <Layers className="w-7 h-7 sm:w-8 sm:h-8" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 min-h-screen">
      
      {/* Dynamic SEO Meta Tag Management */}
      <SEO
        title={`${product.title} | Megasus Software`}
        description={product.metaDescription}
        canonicalUrl={`https://megasusgroup.com/products/${product.slug}`}
        schemaJson={product.schemaJson}
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
            <span>Products</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-bold">{product.code} Suite</span>
          </nav>

        </div>

        {/* Dedicated Product Hero Banner */}
        <div className="relative rounded-3xl p-6 sm:p-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800 space-y-4 sm:space-y-6">
          
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/30">
              {getProductIcon(product.icon)}
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-[10px] sm:text-xs font-bold mb-1">
                <Sparkles className="w-3 h-3 text-brand-500 animate-pulse" />
                <span>{product.heroBadge}</span>
              </div>
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                {product.title}
              </h1>
            </div>
          </div>

          <p className="text-brand-400 text-sm sm:text-lg font-semibold max-w-2xl">
            {product.subtitle}
          </p>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-3xl">
            {product.overview}
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={openConsultation}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-500 to-orange-600 hover:from-brand-600 hover:to-orange-700 text-white font-bold text-xs rounded-full shadow-xl shadow-brand-500/30 flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Live Product Demo</span>
            </button>

            <a
              href="#modules"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-full text-center border border-slate-700"
            >
              Explore Product Modules & Features
            </a>
          </div>

        </div>

        {/* Product Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
          {product.keyImpacts.map((imp) => (
            <div key={imp.label} className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-md">
              <div className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-500">
                {imp.metric}
              </div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {imp.label}
              </div>
            </div>
          ))}
        </div>

        {/* System Modules Breakdown */}
        <div id="modules" className="space-y-6 sm:space-y-8">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              System Modules & Functional Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Select a module below to inspect features and business capabilities.
            </p>
          </div>

          {/* Swipeable Sub-module Tabs on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
            {product.modules.map((mod, idx) => (
              <button
                key={mod.name}
                onClick={() => setActiveModuleTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                  activeModuleTab === idx
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>

          {/* Selected Module Display */}
          <motion.div
            key={currentModule.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-lg"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-500 uppercase">{product.code} Module</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                {currentModule.name}
              </h3>
              <p className="text-xs text-brand-500 font-semibold mt-1">
                {currentModule.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                {currentModule.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Features & Capability Specifications:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentModule.features.map((feat) => (
                  <div key={feat} className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center space-x-3 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technology Stack Badges */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
            Underlying Cloud & Software Architecture
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((t) => (
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
              Client Case Study
            </span>
            <span className="text-xs text-emerald-400 font-bold">
              {product.caseStudy.impact}
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold font-heading text-white">
            {product.caseStudy.title}
          </h3>

          <p className="text-xs text-brand-400 font-semibold">
            Client: {product.caseStudy.client}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {product.caseStudy.summary}
          </p>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-brand-500 text-white text-center space-y-3 sm:space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading">
            Ready to Deploy {product.code} in Your Organization?
          </h2>
          <p className="text-xs sm:text-sm text-brand-100 max-w-xl mx-auto">
            Schedule a live 30-minute interactive product walkthrough with our solution architects.
          </p>
          <button
            onClick={openConsultation}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs rounded-full shadow-lg transition-all"
          >
            Request Live Product Demo
          </button>
        </div>

      </div>
    </div>
  );
};
