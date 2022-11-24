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
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export const Navbar = ({ client, connect }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { locales } = useRouter();

  const intl = useIntl();

  // const navbar1 = intl.formatMessage({ id: "navbar-1" });

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <ImSun
          className="w-5 h-5 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaRegMoon
          className="w-5 h-5 text-gray-900 "
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
    <div className="flex w-full pt-4 sm:flex text-lg sm:w-[60%] sm:justify-between sm:m-auto sm:pt-[2em] sm:mb-8 ">
      <Image src={logoo} width={100} height={50} alt="logo" />
      <div className="sm:space-x-8 flex items-center">
        <Link href="#third">
          <FormattedMessage
            id="navbar-1"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </Link>
        <Link href="#fourth" className="sm:pr-3">
          <FormattedMessage className="sm:p-3"
            id="navbar-2"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </Link>
        <Link href="#fifth">
          <FormattedMessage
            id="navbar-3"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </Link>
        <Link href="#second">
          <FormattedMessage
            id="navbar-4"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </Link>
        <Link href="https://twitter.com/heavyheadsoff">
          <TiSocialTwitter className="cursor-pointer" size="30px" />
        </Link>
        <Link href="/discord">
          <FaDiscord className="cursor-pointer" size="30px" />
        </Link>
        <MetamaskCon client={client} connect={connect} />
        {renderThemeChanger()}
        <div className="sm:pr-4 sm:space-x-2">
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
