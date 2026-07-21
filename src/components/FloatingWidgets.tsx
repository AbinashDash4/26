import React, { useState } from 'react';
import { MessageCircle, MessageSquare, X, Send, Bot, User, PhoneCall } from 'lucide-react';

interface FloatingWidgetsProps {
  openConsultation: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ openConsultation }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to Megasus! How can our SAP & IT Advisory team assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let response = "Thank you for reaching out! Our team in Bhubaneswar will connect with you shortly. You can also call us directly at +91 9692373022 or click 'Get Free Consultation'.";
      if (userText.toLowerCase().includes('sap')) {
        response = "We offer complete SAP S/4HANA migration, FICO, MM, SD, and ABAP custom development. Call +91 9692373022 or schedule a free 30-min technical consultation!";
      } else if (userText.toLowerCase().includes('training') || userText.toLowerCase().includes('placement') || userText.toLowerCase().includes('fresher')) {
        response = "Our Fresher Upskilling Academy offers 100% placement support in SAP, Java, Python, and React. Email info@themegasusgroup.com or call +91 9692373022 to enroll!";
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Action Stack */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-2.5">
        
        {/* WhatsApp Button with 9692373022 */}
        <a
          href="https://wa.me/919692373022?text=Hello%20Megasus,%20I%20would%20like%20to%20inquire%20about%20SAP%20consulting%20and%20upskilling."
          target="_blank"
          rel="noreferrer"
          className="p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>

        {/* Live Chat Assistant Toggle */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="p-3.5 sm:p-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-xl hover:scale-110 transition-all flex items-center justify-center relative"
          title="Live AI Assistant"
        >
          {chatOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />}
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-pulse"></span>
          )}
        </button>

      </div>

      {/* Live Chat Drawer */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[400px] sm:h-[420px] animate-fadeIn">
          
          {/* Chat Header */}
          <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-brand-500 text-white">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm font-heading">Megasus Virtual Advisor</div>
                <div className="text-[9px] sm:text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Now • Bhubaneswar HQ
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900/60 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-start space-x-2 ${m.sender === 'user' ? 'justify-end' : ''}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-brand-500 text-white rounded-tr-none font-medium'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Buttons */}
          <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 flex gap-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => setInput('SAP S/4HANA Consulting')}
              className="px-2.5 py-1 bg-white dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 font-medium whitespace-nowrap hover:border-brand-500"
            >
              SAP S/4HANA
            </button>
            <button
              onClick={() => setInput('Fresher Placement Support')}
              className="px-2.5 py-1 bg-white dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 font-medium whitespace-nowrap hover:border-brand-500"
            >
              Placement Support
            </button>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about SAP, software or upskilling..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-brand-500 text-white hover:bg-brand-600"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
