import Head from "next/head";
import Footer from "../components/footer";
import { FirstBlock } from "../components/firstblock";
import { Navbar } from "../components/navbar";
import { SecondBlock } from "../components/secondblock";
import { ThirdBlock } from "../components/thirdblock";
import { FourthBlock } from "../components/fourthblock";
import { FifthBlock } from "../components/fifthblock";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [transactions, setTransactions] = useState(null);
  const [balance, setBalance] = useState();
  const [currentAccount, setCurrentAccount] = useState()
  const [chainId, setChainId] = useState()
  const [chainname, setChainName] = useState()
  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts);

      // get txs
      let provider = new ethers.providers.EtherscanProvider();
      let history = await provider.getHistory(accounts[0]);
      setTransactions(history);
      let txxx = await provider.getBalance(accounts[0]).then((balancee) => {
        setBalance(ethers.utils.formatEther(balancee))
      });
      
      // const provider2 = new ethers.providers.Web3Provider(ethereum);
      // provider.getBalance(currentAccount).then((result) => {
      //   console.log(result)
      //   // setBalance(ethers.utils.formatEther(result));
      // });
      
      
      
      console.log(txxx);

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Heavy Heads</title>
        <meta name="description" content="HeavyHeads" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://localhost:3000/" hrefLang="en" />
        <link rel="alternate" href="http://localhost:3000/fr" hrefLang="fr" />
      </Head>
      <div>
        <Navbar client={client} connect={connectWeb3} />
        <FirstBlock />
        <SecondBlock client={client} txs={transactions} balance={balance} />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <Footer />
      </div>
    </div>
  );
}
