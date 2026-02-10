import React from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "#intro", label: "Intro" },
    { href: "#journey", label: "Journey" },
    { href: "#skills", label: "Skills" },
    { href: "#learning", label: "Learning" },
    { href: "#projects", label: "Projects" },
    { href: "#cyber-lab", label: "Cyber Lab" },
    { href: "#game", label: "Game" },
    { href: "#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3">
            <div className="glass-panel flex items-center justify-between p-3 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10">
                <a href="#" className="flex items-center gap-2">
                    <h1 className="font-logo text-lg md:text-xl font-bold tracking-wider text-primary">
                        Ch Manan // CYNEX
                    </h1>
                </a>
                <nav className="hidden md:flex items-center gap-4 text-sm">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="font-menu font-bold text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                    ))}
                </nav>
                 <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    </header>
  );
}
