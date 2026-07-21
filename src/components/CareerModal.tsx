import React, { useState } from 'react';
import { X, Upload, CheckCircle, Briefcase, Paperclip } from 'lucide-react';
import { CareerOpening } from '../types';

interface CareerModalProps {
  job: CareerOpening | null;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '1-3 Years',
    linkedIn: '',
    coverNote: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        <div className="h-2 bg-gradient-to-r from-brand-500 to-blue-600"></div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Application Submitted!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Your application for <span className="font-semibold text-brand-500">{job.title}</span> has been received by Megasus HR Talent Team.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-sm transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-5">
            
            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-brand-500/10 text-brand-500 rounded-full text-xs font-semibold mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{job.department} • {job.location}</span>
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Apply for {job.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Required Experience: {job.experience} | Type: {job.type}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Resume File Upload Dropzone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Upload Resume (PDF / DOCX) *
                </label>
                <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50 dark:bg-slate-900/50">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1">
                    {file ? (
                      <div className="flex items-center space-x-2 text-brand-500 font-medium text-xs">
                        <Paperclip className="w-4 h-4" />
                        <span>{file.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-slate-400" />
                        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                          Click to browse or drop your resume here
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-brand-500/20 transition-all flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
