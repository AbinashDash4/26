export interface ProductModule {
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface DetailedProduct {
  slug: string;
  code: 'ERP' | 'CRM' | 'HRMS' | 'CMS' | 'SMS' | 'LMS';
  title: string;
  subtitle: string;
  heroBadge: string;
  metaDescription: string;
  overview: string;
  icon: string;
  tag: string;
  gradient: string;
  modules: ProductModule[];
  techStack: string[];
  keyImpacts: { metric: string; label: string }[];
  caseStudy: {
    title: string;
    client: string;
    impact: string;
    summary: string;
  };
  faq: { question: string; answer: string }[];
  schemaJson: object;
}

export const productDetailsData: Record<string, DetailedProduct> = {
  'erp': {
    slug: 'erp',
    code: 'ERP',
    title: 'Megasus Enterprise Resource Planning (ERP)',
    subtitle: 'Unified Financials, Supply Chain, Multi-Branch Operations & Analytics',
    heroBadge: 'Flagship Enterprise SaaS Platform',
    metaDescription: 'Megasus ERP Suite: Unified cloud financial ledger, inventory tracking, supply chain, procurement, and real-time executive analytics for multi-branch enterprises.',
    overview: 'Megasus ERP is a comprehensive, multi-tenant cloud enterprise platform. It consolidates corporate accounting, multi-warehouse inventory, purchase procurement, and multi-currency ledgers into a single secure interface.',
    icon: 'Layers',
    tag: 'Flagship Suite',
    gradient: 'from-amber-500 via-brand-500 to-orange-600',
    modules: [
      {
        name: 'Financial Ledger & Treasury',
        tagline: 'Real-time double-entry accounting & multi-currency reporting',
        description: 'Manage automated general ledgers, accounts payable, accounts receivable, asset depreciation, and bank reconciliation.',
        features: [
          'Universal General Ledger & Real-Time Balance Sheet',
          'Automated Bank Feeds & Payment Reconciliation',
          'Multi-Currency & Regional Tax Governance',
          'Executive Profit & Loss Dashboards'
        ]
      },
      {
        name: 'Inventory & Warehouse Management',
        tagline: 'Multi-location stock tracking with barcode scanning',
        description: 'Track raw materials and finished goods across multiple warehouses with automated reorder triggers and serial batch tracking.',
        features: [
          'Serial & Batch Number Tracking',
          'Barcode & QR Code Mobile Integration',
          'Automated Minimum Stock Alerts & Purchase Requests',
          'Inter-Warehouse Stock Transfer Workflows'
        ]
      },
      {
        name: 'Procurement & Vendor Management',
        tagline: 'Streamlined purchase orders, RFQs & vendor evaluations',
        description: 'Digitize purchasing workflows from purchase requisitions to vendor quotation comparisons and 3-way invoice matching.',
        features: [
          'Purchase Order (PO) Multi-Level Approval Hierarchy',
          'Vendor Performance Rating & History Audit',
          'Automated 3-Way Match (PO, GRN & Invoice)',
          'Vendor Self-Service Portal'
        ]
      }
    ],
    techStack: ['React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    keyImpacts: [
      { metric: '40%', label: 'Reduction in Financial Audit Time' },
      { metric: '99.9%', label: 'Inventory Stock Accuracy' },
      { metric: '3x', label: 'Faster Purchase Order Processing' }
    ],
    caseStudy: {
      title: 'Multi-City Enterprise ERP Rollout for Industrial Group',
      client: 'Vanguard Industrial Supplies (28 Warehouses)',
      impact: '$3.5M Inventory Cost Reduction',
      summary: 'Replaced legacy desktop ERPs with Megasus Cloud ERP across 28 distribution centers, reducing stockouts by 85%.'
    },
    faq: [
      {
        question: 'Can Megasus ERP integrate with our existing SAP or legacy software?',
        answer: 'Yes. Megasus ERP features REST APIs and Webhooks enabling real-time bi-directional sync with SAP S/4HANA, Salesforce, and legacy banking gateways.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus ERP',
      'operatingSystem': 'Web, Cloud',
      'applicationCategory': 'BusinessApplication',
      'description': 'Enterprise Resource Planning software for financials, inventory, and supply chain.'
    }
  },

  'crm': {
    slug: 'crm',
    code: 'CRM',
    title: 'Megasus Customer Relationship Management (CRM)',
    subtitle: 'Sales Pipelines, AI Forecasting, Email/WhatsApp Automation & Client 360°',
    heroBadge: 'AI Sales Acceleration Suite',
    metaDescription: 'Megasus CRM Platform: Visual sales pipelines, lead scoring, automated email/WhatsApp campaigns, customer support ticketing & predictive revenue analytics.',
    overview: 'Megasus CRM empowers high-growth sales teams and customer success leads to convert leads faster, automate follow-up campaigns, manage support ticketing, and forecast quarterly revenue.',
    icon: 'Users',
    tag: 'High Growth',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    modules: [
      {
        name: 'Visual Lead Kanban Pipeline',
        tagline: 'Drag-and-drop deal tracking with automated lead scoring',
        description: 'Track deals across custom sales stages, assign lead scores based on engagement, and automate sales rep assignments.',
        features: [
          'Customizable Sales Stage Kanban Boards',
          'AI Lead Scoring & Activity Timeline',
          'Automated Lead Assignment & Round-Robin Routing',
          'Task Reminders & Meeting Calendar Sync'
        ]
      },
      {
        name: 'Omnichannel Marketing Automation',
        tagline: 'Targeted Email, SMS & WhatsApp drip campaigns',
        description: 'Build automated marketing triggers that nurture leads, send personalized follow-ups, and track link click-through analytics.',
        features: [
          'WhatsApp Business API Integration',
          'Visual Drip Campaign Builder',
          'Email Open & Click Tracking Analytics',
          'Landing Page Lead Form Integrations'
        ]
      },
      {
        name: 'Client 360° & Support Ticketing',
        tagline: 'Unified customer history & SLA support desk',
        description: 'Give account managers complete visibility over client contract history, support tickets, invoices, and communication logs.',
        features: [
          'Omnichannel Ticket Desk (Email, Web Chat, Phone)',
          'SLA Escalation Rules & Priority Queues',
          'Client Knowledge Base & Help Portal',
          'Contract Renewal Reminders'
        ]
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Twilio API', 'WhatsApp API'],
    keyImpacts: [
      { metric: '45%', label: 'Higher Sales Lead Conversion' },
      { metric: '2.5x', label: 'Faster Customer Ticket Resolution' },
      { metric: '98%', label: 'Client Retention Rate' }
    ],
    caseStudy: {
      title: 'Sales Automation for Apex Capital Services',
      client: 'Apex Financial Services',
      impact: '250,000 Leads Managed Annually',
      summary: 'Deployed Megasus CRM across 150 sales advisors, resulting in a 42% increase in closed financial advisory contracts.'
    },
    faq: [
      {
        question: 'Does Megasus CRM support WhatsApp automation?',
        answer: 'Yes! Megasus CRM includes official WhatsApp Business API integration for sending automated order confirmations and drip notifications.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus CRM',
      'applicationCategory': 'BusinessApplication',
      'description': 'Customer Relationship Management software with sales automation and AI forecasting.'
    }
  },

  'hrms': {
    slug: 'hrms',
    code: 'HRMS',
    title: 'Megasus Human Resource Management System (HRMS)',
    subtitle: 'Automated Payroll, Attendance, Leave Management & Talent Lifecycle',
    heroBadge: 'Workforce Automation Suite',
    metaDescription: 'Megasus HRMS: Automated monthly payroll, biometric attendance, tax compliance, leave management, self-service employee portals & KPI performance appraisals.',
    overview: 'Megasus HRMS automates the entire employee journey from hiring and onboarding to biometric attendance tracking, tax payroll calculation, performance reviews, and separation.',
    icon: 'UserCheck',
    tag: 'Workforce Suite',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    modules: [
      {
        name: 'Automated Payroll & Tax Compliance',
        tagline: '1-Click monthly payroll processing & tax slips',
        description: 'Calculate base salaries, overtime bonuses, PF, ESI, TDS, and statutory deductions with direct bank transfer export files.',
        features: [
          'Multi-Tier Salary Structure Configuration',
          'Automated PF, ESI, TDS & Tax Slip Generation',
          'Direct Bank Payroll File Export',
          'Reimbursement & Expense Approvals'
        ]
      },
      {
        name: 'Biometric & GPS Attendance Tracking',
        tagline: 'Seamless integration with hardware biometric devices & mobile GPS',
        description: 'Capture daily punch-ins automatically from biometric fingerprint/face scanners or geo-fenced mobile app check-ins.',
        features: [
          'Biometric Device API Sync (ZKTeco / Essl)',
          'Mobile App Geo-Fenced GPS Attendance',
          'Shift Roster Management & Overtime Calculation',
          'Late-Comer & Absence Penalty Automation'
        ]
      },
      {
        name: 'Employee Self-Service (ESS) & Appraisals',
        tagline: 'Empower employees with self-service leave requests & pay slips',
        description: 'Employees can apply for leave, view payslips, submit tax declarations, and complete annual KPI performance appraisals online.',
        features: [
          'Mobile & Web ESS Portal',
          'Custom Multi-Level Leave Approval Hierarchy',
          'Annual 360° KPI Performance Appraisals',
          'Digital Asset Allocation & Exit Offboarding'
        ]
      }
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Biometric API'],
    keyImpacts: [
      { metric: '100%', label: 'Payroll Calculation Accuracy' },
      { metric: '85%', label: 'Reduction in HR Administrative Time' },
      { metric: 'Zero', label: 'Compliance Penalties' }
    ],
    caseStudy: {
      title: 'Enterprise HRMS Deployment for 6,000 Staff',
      client: 'CareFirst Corporate Network',
      impact: '6,000 Monthly Payslips Issued in 10 Mins',
      summary: 'Streamlined employee attendance and automated monthly payroll across 12 regional hospital branches.'
    },
    faq: [
      {
        question: 'Can Megasus HRMS connect with our existing biometric hardware?',
        answer: 'Yes. Our biometric integration service supports all major fingerprint and face-recognition devices via REST or TCP/IP protocols.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus HRMS',
      'applicationCategory': 'BusinessApplication',
      'description': 'Human Resource Management System for payroll, attendance, and performance.'
    }
  },

  'cms': {
    slug: 'cms',
    code: 'CMS',
    title: 'Megasus College Management System (CMS)',
    subtitle: 'Campus ERP, University Admissions, Semester Grading & Department Portals',
    heroBadge: 'Higher Education Campus ERP',
    metaDescription: 'Megasus CMS (College Management System): Comprehensive higher-ed campus ERP automating online college admissions, semester grading, faculty allocation & student portals.',
    overview: 'Megasus College Management System (CMS) is a specialized university and higher-education ERP software. It digitizes student admissions, semester exam grading, faculty allocation, library management, and department portals.',
    icon: 'GraduationCap',
    tag: 'Higher-Ed Campus ERP',
    gradient: 'from-purple-600 via-indigo-600 to-violet-700',
    modules: [
      {
        name: 'University Admissions & Student Registry',
        tagline: 'Paperless online admission applications & merit lists',
        description: 'Manage candidate entrance scoring, online document verification, fee payment gateway integration, and roll number generation.',
        features: [
          'Online Application Form & Merit Ranking System',
          'Digital Document Verification Portal',
          'Automatic Enrollment Number & Identity Card Generation',
          'Alumni Network & Degree Verification Registry'
        ]
      },
      {
        name: 'Semester Exam Grading & Transcript Engine',
        tagline: 'Automated CGPA calculation & official transcript printing',
        description: 'Configure credit-based semester grading, internal assessment weights, automated CGPA/SGPA calculations, and hall tickets.',
        features: [
          'Credit-Based Choice System (CBCS) Support',
          'Internal & Semester Exam Marks Entry',
          'Automated CGPA / SGPA Transcript Generation',
          'Digital Revaluation & Backlog Management'
        ]
      },
      {
        name: 'Faculty Allocation & Department Portals',
        tagline: 'Departmental timetable scheduling & research logging',
        description: 'Empower deans and faculty leads to schedule lectures, track syllabus completion, log research papers, and manage labs.',
        features: [
          'Automated Timetable Generator & Conflict Detection',
          'Faculty Lecture Log & Syllabus Completion Tracker',
          'Departmental Project & Research Paper Repository',
          'Library Management & Digital Book Checkouts'
        ]
      }
    ],
    techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'AWS'],
    keyImpacts: [
      { metric: '90%', label: 'Faster Student Admission Cycles' },
      { metric: '100%', label: 'Paperless Semester Grading' },
      { metric: '25,000+', label: 'Students Managed per Campus' }
    ],
    caseStudy: {
      title: 'Digital Campus Transformation for Tech University',
      client: 'Apex University System (3 Compuses)',
      impact: '22,000 Students Onboarded',
      summary: 'Digitized admissions, semester hall tickets, credit transcripts, and hostel allocations across 3 regional campuses.'
    },
    faq: [
      {
        question: 'Does Megasus CMS support Choice-Based Credit Systems (CBCS)?',
        answer: 'Yes. Megasus CMS is fully compliant with modern University Grants Commission (UGC) and global credit-based grading standards.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus College Management System (CMS)',
      'applicationCategory': 'EducationalApplication',
      'description': 'Higher education college management software for admissions, grading, and campus ERP.'
    }
  },

  'sms': {
    slug: 'sms',
    code: 'SMS',
    title: 'Megasus School Management System (SMS)',
    subtitle: 'K-12 Student Registry, Fee Collection, Parent-Teacher App & Bus Tracking',
    heroBadge: 'K-12 School ERP Suite',
    metaDescription: 'Megasus SMS (School Management System): Complete K-12 school management software with online fee collection, parent-teacher mobile app, exam report cards & live bus tracking.',
    overview: 'Megasus School Management System (SMS) is an all-in-one K-12 school administration platform connecting principal dashboards, teachers, parents, and students through web and mobile apps.',
    icon: 'Layout',
    tag: 'K-12 EduTech',
    gradient: 'from-rose-500 via-orange-500 to-amber-500',
    modules: [
      {
        name: 'Online Fee Collection & Accounting',
        tagline: 'Automated fee receipts, installment plans & SMS reminders',
        description: 'Parent payment gateway integrations with automated receipt generation, late fee calculations, and SMS payment reminders.',
        features: [
          'Custom Fee Structure per Grade & Quota',
          'Online Debit/Credit/UPI Payment Gateways',
          'Automated Late Fee Penalties & SMS Alerts',
          'Daily School Cashier & Bank Reconciliation'
        ]
      },
      {
        name: 'Parent-Teacher Mobile Application',
        tagline: 'Real-time student progress, homework & attendance updates',
        description: 'Keep parents engaged with real-time push notifications for daily attendance, homework assignments, exam dates, and notices.',
        features: [
          'Daily Attendance & Leave Application via App',
          'Homework & Digital Worksheets Upload',
          'Direct Parent-Teacher Chat & Circulars',
          'Term Exam Digital Report Cards'
        ]
      },
      {
        name: 'School Transport & Live GPS Bus Tracking',
        tagline: 'Track school bus locations & student boardings in real-time',
        description: 'Parents and school admins can monitor live GPS locations of school buses and receive arrival alerts at designated stops.',
        features: [
          'Live GPS Vehicle Tracking on Mobile Map',
          'Student Bus Boarding RFID Badge Scanner',
          'Speed Alert & Route Deviation Notifications',
          'Driver & Transport Route Management'
        ]
      }
    ],
    techStack: ['Flutter', 'Node.js', 'React', 'MongoDB', 'Firebase', 'GPS API'],
    keyImpacts: [
      { metric: '95%', label: 'On-Time Parent Fee Payments' },
      { metric: '100%', label: 'School Bus Safety Monitoring' },
      { metric: '50+', label: 'Partner Schools Deployed' }
    ],
    caseStudy: {
      title: 'Multi-Branch K-12 School ERP Rollout',
      client: 'Vanguard International School Network',
      impact: '8,500 Students Onboarded',
      summary: 'Implemented Megasus SMS across 5 school branches, enabling real-time parent communication and automated fee collection.'
    },
    faq: [
      {
        question: 'Is the Parent App available on iOS and Android?',
        answer: 'Yes. The Megasus Parent App is available on both Apple App Store and Google Play Store with multi-child support.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus School Management System (SMS)',
      'applicationCategory': 'EducationalApplication',
      'description': 'K-12 school administration software for fee collection, parent app, and bus tracking.'
    }
  },

  'lms': {
    slug: 'lms',
    code: 'LMS',
    title: 'Megasus Learning Management System (LMS)',
    subtitle: 'Video Courses, Virtual Classrooms, Automated Quizzes & Certifications',
    heroBadge: 'EduTech & Corporate Training Platform',
    metaDescription: 'Megasus LMS: Premier online learning platform with HD video streaming, live virtual classrooms, automated coding quizzes, progress tracking & verified certificates.',
    overview: 'Megasus Learning Management System (LMS) is a modern e-learning platform built for corporate training academies, universities, and online upskilling institutions. Deliver video courses, host live virtual classes, and issue automated certificates.',
    icon: 'GraduationCap',
    tag: 'Digital Learning',
    gradient: 'from-brand-500 via-orange-600 to-amber-600',
    modules: [
      {
        name: 'HD Video Course Player & Content Library',
        tagline: 'Buffer-free video streaming with lesson progress tracking',
        description: 'Host structured video curriculums with downloadable PDFs, code snippets, closed captions, and automatic bookmarking.',
        features: [
          'HLS Adaptive HD Video Streaming',
          'Course Module & Chapter Hierarchy',
          'Downloadable Attachments & Code Repositories',
          'Automated Student Progress & Completion Bar'
        ]
      },
      {
        name: 'Live Virtual Classrooms & Interactive Quizzes',
        tagline: 'Host live Zoom/Webex lectures with automated quizzes',
        description: 'Conduct live interactive webinars, assign timed multiple-choice or coding quizzes, and track instant student scores.',
        features: [
          'Zoom & Google Meet Live Session Embeds',
          'Timed Multiple Choice & Short Answer Quizzes',
          'Automated Instant Score Calculation & Answer Keys',
          'Discussion Forums & Student Q&A Board'
        ]
      },
      {
        name: 'Automated Certificate Generation & Verification',
        tagline: 'Issue QR-verified course completion certificates',
        description: 'Generate customized corporate or university certificates automatically upon 100% course completion and quiz passing.',
        features: [
          'Custom Branded PDF Certificate Templates',
          'QR Code Verification for Employer Authenticity',
          'LinkedIn One-Click Certificate Sharing',
          'Student Analytics & Performance Reports'
        ]
      }
    ],
    techStack: ['Next.js 15', 'Node.js', 'PostgreSQL', 'AWS CloudFront', 'HLS Video Engine', 'Docker'],
    keyImpacts: [
      { metric: '10,000+', label: 'Active Students Upskilled' },
      { metric: '95%', label: 'Course Completion Rate' },
      { metric: '15,000+', label: 'Certificates Generated' }
    ],
    caseStudy: {
      title: 'Upskilling Platform Rollout for Megasus Tech Academy',
      client: 'Megasus Tech Academy',
      impact: '10,000+ Certified Graduates',
      summary: 'Deployed Megasus LMS to host SAP and Full Stack developer courses, streaming over 50,000 hours of video lectures monthly.'
    },
    faq: [
      {
        question: 'Can Megasus LMS host video content securely against pirating?',
        answer: 'Yes. We utilize encrypted HLS video streaming and domain-restricted player playback to prevent unauthorized downloads.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Megasus Learning Management System (LMS)',
      'applicationCategory': 'EducationalApplication',
      'description': 'Online learning platform for video courses, live classrooms, quizzes, and automated certifications.'
    }
  }
};
