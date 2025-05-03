import { motion } from "framer-motion";
import { TimelineContainer, TimelineItem } from "@/components/ui/timeline";
import { experienceItems } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-dartmouth-green mb-16 text-center"
        >
          Professional Experience
        </motion.h2>
        
        <TimelineContainer>
          {experienceItems.map((item) => (
            <TimelineItem
              key={item.id}
              period={item.period}
              title={item.title}
              company={item.company}
              description={item.description}
              side={item.side as "left" | "right"}
            />
          ))}
        </TimelineContainer>
      </div>
    </section>
  );
}
