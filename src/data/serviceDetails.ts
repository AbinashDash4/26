export interface ServiceSubModule {
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface DetailedService {
  slug: string;
  title: string;
  tagline: string;
  heroBadge: string;
  metaDescription: string;
  overview: string;
  gradient: string;
  subModules: ServiceSubModule[];
  techStack: string[];
  businessBenefits: { title: string; desc: string }[];
  caseStudy: {
    title: string;
    client: string;
    impact: string;
    summary: string;
  };
  faq: { question: string; answer: string }[];
  schemaJson: object;
}

export const serviceDetailsData: Record<string, DetailedService> = {
  'sap-consulting': {
    slug: 'sap-consulting',
    title: 'SAP Consulting & Implementation Services',
    tagline: 'Accelerating Digital Business Transformation with SAP S/4HANA & ABAP Cloud',
    heroBadge: 'Certified SAP Global Partner Ecosystem',
    metaDescription: 'Enterprise SAP Consulting by Megasus Group: S/4HANA migration, SAP FICO, MM, SD, ABAP development, HANA DB optimization, Greenfield implementation & 24x7 support.',
    overview: 'Megasus Group delivers comprehensive SAP consulting, greenfield implementation, S/4HANA Cloud migration, and managed enterprise support. Our certified SAP architects partner with global corporations to optimize financial ledgers, supply chain logistics, procurement, and custom ABAP programming.',
    gradient: 'from-amber-500 via-brand-500 to-orange-600',
    subModules: [
      {
        name: 'SAP S/4HANA Migration & Strategy',
        tagline: 'Zero-downtime migration to SAP S/4HANA Cloud & On-Premise',
        description: 'Greenfield, Brownfield, and Selective Data Transition strategies engineered for high-availability enterprise continuity.',
        deliverables: [
          'Pre-migration Readiness & System Audit',
          'Database Conversion to SAP HANA In-Memory DB',
          'Fiori UX Transformation & Dashboard Setup',
          'Post-Go-Live Hypercare & Performance Tuning'
        ]
      },
      {
        name: 'SAP FICO (Financials & Controlling)',
        tagline: 'Real-time financial consolidation & regulatory ledger control',
        description: 'Automate General Ledger, Accounts Payable/Receivable, Asset Accounting, Cost Center Accounting, and Profitability Analysis (CO-PA).',
        deliverables: [
          'Universal Journal (ACDOCA) Setup',
          'Multi-Currency & Global Tax Compliance',
          'Bank Communication & Automated Treasury',
          'Executive Profitability Dashboards'
        ]
      },
      {
        name: 'SAP MM & SD (Materials & Sales Management)',
        tagline: 'End-to-end supply chain logistics & order-to-cash workflows',
        description: 'Streamline inventory management, automated purchase order procurement, vendor evaluation, pricing procedures, and billing.',
        deliverables: [
          'Automated Requisition & RFQ Workflows',
          'Serial & Batch Warehouse Inventory Sync',
          'Credit Management & Billing Integration',
          'Logistics Execution & Freight Tracking'
        ]
      },
      {
        name: 'SAP ABAP & HANA Custom Development',
        tagline: 'Clean Core custom coding with ABAP RESTful Programming (RAP)',
        description: 'Bespoke SAP extension development utilizing Core Data Services (CDS) views, AMDP, SAP Fiori apps, and OData microservices.',
        deliverables: [
          'SAP Fiori & UI5 Custom Web Applications',
          'CDS View & AMDP Database Optimization',
          'IDoc, BAPI & OData API Integration',
          'Clean Core Migration Compatibility Audits'
        ]
      },
      {
        name: 'SAP Managed Support & Upgrades',
        tagline: '24×7 L1-L3 SLA technical support & kernel patching',
        description: 'Round-the-clock Incident Management, Change Requests, SAP OSS note implementations, and annual feature pack upgrades.',
        deliverables: [
          'Dedicated SAP Certified Basis & Functional Leads',
          'SLA Guaranteed Response Times (15 mins for P1)',
          'Security Role & Authorization Audits',
          'Disaster Recovery & Backup Drills'
        ]
      }
    ],
    techStack: ['SAP S/4HANA', 'SAP HANA DB', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP RAP', 'SAP Fiori UI5', 'SAP BTP', 'SAP SolMan'],
    businessBenefits: [
      { title: '35% Faster Financial Closing', desc: 'Real-time Universal Journal eliminates month-end reconciliation lag.' },
      { title: '99.99% Enterprise Uptime', desc: 'High-availability SAP HANA clustering and automated disaster recovery.' },
      { title: 'Clean Core Architecture', desc: 'Future-proof customizations ensuring seamless SAP cloud upgrades.' }
    ],
    caseStudy: {
      title: 'Multi-Country SAP S/4HANA Migration for Auto Giant',
      client: 'Leading Automotive Manufacturer (14 Manufacturing Plants)',
      impact: '$4.2M Operational Savings Annually',
      summary: 'Migrated legacy SAP ECC 6.0 to SAP S/4HANA Cloud across 14 plants in 6 countries with zero unscheduled downtime, consolidating 120,000 daily transactions.'
    },
    faq: [
      {
        question: 'What is the typical timeframe for an SAP S/4HANA migration?',
        answer: 'Migration timelines range from 10–12 weeks for mid-size Greenfield implementations up to 6–9 months for multi-entity Brownfield enterprise migrations.'
      },
      {
        question: 'Does Megasus Group provide certified SAP consultants?',
        answer: 'Yes. Every project lead and technical consultant at Megasus Group holds official SAP Global Certifications across S/4HANA, FICO, MM, SD, and ABAP.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Megasus Group - SAP Consulting & Implementation',
      'description': 'Enterprise SAP Consulting: S/4HANA migration, SAP FICO, MM, SD, ABAP development, and HANA DB optimization.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      },
      'serviceType': 'SAP Technology Consulting',
      'areaServed': 'Worldwide'
    }
  },

  'web-development': {
    slug: 'web-development',
    title: 'Enterprise Web & Web App Development Services',
    tagline: 'Custom SaaS Platforms, Web ERPs, CRMs & API Architectures',
    heroBadge: 'Next.js 15 & React Engineering',
    metaDescription: 'Enterprise Web Development by Megasus Group: High-performance corporate websites, SaaS web portals, web ERPs, CRMs, e-commerce & REST API integrations.',
    overview: 'Megasus Group designs and builds enterprise-grade web applications, corporate web portals, SaaS platforms, and custom ERP/CRM web systems. Powered by modern React, Next.js, Node.js, and cloud microservices.',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    subModules: [
      {
        name: 'Corporate Websites & SaaS Portals',
        tagline: 'High-converting, ultra-fast digital experiences',
        description: 'Brand-defining web apps with modern typography, glassmorphism UI, 95+ Lighthouse performance scores, and SEO optimization.',
        deliverables: [
          'Responsive Desktop, Tablet & Mobile Layouts',
          'Dynamic CMS & Headless Content Sync',
          'Lighthouse 95+ Core Web Vitals Optimization',
          'Multi-lingual & Accessibility (WCAG 2.1)'
        ]
      },
      {
        name: 'Custom Web ERP & CRM Platforms',
        tagline: 'Bespoke business management engines in the cloud',
        description: 'Replace fragmented spreadsheets with unified web portals for inventory management, customer pipelines, and real-time BI charts.',
        deliverables: [
          'Visual Sales Pipeline & Lead Kanban Boards',
          'Multi-Tenant Role-Based Access Control (RBAC)',
          'Automated Invoicing & Payment Gateway Integrations',
          'Real-time WebSocket Live Notifications'
        ]
      },
      {
        name: 'E-commerce & Enterprise Marketplaces',
        tagline: 'High-concurrency B2B & B2C shopping infrastructure',
        description: 'Scalable web stores handling millions of SKUs, instant search filtering, multi-currency checkouts, and ERP inventory sync.',
        deliverables: [
          'Headless E-commerce API Storefronts',
          'Stripe, PayPal, Razorpay & Bank Integrations',
          'Automated Order Processing & Carrier Tracking',
          'Cart Abandonment & Marketing Automation'
        ]
      },
      {
        name: 'RESTful & GraphQL API Development',
        tagline: 'Secure, high-throughput backend microservices',
        description: 'Architecting robust Node.js, Python, and Java Spring APIs with OpenAPI documentation, OAuth2 authentication, and rate limiting.',
        deliverables: [
          'Microservices Architecture & API Gateway',
          'JWT & OAuth2 Secure Authentication',
          'Redis In-Memory Caching & Rate Limiting',
          'Swagger / Postman API Documentation'
        ]
      }
    ],
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    businessBenefits: [
      { title: 'Sub-Second Page Load Times', desc: 'Server-side rendering (SSR) and edge CDN deployment for instant responses.' },
      { title: 'SOC2 & OWASP Top 10 Secure', desc: 'Enterprise data protection with strict CORS, CSRF, and SQL injection prevention.' },
      { title: 'Infinite Horizontal Scale', desc: 'Containerized Kubernetes microservices handling millions of API requests.' }
    ],
    caseStudy: {
      title: 'B2B Fintech Web Portal for Apex Capital',
      client: 'Apex Capital Services',
      impact: '2.5M Active Monthly Users',
      summary: 'Architected a Next.js 15 financial dashboard enabling real-time stock trading, document verification, and automated loan underwriting.'
    },
    faq: [
      {
        question: 'Which frameworks do you use for enterprise web apps?',
        answer: 'We leverage Next.js 15, React 19, TypeScript, Node.js, Spring Boot, and Python Django depending on project performance and security requirements.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Megasus Group - Enterprise Web Development',
      'description': 'Custom web applications, SaaS platforms, web ERP, CRM, and API development.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      }
    }
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development Services',
    tagline: 'Native & Cross-Platform iOS and Android Solutions for Enterprise Workflows',
    heroBadge: 'iOS, Android, Flutter & React Native',
    metaDescription: 'Mobile App Development by Megasus Group: High-performance iOS and Android apps, Flutter cross-platform development, React Native & enterprise mobile security.',
    overview: 'Megasus Group creates intuitive, high-performance mobile applications for iOS and Android. Whether native Swift/Kotlin or cross-platform Flutter/React Native, we deliver field operations apps, consumer portals, and mobile ERP integrations.',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    subModules: [
      {
        name: 'Native iOS & Android Development',
        tagline: 'Uncompromising platform performance & native API access',
        description: 'Custom iOS apps written in Swift and Android apps in Kotlin utilizing platform hardware features like Camera, GPS, Bluetooth, and NFC.',
        deliverables: [
          'Swift & SwiftUI Native iOS Apps',
          'Kotlin & Jetpack Compose Android Apps',
          'Biometric Authentication (FaceID / TouchID)',
          'Background Location & Push Notifications'
        ]
      },
      {
        name: 'Cross-Platform Flutter & React Native Apps',
        tagline: 'Single codebase for iOS, Android, and Web with 60 FPS UI',
        description: 'Accelerate app launch timelines by 50% with shared business logic, pixel-perfect design widgets, and native bridge performance.',
        deliverables: [
          'Flutter Dart Multi-Platform Apps',
          'React Native & Expo App Ecosystems',
          'Offline-First Data Sync (WatermelonDB / Realm)',
          'Apple App Store & Google Play Publishing'
        ]
      },
      {
        name: 'Enterprise Field Mobility & ERP Mobile Sync',
        tagline: 'Connect field operations directly to SAP & Cloud ERP',
        description: 'Equip warehouse workers, field engineers, and delivery fleets with offline-capable mobile tools syncing with corporate databases.',
        deliverables: [
          'Barcode & QR Code Mobile Scanner Apps',
          'Digital Signature & Invoice Generation',
          'Real-time GPS Driver Tracking',
          'Secure Mobile Device Management (MDM)'
        ]
      }
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'REST API', 'GraphQL', 'PushNotifications'],
    businessBenefits: [
      { title: 'Offline-First Capability', desc: 'Field teams operate seamlessly without active internet connections.' },
      { title: '50% Faster Time-to-Market', desc: 'Cross-platform single codebase reduces engineering effort and cost.' },
      { title: 'App Store Guaranteed Approval', desc: '100% compliance with Apple App Store and Google Play policies.' }
    ],
    caseStudy: {
      title: 'Smart Logistics Mobile App for SwiftLogistics',
      client: 'SwiftLogistics Corp (4,000 Drivers)',
      impact: '99.8% On-Time Delivery Sync',
      summary: 'Built a cross-platform Flutter mobile app featuring offline barcode scanning, route optimization, and direct SAP inventory sync.'
    },
    faq: [
      {
        question: 'Should I choose Native or Cross-Platform Flutter for my enterprise app?',
        answer: 'Flutter or React Native is ideal for 90% of business apps to cut dev time by half. Native Swift/Kotlin is recommended for apps requiring intensive AR/VR or hardware-level processing.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Megasus Group - Mobile App Development',
      'description': 'Native iOS, Android, Flutter and React Native mobile applications.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      }
    }
  },

  'software-development': {
    slug: 'software-development',
    title: 'Custom Software Development & Cloud Automation',
    tagline: 'Tailored Enterprise Systems, Cloud Microservices & Robotic Process Automation',
    heroBadge: 'Cloud Architecture & Automation',
    metaDescription: 'Custom Software Development by Megasus Group: Bespoke business software, cloud-native microservices, legacy modernization & robotic process automation.',
    overview: 'Megasus Group builds custom enterprise software solutions engineered to automate complex business logic, modernize legacy software, and leverage cloud infrastructure on AWS, Azure, and Google Cloud.',
    gradient: 'from-purple-600 via-violet-600 to-indigo-700',
    subModules: [
      {
        name: 'Custom Business Software Engineering',
        tagline: 'Software tailored exactly to your unique operational processes',
        description: 'Design and build proprietary business management systems, automated workflow engines, and complex data processing pipelines.',
        deliverables: [
          'Domain-Driven Design (DDD) & System Architecture',
          'Java Spring Boot & C# .NET Enterprise Core',
          'Automated Document Processing & PDF Generation',
          'Custom Business Intelligence (BI) Reporting'
        ]
      },
      {
        name: 'Cloud Applications & Microservices',
        tagline: 'Cloud-native infrastructure on AWS, Azure & GCP',
        description: 'Migrate monolithic software to scalable Kubernetes containers, serverless Lambda functions, and multi-region databases.',
        deliverables: [
          'Docker Containerization & Kubernetes (EKS/AKS)',
          'AWS Lambda & Cloud Serverless Architectures',
          'Terraform Infrastructure-as-Code (IaC)',
          'CI/CD Pipeline Automation (GitHub Actions / GitLab)'
        ]
      },
      {
        name: 'Robotic Process & Workflow Automation (RPA)',
        tagline: 'Eliminate repetitive manual data entry with bots',
        description: 'Deploy intelligent software bots to handle repetitive cross-system data entry, invoice extraction, and compliance checking.',
        deliverables: [
          'Automated SAP Data Extraction & Entry Bots',
          'OCR Invoice & Receipt Scanning',
          'Scheduled Batch Email & Notification Engines',
          'Audit Log & Exception Handling Portals'
        ]
      }
    ],
    techStack: ['Java', 'Spring Boot', 'Python', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'PostgreSQL', 'Redis'],
    businessBenefits: [
      { title: '80% Reduction in Manual Tasks', desc: 'RPA bots handle routine data processing 24/7 without error.' },
      { title: 'Zero Vendor Lock-In', desc: 'Open-source containerized standards allow easy deployment on any cloud.' },
      { title: 'Bank-Grade Security', desc: 'Encrypted data transmission, SOC2 compliance, and audit logging.' }
    ],
    caseStudy: {
      title: 'Automated Claims Processing System for HealthCare Co.',
      client: 'CareFirst Healthcare',
      impact: '70% Faster Claim Settlement',
      summary: 'Developed a cloud-native Python and Java microservice platform processing over 50,000 daily medical claims automatically.'
    },
    faq: [
      {
        question: 'Do you modernize legacy COBOL or desktop software?',
        answer: 'Yes. We specialize in refactoring legacy desktop applications into modern cloud web apps with automated data migration.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Megasus Group - Custom Software Development',
      'description': 'Enterprise custom software, cloud applications, microservices, and RPA automation.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      }
    }
  },

  'fresher-upskilling': {
    slug: 'fresher-upskilling',
    title: 'Fresher IT Upskilling & SAP Certification Academy',
    tagline: 'Transforming Graduates into Industry-Ready Enterprise Engineers & SAP Consultants',
    heroBadge: '100% Placement Support Program',
    metaDescription: 'Fresher IT Upskilling by Megasus Group: Certified SAP training (FICO, ABAP, MM, SD), Java & Python Full Stack Bootcamps, Cloud & SQL with 100% placement support.',
    overview: 'Megasus Group operates a premier IT upskilling academy empowering fresh engineering and IT graduates (BE/BTech, BCA, MCA, BSc CS, MBA) with hands-on corporate project experience in SAP, Java, Python, React, and Cloud Computing.',
    gradient: 'from-rose-500 via-orange-500 to-amber-500',
    subModules: [
      {
        name: 'SAP Functional & Technical Certification',
        tagline: 'Master SAP FICO, MM, SD, ABAP & HANA with certified trainers',
        description: 'Comprehensive curriculum featuring live SAP S/4HANA server access, real corporate configuration scenarios, and SAP certification prep.',
        deliverables: [
          'Live SAP S/4HANA Server Access',
          'SAP FICO, MM & SD Configuration Modules',
          'SAP ABAP CDS Views & Fiori UI5 Coding',
          'SAP Global Certification Guidance'
        ]
      },
      {
        name: 'Full Stack Engineering (Java, Python, React, Node.js)',
        tagline: 'Build real-world enterprise applications from scratch',
        description: 'Intensive coding bootcamp covering frontend React/Next.js, backend Java Spring Boot or Python Django, and SQL database optimization.',
        deliverables: [
          'Frontend UI with HTML5, Tailwind CSS, React 19',
          'Backend Microservices with Java Spring Boot / Node.js',
          'Relational SQL (PostgreSQL/MySQL) & ORM',
          'Git Version Control & Deployment to Vercel/AWS'
        ]
      },
      {
        name: 'Interview Preparation & Soft Skills Training',
        tagline: 'Master technical code reviews, aptitude & corporate etiquette',
        description: 'Prepare candidates to crack competitive MNC technical interviews with confidence through weekly mock interviews and soft skills coaching.',
        deliverables: [
          'Weekly 1-on-1 Technical Mock Interviews',
          'Data Structures & Algorithms (DSA) Problem Solving',
          'Corporate Soft Skills & Communication Workshops',
          'Real-world Capstone Project Portfolio'
        ]
      }
    ],
    techStack: ['SAP S/4HANA', 'SAP FICO', 'SAP ABAP', 'Java', 'Spring Boot', 'Python', 'React', 'Node.js', 'SQL', 'Git'],
    businessBenefits: [
      { title: '10,000+ Alumni Network', desc: 'Graduates working at top MNCs, SAP Partners, and high-growth startups.' },
      { title: '100% Guaranteed Placement Support', desc: 'Direct interview scheduling until candidate secures corporate placement.' },
      { title: 'Real Corporate Capstones', desc: 'Candidates work on actual enterprise project modules during training.' }
    ],
    caseStudy: {
      title: 'Fresher to SAP ABAP Consultant in 60 Days',
      client: 'Non-CS Graduate Placement Journey',
      impact: 'Placed at 8.5 LPA Package',
      summary: 'Candidate completed 8 weeks of intensive SAP ABAP & HANA training, built a custom Fiori app, and secured employment at a global MNC.'
    },
    faq: [
      {
        question: 'Who can enroll in the upskilling program?',
        answer: 'Graduates with BE, BTech, BCA, MCA, BSc CS, IT, or MBA degrees seeking high-growth careers in SAP or Full Stack software development.'
      },
      {
        question: 'Is placement support guaranteed?',
        answer: 'Yes! Our dedicated placement cell provides continuous interview calls, resume engineering, and mock interviews until you are hired.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOccupationalProgram',
      'name': 'Megasus Group - Fresher IT Upskilling & SAP Academy',
      'description': 'Industry-aligned SAP certification and Full Stack software engineering training for graduates with 100% placement support.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      }
    }
  },

  'placement-support': {
    slug: 'placement-support',
    title: 'Placement Support & Career Acceleration',
    tagline: 'Connecting Trained Candidates with 250+ Corporate Hiring Partners',
    heroBadge: '250+ Hiring Partners Network',
    metaDescription: 'Placement Support by Megasus Group: Resume building, mock interviews, LinkedIn optimization, career guidance & direct hiring calls with 250+ MNC partners.',
    overview: 'Megasus Group operates a dedicated placement cell bridging trained tech candidates with 250+ corporate hiring partners including top MNCs, SAP partners, and enterprise software leaders.',
    gradient: 'from-brand-500 via-orange-600 to-amber-600',
    subModules: [
      {
        name: 'ATS-Optimized Resume Building',
        tagline: 'Craft resume profiles that pass automated corporate screening',
        description: 'Our HR experts reconstruct your resume highlighting key SAP, coding, and project accomplishments to achieve high ATS scores.',
        deliverables: [
          'ATS-Friendly Resume Templates & Formatting',
          'Keyword Optimization for SAP & Full Stack Roles',
          'Project Impact Quantification',
          'PDF & Editable Word Formats'
        ]
      },
      {
        name: 'Technical & Behavioral Mock Interviews',
        tagline: 'Practice with senior SAP architects & engineering directors',
        description: 'Simulate real corporate interview environments with detailed feedback on technical depth, problem-solving, and communication.',
        deliverables: [
          '1-on-1 Mock Coding & SAP Configuration Drills',
          'HR & Managerial Round Question Prep',
          'Video Recording & Feedback Performance Reports',
          'Salary Negotiation Strategies'
        ]
      },
      {
        name: 'LinkedIn Optimization & Direct Referrals',
        tagline: 'Get noticed by top corporate talent recruiters',
        description: 'Transform your LinkedIn profile into a recruiter magnet and gain direct candidate referrals to active job openings.',
        deliverables: [
          'Professional LinkedIn Headline & Summary Styling',
          'Skill Endorsements & Project Showcasing',
          'Direct Interview Scheduling with 250+ MNC Partners',
          'Career Counseling & Offer Letter Audits'
        ]
      }
    ],
    techStack: ['ATS Optimization', 'Mock Interviews', 'LinkedIn Branding', 'Career Mentorship', 'Direct MNC Referrals'],
    businessBenefits: [
      { title: '98% Placement Success Rate', desc: 'Candidates placed within 90 days of program completion.' },
      { title: '250+ Hiring Partners', desc: 'Direct corporate ties with TCS, Infosys, Accenture, Wipro, and SAP Labs.' },
      { title: 'Personalized Career Coach', desc: 'Dedicated placement officer assigned to every candidate.' }
    ],
    caseStudy: {
      title: '5 Interview Calls in 7 Days for Full Stack Graduate',
      client: 'Priya Nair (MCA Graduate)',
      impact: '11.0 LPA Package Secured',
      summary: 'Following resume optimization and 3 mock technical rounds, candidate received 5 corporate interview calls and accepted a senior developer offer.'
    },
    faq: [
      {
        question: 'How many interview opportunities do candidates receive?',
        answer: 'Candidates receive unlimited interview scheduling until they secure a position matching their skills and salary targets.'
      }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Megasus Group - Placement Support Services',
      'description': 'Resume building, mock interviews, LinkedIn optimization, and placement assistance with 250+ MNC partners.',
      'provider': {
        '@type': 'Organization',
        'name': 'Megasus Group',
        'url': 'https://megasusgroup.com'
      }
    }
  }
};
