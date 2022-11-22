import React from "react";
import Image from "next/image";
import tobi from "../public/tobi.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
const images = ["tobi", "tobi", "tobi", "tobi"];

export const FifthBlock = () => {
  return (
    <div
      id="fifth"
      className="mt-6 sm:h-[50rem] sm:w-full  sm:pt-[8em] sm:mt-[1rem] skew-y-2 bg-blob bg-cover bg-center bg-no-repeat"
    >
      <div className="flex justify-center -skew-y-2 space-x-5">
        <TrackVisibility once partialVisibility offset={130}>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate-slideInLeft animate-slow" : ""}
            >
              <div className="rounded-lg shadow-2xl max-w-[19rem] max-h-[28rem]">
                <Image
                  className="rounded-t-lg"
                  src={tobi}
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-[#c62368] text-2xl font-medium mb-2 text-center">
                    HeavyHeads Boss
                  </h5>
                  <p className="text-gray-700 pt-7 mb-4 text-center">
                    The idea come from this man.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility once partialVisibility offset={130}>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate-fadeInUpBig animate-slow" : ""}
            >
              <div className="rounded-lg shadow-2xl max-w-[19rem] max-h-[28rem]">
                <Image
                  className="rounded-t-lg"
                  src={tobi}
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-[#6927c7] text-2xl font-medium mb-2 text-center">
                    HeavyHeads Designer
                  </h5>
                  <p className="text-gray-700 pt-7 mb-4 text-center">
                    Everything fancy you see ? It&apos;s him.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility once partialVisibility offset={130}>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate-fadeInUpBig animate-slow" : ""}
            >
              <div className="rounded-lg shadow-2xl max-w-[19rem] max-h-[28rem]">
                <Image
                  className="rounded-t-lg"
                  src={tobi}
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-[#f4760f] text-2xl font-medium mb-2 text-center">
                    HeavyHeads Developer
                  </h5>
                  <p className="text-gray-700 pt-7 mb-4 text-center">
                    Everything you can&apos;t see ? It&apos;s him.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility once partialVisibility offset={130}>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate-fadeInRightBig animate-slow" : ""}
            >
              <div className="rounded-lg shadow-2xl max-w-[19rem] max-h-[28rem]">
                <Image
                  className="rounded-t-lg"
                  src={tobi}
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-[#c62368] text-2xl font-medium mb-2 text-center">
                    HeavyHeads Developer
                  </h5>
                  <p className="text-gray-700 pt-7 mb-4 text-center">
                    Everything you can&apos;t see ? It&apos;s him.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};
