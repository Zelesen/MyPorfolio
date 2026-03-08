"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function ScrollAnimations() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // 1. Reveal Sections on Scroll
    // We skip the first section (Hero) to avoid conflicting with its initial CSS animation
    const sections = Array.from(document.querySelectorAll("section")).slice(1)
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0, 
          y: 50,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // 2. Scroll Progress Bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div 
      ref={progressRef} 
      className="fixed top-0 left-0 h-0.5 z-50 bg-primary shadow-[0_0_10px_var(--primary)] w-0" 
    />
  )
}