import AOSInit from "@/components/AOSInit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSlider from "@/components/ServicesSlider";
import ProjectsSection from "@/components/ProjectsSection"
import WhyChooseUs from "@/components/WhyChooseUs";
import OurCustomers from "@/components/OurCustomers";
import OurLocations from "@/components/OurLocations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSlider />
      <ProjectsSection />
      <WhyChooseUs />
      <OurCustomers />
      <OurLocations />
      <Footer />
    </>
  );
}