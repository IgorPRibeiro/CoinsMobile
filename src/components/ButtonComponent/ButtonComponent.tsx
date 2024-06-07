import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TextComponent from "../TextComponent/TextComponent";
import styles from "./stylesButtonComponent";
import COLORS from "@/constants/colors";

interface IButtonComponent {
  title?: string;
  onPress: () => void;
  type?: "disablad" | "loading" | "default";
  theme?: "light" | "dark"
  size?: "small" | "large"
  Icon?: () => JSX.Element
}

const ButtonComponent = ({
  onPress,
  title,
  type = "default",
  theme,
  size,
  Icon
}: IButtonComponent) => {

  const colorThemeButton = () => {
    switch (theme) {
      case "dark":
        return COLORS.neutral.gray900
      case "light": 
        return COLORS.primary.roxo

      default:
        return COLORS.primary.roxo
    }
  }

  const sizeButton = () => {
    switch (size) {
      case "large":
        return {
          vertical: 8,
          horizontal: 24
        }
      case "small": 
        return {
          vertical: 2,
          horizontal: 8
        }
      default:
        return {
          vertical: 8,
          horizontal: 8
        }
    }
  }

  return (
    <TouchableOpacity
      disabled={type === "disablad" || type === "loading" ? true : false}
      style={{
        ...styles.container,
        paddingVertical: sizeButton().vertical,
        paddingHorizontal: sizeButton().horizontal,
        backgroundColor:
          type === "disablad" || type === "loading"
            ? COLORS.neutral.gray100
            : colorThemeButton(),
      }}
      onPress={() => onPress()}
    >
      {type === "loading" ? (
        <ActivityIndicator color={COLORS.primary.roxo} />
      ) : title && <TextComponent text={title} type="medium" size={14} />}
      {Icon && <Icon />}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
