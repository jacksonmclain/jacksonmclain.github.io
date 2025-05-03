import { motion } from "framer-motion";
import { GalleryItem } from "@/components/ui/gallery-item";
import { campusImages } from "@/lib/constants";

export default function CampusLife() {
  return (
    <section className="py-20 bg-dartmouth-green text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
        >
          Life at Dartmouth
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campusImages.map((image) => (
            <GalleryItem
              key={image.id}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
