import { Combine, Infinity, Palette, ShieldCheck, Sparkles, TerminalSquare } from "lucide-react";
import React from "react";
import { GlassPanel } from "../glass-panel";

const journeyData = [
  {
    icon: <Sparkles />,
    title: "The Spark of Curiosity",
    description: "My journey began not with formal training, but with a deep-rooted obsession for understanding how systems truly work. It was a path of experimentation, failure, and rebuilding, driven purely by curiosity.",
  },
  {
    icon: <TerminalSquare />,
    title: "Hands-On Linux Immersion",
    description: "My early learning phase revolved around Linux. I experimented with Fedora, Kali, and Parrot OS, repeatedly installing, breaking, and optimizing them. This taught me boot processes, shell environments, and kernel interactions from the ground up.",
  },
  {
    icon: <Palette />,
    title: "Exploring Design & UI/UX",
    description: "Parallel to my OS deep-dives, I explored basic web development and UI/UX design. This shaped my sense of visual structure and now influences how I build security tools — with a focus on clarity, minimalism, and usability.",
  },
  {
    icon: <ShieldCheck />,
    title: "Shift to Cybersecurity Fundamentals",
    description: "My focus naturally shifted toward cybersecurity. Instead of just learning attacks, I dedicated myself to understanding system vulnerabilities, threat surfaces, and security design principles through labs and deep technical research.",
  },
  {
    icon: <Combine />,
    title: "Hybrid Mindset: Engineer, Researcher, Builder",
    description: "Currently, I operate with a hybrid mindset: Researching threats, Engineering defenses, and Building tools. I prioritize system thinking and logic building over memorization, allowing me to adapt across diverse technologies and attack surfaces.",
  },
  {
    icon: <Infinity />,
    title: "The Ongoing Mission",
    description: "This journey is far from over. Every system I explore, every line of code I write, and every lab I attempt adds another layer to my understanding of digital ecosystems and the art of cyber defense.",
  }
];

export function JourneySection() {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-8 top-0 h-full w-0.5 bg-primary/20" />
      <div className="space-y-12">
        {journeyData.map((item, index) => (
          <div key={index} className="relative flex items-start">
            <div className="absolute left-6 md:left-8 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary/30 z-10">
              {React.cloneElement(item.icon, { className: "w-6 h-6 text-primary" })}
            </div>
            <div className="pl-16 md:pl-20 w-full">
              <GlassPanel className="p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20">
                <h3 className="font-headline text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </GlassPanel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
