"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileCode, Server, ShieldCheck, Wrench, Terminal, AppWindow, FileCode2, Bot, Shell, Code, Network, KeyRound, TerminalSquare, Search, Container, GanttChartSquare, Laptop, Link } from "lucide-react";
import React from "react";
import { GlassPanel } from "../glass-panel";

const skillsData = {
  intro: "My skillset is built on real-world learning, system experimentation, and conceptual mastery — not surface-level tool usage. Each skill reflects practical exposure + continuous learning.",
  categories: [
    {
      title: "Operating Systems",
      icon: <Server className="w-6 h-6 text-primary" />,
      items: [
        {
          name: "Linux — Intermediate",
          icon: <Terminal className="w-5 h-5 text-foreground/80" />,
          link: "https://www.linux.org/",
          description: "Strong hands-on experience across multiple distributions. Confident in:",
          points: [
            "Filesystem structure",
            "Package managers",
            "Process control",
            "Permissions",
            "Shell environments",
            "System troubleshooting",
            "Bash environments",
          ],
        },
        {
          name: "Windows — Intermediate",
          icon: <AppWindow className="w-5 h-5 text-foreground/80" />,
          link: "https://www.microsoft.com/windows",
          description: "Understanding of:",
          points: [
            "OS architecture",
            "System configuration",
            "User access control",
            "Process & service management",
            "System repair workflows",
          ],
        },
      ],
    },
    {
      title: "Programming & Scripting",
      icon: <FileCode className="w-6 h-6 text-primary" />,
      items: [
        {
          name: "C++ — PF & Logic Development",
          icon: <FileCode2 className="w-5 h-5 text-foreground/80" />,
          link: "https://isocpp.org/",
          description: "Strong foundation in:",
          points: [
            "Control structures",
            "File handling",
            "Memory logic",
            "Loops & conditions",
            "Modular program design",
            "Applied practically in system-based projects.",
          ],
        },
        {
          name: "Python — Beginner (Automation Path)",
          icon: <Bot className="w-5 h-5 text-foreground/80" />,
          link: "https://www.python.org/",
          description: "Learning focus:",
          points: [
            "Syntax mastery",
            "Script automation",
            "Security tooling foundations",
            "Data handling logic",
          ],
        },
        {
          name: "Bash — Beginner",
          icon: <Shell className="w-5 h-5 text-foreground/80" />,
          link: "https://www.gnu.org/software/bash/",
          description: "Experience in:",
          points: [
            "System scripting",
            "Task automation",
            "Process chaining",
            "Linux workflow optimization",
          ],
        },
         {
          name: "HTML — Strong Understanding",
          icon: <Code className="w-5 h-5 text-foreground/80" />,
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          description: "Able to:",
          points: [
            "Structure complex layouts",
            "Build semantic UI",
            "Design responsive systems",
          ],
        },
        {
          name: "CSS — Conceptual Understanding",
          icon: <Code className="w-5 h-5 text-foreground/80" />,
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          description: "Strong comprehension of:",
          points: [
            "Layout systems",
            "Visual hierarchy",
            "Modern UI patterns",
            "Animation concepts",
          ],
        },
        {
          name: "JavaScript — Beginner",
          icon: <Code className="w-5 h-5 text-foreground/80" />,
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          description: "Learning:",
          points: [
            "DOM manipulation",
            "Event-driven logic",
            "Interactive UI engineering",
          ],
        },
      ],
    },
    {
      title: "Cybersecurity Domains (Conceptual Depth)",
      icon: <ShieldCheck className="w-6 h-6 text-neon-red" />,
      items: [
        { name: "Networking Fundamentals", icon: <Network className="w-5 h-5 text-foreground/80" />, description: "Clear understanding of:", points: ["Data flow", "Protocol logic", "Network layers", "Packet movement", "Communication models"] },
        { name: "Operating System Concepts", icon: <Server className="w-5 h-5 text-foreground/80" />, description: "Understanding of:", points: ["Process scheduling", "Memory management", "User privilege models", "Kernel interactions"] },
        { name: "Ethical Hacking Concepts", icon: <KeyRound className="w-5 h-5 text-foreground/80" />, description: "Knowledge of:", points: ["Reconnaissance", "Enumeration", "Exploitation logic", "Privilege escalation pathways", "Post-exploitation thinking"] },
        { name: "Linux Internals", icon: <TerminalSquare className="w-5 h-5 text-foreground/80" />, description: "Understanding:", points: ["File permissions", "Process hierarchy", "Kernel role", "System startup chain"] },
        { name: "Digital Forensics Basics", icon: <Search className="w-5 h-5 text-foreground/80" />, description: "Exposure to:", points: ["Disk imaging", "Evidence handling", "File artifact analysis", "Incident reconstruction logic"] },
      ],
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="w-6 h-6 text-neon-purple" />,
      items: [
        { 
            name: "Distributions", 
            icon: <Container className="w-5 h-5 text-foreground/80" />,
            points: [
                { name: "Kali Linux", link: "https://www.kali.org/" },
                { name: "Fedora Linux", link: "https://fedoraproject.org/" },
                { name: "Parrot OS", link: "https://www.parrotsec.org/" }
            ]
        },
        { 
            name: "Core Tools", 
            icon: <GanttChartSquare className="w-5 h-5 text-foreground/80" />,
            points: [
                { name: "Nmap", link: "https://nmap.org/" },
                { name: "Termux", link: "https://termux.dev/en/" },
                { name: "Git", link: "https://git-scm.com/" }
            ] 
        },
        { name: "Environments", icon: <Laptop className="w-5 h-5 text-foreground/80" />, points: ["Virtual Machines", "Linux Shell"] },
      ],
    },
  ],
};


export function SkillsSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();

  return (
    <div className="space-y-12">
       <div className="text-center max-w-3xl mx-auto">
        <p className="text-muted-foreground">
          {skillsData.intro}
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {skillsData.categories.map((category) => (
          <GlassPanel key={category.title} className="p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-headline text-xl text-primary">{category.title}</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {category.items.map((item) => (
                 <AccordionItem value={item.name} key={item.name}>
                    <div className="flex items-center pr-4">
                        <AccordionTrigger className="hover:no-underline text-left flex-grow">
                            <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-code text-base font-medium text-foreground">{item.name}</span>
                            </div>
                        </AccordionTrigger>
                        {item.link && (
                            <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleClick}
                            className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-white/5"
                            aria-label={`Learn more about ${item.name.split('—')[0].trim()}`}
                            >
                            <Link className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                   <AccordionContent>
                      {item.description && <p className="text-sm text-muted-foreground mb-2">{item.description}</p>}
                      <ul className="list-disc list-inside pl-2 space-y-1.5 text-sm text-muted-foreground">
                       {item.points.map((point) => {
                         const pointIsObject = typeof point !== 'string';
                         const pointName = pointIsObject ? (point as {name: string}).name : point;
                         const pointLink = pointIsObject ? (point as {link: string}).link : null;

                         return (
                            <li key={pointName}>
                                {pointLink ? (
                                <a href={pointLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary hover:underline">
                                    <span>{pointName}</span>
                                    <Link className="w-3 h-3" />
                                </a>
                                ) : (
                                <span>{pointName}</span>
                                )}
                            </li>
                         );
                       })}
                     </ul>
                   </AccordionContent>
                 </AccordionItem>
              ))}
            </Accordion>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
