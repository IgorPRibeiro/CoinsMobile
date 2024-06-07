import COLORS from "@/constants/colors";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IWallet {
  color?: string;
  size?: "small" | "large";
}

const Wallet = ({ color, size }: IWallet) => {
  const colorSvg = () => {
    return color ?? COLORS.primary.white;
  };

  return size === "small" ? (
    <SmallWallet color={colorSvg()} />
  ) : (
    <Svg width={96} height={96} viewBox="0 0 96 96" fill="none">
      <Path
        d="M80 48V32.167H24a8.043 8.043 0 01-5.657-2.32A7.875 7.875 0 0116 24.25c0-4.354 3.6-7.917 8-7.917h48v15.834"
        stroke={colorSvg()}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 24.25v47.5c0 4.354 3.6 7.917 8 7.917h56V63.833"
        stroke={colorSvg()}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72 48a8.043 8.043 0 00-5.657 2.319A7.876 7.876 0 0064 55.917c0 4.354 3.6 7.916 8 7.916h16V48H72z"
        stroke={colorSvg()}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmallWallet = ({ color }: { color: string }) => {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20" fill="none">
      <Path
        d="M20 10V6.667H6a2.22 2.22 0 01-1.414-.488C4.21 5.866 4 5.442 4 5c0-.917.9-1.667 2-1.667h12v3.334"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 5v10c0 .917.9 1.667 2 1.667h14v-3.334"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10c-.53 0-1.04.176-1.414.488-.375.313-.586.737-.586 1.179 0 .916.9 1.666 2 1.666h4V10h-4z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Wallet;
