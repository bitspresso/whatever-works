import React, { useState } from "react";
import styles from "./styles.module.scss";
import { mockWallets } from "../../../mockData/wallets";
import { getChainImage } from "../../../common/commonFunctions";

function SmallWallet({ address, properties, blockchain, ens }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className={styles.openWallet}>
          <h1>{ens ? ens : address}</h1>
          <div className={styles.stats}>
            <div className={styles.singleStat}>
              <h2>Balance:</h2>
              <p>{properties.balance}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.wallet}>
        <img src={getChainImage(blockchain)} alt={blockchain} />
        <h2>{ens ? ens : address}</h2>
      </div>
    </>
  );
}

export default function Logged({ account }) {
  return (
    <div className={styles.walletsHolder}>
      <h2>
        Welcome back,
        <br /> {account}
      </h2>
      <div className={styles.wallets}>
        {mockWallets.map((el, i) => {
          return (
            <SmallWallet
              key={`wallet_${i}`}
              address={el.address}
              properties={el.properties}
              blockchain={el.blockchain}
              ens={el.ens}
            />
          );
        })}
      </div>
    </div>
  );
}
