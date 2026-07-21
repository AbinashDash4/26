import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'client' | 'student' | 'corporate'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'David Reynolds',
      role: 'Chief Technology Officer',
      company: 'Apex Industrial Systems',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'Megasus Group executed our SAP S/4HANA migration flawlessly. Their certified SAP consultants delivered 2 weeks ahead of schedule with zero data loss.',
      rating: 5,
      type: 'client'
    },
    {
      id: 't2',
      name: 'Sneha Kulkarni',
      role: 'SAP ABAP Developer',
      company: 'Placed at Top IT MNC',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote: 'The upskilling program at Megasus gave me hands-on project experience in SAP HANA and ABAP. The mock interviews were instrumental in cracking my interviews.',
      rating: 5,
      type: 'student'
    },
    {
      id: 't3',
      name: 'Marcus Vance',
      role: 'VP of Global Engineering',
      company: 'CloudMatrix Logistics',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      quote: 'Megasus developed our custom web ERP and warehouse mobile app. Their engineering quality and post-launch support are unmatched.',
      rating: 5,
      type: 'corporate'
    },
    {
      id: 't4',
      name: 'Ananya Deshmukh',
      role: 'Full Stack Engineer',
      company: 'Hired at Unicorn SaaS',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      quote: 'I went from a fresher to a full stack developer in 4 months. Megasus placement team actively referred my resume to 10+ tier-1 companies.',
      rating: 5,
      type: 'student'
    }
  ];

  const filtered = activeTab === 'all'
    ? testimonials
    : testimonials.filter(t => t.type === activeTab);

  useEffect(() => {
    if (isPaused || filtered.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filtered.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, filtered.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const current = filtered[currentIndex] || testimonials[0];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Client & Student Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Trusted by Enterprises & Fresh Graduates
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Read authentic reviews from enterprise directors, corporate partners, and placed candidates.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'All Reviews' },
            { key: 'client', label: 'Client Reviews' },
            { key: 'student', label: 'Student Reviews' },
            { key: 'corporate', label: 'Corporate Partners' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key as any);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel Display */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6"
            >
              <Quote className="w-16 h-16 mx-auto text-brand-500/15" />

              {/* Star Rating */}
              <div className="flex items-center justify-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-slate-800 dark:text-slate-200 font-sans italic leading-relaxed max-w-2xl mx-auto">
                "{current.quote}"
              </p>

              {/* Author Details */}
              <div className="flex flex-col items-center space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-500 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-base font-heading text-slate-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs text-brand-500 font-semibold">{current.role}</p>
                  <p className="text-[11px] text-slate-400">{current.company}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-500 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-brand-500' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-500 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
