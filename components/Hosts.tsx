import Image from "next/image";
import React from "react";
import { hostsData } from "@/constants";

const Hosts = () => {
  return (
    <section className="my-[4vh] py-[4vh] lg:my-[8vh] lg:py-[8vh]">
      <div className="w-[90%] m-auto lg:w-[70%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl lg:text-3xl">Meet your hosts:</h1>
          <div className="flex items-center gap-2">
            <h2 className="font-bold">View all of them</h2>
            <Image src="/Arrow.svg" alt="arrow" height={20} width={20} />
          </div>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {hostsData.map((host) => (
            <div key={host.id} className="shadow-md rounded-lg">
              <div>
                <Image
                  src={host.image}
                  alt={host.name}
                //   className="w-[100%]"
                  height={1200}
                  width={1200}
                />
              </div>
              <div className="p-6 flex gap-3 flex-col">
                <h1 className="text-2xl font-semibold">{host.name}</h1>
                <h2 className="font-monothin text-slate-600">{host.position}</h2>
                <div className="flex items-center gap-2">
                  {host.socials.map((social) => (
                    <div key={social}>
                      <Image src={social} alt="social" height={30} width={30} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hosts;
