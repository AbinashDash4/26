import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, ShieldCheck } from 'lucide-react';

interface CookieConsentProps {
  openCookiePolicy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ openCookiePolicy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('megasus_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('megasus_cookie_consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('megasus_cookie_consent', JSON.stringify({
      ...preferences,
      essential: true,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleRejectOptional = () => {
    localStorage.setItem('megasus_cookie_consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md w-[calc(100vw-2rem)] bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-3.5 animate-fadeIn">
      
      {/* Top Banner Ribbon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 sm:p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
            <Cookie className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm font-heading text-slate-900 dark:text-white">
              Cookie & Privacy Preferences
            </h4>
            <span className="text-[9px] sm:text-[10px] text-slate-400">GDPR & SOC2 Compliant</span>
          </div>
        </div>
        <button
          onClick={handleRejectOptional}
          className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
        We use essential cookies to maintain secure sessions, preserve your dark/light theme, and improve performance. Read our{' '}
        <button
          onClick={openCookiePolicy}
          className="text-brand-500 font-semibold underline hover:text-brand-600"
        >
          Cookie Policy
        </button>.
      </p>

      {showSettings ? (
        <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Essential Cookies
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase">Required</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-[11px]">
            <span className="font-medium text-slate-700 dark:text-slate-300">Analytics & Performance</span>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              className="w-4 h-4 text-brand-500 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-[11px]">
            <span className="font-medium text-slate-700 dark:text-slate-300">Marketing & Personalization</span>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              className="w-4 h-4 text-brand-500 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <button
              onClick={handleSavePreferences}
              className="flex-1 py-2.5 px-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-xs shadow-md"
            >
              Save Preferences
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="py-2.5 px-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-xs"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-500/20 flex items-center justify-center space-x-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Accept All</span>
          </button>

          <button
            onClick={() => setShowSettings(true)}
            className="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-xl transition-colors"
          >
            Customize
          </button>
        </div>
      )}

    </div>
  );
};
