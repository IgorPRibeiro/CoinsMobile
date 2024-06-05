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
  title: string;
  onPress: () => void;
  type?: "disablad" | "loading" | "default";
}

const ButtonComponent = ({
  onPress,
  title,
  type = "default",
}: IButtonComponent) => {
  return (
    <TouchableOpacity
      disabled={type === "disablad" || type === "loading" ? true : false}
      style={{
        ...styles.container,
        backgroundColor:
          type === "disablad" || type === "loading"
            ? COLORS.neutral.gray100
            : COLORS.primary.roxo,
      }}
      onPress={() => onPress()}
    >
      {type === "loading" ? (
        <ActivityIndicator color={COLORS.primary.roxo} />
      ) : (
        <TextComponent text={title} type="medium" />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
