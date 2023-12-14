import Image from "next/image";
import React from "react";

const Episode = () => {
  return (
    <div className="w-[90%] m-auto lg:w-[70%] shadow-md bg-white rounded-lg flex flex-col items-center justify-between p-4 md:flex-row md:p-0">
      <div className="w-[100%] md:w-[30%]">
        <Image src="/timmy.png" alt="timmy" className="rounded-lg" height={200} width={200} />
      </div>
      <div className="flex flex-col gap-4 w-[100%]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center p-3">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold lg:text-3xl">
              Timmy Mike: The nature of design
            </h1>
            <p className="font-thin text-slate-600">
              Episode 1 . Microphone . 0:13
            </p>
          </div>
          <div className="flex items-center font-semibold gap-2">
            Episode page
            <Image src="/Arrow.svg" alt="arrow" height={20} width={20} />
          </div>
        </div>
        <div className="flex flex-col p-3 gap-2 md:flex-row">
          <div className="flex items-center gap-2 lg:gap-[2rem]">
            <Image src="/Play.svg" alt="play" height={30} width={30} />
            <p className="text-[.8rem]">10s</p>
            <p className="text-[.8rem]">10s</p>
            <Image
              src="/Time-Slider.svg"
              alt="timeSlider"
              height={200}
              width={200}
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[.8rem]">00:00 / 00:00</p>
            <Image src="/Mute.svg" alt="Mute" height={20} width={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
