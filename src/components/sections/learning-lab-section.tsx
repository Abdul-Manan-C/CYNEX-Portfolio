import { CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, ShieldCheck, TerminalSquare, Network, FileCode, Bot, FlaskConical, Rocket, ArrowRight } from "lucide-react";
import React from "react";
import { GlassPanel } from "../glass-panel";

const philosophyPoints = [
    "Break systems intentionally",
    "Analyze failure patterns",
    "Reconstruct logic flows",
    "Automate repetitive tasks",
];

const learningDomains = [
    {
        title: "Cybersecurity Fundamentals",
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        points: ["Threat modeling", "Attack surfaces", "Security design principles", "Defense mechanisms"],
    },
    {
        title: "Linux Mastery",
        icon: <TerminalSquare className="w-6 h-6 text-primary" />,
        points: ["Kernel interaction", "Process handling", "System automation", "Advanced shell scripting"],
    },
    {
        title: "Networking Logic",
        icon: <Network className="w-6 h-6 text-primary" />,
        points: ["Protocol behaviors", "Packet flow", "Routing fundamentals", "System communication models"],
    },
    {
        title: "Programming Logic",
        icon: <FileCode className="w-6 h-6 text-primary" />,
        points: ["Algorithmic thinking", "Memory models", "Modular design", "Performance awareness"],
    },
    {
        title: "Python Automation",
        icon: <Bot className="w-6 h-6 text-primary" />,
        points: ["Security scripts", "Recon tools", "Automation workflows", "Process orchestration tools"],
    },
];

const practiceMethods = [
    "Linux installations & troubleshooting",
    "OS reinstalls & performance tuning",
    "Virtual machine labs",
    "Terminal scripting experiments",
    "Automation workflows",
    "Cybersecurity practice labs",
    "TryHackMe platform challenges",
]

const objectives = [
    "Understanding systems at low-level depth",
    "Designing efficient security tooling",
    "Building automated cyber solutions",
    "Researching emerging attack techniques",
    "Engineering modern defensive architectures",
]

export function LearningLabSection() {
  return (
    <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground">
                My learning methodology is system-driven, logic-first, and automation-oriented — focused on building deep mental models rather than superficial skill acquisition.
            </p>
        </div>

        <GlassPanel className="p-6 md:p-8 shadow-lg shadow-neon-green/10 hover:shadow-xl hover:shadow-neon-green/20">
            <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-neon-green" />
                    <h3 className="font-headline text-xl text-neon-green">Core Learning Philosophy</h3>
                </div>
            </CardHeader>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 font-code text-lg text-center">
                <span>Break</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground"/>
                <span>Understand</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground"/>
                <span>Build</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground"/>
                <span>Automate</span>
            </div>
            <p className="text-muted-foreground mb-4">Instead of passively consuming tutorials, I:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                {philosophyPoints.map(point => <li key={point}><span className="text-foreground">{point}</span></li>)}
            </ul>
            <p className="text-muted-foreground mt-4">This approach allows me to internalize system behavior, not just memorize techniques.</p>
        </GlassPanel>

        <div className="grid md:grid-cols-1 gap-8">
             <GlassPanel className="p-6 md:p-8 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20">
                <h3 className="font-headline text-xl text-primary mb-6 text-center">Active Learning Domains</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningDomains.map(domain => (
                        <div key={domain.title} className="bg-black/20 p-4 rounded-lg border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                {domain.icon}
                                <h4 className="font-code text-base font-medium text-foreground">{domain.title}</h4>
                            </div>
                            <ul className="list-disc list-inside pl-2 space-y-1.5 text-sm text-muted-foreground">
                                {domain.points.map(point => <li key={point}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </GlassPanel>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
             <GlassPanel className="p-6 shadow-lg shadow-neon-purple/10 hover:shadow-xl hover:shadow-neon-purple/20">
                <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                        <FlaskConical className="w-6 h-6 text-neon-purple" />
                        <h4 className="font-headline text-xl">Hands-On Practice</h4>
                    </div>
                </CardHeader>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {practiceMethods.map(method => <li key={method}>{method}</li>)}
                </ul>
            </GlassPanel>
             <GlassPanel className="p-6 shadow-lg shadow-neon-red/10 hover:shadow-xl hover:shadow-neon-red/20">
                <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                        <Rocket className="w-6 h-6 text-neon-red" />
                        <h4 className="font-headline text-xl">Learning Objective</h4>
                    </div>
                </CardHeader>
                <p className="text-sm text-muted-foreground mb-4">To become a hybrid security engineer + automation tool builder capable of:</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {objectives.map(objective => <li key={objective}>{objective}</li>)}
                </ul>
            </GlassPanel>
        </div>
    </div>
  );
}
