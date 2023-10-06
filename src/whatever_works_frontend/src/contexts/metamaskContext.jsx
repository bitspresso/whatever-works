import React, { useState } from "react";
const { createContext } = require("react");

export const metamaskContext = createContext();
export function MetamaskProvider({ children }) {
  const [metamaskAccounts, setMetamaskAccounts] = useState([]);
  window.ethereum.on("accountsChanged", (accounts) => {
    setMetamaskAccounts(accounts);
  });
  return (
    <metamaskContext.Provider value={{ metamaskAccounts, setMetamaskAccounts }}>
      {children}
    </metamaskContext.Provider>
  );
}
