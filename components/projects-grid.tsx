"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Star, GitFork, Sparkles, Terminal, Code2, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 0,
    title: "Mафия Ad Intelligence",
    description:
      "An AI-powered platform that analyzes ad creatives, messaging, and targeting patterns to help marketers discover high-performing advertising strategies.",
    tags: ["TypeScript", "Next.js", "OpenAI", "Analytics", "Tailwind"],
    status: "in-progress",
    year: "2026",
    stars: 21,
    forks: 3,
    url: "https://github.com/yourusername/mafia-ad-intelligence",
    homepage: "https://mafia-ads.vercel.app",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Mафия Copy Analyzer",
    description:
      "An AI tool that evaluates advertising copy and marketing content for clarity, persuasion, and emotional impact using large language models.",
    tags: ["TypeScript", "Next.js", "GPT", "AI Analysis"],
    status: "shipped",
    year: "2025",
    stars: 18,
    forks: 4,
    url: "https://github.com/yourusername/mafia-copy-analyzer",
    homepage: "https://copy.mafia-ai.com",
    featured: true,
  },
  {
    id: 2,
    title: "Mафия Ad Library",
    description:
      "A searchable ad intelligence platform inspired by the Facebook Ad Library that collects, categorizes, and analyzes advertising creatives.",
    tags: ["JavaScript", "Django", "Scraping", "Marketing"],
    status: "shipped",
    year: "2025",
    stars: 26,
    forks: 6,
    url: "https://github.com/yourusername/mafia-ad-library",
    featured: true,
  },
  {
    id: 3,
    title: "Mафия Brand Monitor",
    description:
      "A dashboard that tracks brand citations, prompt categories, and AI-generated insights to measure how brands appear across AI platforms.",
    tags: ["Next.js", "PostgreSQL", "OpenAI", "Analytics"],
    status: "in-progress",
    year: "2026",
    stars: 12,
    forks: 2,
    url: "https://github.com/yourusername/mafia-brand-monitor",
    homepage: "https://brand.mafia-ai.com",
    featured: true,
  },
  {
    id: 4,
    title: "Mафия Video Analyzer",
    description:
      "An AI system that extracts frames from video ads and analyzes visuals, branding, and messaging for creative performance insights.",
    tags: ["Python", "OpenCV", "AI", "Video Analysis"],
    status: "in-progress",
    year: "2025",
    stars: 14,
    forks: 2,
    url: "https://github.com/yourusername/mafia-video-analyzer",
    featured: false,
  },
  {
    id: 5,
    title: "Mафия Prompt Lab",
    description:
      "A toolkit for testing, organizing, and optimizing prompts used in AI-powered marketing and automation workflows.",
    tags: ["Python", "FastAPI", "LLM", "Prompt Engineering"],
    status: "shipped",
    year: "2024",
    stars: 11,
    forks: 3,
    url: "https://github.com/yourusername/mafia-prompt-lab",
    featured: false,
  },
  {
    id: 6,
    title: "Mафия Growth Tools",
    description:
      "A collection of AI-driven marketing utilities including headline generators, ad scoring tools, and campaign optimization features.",
    tags: ["TypeScript", "Next.js", "AI", "Marketing"],
    status: "in-progress",
    year: "2026",
    stars: 16,
    forks: 3,
    url: "https://github.com/yourusername/mafia-growth-tools",
    featured: true,
  },
  {
    id: 7,
    title: "Mафия Dev Stack",
    description:
      "A developer starter kit with Next.js, Docker, PostgreSQL, and Tailwind designed for quickly launching scalable SaaS applications.",
    tags: ["TypeScript", "Next.js", "Docker", "PostgreSQL"],
    status: "shipped",
    year: "2024",
    stars: 22,
    forks: 7,
    url: "https://github.com/yourusername/mafia-dev-stack",
    featured: false,
  },
];

const filters = ["all", "shipped", "in-progress", "archived"]



export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.status === activeFilter)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28 bg-[#030303] text-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <div className="flex items-center gap-2 text-primary">
              <Terminal className="h-4 w-4" />
              <p className="font-mono text-xs uppercase tracking-[0.35em]">root@portfolio:~# ls artifacts</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              Open Source Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-md border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-200",
                  activeFilter === filter
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-white"
                )}
              >
                {filter === 'all' ? './all' : `--${filter}`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-500",
                "hover:border-primary/50 hover:-translate-y-2",
                project.highlight && "sm:col-span-2 lg:col-span-2 border-primary/20 bg-gradient-to-br from-[#0A0A0A] to-[#111]"
              )}
            >
              {/* 1. Terminal Scanline Effect (Hover Only) */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

              {/* 2. Interactive Spotlight Glare */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.12), transparent 80%)`,
                }}
              />

              {/* Header: Status & Year */}
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-1.5 w-1.5 rounded-full ring-4",
                    project.status === "shipped" ? "bg-emerald-500 ring-emerald-500/20" : "bg-yellow-500 ring-yellow-500/20 animate-pulse"
                  )} />
                  <span className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/30 italic">[{project.year}]</span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 line-clamp-3 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 group-hover:text-yellow-500/80 transition-colors">
                    <Star className="h-3.5 w-3.5" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 group-hover:text-slate-200 transition-colors">
                    <GitFork className="h-3.5 w-3.5" />
                    {project.forks}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border-white/5 bg-white/[0.03] font-mono text-[9px] text-slate-500 transition-all group-hover:border-primary/30 group-hover:text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-700 ease-in-out group-hover:w-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
              
              {/* Background Glow for Featured */}
              {project.highlight && (
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}