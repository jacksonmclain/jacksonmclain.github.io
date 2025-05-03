import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TimelineItemProps = {
  period: string;
  title: string;
  company: string;
  description: string;
  side: "left" | "right";
};

export function TimelineItem({ period, title, company, description, side }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "timeline-item",
        side === "left" ? "timeline-left" : "timeline-right"
      )}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-serif font-bold text-dartmouth-green mb-2">{period}</h3>
        <h4 className="text-lg font-sans font-semibold mb-2">{title}</h4>
        <p className="font-sans text-charcoal mb-4">{company}</p>
        <p className="font-sans text-sm text-charcoal">{description}</p>
      </div>
    </motion.div>
  );
}

export function TimelineContainer({ children }: { children: React.ReactNode }) {
  return <div className="timeline-container">{children}</div>;
}
