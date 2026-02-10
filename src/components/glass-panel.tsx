"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

type GlassPanelProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassPanel({ className, children, ...props }: GlassPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;

    const { left, top, width, height } = panel.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / height) * -3;
    const rotateY = (x / width) * 3;

    panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  };

  const handleMouseLeave = () => {
    const panel = panelRef.current;
    if (panel) {
      panel.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    }
  };

  return (
    <div
      ref={panelRef}
      className={cn("glass-panel rounded-lg", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}
