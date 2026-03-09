"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Terminal, Code2, Cpu, Globe } from "lucide-react"

const notes = [
  {
    id: 1,
    title: "Building an AI Ad Copy Analyzer",
    excerpt: "Creating a tool that analyzes advertising copy using AI to score clarity, persuasion, and emotional impact.",
    date: "Feb 2026",
    category: "ai",
    icon: <Cpu className="h-4 w-4" />,
    color: "from-blue-600/20 to-cyan-400/20",
  },
  {
    id: 2,
    title: "Django Brand Citation Dashboard",
    excerpt: "Developed a dashboard that tracks brand mentions, citation rates, and prompt categories using AI-generated insights.",
    date: "Jan 2026",
    category: "backend",
    icon: <Code2 className="h-4 w-4" />,
    color: "from-emerald-600/20 to-teal-400/20",
  },
  {
    id: 3,
    title: "Ad Library Intelligence Platform",
    excerpt: "Built a platform similar to the Facebook Ad Library that collects, analyzes, and categorizes ads for marketing research.",
    date: "Nov 2025",
    category: "web",
    icon: <Globe className="h-4 w-4" />,
    color: "from-purple-600/20 to-indigo-400/20",
  },
  {
    id: 4,
    title: "Video Ad Creative Analyzer",
    excerpt: "A system that extracts frames from video ads and evaluates visuals and messaging using AI-powered analysis.",
    date: "Sep 2025",
    category: "ai",
    icon: <Terminal className="h-4 w-4" />,
    color: "from-amber-600/20 to-orange-400/20",
  },
];

export function LabNotes() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/10 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
             <div className="h-1 w-12 bg-primary/60 rounded-full" />
             <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary animate-pulse">
               System.Log [Field_Notes]
             </p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Lab<span className="text-primary/80">_</span>Notes
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground/80 leading-relaxed font-mono">
            // Accessing technical findings and workbench observations...
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {notes.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-md border border-white/5 bg-[#0a0a0a] p-6 sm:p-8 transition-all duration-500",
                "hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.2)]",
                expandedNote === note.id && "border-primary/50 bg-[#111]"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
            >
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

              {/* Dynamic Background Glow */}
              <div
                className={cn(
                  "absolute -inset-[100%] opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-radial from-primary/10 via-transparent to-transparent",
                  note.color
                )}
              />

              {/* Top Corner Accent */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className="absolute top-2 right-2 h-[1px] w-0 bg-primary/50 transition-all duration-500 group-hover:w-8" />
                <div className="absolute top-2 right-2 w-[1px] h-0 bg-primary/50 transition-all duration-500 group-hover:h-8" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/5 border border-primary/20">
                    <span className="text-primary">{note.icon}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary/90">
                      {note.category}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/50 tabular-nums">
                    [{note.date.toUpperCase()}]
                  </span>
                </div>

                <h3 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  {note.title}
                </h3>

                <p className="text-sm font-mono leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <span className="text-primary/40 mr-1">&gt;</span> {note.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70">
                  <span className="group-hover:translate-x-1 transition-transform">Execute Read</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/30 to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom Decorative Edge */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/60 transition-all duration-700 group-hover:w-1/3" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}