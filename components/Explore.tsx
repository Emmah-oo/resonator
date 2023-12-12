import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="mt-[8vh] w-[90%] m-auto lg:w-[70%]">
      <div className="grid place-items-center gap-10 md:grid-cols-2">
        <div className="order-1 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold lg:text-3xl xl:text-5xl">Best places to find design inspiration</h1>
          <div className="flex items-center gap-3">
            <div>
              <Image src="/Play.svg" alt="Eclipse" width={40} height={40} />
            </div>
            <div>
              <h1 className="">Episode 1</h1>
              <h2 className="font-thin text-slate-500">Category . 0:13</h2>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip. 
            <br /> <br />
            Ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Episode Page</h2>
            <Image src='/Arrow.svg' alt='Arrow' height={20} width={20} />
          </div>
        </div>

        <div className="md:order-1">
            <Image src='/landscape.png' className="w-[100%]" alt='Landscape' height={2000} width={2000} />
        </div>
      </div>
    </section>
  );
};

export default Explore;
