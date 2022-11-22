import React from "react";
import logoo from "../public/logoo.png";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/Ti";
import { FaDiscord } from "react-icons/Fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="w-full h-72 sm:h-[30rem] sm:pt-10 bg-wave2 bg-cover bg-center bg-no-repeat"
      id="footer"
    >
      <hr className="border-2 border-solid border-black sm:mt-10 w-5/6 sm:m-auto" />
      <div className="sm:pt-10 flex items-center justify-center space-x-9">
        <div>All right reserved.</div>
        <div>
          <Image src={logoo} width={100} height={50} alt="logo" />
        </div>
        <div className="flex space-x-5">
          <Link href="https://twitter.com/heavyheadsoff">
            <TiSocialTwitter className="cursor-pointer" size="30px" />
          </Link>
          <Link href="/discord">
            <FaDiscord className="cursor-pointer" size="30px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
