import { motion } from "framer-motion";
import { GalleryItem } from "@/components/ui/gallery-item";
import { travelImages } from "@/lib/constants";

export default function Travel() {
  return (
    <section id="travel" className="py-20 bg-dartmouth-green text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          Global Explorations
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg font-sans text-center max-w-3xl mx-auto">
            My academic journey has taken me across the globe, where I've combined research with exploration. Each destination has contributed to my understanding of how different cultures and ecosystems respond to environmental challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {travelImages.map((travel) => (
            <GalleryItem
              key={travel.id}
              src={travel.src}
              alt={travel.alt}
              title={travel.title}
              description={travel.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
