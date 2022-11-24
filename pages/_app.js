import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import fr from "../lang/fr.json";

const messages = {
  en,
  fr,
};

function getDirection(locale) {
  if (locale === "en") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} dir={getDirection(locale)} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
