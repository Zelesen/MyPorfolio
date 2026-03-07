import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
  <div className="mx-auto max-w-4xl">
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
          Welcome to Mафия Code
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
          Where Code Meets{" "}
          <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
            Creativity
          </span>
        </h1>
      </div>

      <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Mафия Code is a creative hub for building powerful digital experiences.
        It’s a place where ideas are transformed into real projects, experiments
        push boundaries, and modern technologies come together to create
        innovative solutions on the web.
      </p>
    </div>
  </div>
</section>

      {/* About Section */}
     <section className="relative px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
          
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              About Mафия Code
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Playground for Building Bold Ideas
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            
            <p>
              Mафия Code is more than just a portfolio—it’s a digital lab where
              ideas turn into real-world applications. Every project here reflects
              experimentation, creativity, and the pursuit of building better
              software through continuous learning.
            </p>

            <p>
              From modern web development and AI-powered tools to experimental
              side projects, Mафия Code showcases the process behind building
              innovative solutions. Each project represents a step in the journey
              of exploring new technologies and pushing the boundaries of what’s
              possible on the web.
            </p>

            <p>
              The goal is simple: build, experiment, and share. Mафия Code exists
              to inspire developers, document the process of creation, and
              demonstrate how ideas evolve into fully functional digital products.
            </p>

          </div>
        </div>
      </div>
    </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Platform Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Modern Development
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Open Source Projects",
                description:
                  "Every project is available on GitHub for learning and collaboration. Transparent development process from start to finish.",
              },
              {
                icon: Layers,
                title: "Developer Workbench",
                description:
                  "A dedicated space for ongoing experiments and prototypes. Watch ideas evolve from concept to implementation.",
              },
              {
                icon: FileText,
                title: "Lab Notes",
                description:
                  "Detailed documentation of learning journeys, technical insights, and development patterns discovered along the way.",
              },
              {
                icon: Zap,
                title: "Modern Tech Stack",
                description:
                  "Built with cutting-edge technologies including Next.js, React, TypeScript, and Tailwind CSS for optimal performance.",
              },
              {
                icon: Bot,
                title: "AI Integration",
                description:
                  "Exploring the intersection of AI and web development with practical implementations and real-world use cases.",
              },
              {
                icon: Globe,
                title: "Localization",
                description:
                  "Multi-language support with i18n integration, making projects accessible to a global developer community.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
