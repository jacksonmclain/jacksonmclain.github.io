import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CampusLife from "@/components/CampusLife";
import Experience from "@/components/Experience";
import Academics from "@/components/Academics";
import Travel from "@/components/Travel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <CampusLife />
      <Experience />
      <Academics />
      <Travel />
      <Contact />
      <Footer />
    </div>
  );
}
