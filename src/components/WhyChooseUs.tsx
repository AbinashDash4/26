import React, { useState } from 'react';
import { Award, ShieldCheck, Zap, DollarSign, Clock, Lock, Headphones, ThumbsUp, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>('all');

  const differentiators = [
    { title: 'Industry Experts', desc: 'Seasoned enterprise architects with 15+ years delivering complex digital solutions.', icon: Award, color: 'from-amber-500 to-orange-500' },
    { title: 'Certified SAP Consultants', desc: 'Direct access to certified SAP FICO, ABAP, S/4HANA, MM, and SD specialists.', icon: ShieldCheck, color: 'from-brand-500 to-amber-600' },
    { title: 'Agile Development', desc: 'Iterative sprint releases ensuring fast time-to-market and transparent communication.', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { title: 'Affordable Pricing', desc: 'Flexible engagement models designed for enterprise value without cost blowouts.', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { title: 'Dedicated Support', desc: 'Personalized account managers and dedicated engineering teams for every project.', icon: Clock, color: 'from-purple-500 to-indigo-500' },
    { title: 'Enterprise Security', desc: 'Bank-grade encryption, SOC2 Type II compliance, and strict data governance.', icon: Lock, color: 'from-rose-500 to-pink-500' },
    { title: '24×7 Global Support', desc: 'Round-the-clock SLA monitoring and technical assistance for mission-critical apps.', icon: Headphones, color: 'from-blue-600 to-indigo-600' },
    { title: '100% Client Satisfaction', desc: 'Proven track record of long-term client partnerships and student career success.', icon: ThumbsUp, color: 'from-emerald-600 to-teal-600' },
  ];

  const technologies = [
    { name: 'SAP S/4HANA', cat: 'sap', desc: 'Core ERP & Enterprise Data Engine' },
    { name: 'SAP FICO / MM / SD', cat: 'sap', desc: 'Financial & Supply Chain Modules' },
    { name: 'SAP ABAP & HANA', cat: 'sap', desc: 'High-Performance Custom Coding' },
    { name: 'Java & Spring Boot', cat: 'backend', desc: 'Enterprise Microservices & Cloud' },
    { name: 'Node.js & Express', cat: 'backend', desc: 'Scalable Async API Platforms' },
    { name: 'Python & Django', cat: 'backend', desc: 'AI Data Pipelines & Web Systems' },
    { name: 'React & Redux', cat: 'frontend', desc: 'Dynamic Rich Interactive UIs' },
    { name: 'Next.js 15', cat: 'frontend', desc: 'Server-Driven React Applications' },
    { name: 'Flutter & React Native', cat: 'mobile', desc: 'Cross-Platform Mobile Apps' },
    { name: 'Docker & Kubernetes', cat: 'cloud', desc: 'Container Orchestration & Microservices' },
    { name: 'AWS & Azure Cloud', cat: 'cloud', desc: 'Multi-Region High Availability Infrastructure' },
    { name: 'PostgreSQL & MongoDB', cat: 'database', desc: 'Relational & NoSQL Database Storage' },
    { name: 'MySQL & Redis', cat: 'database', desc: 'ACID Transactional & In-Memory Caching' },
    { name: 'Git & CI/CD Pipelines', cat: 'devops', desc: 'Automated Code Quality & Deployment' }
  ];

  const techCategories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'sap', label: 'SAP Ecosystem' },
    { key: 'frontend', label: 'Frontend & Web' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'mobile', label: 'Mobile Tech' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'database', label: 'Databases' },
  ];

  const filteredTech = selectedTechCategory === 'all'
    ? technologies
    : technologies.filter(t => t.cat === selectedTechCategory);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Why Choose Us */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>The Megasus Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Why Global Leaders Partner With Megasus
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Combining deep SAP domain knowledge, agile engineering excellence, and customer-first dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => {
              const IconComp = diff.icon;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 shadow-md hover:shadow-xl transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${diff.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {diff.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enterprise Tech Stack Filter */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Enterprise Technology Stack
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We leverage modern frameworks, cloud infrastructure, and battle-tested databases.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {techCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedTechCategory(cat.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedTechCategory === cat.key
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-center shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center space-y-1 group"
              >
                <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-150 transition-transform mb-1"></div>
                <div className="text-xs font-bold font-heading text-slate-800 dark:text-slate-200">
                  {tech.name}
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate w-full">
                  {tech.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
