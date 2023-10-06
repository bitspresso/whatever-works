import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import icLogo from "../../../../assets/images/icLogo.svg";
import ethLogo from "../../../../assets/images/ethLogo.svg";
import polyLogo from "../../../../assets/images/polyLogo.svg";
import opLogo from "../../../../assets/images/opLogo.svg";
import arbLogo from "../../../../assets/images/arbLogo.svg";

export default function NotLoggedHomePage() {
  return (
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
  );
}
