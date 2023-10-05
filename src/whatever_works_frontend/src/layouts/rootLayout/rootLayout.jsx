import React from "react";
import Cookies from "../../components/cookies/cookies";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Cookies />
    </div>
  );
}
