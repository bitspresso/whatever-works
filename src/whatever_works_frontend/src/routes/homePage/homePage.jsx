import React from "react";
import styles from "./styles.module.scss";
import icLogo from "../../../assets/images/icLogo.svg";
import ethLogo from "../../../assets/images/ethLogo.svg";
import polyLogo from "../../../assets/images/polyLogo.svg";
import opLogo from "../../../assets/images/opLogo.svg";
import arbLogo from "../../../assets/images/arbLogo.svg";
import githubLogo from "../../../assets/images/githubLogo.svg";
import telegramLogo from "../../../assets/images/telegramLogo.svg";
import twitterLogo from "../../../assets/images/twitterLogo.svg";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.connectWallet}>
        <p>Connect Wallet</p>
      </div>
      <div className={styles.firstSection}>
        <div className={styles.text}>
          <h1>Whatever Works</h1>
          <h2>We connect, you control</h2>
        </div>
        <div className={styles.icons}>
          <Link to="">
            <img src={icLogo} alt="Internet Computer" />
          </Link>
          <Link to="">
            <img src={ethLogo} alt="Ethereum" />
          </Link>
          <Link to="">
            <img src={polyLogo} alt="Polygon" />
          </Link>
          <Link to="">
            <img src={opLogo} alt="Optimism" />
          </Link>
          <Link to="">
            <img src={arbLogo} alt="Arbitrum" />
          </Link>
        </div>
      </div>
      <div className={styles.socials}>
        <Link to="">
          <img src={githubLogo} alt="Arbitrum" />
        </Link>
        <Link to="">
          <img src={telegramLogo} alt="Arbitrum" />
        </Link>
        <Link to="">
          <img src={twitterLogo} alt="Arbitrum" />
        </Link>
      </div>
    </div>
  );
}
