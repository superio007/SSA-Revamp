import Image from "next/image";
import Back1 from "@/assets/Back1.webp";
import Back2 from "@/assets/Back2.webp";
import Back3 from "@/assets/Back3.webp";
const Programs = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-8 px-6 xl:px-32">
        <div className="flex md:flex-row flex-col w-full justify-between items-start gap-4 md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize relative">
              Programs{" "}
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
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div
            className="w-87.25 h-115.5 rounded-lg flex p-6 justify-center items-end"
            style={{
              backgroundImage: `url(${Back1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h2 className="text-2xl text-center text-white font-medium">
                Academy
              </h2>
              <p className="text-[16px] text-white text-center font-light">
                Live and train with us
              </p>
            </div>
          </div>
          <div
            className="w-87.25 h-115.5 rounded-lg flex p-6 justify-center items-end"
            style={{
              backgroundImage: `url(${Back2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h2 className="text-2xl text-center text-white font-medium">
                Camps
              </h2>
              <p className="text-[16px] text-white text-center font-light">
                Train like a pro with us
              </p>
            </div>
          </div>
          <div
            className="w-87.25 h-115.5 rounded-lg flex p-6 justify-center items-end"
            style={{
              backgroundImage: `url(${Back3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h2 className="text-2xl text-center text-white font-medium">
                Performance
              </h2>
              <p className="text-[16px] text-white text-center font-light">
                Elevate your game with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Programs;
