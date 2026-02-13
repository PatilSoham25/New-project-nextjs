import AOSInit from "@/components/AOSInit";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSlider from "@/components/home/ServicesSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurCustomers from "@/components/home/OurCustomers";

export default function Home() {
  return (
    <>
      <AOSInit />
      <Hero />
      <AboutSection />
      <ServicesSlider />
      <ProjectsSection />
      <WhyChooseUs />
      <OurCustomers />
    </>
  );
}