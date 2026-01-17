import { MoveRight } from "lucide-react";
const FeaturesData = [
  { text: "First venue in the world" },

  { text: "First venue in the world" },
  {
    text: "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  },
  {
    text: "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  },
  {
    text: "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  },
  {
    text: "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  },
  {
    text: "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  },
  {
    text: "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  },
  {
    text: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  },
  {
    text: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  },
  { text: "First one stop tennis academy in Asia Pacific" },
  { text: "First one stop tennis academy in Asia Pacific" },
];
const Features = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-8 px-6 xl:px-32">
        <div className="flex md:flex-row flex-col w-full justify-between items-start gap-4 md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize relative">
              key Features{" "}
              <span className="h-2.5 w-2.5 bg-[#99B81B] rounded-full absolute top-2 ml-2"></span>
            </h2>
            <p className="text-[16px] font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
          <div className="bg-[#99B81B] text-sm text-center py-3 px-6 capitalize hover:cursor-pointer hover:opacity-90 text-white rounded-full ">
            register now
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5">
          {FeaturesData.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div>
                <MoveRight className="text-[#99B81B]" size={18} />
              </div>
              <p className="text-[16px] font-light">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Features;
