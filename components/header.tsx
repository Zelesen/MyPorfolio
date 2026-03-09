"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github, Twitter, Linkedin, Terminal, Cpu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { ThemeChanger } from "./theme-changer"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
  { label: "Workbench", href: "/workbench" },
  { label: "Blog", href: "/blog" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Zelesen", icon: Github },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        isScrolled 
          ? "border-b border-primary/20 bg-background/60 backdrop-blur-md py-2" 
          : "bg-transparent py-4",
      )}
    >
      {/* Decorative Scanline Effect (Only visible when scrolled) */}
      {isScrolled && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-primary/30 bg-primary/5 transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10 group-hover:rotate-90">
              <Cpu className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-rotate-90" />
              {/* Glitch Corners */}
              <span className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tighter text-foreground">
                Mафия<span className="text-primary animate-pulse">_</span>
              </span>
              <span className="text-[10px] font-mono leading-none text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                Laboratory
              </span>
            </div>
          </Link>

           {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-lg",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  hoveredIndex === index && !isActive(item.href) && "text-foreground",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={cn(
                    "absolute left-1.5 text-primary transition-all duration-200",
                    isActive(item.href)
                      ? "opacity-100 translate-x-0"
                      : hoveredIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2",
                  )}
                >
                  {">"}
                </span>
                <span
                  className={cn(
                    "transition-transform duration-200",
                    (hoveredIndex === index || isActive(item.href)) && "translate-x-2",
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                    isActive(item.href) ? "w-6" : hoveredIndex === index ? "w-6" : "w-0",
                  )}
                />
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-1">
              <ThemeChanger />
              <ThemeToggle />
            </div>
          </div>

          {/* Socials & Status */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 lg:flex">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-md border border-transparent transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <link.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>

            <div className="hidden h-4 w-px bg-border/50 sm:block" />

            {/* Live System Status Tag */}
            <div className="hidden items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 sm:flex group cursor-crosshair">
              <div className="relative h-1.5 w-1.5">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40" />
                <div className="relative h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              </div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-tighter text-primary/80 group-hover:text-primary transition-colors">
                Sys: Building
              </span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 transition-all active:scale-90 md:hidden"
            >
              <div className="space-y-1.5">
                <span className={cn("block h-0.5 w-5 bg-primary transition-transform", isMobileMenuOpen && "translate-y-2 rotate-45")} />
                <span className={cn("block h-0.5 w-3 bg-primary transition-opacity", isMobileMenuOpen && "opacity-0")} />
                <span className={cn("block h-0.5 w-5 bg-primary transition-transform", isMobileMenuOpen && "-translate-y-2 -rotate-45")} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-x-0 top-[65px] z-40 flex flex-col gap-2 border-b border-primary/20 bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="px-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-between rounded-sm border border-transparent p-3 font-mono text-sm tracking-widest transition-all hover:border-primary/30 hover:bg-primary/5"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">//</span>
                  {item.label}
                </span>
                <Terminal className="h-4 w-4 text-primary/20 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-primary/10 px-6 pt-6">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <link.icon key={link.label} className="h-5 w-5 text-muted-foreground" />
              ))}
            </div>
            <div className="flex gap-2">
              <ThemeChanger />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}