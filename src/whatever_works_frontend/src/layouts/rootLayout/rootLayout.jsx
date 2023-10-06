import React from "react";
import Cookies from "../../components/cookies/cookies";
import styles from "./styles.module.scss";

export default function RootLayout({ children }) {
  return (
    <div className={styles.rootLayout}>
      {children}
      <Cookies />
    </div>
  );
}
