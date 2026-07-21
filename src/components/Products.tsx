import React, { useState } from 'react';
import { ProductItem } from '../types';
import { Layers, Users, UserCheck, Layout, GraduationCap, ArrowRight, CheckCircle2, Sparkles, X, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductsProps {
  openConsultation: () => void;
  onNavigateProduct?: (slug: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ openConsultation, onNavigateProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'erp-product',
      code: 'ERP',
      slug: 'erp',
      title: 'Enterprise Resource Planning',
      subtitle: 'Unified Financials, Supply Chain & Operations',
      description: 'An all-in-one cloud ERP suite for enterprise organizations with real-time analytics, inventory tracking, and procurement.',
      features: [
        'Real-time Financial Ledger & Accounting',
        'Supply Chain & Multi-Warehouse Management',
        'Procurement & Purchase Order Workflows',
        'Executive Analytics & Multi-Branch Support'
      ],
      icon: 'Layers',
      tag: 'Flagship Enterprise'
    },
    {
      id: 'crm-product',
      code: 'CRM',
      slug: 'crm',
      title: 'Customer Relationship Management',
      subtitle: 'Sales Pipeline, AI Automation & Client 360°',
      description: 'Intelligent CRM platform designed to streamline sales workflows, WhatsApp campaigns, customer support ticketing, and revenue forecasting.',
      features: [
        'Lead Scoring & Visual Pipeline Board',
        'Automated Email & WhatsApp Campaigns',
        'Customer Support Ticket Management',
        'AI Sales Forecasting & Performance Dashboards'
      ],
      icon: 'Users',
      tag: 'High Growth'
    },
    {
      id: 'hrms-product',
      code: 'HRMS',
      slug: 'hrms',
      title: 'Human Resource Management System',
      subtitle: 'Payroll, Attendance & Talent Lifecycle',
      description: 'Complete HR automation suite from employee onboarding, biometric attendance, tax payroll to performance reviews.',
      features: [
        'Automated Monthly Payroll & Tax Calculations',
        'Biometric & GPS Attendance Integration',
        'Leave Management & Self-Service Portal',
        'KPI & Annual Appraisal Management'
      ],
      icon: 'UserCheck',
      tag: 'Workforce Suite'
    },
    {
      id: 'cms-product',
      code: 'CMS',
      slug: 'cms',
      title: 'College Management System',
      subtitle: 'Higher-Ed Campus ERP & Semester Grading',
      description: 'Comprehensive college and university ERP automating student admissions, semester exam grading, faculty allocation, and department portals.',
      features: [
        'Online College Admissions & Merit Ranking',
        'Semester Exam Credit Grading & Transcripts',
        'Faculty Timetable Allocation & Lab Sync',
        'Departmental Research & Student Registry'
      ],
      icon: 'GraduationCap',
      tag: 'Campus ERP'
    },
    {
      id: 'sms-product',
      code: 'SMS',
      slug: 'sms',
      title: 'School Management System',
      subtitle: 'Academic, Fees & Parent-Teacher App',
      description: 'K-12 school administration platform automating online fee collection, exam report cards, parent mobile app, and live GPS bus tracking.',
      features: [
        'Online Student Admissions & Fee Gateways',
        'Exam Management & Automated Report Cards',
        'Parent-Teacher Mobile Application',
        'Live GPS School Bus Tracking'
      ],
      icon: 'Layout',
      tag: 'K-12 EduTech'
    },
    {
      id: 'lms-product',
      code: 'LMS',
      slug: 'lms',
      title: 'Learning Management System',
      subtitle: 'Video Courses, Virtual Classrooms & Certificates',
      description: 'Modern e-learning platform hosting HD video lectures, live Zoom virtual classrooms, timed quizzes, and automated QR certificates.',
      features: [
        'HLS Adaptive HD Video Streaming Player',
        'Live Zoom & Google Meet Classroom Embeds',
        'Timed Automated Quizzes & Scoreboards',
        'QR-Verified Course Completion Certificates'
      ],
      icon: 'GraduationCap',
      tag: 'Digital E-Learning'
    }
  ];

  const getProductIcon = (icon: string) => {
    switch (icon) {
      case 'Layers': return <Layers className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'UserCheck': return <UserCheck className="w-8 h-8" />;
      case 'Layout': return <Layout className="w-8 h-8" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8" />;
      default: return <Layers className="w-8 h-8" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Ready-to-Deploy Enterprise Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Megasus Enterprise SaaS Suite
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            6 modular, pre-built enterprise products engineered for rapid deployment, multi-tenant security, and custom integration.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-brand-500/10 text-brand-500 rounded-full text-[10px] font-bold tracking-wider uppercase">
                {product.tag}
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
                  {getProductIcon(product.icon)}
                </div>

                <div className="text-xs font-mono font-bold text-brand-500 mb-1">{product.code} SUITE</div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {product.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-8">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    if (onNavigateProduct) onNavigateProduct(product.slug);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Dedicated {product.code} Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Quick Specs</span>
                  </button>
                  <button
                    onClick={openConsultation}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Product Quick Specs Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden p-8 space-y-6">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0">
                {getProductIcon(selectedProduct.icon)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-brand-500 uppercase">{selectedProduct.code} Enterprise Platform</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProduct.description} Designed with multi-tenant cloud isolation, role-based access control, and 1-click cloud deployment.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Complete Feature Specs:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProduct.features.concat([
                  'SOC2 Type II & GDPR Compliant',
                  '24×7 High Availability Guarantee',
                  'REST & Webhook API Ready',
                  'Custom Branding & Domain Mapping'
                ]).map((item) => (
                  <div key={item} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => {
                  const slug = selectedProduct.slug;
                  setSelectedProduct(null);
                  if (onNavigateProduct) onNavigateProduct(slug);
                }}
                className="flex-1 py-3 px-6 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs rounded-xl shadow-lg shadow-brand-500/25 text-center flex items-center justify-center space-x-2"
              >
                <span>Visit Full {selectedProduct.code} Page</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="py-3 px-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-xl"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
