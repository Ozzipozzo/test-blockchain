import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export const SecondBlock = ({ client, txs, balance }) => {
  const { locales } = useRouter();

  useEffect(() => {}, [balance]);
  

  return (
    <div
      id="second"
      className="mt-6 sm:h-[50rem] sm:w-full sm:pt-[8em] -skew-y-3 bg-wavesviolet bg-cover bg-center bg-no-repeat"
    >
      <div className="sm:flex sm:justify-center sm:mt-16">
        <div className="skew-y-3 flex-col items-center pt-4  sm:pt-20 sm:w-[40%] sm:h-fit flex ">
          <h1 className="text-[46px] text-center font-black w-full leading-10 sm:mt-[4rem] text-[#fa7268] sm:w-[70%]">
            <FormattedMessage
              id="secondblock"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </h1>
          <div>Balance : {balance}</div>
          <div className="sm:mt-4 flex-col">
            {txs &&
              txs.map((item, index) => (
                <div className="sm:mt-2" key={index}>
                  <ul>
                    <li>{item.hash}</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
