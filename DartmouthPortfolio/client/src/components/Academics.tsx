import { motion } from "framer-motion";
import { academicProjects } from "@/lib/constants";

export default function Academics() {
  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-dartmouth-green mb-16 text-center"
        >
          Academic Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-ivory rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-dartmouth-green mb-2">{project.title}</h3>
                <p className="font-sans text-charcoal mb-4">
                  {project.description}
                </p>
                <p className="citation text-charcoal">
                  {project.citation}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-dartmouth-green text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
