import Image from "next/image";
import React from "react";
import Episode from "./Episode";

const Hero = () => {
  return (
    <section className="">
      <div className="min-h-[100vh] w-[100vw]">
        <div className="w-[90%] m-auto lg:w-[70%]">
          <Image
            src="/hero-image.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[30%] flex flex-col gap-5">
            <h1 className="text-4xl font-semibold leading-10 md:text-5xl lg:text-6xl xl:text-7xl">
              New episode <br /> available now
            </h1>
            <p>Available on Apple Soundcast and Spotify.</p>
            <div className="flex gap-5 mt-5">
              <div>
                <button className="bg-black px-5 py-2 rounded-2xl text-white">
                  Apple Podcasts
                </button>
              </div>
              <div>
                <button className="bg-black px-5 py-2 rounded-2xl text-white">
                  Soundcloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative mt-[-35vh] md:mt-[-15vh]">
        <Episode />
      </div>
    </section>
  );
};

export default Hero;
