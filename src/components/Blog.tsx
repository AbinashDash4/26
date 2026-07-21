import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Clock, User, ArrowRight, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'b1',
      title: 'Top 5 Reasons to Migrate to SAP S/4HANA Cloud in 2026',
      excerpt: 'Discover how S/4HANA in-memory processing speeds up financial closes and provides predictive AI analytics.',
      category: 'SAP Consulting',
      author: 'Vikram Singh, Chief SAP Architect',
      date: 'July 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'b2',
      title: 'The Ultimate Full Stack Developer Career Roadmap for Freshers',
      excerpt: 'Step-by-step guide to mastering React 19, Node.js, TypeScript, and SQL to secure high-paying MNC software jobs.',
      category: 'Career & Training',
      author: 'Anita Roy, Head of Talent Upskilling',
      date: 'July 10, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'b3',
      title: 'Building Scalable Enterprise SaaS Apps with Next.js 15 & Microservices',
      excerpt: 'Best practices for multi-tenant isolation, server components, and continuous deployment on cloud infrastructure.',
      category: 'Cloud & Engineering',
      author: 'Siddharth Mehta, Lead Software Engineer',
      date: 'July 04, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Tech Insights & Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Latest Articles & Enterprise Trends
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Stay ahead with technical deep-dives on SAP S/4HANA, AI automation, and career growth strategies.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-500 text-white text-[10px] font-bold rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-[11px] text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white leading-snug group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] flex flex-col">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-48 relative overflow-hidden shrink-0">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white space-y-1">
                <span className="px-2.5 py-1 bg-brand-500 text-white text-[10px] font-bold rounded-full">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl font-bold font-heading leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <div className="flex items-center space-x-3 text-xs text-brand-500 font-medium pb-2 border-b border-slate-200 dark:border-slate-800">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
              <p>
                In today's fast-evolving enterprise landscape, organizations are increasingly turning to cloud-native SAP S/4HANA solutions to streamline supply chains, optimize financial ledgers, and enable real-time operational visibility.
              </p>
              <p>
                Megasus Group's certified SAP consultants work side-by-side with IT leads to ensure seamless data migration, custom ABAP code optimization, and round-the-clock enterprise support.
              </p>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-slate-800 dark:text-slate-200">
                Key Takeaway: Early adoption of integrated ERP & cloud microservices reduces operational overhead by up to 35%.
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
