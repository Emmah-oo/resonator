import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <section className="mt-[10vh]">
      <div className="relative">
        <Image
          src="/Video.png"
          alt="Video"
          className="w-full"
          height={700}
          width={2000}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <Image src='/Play.svg' alt="Play" height={70} width={70} />
        </div>
      </div>
    </section>
  );
};

export default Video;
