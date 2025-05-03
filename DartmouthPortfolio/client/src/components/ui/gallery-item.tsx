import { motion } from "framer-motion";

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function GalleryItem({ src, alt, title, description }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="gallery-item rounded-lg overflow-hidden shadow-xl"
    >
      <img src={src} alt={alt} className="w-full h-64 object-cover" />
      <div className="gallery-overlay flex items-center justify-center p-4">
        <div className="text-center">
          <h3 className="text-xl font-serif font-bold">{title}</h3>
          <p className="font-sans">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
