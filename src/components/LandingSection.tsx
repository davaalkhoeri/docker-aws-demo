 import { motion } from 'framer-motion';
 import RotatingText from './RotatingText';
 import { ChevronDown } from 'lucide-react';
 
 const LandingSection = () => {
   const roles = [
     'Cloud Engineer',
     'TJKT Student',
     'Fantasy Enthusiast',
     'DevOps Engineer',
   ];
 
   return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       <div className="container mx-auto px-6 z-10">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-center lg:text-left"
           >
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="text-muted-foreground mb-4 font-mono text-sm tracking-wider"
             >
               WELCOME TO MY PORTFOLIO
             </motion.p>
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="text-5xl md:text-7xl font-bold mb-6"
             >
               <span className="text-foreground">Dava</span>{' '}
               <span className="gradient-text text-glow">Alkhoeri</span>
             </motion.h1>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
             >
               <RotatingText texts={roles} />
             </motion.div>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7 }}
               className="text-muted-foreground mt-6 max-w-md mx-auto lg:mx-0"
             >
               Building cloud infrastructure and exploring the digital realm. 
               Passionate about automation, networking, and creating elegant solutions.
             </motion.p>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 }}
               className="mt-8 flex gap-4 justify-center lg:justify-start"
             >
               <a
                 href="#projects"
                 className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium glow-button"
               >
                 View Projects
               </a>
               <a
                 href="#contact"
                 className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors duration-300"
               >
                 Contact Me
               </a>
             </motion.div>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="hidden lg:flex justify-center"
           >
             <div className="relative">
               {/* Coding animation visual */}
               <div className="glass-card p-6 w-96">
                 <div className="flex gap-2 mb-4">
                   <div className="w-3 h-3 rounded-full bg-destructive/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                 </div>
                 <div className="font-mono text-sm space-y-2">
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1, duration: 0.3 }}
                   >
                     <span className="text-purple-400">const</span>{' '}
                     <span className="text-foreground">developer</span>{' '}
                     <span className="text-primary">=</span> {'{'}
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1.2, duration: 0.3 }}
                     className="pl-4"
                   >
                     <span className="text-muted-foreground">name:</span>{' '}
                     <span className="text-green-400">"Dava Alkhoeri"</span>,
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1.4, duration: 0.3 }}
                     className="pl-4"
                   >
                     <span className="text-muted-foreground">role:</span>{' '}
                     <span className="text-green-400">"Cloud Engineer"</span>,
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1.6, duration: 0.3 }}
                     className="pl-4"
                   >
                     <span className="text-muted-foreground">passion:</span>{' '}
                     <span className="text-green-400">"Building Dreams"</span>,
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1.8, duration: 0.3 }}
                   >
                     {'}'};
                   </motion.div>
                 </div>
               </div>
               {/* Floating orbs */}
               <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" />
               <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl animate-pulse-glow" />
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <a href="#tech-stack" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
           <span className="text-sm font-mono">Scroll Down</span>
           <ChevronDown className="w-5 h-5 animate-bounce-slow" />
         </a>
       </motion.div>
     </section>
   );
 };
 
 export default LandingSection;