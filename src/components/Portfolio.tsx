import React, { useState } from 'react';
import { PortfolioProject } from '../types';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const projects: PortfolioProject[] = [
    {
      id: 'p1',
      title: 'Global SAP S/4HANA Migration & ERP',
      category: 'SAP Consulting',
      client: 'Multi-National Automotive Group',
      description: 'End-to-end greenfield SAP S/4HANA migration integrating FICO, MM, and SD across 14 global manufacturing plants.',
      techStack: ['SAP S/4HANA', 'ABAP Cloud', 'SAP FICO', 'HANA DB'],
      metric: '35% Faster Financial Closing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p2',
      title: 'Enterprise Multi-Tenant CRM',
      category: 'Web Development',
      client: 'Apex Capital Services',
      description: 'Custom web CRM with real-time lead pipelines, automated email campaigns, and AI sales forecasting.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      metric: '42% Higher Lead Conversion',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p3',
      title: 'Hospital & Patient Care Management',
      category: 'Software Development',
      client: 'CareFirst Healthcare Network',
      description: 'HIPAA-compliant hospital management suite automating outpatient booking, EHR records, and pharmacy billing.',
      techStack: ['Python', 'Django', 'React', 'AWS'],
      metric: '100% Digital Health Records',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p4',
      title: 'Interactive EduTech LMS Platform',
      category: 'Web Development',
      client: 'Megasus Tech Academy',
      description: 'Next-gen learning platform hosting video lectures, live coding environments, and automated grading for IT upskilling.',
      techStack: ['Next.js 15', 'Node.js', 'Docker', 'PostgreSQL'],
      metric: '10,000+ Active Students',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p5',
      title: 'Smart Warehouse & Inventory Mobile App',
      category: 'Mobile App',
      client: 'SwiftLogistics Corp',
      description: 'Cross-platform Flutter app for warehouse staff featuring barcode scanning, real-time stock sync, and dispatch routing.',
      techStack: ['Flutter', 'Firebase', 'REST API', 'Android/iOS'],
      metric: '99.8% Inventory Accuracy',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p6',
      title: 'Automated HRMS & Biometric Payroll',
      category: 'Software Development',
      client: 'Vanguard Enterprises',
      description: 'Cloud HRMS managing 5,000+ employee records, automated tax deductions, attendance logs, and self-service portals.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
      metric: 'Zero Payroll Errors',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filters = ['all', 'SAP Consulting', 'Web Development', 'Mobile App', 'Software Development'];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50/50 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Featured Client Solutions & Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Explore how Megasus Group has transformed business operations and driven measurable ROI across sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all ${
                selectedFilter === f
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium rounded-full">
                    {proj.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-full shadow-md">
                    {proj.metric}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs font-semibold text-brand-500">{proj.client}</div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center space-x-2">
                  <span>View Case Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
