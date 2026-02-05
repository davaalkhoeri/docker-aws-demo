 import { motion } from 'framer-motion';
 import { ExternalLink, Github } from 'lucide-react';
 
 interface Project {
   title: string;
   description: string;
   technologies: string[];
   link?: string;
   github?: string;
 }
 
 const projects: Project[] = [
   {
     title: 'Cloud Infrastructure Automation',
     description: 'Automated multi-cloud infrastructure provisioning using Terraform and Ansible. Reduced deployment time by 80% with IaC practices.',
     technologies: ['Terraform', 'AWS', 'Ansible', 'Python'],
     github: '#',
     link: '#',
   },
   {
     title: 'Kubernetes Cluster Management',
     description: 'Built and managed production-grade K8s clusters with monitoring, logging, and auto-scaling capabilities.',
     technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
     github: '#',
   },
   {
     title: 'CI/CD Pipeline Architecture',
     description: 'Designed end-to-end CI/CD pipelines with automated testing, security scanning, and zero-downtime deployments.',
     technologies: ['GitHub Actions', 'Docker', 'SonarQube', 'ArgoCD'],
     github: '#',
     link: '#',
   },
 ];
 
 const ProjectsSection = () => {
   return (
     <section id="projects" className="py-24 relative z-10">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-12"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Featured <span className="gradient-text">Projects</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A showcase of my best work in cloud engineering and DevOps automation.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
               className="glass-card p-6 flex flex-col h-full group"
             >
               <div className="flex-1">
                 <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                   {project.description}
                 </p>
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.technologies.map((tech) => (
                     <span
                       key={tech}
                       className="px-2 py-1 text-xs font-mono bg-secondary/50 text-foreground rounded"
                     >
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
               <div className="flex gap-4 pt-4 border-t border-border">
                 {project.github && (
                   <a
                     href={project.github}
                     className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                   >
                     <Github className="w-4 h-4" />
                     Code
                   </a>
                 )}
                 {project.link && (
                   <a
                     href={project.link}
                     className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                   >
                     <ExternalLink className="w-4 h-4" />
                     Live Demo
                   </a>
                 )}
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ProjectsSection;