import React, { useState } from 'react'
import { ArrowUpRight, GitBranch, Code2, Layers } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { PERSONAL_INFO } from '../data/portfolioData'

type ActiveTab = 'github' | 'stack' | 'projects'

interface GitRepository {
  name: string
  lang: string
  branch: string
  tag: string
}

export const TerminalFootprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('github')

  const gitRepositories: GitRepository[] = [
    {
      name: 'wordnest',
      lang: 'NestJS / TypeScript',
      branch: 'main',
      tag: 'Church Management API',
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
    },
    {
      name: 'portfolio',
      lang: 'React / Next.js',
      branch: 'main',
      tag: 'Personal Portfolio',
    },
  ]

  const tabs: {
    id: ActiveTab
    label: string
    icon: React.ReactNode
  }[] = [
    {
      id: 'github',
      label: 'MY WORK',
      icon: <GitBranch className="w-3 h-3" />,
    },
    {
      id: 'stack',
      label: 'MY STACK',
      icon: <Code2 className="w-3 h-3" />,
    },
    {
      id: 'projects',
      label: 'WHAT I BUILD',
      icon: <Layers className="w-3 h-3" />,
    },
  ]

  return (
    <section
      id="footprint"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Chapter Marker */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#9da0a8] mb-12 uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#e65c24]">07</span>
          <span>// FIND ME ONLINE</span>
        </span>

        <span>GITHUB · LINKEDIN · PORTFOLIO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#f4f3ef] break-words">
            FOLLOW THE BUILD
            <span className="text-[#e65c24]">.</span>
          </h2>

          <p className="font-sans text-base text-[#9da0a8] leading-relaxed max-w-xl">
            I build real-world web applications, scalable Python backend services,
            and explore intelligent systems — bridging modern web architecture with machine learning capabilities.
          </p>
        </div>

        {/* Action Direct Links */}
        <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111215] border border-white/10 hover:border-[#e65c24] text-[#f4f3ef] font-mono text-xs transition-all shadow-lg"
            data-cursor="GITHUB"
          >
            <GithubIcon className="w-4 h-4 text-[#e65c24]" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5e6068]" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111215] border border-white/10 hover:border-[#e65c24] text-[#f4f3ef] font-mono text-xs transition-all shadow-lg"
            data-cursor="LINKEDIN"
          >
            <LinkedinIcon className="w-4 h-4 text-[#e65c24]" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5e6068]" />
          </a>
        </div>
      </div>

      {/* Developer Terminal */}
      <div className="rounded-2xl bg-[#0c0d0e] border border-white/[0.08] font-mono text-xs overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#111215] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-[#5e6068] text-[11px]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />

            <span className="ml-2 font-mono text-xs text-[#9da0a8]">
              AYANFE.DEV
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-[11px] transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#e65c24] text-white font-semibold'
                    : 'bg-[#18191c] text-[#9da0a8] hover:text-[#f4f3ef]'
                }`}
                data-cursor="TAB"
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* GITHUB */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              <div className="text-[#9da0a8] flex items-center gap-2 font-mono text-xs">
                <span className="text-[#e65c24]">//</span>
                <span>FEATURED PROJECTS</span>
              </div>

              <div className="border border-white/[0.06] rounded-xl overflow-hidden divide-y divide-white/[0.04]">
                {gitRepositories.map((repo) => (
                  <div
                    key={repo.name}
                    className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#141518] transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[#e65c24]">›</span>

                      <span className="text-[#f4f3ef] font-medium break-all sm:break-normal">
                        {repo.name}
                      </span>

                      <span className="hidden sm:inline text-[#5e6068]">
                        ({repo.branch})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-[#9da0a8]">
                      <span>{repo.lang}</span>

                      <span className="text-[#5e6068]">·</span>

                      <span className="text-[#e65c24]">
                        {repo.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e65c24] hover:text-[#f4f3ef] transition-colors"
                >
                  <span>view_more_on_github()</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* STACK */}
          {activeTab === 'stack' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="text-[#9da0a8] flex items-center gap-2">
                <span className="text-[#e65c24]">//</span>
                <span>MY CURRENT DEVELOPMENT STACK</span>
              </div>

              <div className="p-5 rounded-xl bg-[#111215] border border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-[#9da0a8]">
                <div>
                  <span className="text-[#f4f3ef]">Frontend:</span>{' '}
                  TypeScript, React, Next.js, Tailwind CSS
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Backend:</span>{' '}
                  Node.js, NestJS, Python (Flask, FastAPI)
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Databases:</span>{' '}
                  PostgreSQL, Supabase, Prisma, MongoDB
                </div>

                <div>
                  <span className="text-[#f4f3ef]">AI & ML:</span>{' '}
                  Python, PyTorch, LLM Fine-Tuning & Integration
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Cloud & Infra:</span>{' '}
                  Vercel, Render, Cloudinary, Docker
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Workflow:</span>{' '}
                  Git, GitHub, Postman, TanStack Query
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Auth & Security:</span>{' '}
                  JWT, Refresh Tokens, RBAC
                </div>

                <div>
                  <span className="text-[#f4f3ef]">Exploring:</span>{' '}
                  Transformer Architectures, GNNs, Go
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="text-[#9da0a8] flex items-center gap-2 font-mono text-xs">
                <span className="text-[#e65c24]">//</span>
                <span>WHAT I LIKE TO BUILD</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#111215] border border-white/[0.06] hover:border-[#e65c24]/40 transition-colors">
                  <span className="text-[10px] font-mono text-[#5e6068] block mb-2">
                    01 / FULL-STACK APPLICATIONS
                  </span>

                  <div className="text-xl font-display font-bold text-[#f4f3ef]">
                    End-to-End Products
                  </div>

                  <p className="font-sans text-xs text-[#9da0a8] mt-2 leading-relaxed">
                    Building applications across the frontend, backend,
                    database, authentication, APIs, and deployment layers.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111215] border border-white/[0.06] hover:border-[#e65c24]/40 transition-colors">
                  <span className="text-[10px] font-mono text-[#5e6068] block mb-2">
                    02 / MANAGEMENT SYSTEMS
                  </span>

                  <div className="text-xl font-display font-bold text-[#f4f3ef]">
                    Real-World Systems
                  </div>

                  <p className="font-sans text-xs text-[#9da0a8] mt-2 leading-relaxed">
                    Building practical systems for organizations, including
                    dashboards, member management, communications, analytics,
                    and administrative workflows.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111215] border border-white/[0.06] hover:border-[#e65c24]/40 transition-colors">
                  <span className="text-[10px] font-mono text-[#5e6068] block mb-2">
                    03 / AI & MACHINE LEARNING
                  </span>

                  <div className="text-xl font-display font-bold text-[#e65c24]">
                    LLMs & Machine Learning
                  </div>

                  <p className="font-sans text-xs text-[#9da0a8] mt-2 leading-relaxed">
                    Developing with Python, PyTorch, and specialized ML architectures to integrate LLM workflows into scalable web products.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111215] border border-white/[0.06] hover:border-[#e65c24]/40 transition-colors">
                  <span className="text-[10px] font-mono text-[#5e6068] block mb-2">
                    04 / PRODUCT ENGINEERING
                  </span>

                  <div className="text-xl font-display font-bold text-[#f4f3ef]">
                    From Idea to Deployment
                  </div>

                  <p className="font-sans text-xs text-[#9da0a8] mt-2 leading-relaxed">
                    Taking features from architecture and implementation
                    through testing, deployment, debugging, and production
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status Strip */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-[#5e6068]">
        <span>
          <span className="text-[#e65c24]">●</span> BUILDING · LEARNING ·
          SHIPPING
        </span>

        <span>AYANFE / SOFTWARE DEVELOPER</span>
      </div>
    </section>
  )
}