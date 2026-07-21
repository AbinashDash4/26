import React from 'react';
import { GraduationCap, Award, Building2, TrendingUp, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudentSuccessProps {
  openConsultation: () => void;
}

export const StudentSuccess: React.FC<StudentSuccessProps> = ({ openConsultation }) => {
  const stats = [
    { number: '10,000+', label: 'Students Trained', sub: 'SAP, Java, React & Python', icon: GraduationCap, color: 'text-brand-500' },
    { number: '98%', label: 'Placement Rate', sub: 'Placed within 90 days', icon: TrendingUp, color: 'text-emerald-500' },
    { number: '250+', label: 'Hiring Partners', sub: 'Top MNCs & SAP Partners', icon: Building2, color: 'text-blue-500' },
    { number: '15,000+', label: 'Certifications', sub: 'SAP Global & Full-Stack', icon: Award, color: 'text-amber-500' }
  ];

  const hiringPartners = [
    'TCS', 'Infosys', 'Accenture', 'IBM', 'Oracle', 'SAP Labs', 'Wipro', 'Capgemini', 'Cognizant', 'Tech Mahindra', 'HCLTech', 'Deloitte'
  ];

  const successStories = [
    {
      name: 'Rohan Sharma',
      role: 'SAP ABAP Technical Consultant',
      company: 'Leading Global MNC',
      salary: '8.5 LPA Package',
      course: 'SAP ABAP & HANA Mastery',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      story: 'Megasus transformed my career. Coming from a non-CS background, their SAP training and mock interviews got me placed in just 2 months.'
    },
    {
      name: 'Priya Nair',
      role: 'Full Stack Software Engineer',
      company: 'Tier-1 SaaS Enterprise',
      salary: '11.0 LPA Package',
      course: 'Java & React Engineering',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      story: 'The placement support team optimized my resume and lined up 5 interview calls in my first week. The hands-on project work made all the difference.'
    },
    {
      name: 'Vikram Patel',
      role: 'SAP FICO Financial Lead',
      company: 'Enterprise SAP Partner',
      salary: '9.2 LPA Package',
      course: 'SAP FICO Certification',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      story: 'Real-world SAP S/4HANA case studies taught by certified trainers gave me immense confidence. Megasus gave me my dream corporate break.'
    }
  ];

  return (
    <section id="training" className="py-16 sm:py-24 bg-white dark:bg-[#0B0F17] relative overflow-hidden">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Fresher Upskilling & Placement Academy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Empowering Next-Gen Tech Talent
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We bridge academia and industry with certified SAP training, full-stack software bootcamps, and 100% placement support.
          </p>
        </div>

        {/* Responsive 2-Column Mobile Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2 sm:space-y-3 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center">
                  <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hiring Partners Ticker Wall */}
        <div id="placement" className="space-y-5 text-center">
          <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
            250+ CORPORATE HIRING PARTNERS
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {hiringPartners.map((partner) => (
              <div
                key={partner}
                className="px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-extrabold font-heading text-xs sm:text-sm hover:border-brand-500 transition-colors shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Student Success Stories */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Student Placement Success Stories
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Real journeys of fresh graduates hired into top technology organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-brand-500 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-sm font-heading text-slate-900 dark:text-white">
                        {story.name}
                      </h4>
                      <p className="text-xs text-brand-500 font-semibold">{story.role}</p>
                      <p className="text-[10px] text-slate-400">{story.company} • {story.salary}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Course: {story.course}</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Placed
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Responsive CTA Box */}
          <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                Ready to Kickstart Your Tech Career?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Enroll in our upcoming SAP & Full Stack batch with guaranteed placement support.
              </p>
            </div>
            <button
              onClick={openConsultation}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-full shadow-lg shadow-brand-500/30 flex items-center justify-center space-x-2 shrink-0"
            >
              <span>Apply for Training & Placement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
