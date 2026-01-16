"use client";

import { useState } from "react";
import AboutGraphics from "@/assets/aboutgraphics.webp";
import Image from "next/image";
import TabContent from "./TabContent";

type TabKey = "about" | "coaches" | "vision" | "mission";

const tabs = [
  { key: "about", label: "About Us" },
  { key: "coaches", label: "Coaches" },
  { key: "vision", label: "Vision" },
  { key: "mission", label: "Mission" },
] as const;

const tabData = {
  about: {
    title: "About Us",
    description:
      "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
    stats: [
      { value: "20", label: "courts" },
      { value: "12", label: "coaches" },
      { value: "17", label: "years" },
      { value: "10", label: "clubs" },
    ],
    buttonText: "Read More",
  },
  coaches: {
    title: "Coaches",
    description:
      "Meet our expert coaching team focused on building champions with structured training programs.",
    stats: [
      { value: "12", label: "certified coaches" },
      { value: "5", label: "international mentors" },
      { value: "1000+", label: "students trained" },
      { value: "50+", label: "tournaments" },
    ],
    buttonText: "View Coaches",
  },
  vision: {
    title: "Vision",
    description:
      "To become the leading tennis academy in Asia Pacific and create world-class players.",
    stats: [
      { value: "60", label: "courts target" },
      { value: "24/7", label: "training access" },
      { value: "Top 10", label: "global goal" },
      { value: "A+", label: "infrastructure" },
    ],
    buttonText: "Explore Vision",
  },
  mission: {
    title: "Mission",
    description:
      "Deliver structured training, modern facilities, and competitive exposure to players of all levels.",
    stats: [
      { value: "Pro", label: "training plans" },
      { value: "Safe", label: "environment" },
      { value: "Elite", label: "coaching team" },
      { value: "Smart", label: "progress tracking" },
    ],
    buttonText: "Our Mission",
  },
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <section className="relative">
      <div className="container mx-auto w-full flex flex-col relative gap-8 p-6 xl:p-32 md:py-16">
        {/* Top text + Tabs */}
        <div className="flex flex-col justify-center items-center relative z-10 gap-10">
          <h2 className="text-center text-2xl font-normal leading-relaxed">
            To be the first venue in the world to have{" "}
            <span className="text-[#99b81c] font-semibold">
              60 multi surface courts
            </span>
            <br />
            at one location and establish first one stop tennis academy <br />
            in the Asia Pacific producing grand slam champions.
          </h2>

          {/* Tabs */}
          <div className="flex gap-8 flex-wrap  justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-xl hover:cursor-pointer font-semibold relative pb-2 transition-all ${
                  activeTab === tab.key
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {tab.label}

                {/* underline */}
                {activeTab === tab.key && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#99b81c]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Child Component content changes based on activeTab */}
        <TabContent data={tabData[activeTab]} />

        {/* Background graphics */}
        <Image
          src={AboutGraphics}
          alt="About Graphics"
          className="absolute left-0 top-0 w-64 opacity-60 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default AboutPage;
