import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'sap',
      question: 'What SAP modules does Megasus Group support for consulting and implementation?',
      answer: 'We provide full lifecycle advisory, implementation, upgrade, and S/4HANA migration services for SAP FICO (Finance & Controlling), SAP MM (Materials Management), SAP SD (Sales & Distribution), SAP ABAP custom coding, and SAP HANA database optimization.'
    },
    {
      category: 'training',
      question: 'Who is eligible for the Fresher IT Upskilling & SAP Training programs?',
      answer: 'Our upskilling programs are designed for BE/B.Tech, BCA, MCA, BSc CS, and MBA graduates wanting to specialize in SAP Consulting, Java Full Stack, Python, React, or Cloud Computing. No prior coding experience is required for beginner tracks.'
    },
    {
      category: 'placement',
      question: 'How does Megasus Group guarantee Placement Support for candidates?',
      answer: 'We provide end-to-end placement acceleration including ATS resume building, 1-on-1 technical mock interviews, LinkedIn branding, and direct interview scheduling with our network of 250+ MNC and SAP partner hiring employers.'
    },
    {
      category: 'general',
      question: 'Can Megasus Group build custom enterprise software for my startup or SME?',
      answer: 'Yes! We engineer custom web, mobile (iOS/Android), ERP, CRM, and cloud applications tailored to your specific business requirements with agile sprint delivery and SOC2 security standards.'
    },
    {
      category: 'sap',
      question: 'How long does an SAP S/4HANA Cloud Migration typically take?',
      answer: 'Migration timelines vary by company size and customization level, typically ranging between 8 weeks for rapid Greenfield migrations to 6 months for complex multi-entity Brownfield migrations.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Have Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to know about our SAP consulting, custom software, and placement upskilling programs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-heading">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform ${isOpen ? 'rotate-180 bg-brand-500 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
