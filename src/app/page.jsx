import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ServicesIntro from "@/components/ServicesIntro";
import AboutCard from "../components/AboutCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServiceShowcase from "../components/ServiceShowcase";
import ServicesGrid from "../components/ServicesGrid";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <AboutCard />
      <TestimonialCarousel/>
      <ServiceShowcase />
      <ServicesIntro />
      <ServicesGrid />
      <ContactSection />
    </>
  );
}
