import React from "react";
import styles from "./styles.module.scss";
import { mockWallets } from "../../../mockData/wallets";
import { getChainImage } from "../../../common/commonFunctions";

function SmallWallet({ address, balance, blockchain, ens }) {
  return (
    <div className={styles.wallet}>
      <img src={getChainImage(blockchain)} alt={blockchain} />
      <h2>{ens ? ens : address}</h2>
    </div>
  );
}

export default function Logged({ account }) {
  return (
    <div className={styles.walletsHolder}>
      <h2>
        Welcome back,
        <br /> {account}
      </h2>
      <div>
        {mockWallets.map((el, i) => {
          return (
            <SmallWallet
              key={`wallet_${i}`}
              address={el.address}
              balance={el.balance}
              blockchain={el.blockchain}
              ens={el.ens}
            />
          );
        })}
      </div>
    </div>
  );
}
