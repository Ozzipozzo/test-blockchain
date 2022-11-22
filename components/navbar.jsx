import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoo from "../public/logoo.png";
import { TiSocialTwitter } from "react-icons/Ti";
import { FaDiscord } from "react-icons/Fa";
import MetamaskCon from "./metamask";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export const Navbar = ({ client, connect }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <ImSun
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaRegMoon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex w-full pt-4 sm:flex text-lg sm:w-[60%] sm:justify-between sm:m-auto sm:pt-[2em] ">
      <Image src={logoo} width={100} height={50} alt="logo" />
      <div className="sm:space-x-5 flex items-center">
        <Link href="#third">Roadmap</Link>
        <Link href="#fourth">Arts</Link>
        <Link href="#fifth">Team</Link>
        <Link href="#second">My account</Link>
        <Link href="https://twitter.com/heavyheadsoff">
          <TiSocialTwitter className="cursor-pointer" size="30px" />
        </Link>
        <Link href="/discord">
          <FaDiscord className="cursor-pointer" size="30px" />
        </Link>
        <MetamaskCon client={client} connect={connect} />
        {renderThemeChanger()}
      </div>
    </div>
  );
};
