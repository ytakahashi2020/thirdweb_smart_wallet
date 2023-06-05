import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet />
        aa
        <Web3Button 
          contractAddress="0x1683B28f18b51bce492Be35D1EE9EA89f9544BE0"
          action={(contract) => contract.erc721.claim(1)}
        >Claim
        </Web3Button>
      </main>
    </div>
  );
};

export default Home;
