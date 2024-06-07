import {  Text, TextProps, TextStyle } from "react-native";
import React from "react";
import styles from "./styleTextComponent";
import COLORS from "@/constants/colors";

interface ITextComponent extends Omit<TextProps, "style"> {
  type?: "bold" | "regular" | "medium" | "bold" | "disable";
  text: string;
  size?: number;
  theme?: "light" | "dark" | "gray" | "primary" ;
}

const TextComponent = ({
  type,
  text,
  size,
  theme,
  ...props
}: ITextComponent) => {

  const removeRs = (value: string) => {
    return value.replaceAll("R$ ", "")
  }

  const renderColor = () => {
    switch (theme) {
      case "dark":
        return COLORS.neutral.gray900;
      case "light":
        return COLORS.neutral.gray50;
      case "gray":
        return COLORS.neutral.gray100;
      case "primary":
        return COLORS.primary.roxo;
      default:
        return COLORS.neutral.gray50;
    }
  };

  const typeStyleComponent = (): TextStyle => {
    switch (type) {
      case "bold":
        return {
          fontFamily: "Sora-Bold",
          fontSize: size ?? 22,
          fontWeight: "bold",
        };
      case "medium":
        return {
          fontFamily: "Sora-Medium",
          fontSize: size ?? 22,
          fontWeight: "600",
        };
      case "regular":
        return {
          fontFamily: "Sora-Regular",
          fontSize: size ?? 22,
        };
     
      default:
        return {
          fontFamily: "Sora-Regular",
          fontSize: size ?? 22,
        };
    }
  };

  return (
    <Text
      {...props}
      style={{ ...styles.text, ...typeStyleComponent(), color: renderColor() }}
      numberOfLines={2}
    >
      {removeRs(text)}
    </Text>
  );
};

export default TextComponent;
