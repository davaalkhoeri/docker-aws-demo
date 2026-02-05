 import { motion } from 'framer-motion';
 import { useState } from 'react';
 import { Cloud, Network, Code, Wrench } from 'lucide-react';
 
 type Category = 'all' | 'Cloud & DevOps' | 'Networking' | 'Programming' | 'Tools';
 
 interface TechItem {
   name: string;
   category: Category;
   icon: string;
 }
 
 const techStack: TechItem[] = [
   { name: 'AWS', category: 'Cloud & DevOps', icon: '☁️' },
   { name: 'Docker', category: 'Cloud & DevOps', icon: '🐳' },
   { name: 'Kubernetes', category: 'Cloud & DevOps', icon: '⚓' },
   { name: 'Terraform', category: 'Cloud & DevOps', icon: '🏗️' },
   { name: 'GitHub Actions', category: 'Cloud & DevOps', icon: '🔄' },
   { name: 'Linux', category: 'Cloud & DevOps', icon: '🐧' },
   { name: 'TCP/IP', category: 'Networking', icon: '🌐' },
   { name: 'DNS', category: 'Networking', icon: '📡' },
   { name: 'Firewall', category: 'Networking', icon: '🔥' },
   { name: 'VPN', category: 'Networking', icon: '🔒' },
   { name: 'Python', category: 'Programming', icon: '🐍' },
   { name: 'Bash', category: 'Programming', icon: '💻' },
   { name: 'JavaScript', category: 'Programming', icon: '⚡' },
   { name: 'YAML', category: 'Programming', icon: '📄' },
   { name: 'Git', category: 'Tools', icon: '📦' },
   { name: 'VS Code', category: 'Tools', icon: '💙' },
   { name: 'Ansible', category: 'Tools', icon: '🔧' },
   { name: 'Prometheus', category: 'Tools', icon: '📊' },
 ];
 
 const categories: { label: Category; icon: React.ReactNode }[] = [
   { label: 'all', icon: null },
   { label: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4" /> },
   { label: 'Networking', icon: <Network className="w-4 h-4" /> },
   { label: 'Programming', icon: <Code className="w-4 h-4" /> },
   { label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
 ];
 
 const TechStackSection = () => {
   const [activeCategory, setActiveCategory] = useState<Category>('all');
 
   const filteredTech = activeCategory === 'all' 
     ? techStack 
     : techStack.filter(tech => tech.category === activeCategory);
 
   return (
     <section id="tech-stack" className="py-24 relative z-10">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-12"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Tech <span className="gradient-text">Stack</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Technologies and tools I work with to build scalable cloud infrastructure and automate workflows.
           </p>
         </motion.div>
 
         {/* Category Filter */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
           className="flex flex-wrap justify-center gap-3 mb-12"
         >
           {categories.map((cat) => (
             <button
               key={cat.label}
               onClick={() => setActiveCategory(cat.label)}
               className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                 activeCategory === cat.label
                   ? 'bg-primary text-primary-foreground glow-button'
                   : 'glass-card hover:border-primary/50'
               }`}
             >
               {cat.icon}
               {cat.label === 'all' ? 'All' : cat.label}
             </button>
           ))}
         </motion.div>
 
         {/* Tech Grid */}
         <motion.div 
           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
           layout
         >
           {filteredTech.map((tech, index) => (
             <motion.div
               key={tech.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: index * 0.05 }}
               viewport={{ once: true }}
               whileHover={{ y: -5, scale: 1.02 }}
               className="glass-card p-4 text-center cursor-pointer group"
             >
               <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                 {tech.icon}
               </div>
               <p className="text-sm font-medium text-foreground">{tech.name}</p>
               <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default TechStackSection;