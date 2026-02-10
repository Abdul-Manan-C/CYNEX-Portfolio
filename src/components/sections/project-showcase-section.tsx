"use client";

import { CodeShowcase } from "@/components/code-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Terminal, Github, Copy, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GlassPanel } from "../glass-panel";

export function ProjectShowcaseSection() {
  const { toast } = useToast();
  const repoUrl = "https://github.com/Abdul-Manan-C/Bus-Reservation-System";
  const cloneCommand = `git clone ${repoUrl}.git`;

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
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="font-headline text-2xl mb-4 flex items-center justify-center gap-3">
          <FileCode2 className="w-7 h-7" />
          C++ Bus Reservation System
        </h3>
        <p className="text-muted-foreground">
          A command-line based application written in C++ for managing bus routes and passenger reservations. This project demonstrates procedural programming, file I/O for data persistence, and structured application design in a console environment.
        </p>
      </div>
      
      <CodeShowcase />

      <GlassPanel className="p-6 shadow-2xl shadow-neon-purple/20 hover:shadow-neon-purple/30">
        <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-3">
                <Github className="w-6 h-6" />
                <CardTitle className="font-headline">Source Code & Cloning</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <p className="text-sm text-muted-foreground mb-4">
                The complete source code is available on GitHub. You can view it online or clone the repository to run it locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" /> View on GitHub
                    </a>
                </Button>
            </div>
            <div className="mt-6">
                <label className="text-sm font-medium text-muted-foreground font-code">Clone with HTTPS</label>
                <div className="mt-2 flex items-center gap-2 rounded-md bg-secondary p-2 border">
                    <code className="font-code text-sm text-foreground flex-grow overflow-x-auto">{cloneCommand}</code>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy clone command">
                        <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </Button>
                </div>
            </div>
        </CardContent>
      </GlassPanel>

      <div className="grid md:grid-cols-2 gap-8">
        <GlassPanel className="p-6 shadow-lg shadow-neon-blue/10 hover:shadow-xl hover:shadow-neon-blue/20">
            <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6" />
                    <CardTitle className="font-headline">Architecture</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
                    <li><span className="text-foreground">Procedural Approach:</span> Logic is organized into functions for specific tasks.</li>
                    <li><span className="text-foreground">File-based Storage:</span> Uses `bus_data.txt` and `seat.txt` for persistent storage.</li>
                    <li><span className="text-foreground">Standard Libraries:</span> Relies on `iostream`, `fstream`, and `string` for core functionality.</li>
                    <li><span className="text-foreground">User Interface:</span> A simple `main` loop with a `switch` statement drives the command-line interface.</li>
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
                    <li><span className="text-foreground">Compiler:</span> Ensure you have a C++ compiler like G++ installed.</li>
                    <li><span className="text-foreground">Compile File:</span> Run `g++ main.cpp -o reservation_system`.</li>
                    <li><span className="text-foreground">Execute:</span> Run the compiled binary with `./reservation_system`.</li>
                    <li><span className="text-foreground">Interact:</span> Follow the on-screen menu to manage the system.</li>
                </ol>
            </CardContent>
        </GlassPanel>
      </div>
    </div>
  );
}
