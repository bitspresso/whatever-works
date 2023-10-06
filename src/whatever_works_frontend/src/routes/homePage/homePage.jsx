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
        <Link
          to="https://github.com/bitspresso/whatever-works/"
          target="_blank"
        >
          <img src={githubLogo} alt="GitHub" />
        </Link>
        <Link to="mailto:chillandhack@gmail.com?subject=Hey%20There!">
          <img src={telegramLogo} alt="MailUs" target="_blank" />
        </Link>
        <Link to="https://twitter.com/E2TE2T120664">
          <img src={twitterLogo} alt="Twitter" target="_blank" />
        </Link>
      </div>
    </div>
  );
}
