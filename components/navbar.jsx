import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoo from "../public/logoo.png";
import { TiSocialTwitter } from "react-icons/Ti";
import { FaDiscord } from "react-icons/Fa";
import MetamaskCon from "./metamask";

export const Navbar = () => {
  return (
    <div className="flex w-full pt-4 sm:flex text-lg sm:w-[60%] sm:justify-between sm:m-auto sm:pt-[2em] ">
      <Image src={logoo} width={100} height={50} alt="logo" />
      <div className="sm:space-x-5 flex items-center">
        <Link href="#second">Buy an Heavy Heads</Link>
        <Link href="#third">Roadmap</Link>
        <Link href="#fourth">Arts</Link>
        <Link href="#fifth">Team</Link>
        <Link href="/mint">Mint</Link>
        <Link href="https://twitter.com/heavyheadsoff">
          <TiSocialTwitter className="cursor-pointer" size="30px" />
        </Link>
        <Link href="/discord">
          <FaDiscord className="cursor-pointer" size="30px" />
        </Link>
        <MetamaskCon />
      </div>
    </div>
  );
};
