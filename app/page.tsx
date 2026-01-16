import HeroSection from "@/components/Hero/HeroSection";
import CTA from "@/components/CTA/Cta";
import Launching from "@/components/Launching/Launching";
import Testimonials from "@/components/Testimonials/Testimonials";
import KeyFeatures from "@/components/Features/KeyFeatures";
import Team from "@/components/OurTeam/Team";
import AboutPage from "@/components/About/AboutPage";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <Testimonials />
      <KeyFeatures />
      <Launching />
      <Team />
      <CTA />
    </>
  );
}
