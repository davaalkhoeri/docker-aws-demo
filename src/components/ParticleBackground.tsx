 import { useEffect, useRef } from 'react';
 
 interface Particle {
   x: number;
   y: number;
   size: number;
   speedX: number;
   speedY: number;
   opacity: number;
 }
 
 const ParticleBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     resizeCanvas();
     window.addEventListener('resize', resizeCanvas);
 
     const particles: Particle[] = [];
     const particleCount = 50;
 
     for (let i = 0; i < particleCount; i++) {
       particles.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         size: Math.random() * 2 + 0.5,
         speedX: (Math.random() - 0.5) * 0.3,
         speedY: (Math.random() - 0.5) * 0.3,
         opacity: Math.random() * 0.5 + 0.2,
       });
     }
 
     const animate = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       particles.forEach((particle) => {
         particle.x += particle.speedX;
         particle.y += particle.speedY;
 
         if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
         if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
 
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
         ctx.fillStyle = `hsla(187, 85%, 53%, ${particle.opacity})`;
         ctx.fill();
 
         // Glow effect
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
         const gradient = ctx.createRadialGradient(
           particle.x, particle.y, 0,
           particle.x, particle.y, particle.size * 3
         );
         gradient.addColorStop(0, `hsla(187, 85%, 53%, ${particle.opacity * 0.3})`);
         gradient.addColorStop(1, 'transparent');
         ctx.fillStyle = gradient;
         ctx.fill();
       });
 
       requestAnimationFrame(animate);
     };
 
     animate();
 
     return () => {
       window.removeEventListener('resize', resizeCanvas);
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className="fixed inset-0 pointer-events-none z-0"
       style={{ background: 'radial-gradient(ellipse at top, hsl(220 50% 12%), hsl(222 47% 6%))' }}
     />
   );
 };
 
 export default ParticleBackground;