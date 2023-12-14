import Image from "next/image";
import React from "react";
import Episode from "./Episode";

const Hero = () => {
  return (
    <section>
      <div className="min-h-[100vh] w-[100vw]">
        <div className="w-[90%] m-auto lg:w-[70%]">
          <Image
            src="/hero-image.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[20%] md:top-[30%] flex flex-col gap-5">
            <h1 className="text-4xl font-semibold leading-10 md:text-5xl lg:text-6xl xl:text-7xl">
              New episode <br /> available now
            </h1>
            <p>Available on Apple Soundcast and Spotify.</p>
            <div className="flex flex-col gap-5 mt-5 sm:flex-row">
              <button className="flex items-center gap-2 bg-black px-5 py-2 rounded-full text-white">
                <div>
                  <Image
                    src="/podcast.svg"
                    alt="podcast"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[.8rem] font-light">Listen on</h3>
                  <h1 className="font-semibold text-[1rem] -mt-1">
                    Apple Podcasts
                  </h1>
                </div>
              </button>

              <button className="flex items-center gap-2 bg-black px-5 py-2 rounded-full text-white">
                <div>
                  <Image
                    src="/soundcloud-2.svg"
                    alt="soundcloud"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-[.8rem] font-light">Listen on</h3>
                  <h1 className="font-semibold text-[1rem] -mt-1">
                    SoundCloud
                  </h1>
                </div>
              </button>
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
