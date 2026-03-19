"use client";

import { CodeShowcase } from "@/components/code-showcase";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Terminal, Github, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GlassPanel } from "../glass-panel";
import { useState } from "react";

const websiteProjects = [
  {
    category: "Apple Retail · E-commerce",
    emoji: "🍎",
    title: "Mac Vision",
    description: "Islamabad's premier Apple reseller site. Product filters, gallery lightbox, glassmorphism nav, scroll-reveal animations.",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdul-manan-c.github.io/mac-vision/",
    githubUrl: "https://github.com/Abdul-Manan-C/mac-vision",
    color: "neon-blue",
  },
  {
    category: "AI SaaS · Platform",
    emoji: "🤖",
    title: "NovaMind AI",
    description: "Next-gen AI command center landing page. Dark techy aesthetic, live dashboard UI, animated stats, pricing section.",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdul-manan-c.github.io/novamind-ai/",
    githubUrl: "https://github.com/Abdul-Manan-C/novamind-ai",
    color: "neon-purple",
  },
  {
    category: "Cybersecurity Agency",
    emoji: "🔐",
    title: "NullShield Security",
    description: "Elite cybersecurity agency site. Terminal animations, threat intel feed, multi-page with member portal UI.",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdul-manan-c.github.io/nullshield/",
    githubUrl: "https://github.com/Abdul-Manan-C/nullshield",
    color: "neon-green",
  },
  {
    category: "Restaurant · Food",
    emoji: "🔥",
    title: "FlameHouse",
    description: "Bold restaurant template with menu filter, ticker, testimonials, reservation CTA. Orange accent, dark theme.",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdul-manan-c.github.io/flamehouse/",
    githubUrl: "https://github.com/Abdul-Manan-C/flamehouse",
    color: "neon-red",
  },
  {
    category: "Fitness · Gym",
    emoji: "💪",
    title: "IronCore Gym",
    description: "6-page gym template with login + member dashboard UI. Black + electric green color psychology. Programs, trainers, pricing.",
    tags: ["HTML", "CSS", "JS", "6 Pages"],
    liveUrl: "https://abdul-manan-c.github.io/ironcore/",
    githubUrl: "https://github.com/Abdul-Manan-C/ironcore",
    color: "neon-green",
  },
];

const colorMap: Record<string, string> = {
  "neon-blue": "border-blue-500/20 hover:border-blue-500/50",
  "neon-purple": "border-purple-500/20 hover:border-purple-500/50",
  "neon-green": "border-green-500/20 hover:border-green-500/50",
  "neon-red": "border-red-500/20 hover:border-red-500/50",
};

const tagColorMap: Record<string, string> = {
  "neon-blue": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "neon-purple": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "neon-green": "bg-green-500/10 text-green-400 border-green-500/30",
  "neon-red": "bg-red-500/10 text-red-400 border-red-500/30",
};

const tickerItems = [
  "🍎 Mac Vision — Apple Reseller",
  "🤖 NovaMind AI — SaaS Platform",
  "🔐 NullShield — Cybersecurity Agency",
  "🔥 FlameHouse — Restaurant",
  "💪 IronCore — Gym & Fitness",
  "⚡ Fast Delivery",
  "🎨 Clean Code",
  "📱 Mobile Responsive",
];

export function ProjectShowcaseSection() {
  const { toast } = useToast();
  const repoUrl = "https://github.com/Abdul-Manan-C/Bus-Reservation-System";
  const cloneCommand = `git clone ${repoUrl}.git`;
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({});

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cloneCommand);
      toast({
        title: "Copied to clipboard!",
        description: "You can now paste the command into your terminal.",
      });
    }
  };

  return (
    <div className="space-y-20">

      {/* ── Ticker ── */}
      <div className="overflow-hidden border-y border-primary/20 py-2.5 bg-primary/5 rounded-lg">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-code text-xs text-primary/80 px-8 whitespace-nowrap">
              {item}
              <span className="ml-8 text-primary/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Website Templates — iframe cards ── */}
      <div>
        <p className="text-center text-muted-foreground font-code text-sm mb-10">
          // Website Templates — Live on GitHub Pages
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteProjects.map((project) => (
            <div
              key={project.title}
              className={`project-iframe-card group rounded-xl border bg-card/40 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg ${colorMap[project.color]}`}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/80 border-b border-border/50 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="font-code text-[10px] text-muted-foreground ml-2 truncate flex-1 select-none">
                  {project.liveUrl}
                </span>
              </div>

              {/* iframe preview */}
              <div className="relative overflow-hidden bg-white flex-shrink-0" style={{ height: "200px" }}>
                {!loadedIframes[project.title] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary/50 z-10">
                    <div className="w-5 h-5 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                    <span className="font-code text-xs text-muted-foreground">Loading preview...</span>
                  </div>
                )}
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  style={{
                    border: "none",
                    transform: "scale(0.55)",
                    transformOrigin: "top left",
                    width: "182%",
                    height: "182%",
                    pointerEvents: "none",
                    display: "block",
                  }}
                  loading="lazy"
                  onLoad={() => setLoadedIframes(prev => ({ ...prev, [project.title]: true }))}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Card info */}
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <div>
                  <p className="text-xs text-muted-foreground font-code mb-1">{project.category}</p>
                  <h3 className="font-headline text-lg font-bold text-foreground">
                    {project.emoji} {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded border font-code ${tagColorMap[project.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" /> Live Site
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="flex-1 text-xs">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── C++ Project ── */}
      <div>
        <p className="text-center text-muted-foreground font-code text-sm mb-8">
          // C++ Project — Command Line Application
        </p>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="font-headline text-2xl mb-3 flex items-center justify-center gap-3">
            💻 C++ Bus Reservation System
          </h3>
          <p className="text-muted-foreground text-sm">
            Console-based C++ app for managing bus routes and passenger reservations. File I/O, structured design, procedural logic.
          </p>
        </div>

        <CodeShowcase />

        <GlassPanel className="p-6 mt-8 shadow-2xl shadow-neon-purple/20 hover:shadow-neon-purple/30">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <CardTitle className="font-headline">Source Code & Cloning</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" /> View on GitHub
                </a>
              </Button>
            </div>
            <label className="text-sm font-medium text-muted-foreground font-code">Clone with HTTPS</label>
            <div className="mt-2 flex items-center gap-2 rounded-md bg-secondary p-2 border">
              <code className="font-code text-sm text-foreground flex-grow overflow-x-auto">{cloneCommand}</code>
              <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy clone command">
                <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </Button>
            </div>
          </CardContent>
        </GlassPanel>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <GlassPanel className="p-6 shadow-lg shadow-neon-blue/10 hover:shadow-xl hover:shadow-neon-blue/20">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6" />
                <CardTitle className="font-headline">Architecture</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
                <li><span className="text-foreground">Procedural Approach:</span> Logic organized into task-specific functions.</li>
                <li><span className="text-foreground">File-based Storage:</span> Uses bus_data.txt and seat.txt for persistence.</li>
                <li><span className="text-foreground">Standard Libraries:</span> iostream, fstream, and string only.</li>
                <li><span className="text-foreground">User Interface:</span> main loop with switch statement CLI.</li>
              </ul>
            </CardContent>
          </GlassPanel>

          <GlassPanel className="p-6 shadow-lg shadow-neon-green/10 hover:shadow-xl hover:shadow-neon-green/20">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-6 h-6" />
                <CardTitle className="font-headline">Local Execution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                <li><span className="text-foreground">Compiler:</span> Install G++ if not already available.</li>
                <li><span className="text-foreground">Compile:</span> g++ main.cpp -o reservation_system</li>
                <li><span className="text-foreground">Execute:</span> ./reservation_system</li>
                <li><span className="text-foreground">Interact:</span> Follow the on-screen menu.</li>
              </ol>
            </CardContent>
          </GlassPanel>
        </div>
      </div>

      {/* ── Hire CTA ── */}
      <GlassPanel className="p-8 text-center shadow-lg shadow-neon-blue/10 border border-primary/20">
        <p className="font-code text-sm text-muted-foreground mb-2">// Available for Hire</p>
        <h3 className="font-headline text-2xl font-bold mb-3">Need a Website? Let's Build.</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Professional website templates and custom builds. Fast turnaround, clean code, zero fluff.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a href="https://fiverr.com/abdulmanan2233" target="_blank" rel="noopener noreferrer">
              Order on Fiverr →
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Direct Contact</a>
          </Button>
        </div>
      </GlassPanel>

    </div>
  );
}
