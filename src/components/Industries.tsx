import React from 'react';
import { Stethoscope, Factory, ShoppingBag, Landmark, GraduationCap, Building2, CreditCard, Truck, Utensils, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Industries: React.FC = () => {
  const industries = [
    { title: 'Healthcare', desc: 'HIPAA-compliant EHR, telemedicine, and SAP medical supply logistics.', icon: Stethoscope },
    { title: 'Manufacturing', desc: 'Industry 4.0 IoT, SAP S/4HANA supply chain, and shop-floor automation.', icon: Factory },
    { title: 'Retail & E-commerce', desc: 'Omnichannel POS integration, inventory sync, and high-load web stores.', icon: ShoppingBag },
    { title: 'Finance & Fintech', desc: 'Secure payment gateways, fraud analytics, and SAP FICO ledger systems.', icon: Landmark },
    { title: 'Education & EdTech', desc: 'School ERP systems, student portals, and LMS upskilling platforms.', icon: GraduationCap },
    { title: 'Government & Public Sector', desc: 'Citizen services portals, secure cloud migration, and compliance audits.', icon: Building2 },
    { title: 'Banking & Insurance', desc: 'Core banking software, loan origination apps, and biometric security.', icon: CreditCard },
    { title: 'Logistics & Fleet', desc: 'Real-time GPS tracking, warehouse management ERP, and dispatch optimization.', icon: Truck },
    { title: 'Hospitality & Leisure', desc: 'Hotel reservation engines, POS billing apps, and guest loyalty platforms.', icon: Utensils }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Vertical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Tailored enterprise solutions engineered to meet domain-specific regulatory, operational, and scale challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 shadow-md hover:shadow-xl transition-all flex items-start space-x-4 group"
              >
                <div className="p-3.5 rounded-xl bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
