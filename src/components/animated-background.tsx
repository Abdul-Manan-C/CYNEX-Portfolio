'use client';

import React, { useRef, useEffect } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 50;
    
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const particleColor = theme === 'dark' ? 'hsl(var(--accent) / 0.5)' : 'hsl(var(--foreground) / 0.3)';
    const lineColor = theme === 'dark' ? 'hsl(var(--accent) / 0.2)' : 'hsl(var(--border))';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const connectParticles = () => {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `${lineColor.slice(0, -1)} / ${opacityValue * (theme === 'dark' ? 0.2 : 1)})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawPointerLight = () => {
        if (!ctx) return;

        const gradientRadius = 600;
        const gradient = ctx.createRadialGradient(mousePos.current.x, mousePos.current.y, 0, mousePos.current.x, mousePos.current.y, gradientRadius);
        
        if (theme === 'dark') {
            gradient.addColorStop(0, 'hsla(199, 100%, 50%, 0.25)');
            gradient.addColorStop(0.2, 'hsla(159, 100%, 50%, 0.15)');
            gradient.addColorStop(0.4, 'hsla(0, 84%, 70%, 0.1)');
            gradient.addColorStop(0.6, 'hsla(270, 100%, 66%, 0.08)');
            gradient.addColorStop(1, 'hsla(231, 22%, 9%, 0)');
        } else {
            gradient.addColorStop(0, 'hsla(220, 20%, 10%, 0.1)');
            gradient.addColorStop(1, 'hsla(220, 13%, 96%, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawPointerLight();

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
    />
  );
}
