import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import People from "../../../assets/icons/People";
import styles from "./styleTextInputComponent";
import COLORS from "@/constants/colors";

interface ITextInputComponent {
  changeValue: (value: string) => void;
  Icon?: () => JSX.Element;
  label?: string;
}

const TextInputComponent = ({
  Icon,
  changeValue,
  label,
}: ITextInputComponent) => {
  const [valueInput, setValueInput] = useState<string>("");

  const handleChangeTextValue = (value: string) => {
    changeValue(value)
    setValueInput(value)
  }

  return (
    <TouchableOpacity style={styles.container}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      )}

      <TextInput
        style={styles.inputContainer}
        value={valueInput}
        onChange={(value) => handleChangeTextValue(value.nativeEvent.text)}
        placeholderTextColor={COLORS.neutral.black}
        placeholder={label}
      />
    </TouchableOpacity>
  );
};

export default TextInputComponent;
