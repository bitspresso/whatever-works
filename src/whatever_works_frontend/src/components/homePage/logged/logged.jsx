import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { mockWallets } from "../../../mockData/wallets";
import { getChainImage } from "../../../common/commonFunctions";

function SmallWallet({ address, type, properties, blockchain, ens }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);
  useEffect(() => {
    setImg(getChainImage(blockchain));
  }, [blockchain]);
  return (
    <>
      {open && (
        <div className={styles.openWalletContainer}>
          <div className={styles.openWallet}>
            <button onClick={() => setOpen(false)}>
              <p>X</p>
            </button>
            <img src={img} alt={blockchain} />
            <h1>{ens ? ens : address}</h1>
            <div className={styles.stats}>
              <div className={styles.singleStat}>
                <h2>Balance:</h2>
                <p>{properties.balance}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className={`${styles.wallet} ${styles[type]}`}
      >
        <img src={img} alt={blockchain} />
        <h2>{ens ? ens : address}</h2>
      </button>
    </>
  );
}

export default function Logged({ account }) {
  const [parsedMocks, setParsedMocks] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < mockWallets.length; i++) {
      if (mockWallets[[i].type === "Primary"]) {
        arr[0] = mockWallets[i];
      } else {
        arr[i + 1] = mockWallets[i];
      }
    }
    setParsedMocks(arr);
  }, [mockWallets]);
  return (
    <div className={styles.walletsHolder}>
      <h2>
        Welcome back,
        <br /> {account}
      </h2>
      <div className={styles.wallets}>
        {parsedMocks.map((el, i) => {
          return (
            <SmallWallet
              key={`wallet_${i}`}
              address={el.address}
              type={el.type}
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
