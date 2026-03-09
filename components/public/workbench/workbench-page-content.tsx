"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Github, ExternalLink, Clock, GitBranch, Activity, Terminal, ChevronRight} from "lucide-react"

const wipItems = [
  {
    id: 1,
    name: "AD_INTEL_ENGINE",
    description: "AI system scanning ad creatives and landing pages for performance signals.",
    progress: 80,
    lastUpdated: "09.03.2026",
    url: "https://github.com/Zelesen",
    status: "OPTIMIZING"
  },
  {
    id: 2,
    name: "BRAND_CITATION_TRACKER",
    description: "Analytics dashboard tracking brand mentions across LLM platforms.",
    progress: 65,
    lastUpdated: "01.2026",
    url: "https://github.com/Zelesen",
    status: "INDEXING"
  },
  {
    id: 3,
    name: "COPY_ANALYZER_V2",
    description: "LLM scoring for persuasion, clarity, and emotional impact.",
    progress: 94,
    lastUpdated: "02.2026",
    url: "https://github.com/Zelesen",
    status: "STAGING"
  },
  {
    id: 4,
    name: "VIDEO_AD_EXTRACTOR",
    description: "Frame extraction and AI analysis system for video creative assets.",
    progress: 70,
    lastUpdated: "01.2026",
    url: "https://github.com/Zelesen",
    status: "DEBUGGING"
  },
];

const recentActivity = [
  {
    type: "commit",
    project: "Mафия UI",
    message: "Add glass-style card components",
    time: "2 hours ago",
  },
  {
    type: "branch",
    project: "Mафия Video Analyzer",
    message: "Created feature/frame-extraction branch",
    time: "5 hours ago",
  },
  {
    type: "commit",
    project: "Mафия Copy Analyzer",
    message: "Improve AI scoring logic",
    time: "1 day ago",
  },
  {
    type: "commit",
    project: "Mафия Ad Intelligence",
    message: "Add competitor ad analysis module",
    time: "2 days ago",
  },
]

export function WorkbenchPageContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Activity className="h-4 w-4 text-primary animate-pulse" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
              Live_Diagnostics
            </p>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
            Work<span className="text-primary/60">bench</span>
          </h2>
          <p className="max-w-2xl font-mono text-sm text-muted-foreground/60 leading-relaxed">
            // Active experiments and unstable builds.
          </p>
        </div>

        <div className="rounded-sm border border-white/[0.08] bg-[#080808] overflow-hidden transition-all duration-500 hover:border-primary/20">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center gap-4 border-b border-white/[0.05] bg-[#0c0c0c] px-5 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <div className="flex items-center gap-2">
              <Terminal className="h-3 w-3 text-primary/70" />
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                bash — ~/mafia/workbench — 80x24
              </span>
            </div>
          </div>

          <div className="divide-y divide-white/[0.03]">
            {wipItems.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-6 p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-primary/[0.02]"
              >
                {/* Hover Scanline Animation */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <div className="flex-1 space-y-3 min-w-0 z-10">
                  <div className="flex items-center gap-4">
                    <h4 className="font-mono text-sm font-bold tracking-tight text-zinc-300 group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="hidden md:block font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/5 bg-white/[0.02] text-zinc-600 group-hover:text-primary/60 transition-colors">
                      {item.status}
                    </span>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                      <Github className="h-3.5 w-3.5 text-zinc-500 hover:text-white transition-colors" />
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-500 hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors line-clamp-1 italic">
                    /* {item.description} */
                  </p>
                </div>

                <div className="flex items-center gap-8 z-10">
                  {/* Segmented Progress Bar */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-3 w-1.5 rounded-sm transition-all duration-500",
                            i < Math.floor(item.progress / 10)
                              ? "bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),0.5)]"
                              : "bg-zinc-900"
                          )}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-tighter">
                        Updated: {item.lastUpdated}
                      </span>
                      <span className="font-mono text-xs font-bold text-primary">
                        {item.progress}%
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="hidden sm:block h-4 w-4 text-zinc-800 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="border-t border-white/[0.05] bg-[#0a0a0a] px-5 py-4">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              <div className="flex items-center gap-3">
                <span className="text-primary animate-pulse">●</span>
                <span>System Status: Optimal</span>
                <span className="hidden sm:inline-block ml-4 opacity-30">|</span>
                <span className="hidden sm:inline-block ml-4">Tasks: {wipItems.length} active</span>
              </div>
              <div className="hidden md:block">
                v2.0.4-stable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
