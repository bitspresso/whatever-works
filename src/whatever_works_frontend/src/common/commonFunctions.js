import icLogo from "../../assets/images/icLogo.svg";
import ethLogo from "../../assets/images/ethLogo.svg";
import polyLogo from "../../assets/images/polyLogo.svg";
import opLogo from "../../assets/images/opLogo.svg";
import arbLogo from "../../assets/images/arbLogo.svg";

export function getChainImage(str) {
  const pString = str.replaceAll(" ", "").toLowerCase();
  if (pString === "internetcomputer") {
    return icLogo;
  } else if (pString === "ethereum") {
    return ethLogo;
  } else if (pString === "polygon") {
    return polyLogo;
  } else if (pString === "optimism") {
    return opLogo;
  } else if (pString === "arbitrum") {
    return arbLogo;
  }
  return "";
}
