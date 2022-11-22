import React from "react";
import Image from "next/image";
import me from "../public/me.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const SecondBlock = () => {
  return (
    <div
      id="second"
      className="mt-6 sm:h-[50rem] sm:w-full sm:pt-[8em] -skew-y-3 bg-wavesviolet bg-cover bg-center bg-no-repeat"
    >
      <div className="sm:flex sm:justify-center sm:mt-16">
        <div className="skew-y-3 sm:h-fit drop-shadow-[0_60px_60px_rgba(0,0,0,0.25)] sm:w-[50%] text-center	">
          <TrackVisibility once partialVisibility offset={150}>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate-slideInLeft animate-slow" : ""}
              >
                <Image
                  className="rounded-2xl"
                  src={me}
                  width={500}
                  height={400}
                  alt="pop"
                />
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className="skew-y-3 flex-col items-center pt-4  sm:pt-20 sm:w-[40%] sm:h-fit flex ">
          <TrackVisibility once partialVisibility offset={150}>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate-slideInRight animate-slow" : ""}
              >
                <h1 className="text-[46px] text-center font-black w-full leading-10 sm:mt-[4rem] text-[#fa7268] sm:w-[70%]">
                  We choosed the best for The Heavy Heads.
                </h1>
                <p className="text-[15px] text-center sm:w-[70%]  sm:mt-4">
                  Magic Eden is a dedicated MarketPlace for Solana&apos;s NFTs.
                  They have been prooved their worth, and we are proud to be
                  part of their community. To buy and HeavyHeads, click on the
                  image. But since the collection is not live, we all have to be
                  patient.
                </p>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};
