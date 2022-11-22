import React from "react";
import Image from "next/image";
import ape from "../public/00.png";
import ape1 from "../public/01.png";
import ape2 from "../public/02.png";
import ape3 from "../public/03.png";
import ape4 from "../public/04.png";
import ape5 from "../public/05.png";
import ape6 from "../public/06.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const FourthBlock = () => {
  return (
    <div
      id="fourth"
      className="mt-6 sm:h-[50rem] sm:w-full sm:pt-[3em] sm:mt-[1rem] skew-y-2 bg-wavethird bg-cover bg-center bg-no-repeat"
    >
      <div className="flex justify-center max-w-full space-x-3 sm:ml-10 sm:mt-1 -skew-y-2 sm:m-auto">
        <div>
          <Image
            className="rounded-lg "
            src={ape}
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="rounded-lg "
            src={ape1}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div>
          <Image
            className="rounded-lg "
            src={ape3}
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="rounded-lg "
            src={ape2}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div>
          <Image
            className="rounded-lg "
            src={ape4}
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="rounded-lg "
            src={ape5}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div>
          <Image
            className="rounded-lg "
            src={ape6}
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="rounded-lg "
            src={ape}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div>
          <Image
            className="rounded-lg "
            src={ape}
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="rounded-lg "
            src={ape}
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
