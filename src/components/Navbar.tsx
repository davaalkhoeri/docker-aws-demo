 import { motion } from 'framer-motion';
 
 interface NavbarProps {
   visible: boolean;
 }
 
 const Navbar = ({ visible }: NavbarProps) => {
   const navItems = [
     { label: 'Home', href: '#home' },
     { label: 'Tech Stack', href: '#tech-stack' },
     { label: 'Projects', href: '#projects' },
     { label: 'Contact', href: '#contact' },
   ];
 
   return (
     <motion.nav
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
       transition={{ duration: 0.4, ease: 'easeOut' }}
       className="fixed top-0 left-0 right-0 z-50 glass-nav"
     >
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           <a href="#home" className="text-xl font-bold gradient-text">
             DA
           </a>
           <ul className="hidden md:flex items-center gap-8">
             {navItems.map((item) => (
               <li key={item.label}>
                 <a
                   href={item.href}
                   className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                 >
                   {item.label}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                 </a>
               </li>
             ))}
           </ul>
           <button className="md:hidden text-foreground">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </button>
         </div>
       </div>
     </motion.nav>
   );
 };
 
 export default Navbar;