import React, { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  FolderGit2,
  Search,
  ChevronDown,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { ARCHIVE_PROJECTS } from '../data/portfolioData'

type ProjectFilter =
  | 'ALL'
  | 'FULL-STACK'
  | 'BACKEND'
  | 'AI'
  | 'TOOLS'

export const ProjectArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return ARCHIVE_PROJECTS.filter((project) => {
      const technologies = project.technologies.map((tech) =>
        tech.toLowerCase(),
      )

      const matchesFilter =
        activeFilter === 'ALL'
          ? true
          : activeFilter === 'FULL-STACK'
            ? technologies.some((tech) =>
                [
                  'next.js',
                  'nextjs',
                  'react',
                  'typescript',
                  'javascript',
                  'tailwind',
                  'html',
                  'css',
                ].includes(tech),
              )
            : activeFilter === 'BACKEND'
              ? technologies.some((tech) =>
                  [
                    'node.js',
                    'nodejs',
                    'nestjs',
                    'nest.js',
                    'prisma',
                    'postgresql',
                    'supabase',
                    'mongodb',
                    'mongoose',
                    'fastapi',
                    'flask',
                    'python',
                    'go',
                    'asp.net',
                  ].includes(tech),
                )
              : activeFilter === 'AI'
                ? technologies.some((tech) =>
                    [
                      'ai',
                      'openai',
                      'llm',
                      'generative ai',
                      'machine learning',
                      'speech-to-text',
                      'python',
                      'pytorch',
                      'torch',
                      'transformers',
                      'gnn',
                      'pyg',
                      'prompt engineering',
                    ].includes(tech),
                  )
                : technologies.some((tech) =>
                    [
                      'git',
                      'github',
                      'postman',
                      'docker',
                      'api',
                      'rest api',
                      'tanstack query',
                    ].includes(tech),
                  )

      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query),
        )

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const filters: ProjectFilter[] = [
    'ALL',
    'FULL-STACK',
    'BACKEND',
    'AI',
    'TOOLS',
  ]

  return (
    <section
      id="archive"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#e65c24] uppercase tracking-widest mb-3">
            <span>05 // PROJECT ARCHIVE</span>
            <span className="text-[#5e6068]">·</span>
            <span className="text-[#9da0a8]">
              OTHER BUILDS, EXPERIMENTS &amp; SYSTEMS
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f4f3ef]">
            More Things I&apos;ve Built
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#9da0a8] leading-relaxed max-w-2xl mt-5">
            A collection of projects, experiments, and smaller builds that
            reflect how I approach frontend development, backend engineering,
            APIs, databases, and intelligent system integrations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 font-mono text-xs w-full md:w-auto">
          {/* Search */}
          <div className="relative flex items-center w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 text-[#5e6068] absolute left-3 pointer-events-none" />

            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Search projects"
              className="w-full sm:w-52 bg-[#111215] border border-white/10 rounded-full pl-8 pr-4 py-2 text-xs text-[#f4f3ef] placeholder-[#5e6068] focus:border-[#e65c24] outline-none transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  activeFilter === filter
                    ? 'border-[#e65c24] text-[#e65c24] bg-[#e65c24]/10 shadow-[0_0_12px_rgba(230,92,36,0.2)] font-semibold'
                    : 'border-white/10 text-[#9da0a8] hover:text-[#f4f3ef] hover:border-white/20 bg-[#111215]/60'
                }`}
                data-cursor="FILTER"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Indicator */}
      <div className="flex items-center justify-between mb-5 font-mono text-[10px] uppercase tracking-widest text-[#5e6068]">
        <span>
          <span className="text-[#e65c24]">
            {filteredProjects.length.toString().padStart(2, '0')}
          </span>{' '}
          PROJECTS FOUND
        </span>

        {(searchQuery || activeFilter !== 'ALL') && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('ALL')
            }}
            className="text-[#9da0a8] hover:text-[#e65c24] transition-colors"
          >
            CLEAR FILTERS
          </button>
        )}
      </div>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((item, index) => {
            const isExpanded = expandedId === item.id

            return (
              <article
                key={item.id}
                className="archive-card p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#111215]/60 hover:border-[#e65c24]/40 hover:bg-[#141519] transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Card Meta */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#e65c24]" />

                      <span className="text-[#e65c24] font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </span>

                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-[#9da0a8]">
                      {item.year}
                    </span>
                  </div>

                  {/* Project Identity */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#f4f3ef] group-hover:text-[#e65c24] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-[#e65c24] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#9da0a8] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expanded Details */}
                  <div
                    className={`transition-all duration-300 ease-out overflow-hidden ${
                      isExpanded
                        ? 'max-h-96 opacity-100 pt-3 border-t border-white/[0.08]'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-3 font-mono text-[11px]">
                      <div className="text-[#e65c24] uppercase tracking-wider font-semibold">
                        // WHAT I BUILT / LEARNED:
                      </div>

                      {item.patternsOrFeatures &&
                        item.patternsOrFeatures.length > 0 && (
                          <ul className="list-disc list-inside text-[#9da0a8] space-y-1 font-sans text-xs">
                            {item.patternsOrFeatures.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        )}

                      <div>
                        <div className="text-[#5e6068] uppercase tracking-wider mb-2">
                          STACK
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-[#7a7d86] border border-white/[0.05]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : item.id)
                      }
                      aria-expanded={isExpanded}
                      aria-label={`Toggle details for ${item.title}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9da0a8] hover:text-[#f4f3ef] px-2.5 py-1 rounded bg-[#18191c] border border-white/10 hover:border-white/20 transition-all cursor-pointer shrink-0"
                      data-cursor="EXPAND"
                    >
                      <span>{isExpanded ? 'LESS' : 'DETAILS'}</span>

                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div className="flex flex-wrap gap-1.5 overflow-hidden">
                      {item.technologies.slice(0, 2).map((technology) => (
                        <span
                          key={technology}
                          className="font-mono text-[10px] text-[#9da0a8] bg-[#18191c] px-2 py-0.5 rounded border border-white/[0.05] truncate"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#f4f3ef] hover:text-[#e65c24] px-3 py-1.5 rounded bg-[#18191c] border border-white/10 hover:border-[#e65c24] transition-colors shrink-0"
                      data-cursor="CODE"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />

                      <span>GITHUB</span>

                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 px-6 rounded-2xl border border-dashed border-white/[0.08] bg-[#111215]/40 text-center">
          <FolderGit2 className="w-8 h-8 text-[#5e6068] mx-auto mb-4" />

          <h3 className="font-display text-lg font-bold text-[#f4f3ef]">
            No projects found
          </h3>

          <p className="font-sans text-xs text-[#9da0a8] mt-2">
            Try another search term or reset the project filters.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('ALL')
            }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e65c24]/10 border border-[#e65c24]/30 text-[#e65c24] font-mono text-xs hover:bg-[#e65c24]/20 transition-colors"
          >
            RESET ARCHIVE
          </button>
        </div>
      )}
    </section>
  )
}