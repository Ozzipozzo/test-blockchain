import React from "react";
import { Popover, Steps } from "antd";
import "animate.css";
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Step {index} - status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

export const ThirdBlock = () => {
  return (
    <div
      id="third"
      className="mt-6 sm:h-[50rem] flex justify-center sm:w-full sm:pt-[8em] bg-wavesteps bg-cover bg-center bg-no-repeat"
    >
      <div className="w-5/6 sm:mt-[5rem]">
        <h1 className="text-[46px] text-center font-black w-full leading-10 text-[#fa7268]">
          Here is a part of the Roadmap
        </h1>
        <div className="sm:mt-[5rem] ">
          <Steps current={3} progressDot={customDot}>
            <Step title="Finished" description="Idea popping 03/03/2022" />
            <Step title="Finished" description="Gathering the team" />
            <Step title="Finished" description="Modelisation WebSite & NFTs" />
            <Step
              title="In Progress"
              description="Developing Website & Socials"
            />
            <Step
              title="In Progress"
              description="Achieving the Mint process"
            />
            <Step title="In Progress" description="NFT Minting" />
            <Step
              title="In Progress"
              description="Implementing the special pill for NFT holders"
            />
            <Step title="In Progress" description="BigHeads club exlusive" />
            <Step title="In Progress" description="Merchandising" />
          </Steps>
        </div>
      </div>
    </div>
  );
};
