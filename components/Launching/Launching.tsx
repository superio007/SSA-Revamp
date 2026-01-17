import LaunchingSideImage from "@/assets/Launching.webp";
import Image from "next/image";
import ion_golf from "@/assets/ion_golf.svg";

const Highlights = [
  { text: "Hunter Valley Golf and Country Club", distance: "220m" },
  { text: "Rydges Resort Hunter Valley", distance: "550m" },
  { text: "Cessnock Airport", distance: "1.7km" },
  { text: "Cessnock CBD", distance: "7km" },
  { text: "Nulkaba Public School", distance: "4.8km" },
  { text: "Cessnock Hospital", distance: "7.3km" },
  { text: "McDonald’s, KFC, Oporto", distance: "7km" },
];

const Launching = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full overflow-hidden">
        {/* Left Gradient Panel */}
        <div className="w-full md:w-[45%] flex flex-col gap-5 px-6 py-10 md:px-14 md:py-14 bg-[linear-gradient(148.19deg,#003A5D_3.49%,#99B81B_113.07%)]">
          <span className="text-sm md:text-lg font-light text-white uppercase">
            Launching
          </span>

          {/* Single H2 (SEO + clean) */}
          <h2 className="text-3xl md:text-4xl text-white font-bold leading-[115%]">
            Signature Slam Academy <br className="hidden md:block" />
            Hunter Valley
          </h2>

          <h3 className="text-xl md:text-2xl font-medium leading-[100%] text-white">
            SSA Connectivity
          </h3>

          {/* List */}
          <div className="flex flex-col gap-6 mt-2">
            {Highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Icon */}
                <Image
                  src={ion_golf}
                  alt="golf icon"
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0"
                />

                {/* Name + dash + distance */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Name */}
                  <p className="text-white font-semibold text-[16px] capitalize truncate">
                    {highlight.text}
                  </p>

                  {/* Dashed line */}
                  <div className="hidden sm:block flex-1 border-b border-dashed border-white/50" />

                  {/* Distance */}
                  <p className="text-white text-[14px] font-medium whitespace-nowrap shrink-0">
                    {highlight.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[55%] min-h-80 md:min-h-130">
          <Image
            src={LaunchingSideImage}
            alt="Launching Side"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Launching;
