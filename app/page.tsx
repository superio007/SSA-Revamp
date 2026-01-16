import CTA from "@/components/CTA/Cta";
import Launching from "@/components/Launching/Launching";
import Testimonials from "@/components/Testimonials/Testimonials";
import KeyFeatures from "@/components/Features/KeyFeatures";
import Team from "@/components/OurTeam/Team";
export default function Home() {
  return (
    <>
      <Testimonials />
      <KeyFeatures />
      <Launching />
      <Team />
      <CTA />
    </>
  );
}
