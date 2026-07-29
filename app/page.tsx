import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SampleWork from "@/components/SampleWork";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import About from "@/components/About";
import Footer from "@/components/Footer";

/**
 * BuildVerse Solutions — Main Landing Page
 *
 * Assembles all section components in the order specified by the design:
 * Navbar → Hero → Services → Stats → Portfolio → Pricing → Why Choose Us → Process → About → Final CTA → Footer
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <SampleWork />
        <Pricing />
        <WhyChooseUs />
        <Process />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
