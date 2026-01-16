import KeyFeaturesBack from "@/assets/KeyFeatures.svg";
import Features from "./Features";
import Excellence from "./Excellence";
import Programs from "./Programs";
import MarqueeText from "./MarqueeText";
const KeyFeatures = () => {
  return (
    <>
      <div
        className="w-full flex flex-col gap-18  py-18 md:py-24 bg-no-repeat bg-top-left bg-contain"
        style={{ backgroundImage: `url(${KeyFeaturesBack.src})` }}
      >
        <Features />
        <Excellence />
        <Programs />
        <MarqueeText />
      </div>
    </>
  );
};
export default KeyFeatures;
