import React, { useContext } from "react";
import { metamaskContext } from "../../../contexts/metamaskContext";
import styles from "./styles.module.scss";
import { Link } from "../../../../../../node_modules/react-router-dom/dist/index";

export default function CreateMetamaskButton() {
  const { metamaskAccounts, setMetamaskAccounts } = useContext(metamaskContext);
  function connectWallet() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setMetamaskAccounts(result);
        });
    }
  }
  return metamaskAccounts.length > 0 ? (
    <div className={styles.connectWallet}>
      <p>{metamaskAccounts[0]}</p>
    </div>
  ) : (
    <button className={styles.connectWallet} onClick={connectWallet}>
      <p>Connect Wallet</p>
    </button>
  );
}
