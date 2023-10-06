import React, { useState, useEffect } from "react";
const { createContext } = require("react");

export const metamaskContext = createContext();
export function MetamaskProvider({ children }) {
  const [metamaskAccounts, setMetamaskAccounts] = useState([]);
  const [hasMetamask, setHasMetamask] = useState(false);
  useEffect(() => {
    const ethereum = window.ethereum;
    if (ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setMetamaskAccounts(accounts);
      });
    }
    setHasMetamask(ethereum ? true : false);
  }, []);
  return (
    <metamaskContext.Provider
      value={{ metamaskAccounts, setMetamaskAccounts, hasMetamask }}
    >
      {children}
    </metamaskContext.Provider>
  );
}
