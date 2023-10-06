import React, { useContext } from "react";
import { metamaskContext } from "../../../contexts/metamaskContext";
import styles from "./styles.module.scss";
import logout from "../../../../assets/images/logout.svg";
export default function CreateMetamaskButton() {
  const { metamaskAccounts, setMetamaskAccounts, hasMetamask } =
    useContext(metamaskContext);
  function connectWallet() {
    if (hasMetamask) {
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
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        <img src={logout} alt="Logout" />
      </button>
    </div>
  ) : (
    <button className={styles.connectWallet} onClick={connectWallet}>
      <p>Connect Wallet</p>
    </button>
  );
}
