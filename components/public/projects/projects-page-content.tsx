"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles, Search, Filter, Command } from "lucide-react"
import { Input } from "@/components/ui/input"

const projects = [
  {
    id: 0,
    title: "Ad Intelligence",
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
    title: "Copy Analyzer",
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
    title: "Ad Library",
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
    title: "Brand Monitor",
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
    title: "Video Analyzer",
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
    title: "Dev Stack",
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
const allTags = [...new Set(projects.flatMap((p) => p.tags))]

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)


  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.status === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => p.tags.includes(tag))
    return matchesFilter && matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="space-y-4 animate-fade-in mb-5">
            <div className="flex items-center gap-3 text-primary/70">
              <Command className="h-4 w-4" />
              <p className="font-mono text-[10px] uppercase tracking-[0.4em]">system.exec("--list-artifacts")</p>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl italic text-white">
              BUILD_LOG<span className="text-primary animate-pulse">.</span>
            </h2>
          </div>

        {/* Search and Filters */}
        <div className={cn("mb-10 space-y-6 opacity-0", isVisible && "animate-fade-in-up stagger-2")}>
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/40 border-border/60 focus:border-primary/50"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
           {filters.map((filter) => (
                         <button
                           key={filter}
                           onClick={() => setActiveFilter(filter)}
                           className={cn(
                             "relative overflow-hidden rounded-sm px-4 py-1.5 text-[10px] uppercase tracking-widest transition-all",
                             activeFilter === filter
                               ? "text-primary bg-primary/10 border-b-2 border-primary"
                               : "text-muted-foreground border-b border-white/10 hover:border-white/40 hover:text-white"
                           )}
                         >
                           {filter === 'all' ? './root' : `--${filter}`}
                         </button>
                       ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-2 self-center" />
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-200",
                  selectedTags.includes(tag)
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border/60 bg-secondary/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-sm border border-white/[0.05] bg-[#070707] p-6 transition-all duration-500",
                "hover:border-primary/40",
                project.highlight && "sm:col-span-2 lg:col-span-2 bg-[#0a0a0a]"
              )}
            >
              {/* Corner Brackets Animation */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/50 group-hover:h-3 group-hover:w-3" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary/0 transition-all duration-300 group-hover:border-primary/50 group-hover:h-3 group-hover:w-3" />

              {/* Matrix-like Background Texture on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              {/* Interactive Spotlight Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: ID & Status */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] text-white/20">ID_00{project.id}</span>
                  <div className="flex items-center gap-2">
                     <span className={cn(
                        "h-1 w-1 rounded-full",
                        project.status === "shipped" ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),1)] animate-pulse"
                      )} />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-primary transition-colors duration-300">
                      {project.title.replace(" ", "_").toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-sm font-mono leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
                    <span className="text-primary/40 mr-1">DESC::</span>
                    {project.description}
                  </p>
                </div>

                {/* Bottom Metadata Section */}
                <div className="mt-8 pt-6 border-t border-white/[0.03] space-y-4">
                  {/* Tags with a "Chip" aesthetic */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 font-mono text-[9px] text-zinc-500 group-hover:border-primary/20 group-hover:text-primary/60 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Git Stats & Link */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-600 group-hover:text-yellow-500/60 transition-colors">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </div>
                    </div>
                    
                    <a 
                      href={project.url} 
                      className="p-2 rounded-full hover:bg-primary/10 text-zinc-600 hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Subtle Linear Scanline */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary/40 transition-all duration-1000 group-hover:w-full" />
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
