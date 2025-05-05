"use client"; // This component heavily relies on browser APIs

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  decay: number; // Rate at which opacity decreases
}

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 }); // Start mouse off-screen
  const animationFrameId = useRef<number>();

  // Particle configuration
  const particleCount = 50; // Max number of particles
  const particleColor = 'rgba(79, 70, 229, 0.7)'; // Indigo-like color with opacity
  const particleSize = 2;
  const particleSpeed = 0.5;
  const particleDecayRate = 0.015; // How fast particles fade
  const connectionDistance = 100; // Max distance to draw lines between particles

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    }
  }, []);

  const addParticle = useCallback(() => {
    if (particles.current.length < particleCount && mouse.current.x > 0 && mouse.current.y > 0) {
      const angle = Math.random() * Math.PI * 2;
      particles.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        size: Math.random() * particleSize + 1,
        speedX: (Math.random() - 0.5) * particleSpeed * 2,
        speedY: (Math.random() - 0.5) * particleSpeed * 2,
        color: particleColor,
        opacity: 1,
        decay: Math.random() * particleDecayRate + 0.005, // Vary decay slightly
      });
    }
  }, []); // Removed dependencies as mouse/particles are refs

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Add new particle occasionally based on mouse movement (or just on frame)
    if (Math.random() > 0.85) { // Adjust probability as needed
       addParticle();
    }

    // Update and draw particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const p = particles.current[i];

      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Update opacity
      p.opacity -= p.decay;

      // Remove particle if faded or out of bounds (optional check)
      if (p.opacity <= 0) {
        particles.current.splice(i, 1);
        continue; // Skip drawing this particle
      }

      // Draw particle
      ctx.fillStyle = p.color.replace(/[^,]+(?=\))/, p.opacity.toString()); // Update alpha in rgba
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Optional: Draw lines between nearby particles
      for (let j = i - 1; j >= 0; j--) {
        const p2 = particles.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const lineOpacity = 1 - distance / connectionDistance; // Fade line with distance
           const combinedOpacity = Math.min(p.opacity, p2.opacity, lineOpacity); // Use lowest opacity
           if (combinedOpacity > 0.1) { // Only draw if reasonably visible
               ctx.strokeStyle = p.color.replace(/[^,]+(?=\))/, (combinedOpacity * 0.5).toString()); // Fainter lines
               ctx.lineWidth = 0.5;
               ctx.beginPath();
               ctx.moveTo(p.x, p.y);
               ctx.lineTo(p2.x, p2.y);
               ctx.stroke();
           }
        }
      }
    }


    animationFrameId.current = requestAnimationFrame(animateParticles);
  }, [addParticle]); // Include addParticle in dependency array


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match parent container (initially and on resize)
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
       // Clear particles on resize to avoid weird jumps? Or reposition? Clearing is simpler.
       particles.current = [];
    };

    resizeCanvas(); // Initial size

    window.addEventListener('resize', resizeCanvas);
    // Add mouse move listener to the window or a specific parent element
    // Using window is simpler here but less performant if canvas isn't always visible
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animateParticles);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleMouseMove, animateParticles]); // Add dependencies

  return (
      <canvas
          ref={canvasRef}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 5, pointerEvents: 'none' }}
          // zIndex 5 places it above background shapes (z-index 1) but below content (z-index 10)
          // pointerEvents: 'none' ensures it doesn't interfere with clicking buttons etc.
      />
  );
};

export default ParticleCanvas;