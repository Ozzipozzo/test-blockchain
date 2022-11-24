import React from "react";
import tobi from "../public/tobi.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export const FirstBlock = () => {
  const { locales } = useRouter();
  
  return (
    <div className="mt-6 sm:h-[50rem] sm:w-full sm:mt-3 sm:flex sm:justify-center sm:pt-[8em] -skew-y-3 bg-wavefirst bg-cover bg-center bg-no-repeat dark:black">
      <div className="skew-y-3 flex-col items-center sm:w-[40%] dark:black">
        <h1 className="text-[46px] text-center font-black w-full leading-10 sm:mt-[10rem]  text-[#7645d9] sm:w-[70%] dark:black">
          <FormattedMessage
            id="firstblock"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
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
