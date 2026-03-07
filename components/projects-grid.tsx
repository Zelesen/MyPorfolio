"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"

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

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Artifacts</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Open Source Projects</h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                "highlight" in project && project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    project.status === "shipped" && "bg-primary shadow-sm shadow-primary/50",
                    project.status === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                    project.status === "archived" && "bg-muted-foreground",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {project.description}
              </p>

              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
