import Head from "next/head";
import Footer from "../components/footer";
import { FirstBlock } from "../components/firstblock";
import { Navbar } from "../components/navbar";
import { SecondBlock } from "../components/secondblock";
import { ThirdBlock } from "../components/thirdblock";
import { FourthBlock } from "../components/fourthblock";
import { FifthBlock } from "../components/fifthblock";

export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Heavy Heads</title>
        <meta name="description" content="HeavyHeads" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <Footer />
      </div>
    </div>
  );
}
