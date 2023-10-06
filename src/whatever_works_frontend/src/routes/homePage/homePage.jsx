import React, { useContext } from "react";
import styles from "./styles.module.scss";
import githubLogo from "../../../assets/images/githubLogo.svg";
import telegramLogo from "../../../assets/images/telegramLogo.svg";
import twitterLogo from "../../../assets/images/twitterLogo.svg";
import { Link } from "../../../../../node_modules/react-router-dom/dist/index";
import ConnectMetamaskButton from "../../components/ui/buttons/connectMetamaskButton";
import NotLogged from "../../components/homePage/notLogged/notLogged";
import Logged from "../../components/homePage/logged/logged";
import { metamaskContext } from "../../contexts/metamaskContext";

export default function HomePage() {
  const { metamaskAccounts } = useContext(metamaskContext);
  return (
    <div className={styles.homepage}>
      <ConnectMetamaskButton />
      {metamaskAccounts.length > 0 ? (
        <Logged account={metamaskAccounts[0]} />
      ) : (
        <NotLogged />
      )}
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
