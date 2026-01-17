import Image from "next/image";
import TestimonialsBack from "@/assets/TestimonialsBack.webp";

const Testimonials = () => {
  return (
    <section className="relative w-full flex justify-center items-center py-14 md:py-28 overflow-hidden">
      {/* Background Image */}
      <Image
        src={TestimonialsBack}
        alt="Testimonials background"
        fill
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Optional overlay for text readability (same look, safer) */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="flex flex-col px-6 gap-7 max-w-275">
        <h2 className="text-2xl md:text-4xl font-semibold text-white leading-snug">
          "We have created an environment ideal for building craft. Our goal is
          to be recognized as the best tennis performance centre in the world."
        </h2>

        <div className=" h-px bg-white" />

        <div>
          <h3 className="text-white font-medium text-xl">John Doe</h3>
          <p className="text-white font-normal text-[16px]">chairman</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
