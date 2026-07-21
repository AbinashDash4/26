import React from 'react';
import { Target, Compass, Lightbulb, Shield, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pioneering cutting-edge SAP architectures, cloud-native enterprise apps, and modern digital workflows.',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Integrity',
      description: 'Upholding unwavering corporate ethics, transparent SLAs, and trusted executive relationships.',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Customer Success',
      description: 'Empowering enterprise clients and candidates with measurable business outcomes and career leaps.',
      icon: Users,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Quality',
      description: 'Delivering robust, zero-defect enterprise software and gold-standard IT upskilling curriculum.',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Growth',
      description: 'Fostering continuous technological advancement for organizations and aspiring tech professionals.',
      icon: TrendingUp,
      color: 'from-brand-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Architecting Digital Excellence & Human Potential
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Megasus Group is a premier technology consulting firm specializing in end-to-end SAP advisory, enterprise software development, web & mobile applications, and high-impact IT upskilling with dedicated placement support.
          </p>
        </div>

        {/* Company Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To empower global enterprises with transformative SAP solutions, modern web and mobile applications, and cloud software infrastructure while bridging the tech skills gap by equipping fresh talent with industry-ready expertise and placement guarantees.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To become the world's most trusted partner for enterprise digital transformation, SAP innovation, and career upskilling — recognized for exceptional quality, client satisfaction, and talent development.
            </p>
          </motion.div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              The foundational principles guiding our enterprise engagements and student mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 shadow-md hover:shadow-xl transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
