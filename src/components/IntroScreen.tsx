 import { motion } from 'framer-motion';
 
 interface IntroScreenProps {
   onEnter: () => void;
 }
 
 const IntroScreen = ({ onEnter }: IntroScreenProps) => {
   return (
     <motion.div
       initial={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.6 }}
       className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
       onClick={onEnter}
       style={{ background: 'radial-gradient(ellipse at center, hsl(220 50% 8%), hsl(222 47% 4%))' }}
     >
       <div className="text-center">
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text text-glow">
             DA
           </h1>
         </motion.div>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="text-muted-foreground font-mono text-sm tracking-wider"
         >
           CLICK ANYWHERE TO ENTER
         </motion.p>
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: [0.3, 0.8, 0.3] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="mt-8"
         >
           <div className="w-16 h-16 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center">
             <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
           </div>
         </motion.div>
       </div>
     </motion.div>
   );
 };
 
 export default IntroScreen;