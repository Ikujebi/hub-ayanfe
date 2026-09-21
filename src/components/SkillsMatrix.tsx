import React, { useState } from 'react'
import {
  Server,
  Database,
  Sparkles,
  Terminal,
  Layers,
} from 'lucide-react'

interface SkillMeta {
  tier: 'PRODUCTION' | 'BUILDING WITH' | 'LEARNING'
  project: string
  note: string
}

interface SkillCategory {
  name: string
  shortName: string
  tagline: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'FRONTEND',
    shortName: 'FRONTEND',
    tagline:
      'Building polished, responsive interfaces with modern React and Next.js.',
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
    shortName: 'BACKEND',
    tagline:
      'Designing APIs, authentication flows, business logic, and scalable server applications.',
    skills: [
      'Node.js',
      'NestJS',
      'REST APIs',
      'Prisma',
      'Flask',
      'FastAPI',
      'Go',
      'ASP.NET',
    ],
  },
  {
    name: 'DATABASES & CLOUD',
    shortName: 'DATA',
    tagline:
      'Working with relational and document databases, managed infrastructure, and cloud services.',
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
    name: 'AI & AUTOMATION',
    shortName: 'AI',
    tagline:
      'Exploring practical AI integrations that solve real product and workflow problems.',
    skills: [
      'LLM Integration',
      'AI APIs',
      'Prompt Engineering',
      'Speech-to-Text',
      'AI-assisted Workflows',
    ],
  },
  {
    name: 'ENGINEERING',
    shortName: 'ENGINEERING',
    tagline:
      'The tools and engineering practices I use to build, test, ship, and maintain applications.',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'TanStack Query',
      'Authentication',
      'RBAC',
      'Docker',
      'API Design',
    ],
  },
]

const SKILL_PROVENANCE: Record<string, SkillMeta> = {
  TypeScript: {
    tier: 'PRODUCTION',
    project: 'WTBC Portal / Lummina Law',
    note: 'Used extensively for production React, Next.js, NestJS, API clients, services, and strongly typed application logic.',
  },
  JavaScript: {
    tier: 'PRODUCTION',
    project: 'Web Applications',
    note: 'One of my core languages for frontend development, Node.js applications, APIs, and interactive web experiences.',
  },
  React: {
    tier: 'PRODUCTION',
    project: 'WTBC Portal / Client Apps',
    note: 'Used to build component-driven interfaces, dashboards, forms, modals, interactive workflows, and reusable UI systems.',
  },
  'Next.js': {
    tier: 'PRODUCTION',
    project: 'WTBC Portal / Lummina Law',
    note: 'Used for production applications, App Router architecture, server components, authentication flows, APIs, and SEO-friendly pages.',
  },
  'Tailwind CSS': {
    tier: 'PRODUCTION',
    project: 'WTBC Portal / Web Projects',
    note: 'My preferred approach for building responsive interfaces and polished product UI.',
  },
  'Node.js': {
    tier: 'PRODUCTION',
    project: 'Backend APIs',
    note: 'Used for server-side JavaScript, API services, integrations, authentication, and backend application logic.',
  },
  NestJS: {
    tier: 'PRODUCTION',
    project: 'WordNest',
    note: 'Used to build a structured production backend with modules, services, authentication, guards, interceptors, Prisma, and PostgreSQL.',
  },
  'REST APIs': {
    tier: 'PRODUCTION',
    project: 'Web Applications',
    note: 'Designed and consumed APIs for authentication, dashboards, church management, communications, analytics, media, and other application features.',
  },
  Prisma: {
    tier: 'PRODUCTION',
    project: 'WordNest / Lummina Law',
    note: 'Used for typed database access, schema management, migrations, relationships, and application data models.',
  },
  PostgreSQL: {
    tier: 'PRODUCTION',
    project: 'Supabase Projects',
    note: 'Used as the relational database layer for production applications and complex application data.',
  },
  Supabase: {
    tier: 'PRODUCTION',
    project: 'WTBC / Lummina Law',
    note: 'Used for managed PostgreSQL infrastructure and application data services.',
  },
  MongoDB: {
    tier: 'PRODUCTION',
    project: 'Web Applications',
    note: 'Used for document-oriented application data and Node.js applications.',
  },
  Mongoose: {
    tier: 'PRODUCTION',
    project: 'Node.js Applications',
    note: 'Used for MongoDB schema modeling, validation, relationships, and database access.',
  },
  Flask: {
    tier: 'BUILDING WITH',
    project: 'Python Projects',
    note: 'Used while expanding my Python backend development skills and working with lightweight APIs.',
  },
  FastAPI: {
    tier: 'BUILDING WITH',
    project: 'Python Backend',
    note: 'Exploring typed, high-performance Python APIs and modern backend architecture.',
  },
  Go: {
    tier: 'LEARNING',
    project: 'Go Development',
    note: 'Currently expanding my backend engineering skills with Go and its ecosystem.',
  },
  'ASP.NET': {
    tier: 'LEARNING',
    project: 'Backend Engineering',
    note: 'Expanding my backend toolkit with the .NET ecosystem and C# application development.',
  },
  'LLM Integration': {
    tier: 'BUILDING WITH',
    project: 'AI Experiments',
    note: 'Exploring practical ways to integrate language models into real applications and workflows.',
  },
  'AI APIs': {
    tier: 'BUILDING WITH',
    project: 'AI-powered Features',
    note: 'Working with AI APIs as application services rather than treating AI as a standalone feature.',
  },
  'Prompt Engineering': {
    tier: 'BUILDING WITH',
    project: 'AI Workflows',
    note: 'Designing structured prompts and application workflows for more reliable model outputs.',
  },
  'Speech-to-Text': {
    tier: 'BUILDING WITH',
    project: 'Church AI Concepts',
    note: 'Exploring speech-based interfaces and practical transcription workflows.',
  },
  'AI-assisted Workflows': {
    tier: 'BUILDING WITH',
    project: 'Product Experiments',
    note: 'Exploring how AI can automate repetitive tasks and improve real-world application workflows.',
  },
  Cloudinary: {
    tier: 'PRODUCTION',
    project: 'WTBC Portal',
    note: 'Used for media and profile image uploads, storage, transformations, and delivery.',
  },
  Vercel: {
    tier: 'PRODUCTION',
    project: 'Next.js Applications',
    note: 'Used to deploy and host production frontend applications.',
  },
  Render: {
    tier: 'PRODUCTION',
    project: 'WordNest',
    note: 'Used to deploy and run the NestJS backend and production API infrastructure.',
  },
  Git: {
    tier: 'PRODUCTION',
    project: 'Everyday Workflow',
    note: 'Used throughout development for version control, feature work, debugging, and maintaining project history.',
  },
  GitHub: {
    tier: 'PRODUCTION',
    project: 'Open Source / Projects',
    note: 'Used for repository hosting, collaboration, project management, and source control.',
  },
  Postman: {
    tier: 'PRODUCTION',
    project: 'API Development',
    note: 'Used extensively for testing, debugging, and validating backend APIs.',
  },
  'TanStack Query': {
    tier: 'PRODUCTION',
    project: 'React Applications',
    note: 'Used for server-state management, API fetching, caching, mutations, and asynchronous application state.',
  },
  Authentication: {
    tier: 'PRODUCTION',
    project: 'WTBC / Lummina Law',
    note: 'Built authentication flows including access tokens, refresh tokens, verification, password reset, and protected routes.',
  },
  RBAC: {
    tier: 'PRODUCTION',
    project: 'Church Management System',
    note: 'Implemented role-based access patterns for different levels of application permissions.',
  },
  Docker: {
    tier: 'BUILDING WITH',
    project: 'Development Infrastructure',
    note: 'Used and explored for local development and infrastructure workflows where appropriate.',
  },
  'API Design': {
    tier: 'PRODUCTION',
    project: 'Backend Systems',
    note: 'Designing structured endpoints, request/response contracts, validation, error handling, and service boundaries.',
  },
  HTML: {
    tier: 'PRODUCTION',
    project: 'Web Applications',
    note: 'Used for semantic page structure, accessible interfaces, forms, and modern web applications.',
  },
  CSS: {
    tier: 'PRODUCTION',
    project: 'Modern UI Systems',
    note: 'Used for responsive layouts, animations, component styling, and polished product interfaces.',
  },
  MUI: {
    tier: 'PRODUCTION',
    project: 'React Applications',
    note: 'Used for component-based interfaces and dashboard experiences where a design system accelerates development.',
  },
  'Ant Design': {
    tier: 'PRODUCTION',
    project: 'React Applications',
    note: 'Used for complex enterprise-style interfaces, forms, tables, and administrative dashboards.',
  },
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  FRONTEND: <Layers className="w-4 h-4 text-[#e65c24]" />,
  BACKEND: <Server className="w-4 h-4 text-[#e65c24]" />,
  'DATABASES & CLOUD': <Database className="w-4 h-4 text-[#e65c24]" />,
  'AI & AUTOMATION': <Sparkles className="w-4 h-4 text-[#e65c24]" />,
  ENGINEERING: <Terminal className="w-4 h-4 text-[#e65c24]" />,
}

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const handleSkillClick = (skill: string) => {
    setHoveredSkill((prev) => (prev === skill ? null : skill))
  }

  const displayedCategories =
    activeCategory === 'ALL'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((category) => category.name === activeCategory)

  const activeMeta = hoveredSkill ? SKILL_PROVENANCE[hoveredSkill] : null

  return (
    <section
      id="skills"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#e65c24] uppercase tracking-widest mb-3">
            <span>02 // WHAT I BUILD WITH</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f4f3ef]">
            Skills &amp; Technologies
          </h2>

          <p className="mt-5 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-[#9da0a8]">
            A practical toolkit built through real applications, client work,
            backend systems, and continuous experimentation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveCategory('ALL')}
            className={`px-3.5 py-1.5 transition-all border rounded-full ${
              activeCategory === 'ALL'
                ? 'border-[#e65c24] text-[#e65c24] bg-[#e65c24]/10 shadow-[0_0_15px_rgba(230,92,36,0.2)]'
                : 'border-white/10 text-[#9da0a8] hover:text-[#f4f3ef] hover:border-white/25 bg-[#111215]/60'
            }`}
          >
            ALL
          </button>

          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`px-3.5 py-1.5 transition-all border rounded-full ${
                activeCategory === category.name
                  ? 'border-[#e65c24] text-[#e65c24] bg-[#e65c24]/10 shadow-[0_0_15px_rgba(230,92,36,0.2)]'
                  : 'border-white/10 text-[#9da0a8] hover:text-[#f4f3ef] hover:border-white/25 bg-[#111215]/60'
              }`}
            >
              {category.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-8 mb-16">
        {displayedCategories.map((category, index) => (
          <div
            key={category.name}
            className="p-5 sm:p-8 md:p-10 rounded-2xl bg-[#111215]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Category Number Background */}
            <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 pointer-events-none font-display font-black text-6xl sm:text-8xl text-white select-none">
              0{index + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Category Info */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e65c24]/10 border border-[#e65c24]/30 flex items-center justify-center">
                    {CATEGORY_ICONS[category.name] || (
                      <Sparkles className="w-4 h-4 text-[#e65c24]" />
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#f4f3ef]">
                    {category.name}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#9da0a8] leading-relaxed max-w-sm pt-2">
                  {category.tagline}
                </p>
              </div>

              {/* Skill Chips */}
              <div className="lg:col-span-8 flex flex-wrap gap-3 items-center">
                {category.skills.map((skill) => {
                  const meta = SKILL_PROVENANCE[skill]
                  const isSelected = hoveredSkill === skill

                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => handleSkillClick(skill)}
                      className={`group relative p-3 sm:px-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                        isSelected
                          ? 'border-[#e65c24] bg-[#18191c] shadow-[0_0_20px_rgba(230,92,36,0.15)] -translate-y-0.5'
                          : 'border-white/[0.08] bg-[#0c0d0e]/80 hover:border-white/25 hover:bg-[#141518]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-display text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                            isSelected
                              ? 'text-[#e65c24]'
                              : 'text-[#f4f3ef] group-hover:text-[#e65c24]'
                          }`}
                        >
                          {skill}
                        </span>

                        {meta && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#9da0a8] border border-white/[0.05]">
                            {meta.project.split(' / ')[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contextual Usage Strip */}
      <div className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#111215]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 font-mono text-xs min-h-[56px]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#e65c24] animate-ping flex-shrink-0" />

          <span className="text-[#5e6068] uppercase flex-shrink-0">
            // SELECTED:
          </span>

          <span className="text-[#f4f3ef] font-semibold">
            {hoveredSkill || 'FULL-STACK APPLICATIONS & DIGITAL PRODUCTS'}
          </span>

          {activeMeta && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded border ${
                activeMeta.tier === 'LEARNING'
                  ? 'border-white/10 text-[#9da0a8] bg-white/[0.05]'
                  : 'border-[#e65c24]/30 text-[#e65c24] bg-[#e65c24]/10'
              }`}
            >
              {activeMeta.tier}
            </span>
          )}
        </div>

        <div className="text-[#9da0a8]">
          {activeMeta ? (
            <span
              className={
                activeMeta.tier === 'LEARNING'
                  ? 'text-[#9da0a8]'
                  : 'text-[#e65c24]'
              }
            >
              {activeMeta.note}
            </span>
          ) : (
            <span>
              Hover or tap a skill to see context and real-world application.
            </span>
          )}
        </div>
      </div>
    </section>
  )
}