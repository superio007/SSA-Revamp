import HeroSection from "@/components/Hero/HeroSection";
import CTA from "@/components/CTA/Cta";
import Launching from "@/components/Launching/Launching";
import Testimonials from "@/components/Testimonials/Testimonials";
import KeyFeatures from "@/components/Features/KeyFeatures";
import Team from "@/components/OurTeam/Team";
import AboutPage from "@/components/About/AboutPage";
import Facilities from "@/components/Facilities/Facilities";
export default function Home() {
  return (
    <>
      <HeroSection /> {/* must contain h1 */}
      <main>
        <AboutPage />
        <Testimonials />
        <KeyFeatures />
        <Launching />
        <Team />
        <Facilities />
        <CTA />
      </main>
    </>
  );
}
