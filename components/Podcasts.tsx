import React from "react";
import { carouselData } from "@/constants";
import Image from "next/image";

const Podcasts = () => {
  return (
    <section className="mt-[8vh] py-[8vh] bg-[#F8F8F8]">
      <div className="w-[90%] m-auto lg:w-[70%]">
        <h1 className="text-center text-4xl font-bold">Top podcasts:</h1>
        <h3 className="text-center mt-5">
          Discover the selection of the most popular podcasts
        </h3>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
          {carouselData.map((carouselDatum) => (
            <div
              key={carouselDatum.id}
              className="flex flex-col w-full sm:flex-row sm:items-center shadow-md rounded-lg"
            >
              <div className="w-full">
                <Image
                  src={carouselDatum.image}
                  alt={carouselDatum.title}
                  className="w-full"
                  height={300}
                  width={300}
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="font-thin text-slate-500 text-xl mt-2 lg:text-[.9rem]">
                  {carouselDatum.episode}
                </h3>
                <h1 className="text-2xl font-medium mt-1">
                  {carouselDatum.title}
                </h1>
                <span className="block h-1 w-full bg-black"></span>
                <div className="mt-5 flex items-center gap-2">
                  <h2>{carouselDatum.link}</h2>
                  <Image
                    src={carouselDatum.icon}
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

export default Podcasts;
