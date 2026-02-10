import { Button } from "@/components/ui/button";

export function HeroIntroSection() {
    return (
        <section className="text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-logo tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-bold text-foreground">
                    Ch Manan // CYNEX
                </h1>
                <p className="mt-6 text-muted-foreground md:text-xl font-headline">
                    Computer Science Undergraduate | Cybersecurity | Vibe Coder
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl font-headline">
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

            <div className="mt-24 max-w-3xl mx-auto space-y-4 text-left text-base md:text-lg">
                <p>
                    As a <span className="font-semibold text-foreground">Computer Science undergraduate at UAJK</span>, my passion lies at the intersection of creative coding and cybersecurity. I'm driven by a deep curiosity to understand how systems work, which naturally leads me to explore how they can break.
                </p>
                <p>
                    My approach is rooted in a <span className="font-semibold text-foreground">Linux-first mindset</span>. I believe in the power of the command line and the elegance of automation. This has inspired me to focus on building my own tools, turning complex manual processes into efficient scripts.
                </p>
                <p>
                    I call my style <span className="font-semibold text-foreground">"Vibe Coding"</span> — it's about blending technical logic with creative intuition to build solutions that are not only functional but also feel right. This philosophy guides my journey as I work towards becoming a Cybersecurity Researcher and Automation Tool Developer.
                </p>
            </div>
        </section>
    )
}
