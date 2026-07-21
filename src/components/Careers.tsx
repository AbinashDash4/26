import React from 'react';
import { CareerOpening } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CareersProps {
  onApply: (job: CareerOpening) => void;
}

export const Careers: React.FC<CareersProps> = ({ onApply }) => {
  const openings: CareerOpening[] = [
    {
      id: 'job-1',
      title: 'Senior SAP ABAP / HANA Consultant',
      department: 'SAP Practice',
      location: 'Hybrid / Bengaluru',
      type: 'Full-Time',
      experience: '4-7 Years',
      description: 'Lead SAP S/4HANA custom development, CDS views, AMDP, and enterprise interface integration.'
    },
    {
      id: 'job-2',
      title: 'Lead React & Node.js Full Stack Engineer',
      department: 'Enterprise Web',
      location: 'Remote / Hybrid',
      type: 'Full-Time',
      experience: '3-6 Years',
      description: 'Architect scalable web applications, RESTful APIs, and SaaS microservices.'
    },
    {
      id: 'job-3',
      title: 'Corporate SAP FICO Trainer & Mentor',
      department: 'Upskilling Academy',
      location: 'On-site / Online',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Train fresh graduates and corporate candidates on SAP FICO modules and certification paths.'
    },
    {
      id: 'job-4',
      title: 'Flutter Mobile App Developer',
      department: 'Mobile Engineering',
      location: 'Remote',
      type: 'Full-Time',
      experience: '2-4 Years',
      description: 'Develop high-performance iOS and Android cross-platform mobile apps for logistics and ERP.'
    }
  ];

  return (
    <section id="careers" className="py-24 bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Join Megasus Group</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Current Career Openings
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Build the future of SAP consulting and enterprise software with a world-class team of innovators.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openings.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-xs font-bold rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {job.description}
                </p>

                <div className="text-xs font-semibold text-slate-500">
                  Required Experience: <span className="text-slate-800 dark:text-slate-200">{job.experience}</span>
                </div>
              </div>

              <button
                onClick={() => onApply(job)}
                className="w-full py-3 px-6 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Apply Now & Upload Resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
