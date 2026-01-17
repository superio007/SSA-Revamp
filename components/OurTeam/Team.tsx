import Image from "next/image";
import CraigTiley from "@/assets/CraigTiley.webp";
import StephenFarrow from "@/assets/StephenFarrow.webp";
import CameronPearson from "@/assets/CameronPearson.webp";

const teamMembers = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    image: CraigTiley,
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    image: StephenFarrow,
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    image: CameronPearson,
  },
];

const Team = () => {
  return (
    <section className="container mx-auto w-full flex flex-col gap-8 p-6 xl:px-32 xl:pt-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold capitalize relative">
            Meet our professionals{" "}
            <span className="h-2.5 w-2.5 bg-[#99B81B] rounded-full absolute top-2 ml-2" />
          </h2>

          <p className="text-[16px] font-normal max-w-130">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>

        <button
          type="button"
          className="bg-[#99B81B] text-sm text-center py-3 px-6 capitalize hover:opacity-90 text-white rounded-full"
        >
          register now
        </button>
      </div>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row w-full gap-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex w-full flex-col gap-3">
            <Image
              src={member.image}
              alt={member.name}
              width={600}
              height={700}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-lg w-full h-auto"
            />

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-sm font-light">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
