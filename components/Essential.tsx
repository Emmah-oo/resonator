import Image from "next/image";
import React from "react";
import { essentialEpisodeData } from "@/constants";

const Essential = () => {
  return (
    <section className="mt-[2vh] py-[2vh] lg:mt-[8vh] lg:py-[8vh]">
      <div className="w-[90%] m-auto lg:w-[70%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl lg:text-3xl">Essential Episodes:</h1>
          <div className="flex items-center gap-2">
            <h2 className="font-bold">View all episodes</h2>
            <Image src="/Arrow.svg" alt="arrow" height={20} width={20} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {essentialEpisodeData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col w-full shadow-md rounded-lg sm:flex-row sm:items-center md:flex-col"
            >
              <div className="w-full">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="font-thin text-slate-500 text-xl mt-2 lg:text-[.9rem]">
                  {data.episode}
                </h3>
                <h1 className="text-2xl font-medium mt-1">
                  {data.title}
                </h1>
                <span className="block h-1 w-full bg-black"></span>
                <div className="mt-5 flex items-center gap-2">
                  <h2>{data.link}</h2>
                  <Image
                    src={data.icon}
                    alt="icon"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essential;
