export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  year: string
  timeline?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  summary: string
  architectureNodes?: { label: string; description: string }[]
  highlights: string[]
  category: 'systems' | 'web' | 'backend' | 'ai-ml'
}

export interface ArchiveProject {
  id: string
  title: string
  subtitle: string
  year: string
  month?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  description: string
  patternsOrFeatures?: string[]
}

export interface Certification {
  title: string
  issuer: string
  status?: string
  type: 'certification' | 'simulation' | 'course'
}

export interface SkillCategory {
  name: string
  tagline: string
  skills: string[]
}

export interface GitRepository {
  name: string
  lang: string
  branch: string
  tag: string
  githubUrl?: string
}

export const PERSONAL_INFO = {
  name: 'Ayanfe K Ikujebi',
  firstName: 'Ayanfe',
  lastName: 'Ikujebi',
  leetcode: 'https://leetcode.com/ikujebi/',
  twitter: 'https://twitter.com/ikujebi',
  instagram: 'https://www.instagram.com/ikujebi/',
  role: 'Software Developer',
  positioning: 'Full-Stack Software Developer',
  location: 'Lagos, Nigeria',
  university: 'University of Lagos',
  degree: 'Bachelor of Science — Business Administration',
  graduationYear: '2020',
  cgpa: '3.62 / 5',
  currentYear: 'Software Developer',
  email: 'ikujebikehinde@gmail.com',
  phone: '+234 8137977542',
  github: 'https://github.com/ikujebi',
  linkedin: 'https://www.linkedin.com/in/kehinde-ikujebi-770420437/',
  summary:
    'I’m a software developer focused on building practical, production-oriented web applications and backend systems. I work across frontend, backend, databases, APIs, authentication, and cloud deployment, while continuously exploring AI-powered features and machine learning technologies.',
  statementBig: 'I LIKE TURNING IDEAS INTO THINGS PEOPLE CAN ACTUALLY USE.',
}

export const TERMINAL_REPOSITORIES: GitRepository[] = [
  {
    name: 'wordnest',
    lang: 'NestJS / TypeScript',
    branch: 'main',
    tag: 'Church Management API',
    githubUrl: 'https://github.com/Ikujebi/wordnest',
  },
  {
    name: 'wtbcportal',
    lang: 'Next.js / TypeScript',
    branch: 'main',
    tag: 'Church Management Portal',
  },
  {
    name: 'lummina-law',
    lang: 'Next.js / Prisma',
    branch: 'main',
    tag: 'Legal Platform',
  },
  {
    name: 'ai-llm-experiments',
    lang: 'Python / PyTorch',
    branch: 'main',
    tag: 'LLM & ML Labs',
    githubUrl: 'https://github.com/Ikujebi',
  },
  {
    name: 'portfolio',
    lang: 'React / Next.js',
    branch: 'main',
    tag: 'Personal Portfolio',
    githubUrl: 'https://github.com/Ikujebi',
  },
]

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'wtbc',
    number: '01',
    title: 'WORD TABERNACLE',
    subtitle: 'Church Management & Digital Operations Platform',
    year: '2026',
    timeline: '2026 – Present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Cloudinary',
      'Vercel',
      'Render',
    ],
    liveUrl: 'https://portal.wordtabernacle.org.ng/',
    summary:
      'A full-stack church management platform designed to bring members, departments, workers, communications, events, prayer requests, content, analytics, and administrative operations into one system.',
    architectureNodes: [
      {
        label: 'PORTAL FRONTEND',
        description:
          'Next.js and TypeScript application providing role-aware dashboards and responsive interfaces for church administration.',
      },
      {
        label: 'BACKEND API',
        description:
          'NestJS REST API handling authentication, business logic, permissions, communications, content, and administrative workflows.',
      },
      {
        label: 'AUTH & RBAC',
        description:
          'JWT authentication, refresh-token workflows, email verification, password recovery, protected routes, and role-based access control.',
      },
      {
        label: 'DATABASE',
        description:
          'PostgreSQL database managed through Prisma and Supabase for structured church, membership, operational, and communication data.',
      },
      {
        label: 'MEDIA & CONTENT',
        description:
          'Cloudinary-powered media handling for profile pictures and other uploaded assets alongside church content management.',
      },
      {
        label: 'PRODUCTION INFRASTRUCTURE',
        description:
          'Frontend deployment through Vercel and backend deployment through Render with production API and custom domain configuration.',
      },
    ],
    highlights: [
      'Unified church management architecture spanning members, departments, workers, events, attendance, giving, and communications',
      'Role-based access control supporting SUPER_ADMIN, ADMIN, and MEMBER workflows',
      'Authentication system with access tokens, refresh tokens, email verification, and password recovery',
      'Prayer request management with administrative workflows and communication integration',
      'Custom web analytics system for tracking public website activity',
      'Production deployment using Vercel, Render, Supabase, Cloudinary, and a custom API domain',
    ],
    category: 'systems',
  },
  {
    id: 'lummina-law',
    number: '02',
    title: 'LUMMINA LAW',
    subtitle: 'Legal Business & Client Management Platform',
    year: '2026',
    timeline: '2026 – Present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS',
      'REST APIs',
      'Vercel',
    ],
    liveUrl: 'https://legal.lumminalaw.com/',
    summary:
      'A full-stack legal platform designed to connect legal professionals and clients while providing structured workflows for a growing legal business.',
    architectureNodes: [
      {
        label: 'APPLICATION LAYER',
        description:
          'Next.js application providing role-aware interfaces for administrators, lawyers, and clients.',
      },
      {
        label: 'DATA LAYER',
        description:
          'PostgreSQL persistence through Prisma and Supabase for users, legal workflows, and application data.',
      },
      {
        label: 'ROLE MANAGEMENT',
        description:
          'Application-level authorization supporting ADMIN, LAWYER, and CLIENT roles.',
      },
      {
        label: 'BACKEND WORKFLOWS',
        description:
          'Server-side application logic and API workflows connecting user actions to persistent business data.',
      },
      {
        label: 'PRODUCTION DEPLOYMENT',
        description:
          'Cloud-hosted application architecture configured for a public legal product and custom domain.',
      },
    ],
    highlights: [
      'Full-stack legal application built around real business workflows',
      'Role-aware experience for administrators, lawyers, and clients',
      'Prisma-based PostgreSQL data architecture',
      'Supabase-backed production database infrastructure',
      'Responsive application interface designed for practical business use',
    ],
    category: 'web',
  },
  {
    id: 'wordnest',
    number: '03',
    title: 'WORDNEST',
    subtitle: 'NestJS Backend & Management API',
    year: '2026',
    timeline: '2026 – Present',
    technologies: [
      'NestJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'REST API',
      'Cloudinary',
      'Render',
    ],
    githubUrl: 'https://github.com/Ikujebi/wordnest',
    liveUrl: 'https://api.wordtabernacle.org.ng/',
    summary:
      'The backend service powering the Word Tabernacle management ecosystem, built around modular NestJS architecture, secure authentication, role-based access, and production API workflows.',
    architectureNodes: [
      {
        label: 'NESTJS MODULES',
        description:
          'Modular backend architecture separating authentication, users, administration, communications, content, notifications, and domain workflows.',
      },
      {
        label: 'AUTHENTICATION',
        description:
          'JWT access and refresh token architecture with verification, password recovery, account locking, and protected API routes.',
      },
      {
        label: 'AUTHORIZATION',
        description:
          'Role-based permissions controlling access to administrative and member-facing functionality.',
      },
      {
        label: 'PRISMA & POSTGRESQL',
        description:
          'Type-safe database access through Prisma connected to Supabase PostgreSQL.',
      },
      {
        label: 'OBSERVABILITY & AUDITING',
        description:
          'Logging, audit records, request handling, throttling, timeout controls, and structured API responses.',
      },
      {
        label: 'MEDIA & EMAIL',
        description:
          'Cloudinary integration for media management and transactional email workflows for authentication and account operations.',
      },
    ],
    highlights: [
      'Production-oriented NestJS REST API architecture',
      'JWT access and refresh token authentication',
      'Email verification and password recovery workflows',
      'Role-based authorization and administrative permissions',
      'Prisma + PostgreSQL data access through Supabase',
      'Cloudinary and transactional email integrations',
      'Audit logging, throttling, timeout handling, and structured API infrastructure',
    ],
    category: 'backend',
  },
  {
    id: 'portfolio',
    number: '04',
    title: 'AYANFE.DEV',
    subtitle: 'Personal Developer Portfolio',
    year: '2026',
    timeline: '2026 – Present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React',
      'Vercel',
    ],
    liveUrl: 'https://ayanfetech-hub.vercel.app/',
    summary:
      'A developer portfolio focused on showing how I build real software systems, the technologies behind them, and the progression of my engineering work.',
    architectureNodes: [
      {
        label: 'NEXT.JS',
        description:
          'Modern React-based application architecture using Next.js for routing, rendering, and application structure.',
      },
      {
        label: 'COMPONENT SYSTEM',
        description:
          'Reusable React components used to create interactive portfolio sections and project presentations.',
      },
      {
        label: 'DESIGN SYSTEM',
        description:
          'Tailwind-based visual system focused on a polished, technical, and responsive developer experience.',
      },
      {
        label: 'PROJECT DATA',
        description:
          'Centralized project, skill, certification, and development-history data powering the portfolio.',
      },
    ],
    highlights: [
      'Designed around real software projects rather than generic skill lists',
      'Interactive project archive and technology matrix',
      'Responsive React and Next.js component architecture',
      'Focused presentation of full-stack engineering experience',
    ],
    category: 'web',
  },
]

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: 'gnn-graph-embeddings',
    title: 'Graph Neural Network Experiments',
    subtitle: 'PyTorch Geometric research & relational data learning',
    year: '2026',
    month: 'Sep 2026',
    technologies: [
      'Python',
      'PyTorch',
      'PyTorch Geometric',
      'GNN',
      'Machine Learning',
    ],
    githubUrl: 'https://github.com/Ikujebi',
    description:
      'Exploratory Graph Neural Network models built with PyTorch Geometric to evaluate node classification, link prediction, and representation learning on graph-structured data.',
    patternsOrFeatures: [
      'Graph Convolutional Network (GCN) and GraphSAGE implementations',
      'Node classification pipelines on structured citation and relational graphs',
      'Custom PyTorch Geometric dataset loading and preprocessing scripts',
      'Embedding visualizations using t-SNE reduction',
    ],
  },
  {
    id: 'llm-tokenizer-lab',
    title: 'LLM Tokenization & Fine-Tuning Labs',
    subtitle: 'Transformer mechanics, token analysis & API integrations',
    year: '2026',
    month: 'Aug 2026',
    technologies: [
      'Python',
      'Transformers',
      'PyTorch',
      'LLM',
      'FastAPI',
      'AI',
    ],
    githubUrl: 'https://github.com/Ikujebi',
    description:
      'Practical experiments analyzing transformer architecture tokenization strategies, token sequence constraints, and integrating local and API-hosted LLMs into web services.',
    patternsOrFeatures: [
      'Subword BPE tokenization analysis across English and regional language corpora',
      'FastAPI wrapper around LLM inference endpoints with structured JSON parsing',
      'Prompt engineering templates for context retrieval and response generation',
      'Benchmarking token throughput and context window management',
    ],
  },
  {
    id: 'church-analytics',
    title: 'WTBC Web Analytics',
    subtitle: 'Custom website analytics and reporting system',
    year: '2026',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Supabase',
    ],
    description:
      'A custom analytics system built for the Word Tabernacle ecosystem to track website activity without relying entirely on a third-party analytics platform.',
    patternsOrFeatures: [
      'Public analytics event tracking endpoint',
      'Daily visitor snapshot processing',
      'IP hashing for analytics-oriented privacy',
      'Administrative visitor reporting',
      'PostgreSQL persistence through Prisma',
    ],
  },
  {
    id: 'prayer-management',
    title: 'Prayer Request Management',
    subtitle: 'Structured prayer, follow-up, and communication workflow',
    year: '2026',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
    ],
    description:
      'A church workflow for receiving, organizing, reviewing, and following up on prayer requests while connecting requests with broader communication processes.',
    patternsOrFeatures: [
      'Structured prayer request records',
      'Administrative request management',
      'Prayer request notes and follow-up workflows',
      'Department-oriented operational workflows',
      'Communication integration for member follow-up',
    ],
  },
  {
    id: 'communication-system',
    title: 'Church Communication System',
    subtitle: 'Multi-channel communication infrastructure',
    year: '2026',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
    ],
    description:
      'A communication architecture designed to support structured church announcements, newsletters, devotionals, event messages, prayer updates, follow-ups, and other operational communication.',
    patternsOrFeatures: [
      'Communication types for different church workflows',
      'Recipient management and delivery records',
      'Email communication architecture',
      'Extensible channel model for SMS, push, WhatsApp, and in-app messaging',
      'Communication logging for administrative visibility',
    ],
  },
  {
    id: 'authentication-system',
    title: 'Production Authentication Architecture',
    subtitle: 'JWT authentication, account security, and RBAC',
    year: '2026',
    technologies: [
      'NestJS',
      'TypeScript',
      'JWT',
      'PostgreSQL',
      'Prisma',
    ],
    description:
      'A reusable authentication architecture developed as part of larger production applications, covering identity, sessions, verification, recovery, and role-based authorization.',
    patternsOrFeatures: [
      'Access and refresh token workflows',
      'Email verification',
      'Password reset and recovery tokens',
      'Protected API routes',
      'Role-based access control',
      'Account locking and authentication safeguards',
    ],
  },
  {
    id: 'lummina-law',
    title: 'Lummina Law Platform',
    subtitle: 'Legal business application',
    year: '2026',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
    ],
    description:
      'A full-stack legal application built around real business workflows and role-specific experiences for administrators, lawyers, and clients.',
    patternsOrFeatures: [
      'Role-aware application architecture',
      'PostgreSQL persistence through Prisma',
      'Supabase database infrastructure',
      'Responsive business interfaces',
      'Production deployment configuration',
    ],
  },
  {
    id: 'job-finder',
    title: 'Job Finder Application',
    subtitle: 'Full-stack role discovery and filtered search application',
    year: '2025',
    month: 'Oct 2025',
    technologies: [
      'JavaScript',
      'Node.js',
      'SQL',
      'HTML',
      'CSS',
    ],
    description:
      'A full-stack job discovery application built to help users search for opportunities using structured filters and save relevant listings.',
    patternsOrFeatures: [
      'Multi-criteria job search by skills, location, and title',
      'Persistent saved-job functionality',
      'SQL-backed application data',
      'Modular Node.js server architecture',
      'Semantic HTML and responsive interface development',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'FRONTEND',
    tagline: 'Building responsive interfaces and modern web applications.',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'MUI',
      'Ant Design',
    ],
  },
  {
    name: 'BACKEND',
    tagline: 'Designing APIs, services, authentication, and application logic.',
    skills: [
      'Node.js',
      'NestJS',
      'Python',
      'REST APIs',
      'Prisma',
      'Flask',
      'FastAPI',
      'Authentication',
      'JWT',
      'RBAC',
    ],
  },
  {
    name: 'DATABASES & CLOUD',
    tagline: 'Working with application data and production infrastructure.',
    skills: [
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Mongoose',
      'Cloudinary',
      'Vercel',
      'Render',
    ],
  },
  {
    name: 'AI & MACHINE LEARNING',
    tagline: 'Exploring neural architectures, LLMs, and intelligent application features.',
    skills: [
      'Python',
      'PyTorch',
      'PyTorch Geometric (PyG)',
      'Transformers',
      'LLM Fine-Tuning & Integration',
      'Prompt Engineering',
      'Speech-to-Text',
      'AI API Integrations',
    ],
  },
  {
    name: 'ENGINEERING',
    tagline: 'Tools and practices I use to build, test, and ship software.',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'TanStack Query',
      'API Design',
      'Cloud Deployment',
      'Docker',
    ],
  },
  {
    name: 'CURRENTLY BUILDING WITH',
    tagline: 'Technologies I am actively expanding my engineering range with.',
    skills: [
      'Go',
      'ASP.NET',
      'Flask',
      'FastAPI',
      'PyTorch',
      'AI Integrations',
    ],
  },
]

export const EVOLUTION_TIMELINE = [
  {
    period: '2025',
    phase: 'BUILDING THE FOUNDATIONS',
    description:
      'Developing stronger foundations in application development, databases, APIs, and full-stack web development through hands-on projects.',
    milestones: [
      {
        title: 'Job Finder Application',
        date: 'Oct 2025',
        focus:
          'Full-stack application architecture, Node.js, SQL, search workflows, and persistent data',
      },
      {
        title: 'Growing into Full-Stack Development',
        date: '2025',
        focus:
          'Moving beyond frontend development into backend APIs, databases, authentication, and application architecture',
      },
    ],
  },
  {
    period: '2026',
    phase: 'BUILDING REAL-WORLD SYSTEMS',
    description:
      'Applying frontend, backend, database, authentication, and cloud technologies to larger applications designed around real operational problems.',
    milestones: [
      {
        title: 'Word Tabernacle Management Platform',
        date: '2026',
        focus:
          'Next.js, NestJS, PostgreSQL, Prisma, Supabase, authentication, RBAC, communications, and production deployment',
      },
      {
        title: 'Lummina Law Platform',
        date: '2026',
        focus:
          'Full-stack business application architecture, role-based workflows, Prisma, PostgreSQL, and Supabase',
      },
      {
        title: 'Production Backend Architecture',
        date: '2026',
        focus:
          'NestJS modular services, JWT authentication, refresh tokens, email verification, password recovery, audit logging, and API infrastructure',
      },
    ],
  },
  {
    period: '2026 PRESENT',
    phase: 'EXPANDING THE ENGINEERING RANGE',
    description:
      'Continuing to deepen full-stack engineering while exploring Python AI/ML workflows, Graph Neural Networks, Go, ASP.NET, and advanced backend systems.',
    milestones: [
      {
        title: 'AI & Graph Neural Network Exploration',
        date: '2026',
        focus:
          'Studying PyTorch, PyTorch Geometric, Transformer tokenization, and integrating ML models with NestJS/FastAPI backends',
      },
      {
        title: 'Go & ASP.NET',
        date: '2026',
        focus:
          'Expanding backend engineering knowledge beyond the Node.js ecosystem',
      },
      {
        title: 'Production System Design',
        date: '2026',
        focus:
          'Deepening knowledge of authentication, authorization, APIs, databases, deployment, observability, and scalable application architecture',
      },
    ],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'TATA / Forage',
    type: 'simulation',
  },
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Springboard / Infosys',
    type: 'certification',
  },
  {
    title: 'Data Visualization using Power BI',
    issuer: 'Infosys TechA Certification',
    type: 'certification',
  },
  {
    title: 'Machine Learning Professional Certification',
    issuer: 'RapidMiner',
    type: 'certification',
  },
  {
    title: 'NoSQL & Artificial Intelligence',
    issuer: 'Springboard / Infosys',
    type: 'certification',
  },
  {
    title: 'Data Science & Generative AI',
    issuer: 'Industry Specialization',
    status: 'In Progress',
    type: 'course',
  },
]