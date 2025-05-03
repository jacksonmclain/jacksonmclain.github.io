import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-dartmouth-green mb-16 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Alexander Wilson portrait" 
              className="rounded-lg shadow-xl" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-lg font-sans leading-relaxed mb-6">
              I'm a passionate graduate student at Dartmouth College, where I'm pursuing my doctorate in Environmental Science with a focus on climate change adaptation strategies in coastal communities.
            </p>
            
            <p className="text-lg font-sans leading-relaxed mb-6">
              My research combines field work, data analysis, and community engagement to develop practical solutions for communities facing environmental challenges. When I'm not in the lab or classroom, I'm an avid traveler who believes in learning through immersion in different cultures and ecosystems.
            </p>
            
            <div className="flex flex-wrap mt-10">
              <div className="w-1/2 mb-8">
                <h3 className="text-xl font-serif font-bold text-dartmouth-green mb-2">Education</h3>
                <ul className="list-disc list-inside text-charcoal">
                  <li>Ph.D. Environmental Science, Dartmouth College (Current)</li>
                  <li>M.S. Environmental Engineering, Cornell University</li>
                  <li>B.S. Biology, University of Vermont</li>
                </ul>
              </div>
              
              <div className="w-1/2 mb-8">
                <h3 className="text-xl font-serif font-bold text-dartmouth-green mb-2">Research Interests</h3>
                <ul className="list-disc list-inside text-charcoal">
                  <li>Climate Adaptation</li>
                  <li>Coastal Resilience</li>
                  <li>Community-Based Solutions</li>
                  <li>Sustainable Development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
