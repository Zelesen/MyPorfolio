"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const roles = [
  "architecture",
  "engineering assets",
  "compiling raw",
  "neural patterns",
  "technical debt"
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [uptime, setUptime] = useState("00:00:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setUptime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2400)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative overflow-hidden px-4 sm:px-8 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32">
      {/* Background Layer: Cyber Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Mission Control */}
          <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary">
                  System Status: Operational // Lab v2.6
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Forging digital
                <br />
                <span
                  className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground/90 font-light">
              This isn't a gallery; it's a <span className="text-foreground font-mono italic">high-latency laboratory</span> where code meets chaos. I build tools for the next web, breaking things 
              until they work perfectly.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-md bg-primary px-8 py-4 font-mono text-sm font-bold text-primary-foreground transition-all hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background active:scale-95"
              >
                <span>INITIATE_EXPLORATION</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              
              <Link
                href="/introduction"
                className="group flex items-center justify-center gap-3 rounded-md border border-border bg-background/50 backdrop-blur-sm px-8 py-4 font-mono text-sm transition-all hover:bg-secondary/80 hover:border-primary/50"
              >
                <span>MANIFESTO</span>
              </Link>
            </div>

            {/* Micro-stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border/50 w-full max-w-md">
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase">UPTIME</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-primary">{uptime}</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase">LATENCY</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-primary">14ms</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase">LOC</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-primary">12.4k+</div>
              </div>
            </div>
          </div>

          {/* Right Column: The Terminal Artifact */}
          <div className="relative group w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-75 transition duration-1000 group-hover:opacity-100" />
            
            <div className="relative flex flex-col rounded-lg border border-border bg-black/90 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Custom Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground truncate px-2">
                  <span className="opacity-50">root@mафия:</span>
                  <span className="text-primary/70">~/hero_unit</span>
                </div>
                <div className="hidden sm:block w-10" />
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto scrollbar-hide">
                <div className="text-primary mb-4 whitespace-nowrap">
                  {`[SYSTEM] Initializing creative_engine... OK`} <br />
                  {`[SYSTEM] Syncing lab_data: 2026.03.09`} <br />
                  <span className="text-muted-foreground">{`----------------------------------------`}</span>
                </div>
                
                {/* ASCII art container with forced layout */}
                <pre className="text-primary/90 inline-block min-w-full drop-shadow-[0_0_8px_rgba(var(--primary),0.4)]">
                  {`      
      ███╗   ███╗  █████╗ ███████╗██╗ █████╗ 
      ████╗ ████║ ██╔══██╗██╔════╝██║██╔══██╗
      ██╔████╔██║ ███████║█████╗  ██║███████║
      ██║╚██╔╝██║ ██╔══██║██╔══╝  ██║██╔══██║
      ██║ ╚═╝ ██║ ██║  ██║██║     ██║██║  ██║
      ╚═╝     ╚═╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝`}
                </pre>

                <div className="mt-6 space-y-1">
                  <div className="flex gap-2 sm:gap-4">
                    <span className="text-accent">{`$`}</span>
                    <span className="text-foreground">grep --status "active" projects</span>
                  </div>
                  <div className="text-muted-foreground pl-4 sm:pl-6">
                    {`> Found 12 artifacts`} <br />
                    {`> Current_Focus: "The_Next_Big_Thing"`}
                  </div>
                  <div className="flex gap-2 sm:gap-4 animate-pulse">
                    <span className="text-accent">{`$`}</span>
                    <span className="bg-primary/20 text-primary px-1">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tags - Hidden on very small screens */}
            <div className="absolute -right-2 -bottom-2 hidden md:block rounded border border-border bg-card p-3 shadow-xl">
               <div className="text-[10px] font-mono text-muted-foreground">TAG_ID: MAF-001</div>
               <div className="text-xs font-mono font-bold text-foreground">ENCRYPTED_CORE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small heights */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center">
        <div className="h-10 w-5 rounded-full border border-border flex justify-center p-1">
          <div className="h-2 w-1 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}