 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 
 interface RotatingTextProps {
   texts: string[];
   interval?: number;
 }
 
 const RotatingText = ({ texts, interval = 3000 }: RotatingTextProps) => {
   const [currentIndex, setCurrentIndex] = useState(0);
 
   useEffect(() => {
     const timer = setInterval(() => {
       setCurrentIndex((prev) => (prev + 1) % texts.length);
     }, interval);
 
     return () => clearInterval(timer);
   }, [texts.length, interval]);
 
   return (
     <div className="h-8 md:h-10 overflow-hidden">
       <AnimatePresence mode="wait">
         <motion.span
           key={currentIndex}
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: -20, opacity: 0 }}
           transition={{ duration: 0.4, ease: 'easeOut' }}
           className="block text-xl md:text-2xl text-primary font-mono"
         >
           {texts[currentIndex]}
         </motion.span>
       </AnimatePresence>
     </div>
   );
 };
 
 export default RotatingText;