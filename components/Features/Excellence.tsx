import Image from "next/image";
import BadmentonPitch from "@/assets/BadmentonPitch.webp";
import BadmentonPlay from "@/assets/BadmentonPlay.webp";
const Excellence = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-8 px-6 xl:px-32">
        <div className="flex md:flex-row flex-col w-full justify-between items-start gap-4 md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize relative">
              A Glimpse of Excellence{" "}
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
        <div className="w-full flex md:flex-row flex-col gap-6">
          <Image
            src={BadmentonPlay}
            alt="Badmenton Play"
            loading="lazy"
            className=" rounded-lg object-cover"
          />
          <Image
            src={BadmentonPitch}
            alt="Badmenton Pitch"
            loading="lazy"
            className=" rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Excellence;
