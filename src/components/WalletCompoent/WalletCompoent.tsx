import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./stylesWalletComponent";
import Wallet from "../../../assets/icons/Wallet";
import COLORS from "@/constants/colors";
import TextComponent from "../TextComponent/TextComponent";
import userStore from "@/store/userStore";
import { formatToBRL } from 'brazilian-values';

const WalletCompoent = () => {
  const { user } = userStore();

  return (
    <View style={styles.container}>
      <Wallet color={COLORS.primary.roxo} size="small" />
      <View style={styles.textContainer}>
        <TextComponent size={16} text={`Lc ${formatToBRL(user?.balance ?? 0)}`} theme="dark" type="bold" />
      </View>
    </View>
  );
};

export default WalletCompoent;
