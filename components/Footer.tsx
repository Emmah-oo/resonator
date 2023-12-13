import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col gap-10 p-12 md:flex-row m-auto md:gap-5 lg:w-[70%] lg:p-0 lg:py-[8rem]">
        <div className="flex flex-col w-[30%] gap-1">
          <Image src="/Logo.svg" alt="logo" width={100} height={100} />
          <h2 className="text-[.7rem] font-light text-slate-300">The great connection</h2>
        </div>

        <div className="flex flex-col gap-5 w-[100%]">
          <div className="mb-[2rem] lg:mb-[5rem]">
            <h1 className="text-xl">
              We collaborate with ambitious brands and people; <br /> let’s
              build something great together.
            </h1>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-3 font-light text-slate-300 sm:flex-row md:flex-col lg:gap-10">
              <h1>Start a conversation:</h1>
              <p>podcast@example.com +2 969 866 7033</p>
              <h1>Terms & Conditions</h1>
            </div>
            <div className="flex flex-col gap-3 font-light text-slate-300 sm:flex-row md:flex-col lg:gap-10">
              <h1>Find us here:</h1>
              <p>Brooklyn, NY 11201 United States</p>
              <h1>Privacy Policy</h1>
            </div>
            <div className="flex flex-col gap-3 font-light text-slate-300 sm:flex-row md:flex-col lg:gap-10">
              <h1>Follow us on:</h1>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:gap-10">
                <div className="flex gap-2">
                  <Image
                    src="/Facebook2.svg"
                    alt="facebook"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/Twitter2.svg"
                    alt="twitter"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/Instagram.svg"
                    alt="instagram"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/Youtube.svg"
                    alt="youtube"
                    height={20}
                    width={20}
                  />
                </div>
                <h1>© 2021 Qode Interactive. All Rights Reserved</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
