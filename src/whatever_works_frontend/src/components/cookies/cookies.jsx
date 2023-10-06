import React from "react";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Cookies() {
  const rawCookies = localStorage.getItem("cookies");
  const [cookies, setCookies] = useState(
    rawCookies ? JSON.parse(rawCookies) : false
  );
  const [display, setDisplay] = useState(rawCookies ? false : true);
  function handleClick(data) {
    setCookies(data);
    localStorage.setItem("cookies", JSON.stringify(data));
    setTimeout(() => {
      setDisplay(false);
    }, 500);
  }
  return (
    display && (
      <div
        className={styles.cookies}
        style={{
          opacity: cookies ? "0" : "1",
        }}
      >
        <small>
          Privacy setting — This site uses third-party website traking
          technologies to provide and continially improve our services. I agree
          and may revoke or change my consent at any time with effect for the
          future. See also our Privacy Policy and Cookies
        </small>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              handleClick("Deny");
            }}
            className={styles.deny}
          >
            Deny
          </button>
          <button
            onClick={() => {
              handleClick("Accept");
            }}
            className={styles.allow}
          >
            Accept
          </button>
        </div>
      </div>
    )
  );
}
