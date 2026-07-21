import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Database, Globe, Smartphone, Cpu, GraduationCap, UserCheck, Check, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  openConsultation: () => void;
  onNavigateService?: (slug: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ openConsultation, onNavigateService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services: (ServiceItem & { slug: string })[] = [
    {
      id: 'sap-consulting',
      slug: 'sap-consulting',
      title: 'SAP Consulting & Implementation',
      category: 'sap',
      iconName: 'Database',
      description: 'End-to-end SAP advisory, greenfield implementation, S/4HANA migration, and 24/7 enterprise support.',
      items: [
        'SAP S/4HANA Migration & Cloud Strategy',
        'SAP FICO (Financial Accounting & Controlling)',
        'SAP MM (Materials Management)',
        'SAP SD (Sales & Distribution)',
        'SAP ABAP & HANA Custom Development',
        'SAP Managed Support, Implementation & Upgrades'
      ],
      gradient: 'from-amber-500 to-brand-500'
    },
    {
      id: 'web-dev',
      slug: 'web-development',
      title: 'Enterprise Web & Web App Dev',
      category: 'web',
      iconName: 'Globe',
      description: 'High-performance corporate websites, complex web platforms, SaaS admin panels, and RESTful API architectures.',
      items: [
        'Corporate Websites & SaaS Portals',
        'Custom Web ERP & CRM Systems',
        'E-commerce & B2B Enterprise Marketplaces',
        'Interactive Admin Panels & BI Dashboards',
        'Scalable REST & GraphQL API Integration'
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'mobile-dev',
      slug: 'mobile-app-development',
      title: 'Mobile Application Development',
      category: 'mobile',
      iconName: 'Smartphone',
      description: 'Native and cross-platform mobile apps for iOS and Android tailored for enterprise workflows and consumer delight.',
      items: [
        'Native iOS (Swift) & Android (Kotlin) Development',
        'Cross-Platform Apps with Flutter & React Native',
        'Enterprise Field Operations Apps',
        'Secure Payment & Biometric Integration',
        'App Store & Play Store Deployment'
      ],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'software-dev',
      slug: 'software-development',
      title: 'Custom Software & Automation',
      category: 'software',
      iconName: 'Cpu',
      description: 'Bespoke business software, cloud-native microservices, legacy modernization, and robotic process automation.',
      items: [
        'Custom Enterprise Software Solutions',
        'Cloud Applications (AWS / Azure / GCP)',
        'Robotic Process & Workflow Automation',
        'Legacy Architecture Modernization',
        'Enterprise System Security & Compliance'
      ],
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      id: 'upskilling',
      slug: 'fresher-upskilling',
      title: 'Fresher Upskilling & Tech Academy',
      category: 'upskilling',
      iconName: 'GraduationCap',
      description: 'Industry-aligned coding bootcamps, SAP certification paths, and full-stack engineering programs for fresh graduates.',
      items: [
        'SAP FICO / MM / SD / ABAP Certification Training',
        'Java, Python & React Full Stack Engineering',
        'Node.js, Express & SQL Database Architecture',
        'Cloud Computing & DevOps Essentials',
        'Soft Skills, Agile Methodology & Mock Code Reviews'
      ],
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      id: 'placement',
      slug: 'placement-support',
      title: 'Placement Support & Career Launch',
      category: 'placement',
      iconName: 'UserCheck',
      description: 'Comprehensive career acceleration including resume engineering, mock interviews, and direct referral into 250+ MNC partners.',
      items: [
        'ATS-Optimized Resume Building',
        'Technical & Behavioral Mock Interviews',
        'LinkedIn Profile Optimization',
        '1-on-1 Career Mentorship & Salary Negotiation',
        'Guaranteed Job Interviews & Scheduling Assistance'
      ],
      gradient: 'from-brand-500 to-amber-600'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'sap', label: 'SAP Consulting' },
    { key: 'web', label: 'Web Dev' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'software', label: 'Custom Software' },
    { key: 'upskilling', label: 'Fresher Training' },
    { key: 'placement', label: 'Placement Support' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      default: return <Database className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>End-to-End Enterprise Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Our Enterprise & Upskilling Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Delivering business transformation for global enterprises while empowering candidates with industry-leading training.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Service Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-items list */}
                <ul className="space-y-2.5 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    if (onNavigateService) onNavigateService(service.slug);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Dedicated {service.title.split(' ')[0]} Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={openConsultation}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Consult On {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
