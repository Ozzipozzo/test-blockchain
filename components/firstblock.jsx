import React from "react";
import tobi from "../public/tobi.png";
import Image from "next/image";

export const FirstBlock = () => {
  return (
    <div className="mt-6 sm:h-[50rem] sm:w-full sm:mt-3 sm:flex sm:justify-center sm:pt-[8em] -skew-y-3 bg-wavefirst bg-cover bg-center bg-no-repeat">
      <div className="skew-y-3 flex-col items-center sm:w-[40%] ">
        <h1 className="text-[46px] text-center font-black w-full leading-10 sm:mt-[10rem]  text-[#7645d9] sm:w-[70%]">
          Discover an unique NFT collection. The famous Heavy Heads.
        </h1>
      </div>
      <div className="skew-y-3">
        <Image
          className="animate-rubberBand animate-ease"
          src={tobi}
          width={500}
          height={500}
          alt="pop"
        />
      </div>
    </div>
  );
};
