import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, Linkedin, Facebook, Instagram, Youtube, Sparkles, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'SAP Consulting',
    message: '',
    captchaChecked: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.captchaChecked) {
      alert('Please complete the reCAPTCHA security verification.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Connect With Megasus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out for executive SAP advisory, enterprise software quotes, upskilling enrollment, or hiring partner inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Message Delivered Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you <span className="font-semibold text-brand-500">{formState.fullName}</span>. Our team in Bhubaneswar will connect with you within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-500 text-white font-semibold rounded-xl text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech"
                      value={formState.companyName}
                      onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="info@themegasusgroup.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9692373022"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Service / Product Required *
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="SAP Consulting">SAP Consulting & Migration</option>
                    <option value="Web Development">Web Application & ERP Dev</option>
                    <option value="Mobile App Development">Mobile App Dev (iOS/Android)</option>
                    <option value="Software Development">Custom Software Development</option>
                    <option value="Fresher Upskilling">Fresher Upskilling & SAP Training</option>
                    <option value="Placement Support">Placement Support & Hiring</option>
                    <option value="Megasus Products">Enterprise SaaS Products (ERP/CRM/LMS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                  ></textarea>
                </div>

                {/* Google reCAPTCHA mock */}
                <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <input
                    type="checkbox"
                    id="contactRecaptcha"
                    checked={formState.captchaChecked}
                    onChange={(e) => setFormState({ ...formState, captchaChecked: e.target.checked })}
                    className="w-5 h-5 text-brand-500 rounded cursor-pointer"
                  />
                  <label htmlFor="contactRecaptcha" className="text-xs text-slate-600 dark:text-slate-400 flex items-center space-x-1.5 cursor-pointer">
                    <span>I'm not a robot</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500 ml-1" />
                  </label>
                  <span className="text-[10px] text-slate-400 ml-auto">Protected by reCAPTCHA</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-brand-500 to-orange-600 hover:from-brand-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-500/25 flex items-center justify-center space-x-2 transition-all"
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right: Contact Information & Bhubaneswar Google Maps Location */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Info Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                Corporate Office Details
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Office Location</div>
                    <div className="mt-0.5 font-medium">Infocity IT Park Zone, Patia, Bhubaneswar, Odisha, India</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Phone Number</div>
                    <div className="mt-0.5 font-medium">
                      <a href="tel:+919692373022" className="hover:text-brand-500 transition-colors font-bold text-slate-900 dark:text-white">
                        +91 9692373022
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Email Address</div>
                    <div className="mt-0.5 font-medium">
                      <a href="mailto:info@themegasusgroup.com" className="hover:text-brand-500 transition-colors font-bold text-brand-500">
                        info@themegasusgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Business Hours</div>
                    <div className="mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM IST (24×7 Advisory Support)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-400">Connect With Us</div>
                <div className="flex items-center space-x-3">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Card - Bhubaneswar, Odisha */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 relative group">
              <iframe
                title="Megasus Bhubaneswar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29930.65582312674!2d85.8118!3d20.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093800000001%3A0x6b77d46c82701d7e!2sInfocity%2C%20Chandaka%20Industrial%20Estate%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale dark:invert dark:opacity-80 group-hover:filter-none transition-all"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
