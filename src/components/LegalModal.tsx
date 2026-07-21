import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | 'cookie' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      date: 'Effective Date: January 1, 2026',
      content: `Megasus Group ("Company", "we", "us") respects your privacy. We process corporate, personal, and candidate data in compliance with enterprise data security standards and GDPR guidelines.

1. Information Collection: We collect information provided directly by clients and students through consultation forms, upskilling enrollment, and resume submissions.
2. Data Usage: Information is exclusively utilized for executing enterprise IT services, scheduling SAP consultations, and processing job placement matching.
3. Security Safeguards: All records are protected using AES-256 encryption at rest and TLS 1.3 in transit.`
    },
    terms: {
      title: 'Terms & Conditions',
      date: 'Effective Date: January 1, 2026',
      content: `By accessing the services provided by Megasus Group, you agree to comply with our enterprise service level agreements (SLA) and candidate training code of conduct.

1. SAP & Enterprise Services: Software consulting and implementation contracts are governed by executed Statement of Works (SOW).
2. Upskilling Programs: Training modules, placement support guarantees, and certification path terms are defined per candidate enrollment agreement.`
    },
    refund: {
      title: 'Refund & Guarantee Policy',
      date: 'Effective Date: January 1, 2026',
      content: `Megasus Group ensures maximum transparency across client consulting engagements and upskilling programs.

1. Enterprise Consulting: Refund terms for milestone engagements are dictated by individual SOW agreements.
2. Fresher Upskilling: Candidates requesting cancellation prior to batch commencement are eligible for a 100% refund of course registration fees.`
    },
    cookie: {
      title: 'Cookie Policy',
      date: 'Effective Date: January 1, 2026',
      content: `Megasus Group uses minimal, security-first cookies to enhance user experience, preserve theme settings (Dark/Light Mode), and remember consultation form preferences. No third-party data tracking or selling occurs.`
    }
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] flex flex-col">
        
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                {current.title}
              </h2>
              <p className="text-xs text-slate-500">{current.date}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line">
          {current.content}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-xs"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
