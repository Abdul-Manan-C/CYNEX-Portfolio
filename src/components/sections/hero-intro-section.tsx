import { Button } from "@/components/ui/button";
import { GlassPanel } from "../glass-panel";

const stats = [
  { label: "THM Rooms", value: "70+", sub: "Completed" },
  { label: "Live Sites", value: "7", sub: "Deployed" },
  { label: "Worldwide", value: "Top 8%", sub: "TryHackMe" },
  { label: "Streak", value: "40 Days", sub: "🔥 Active" },
];

const badges = [
  "Cybersecurity", "Web Dev", "CTF Player", "Vibe Coder", "Linux", "AUTOCORE"
];

export function HeroIntroSection() {
    return (
        <section className="text-center">
            <div className="max-w-4xl mx-auto">
                <p className="font-code text-xs text-muted-foreground mb-4 tracking-widest">
                  CS Student · UAJK Muzaffarabad
                </p>
                <h1 className="text-4xl font-logo tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-bold text-foreground">
                    Ch Manan // CYNEX
                </h1>

                {/* Animated role badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {badges.map((badge) => (
                    <span key={badge} className="font-code text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary">
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl font-headline">
                   Break → Understand → Build → Automate
                </p>

                <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row justify-center">
                    <Button asChild size="lg">
                        <a href="#projects">View Projects</a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="#contact">Get in Touch</a>
                    </Button>
                </div>
            </div>

            {/* Stats row */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <GlassPanel key={stat.label} className="p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                  <p className="font-headline text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="font-code text-xs text-muted-foreground mt-1">{stat.label}</p>
                  <p className="font-code text-xs text-foreground/50">{stat.sub}</p>
                </GlassPanel>
              ))}
            </div>

            {/* Quick links */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-code text-muted-foreground">
              <span>Platform: <span className="text-foreground">TryHackMe</span></span>
              <span>Freelance: <span className="text-foreground">Fiverr Active</span></span>
              <span>Setup: <span className="text-foreground">Fedora + Kali</span></span>
              <span>Project: <span className="text-foreground">AUTOCORE</span></span>
            </div>

            <div className="mt-16 max-w-3xl mx-auto space-y-4 text-left text-base md:text-lg">
                <p>
                    As a <span className="font-semibold text-foreground">Computer Science undergraduate at UAJK</span>, my passion lies at the intersection of creative coding and cybersecurity. I'm driven by a deep curiosity to understand how systems work, which naturally leads me to explore how they can break.
                </p>
                <p>
                    My approach is rooted in a <span className="font-semibold text-foreground">Linux-first mindset</span>. I believe in the power of the command line and the elegance of automation. This has inspired me to focus on building my own tools, turning complex manual processes into efficient scripts.
                </p>
                <p>
                    I call my style <span className="font-semibold text-foreground">"Vibe Coding"</span> — blending technical logic with creative intuition to build solutions that are not only functional but also feel right. Working towards becoming a Cybersecurity Researcher and Automation Tool Developer.
                </p>
            </div>
        </section>
    )
}
