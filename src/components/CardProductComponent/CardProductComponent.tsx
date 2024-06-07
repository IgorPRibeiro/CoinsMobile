import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./stylesCardProductComponent";
import TextComponent from "../TextComponent/TextComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { formatToBRL } from "brazilian-values";
import Cart from "../../../assets/icons/Cart";
import userStore from "@/store/userStore";
import COLORS from "@/constants/colors";
import productStore, { IProduct } from "@/store/productStore";

export interface ICardProductComponent {
  item: IProduct
  action: (item:IProduct ) => void;
  balanceUser: number;
}

const CardProductComponent = ({
  action,
  item,
  balanceUser,
}: ICardProductComponent) => {
  const verifyIfUserCanByProduct = () => {
    let _userBalance = +balanceUser;
    let _percentage = (+item.value * 100) / _userBalance / 100;
    return _percentage > 0.8;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.imageContainer}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <View>
          <TextComponent size={20} text={item.name} theme="dark" type="bold" />
          <TextComponent
            text={`${item.units} unidades`}
            type="disable"
            theme="gray"
            size={10}
          />
        </View>
        <View style={styles.buyContainer}>
          <View style={{ width: "70%" }}>
            <TextComponent text={`Lc`} theme="primary" size={12} />
            <TextComponent
              text={formatToBRL(+item.value ?? 0)}
              theme="primary"
              size={16}
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.buyButton,
              backgroundColor:
                verifyIfUserCanByProduct() || item.sale
                  ? COLORS.neutral.gray100
                  : COLORS.primary.roxo,
            }}
            disabled={verifyIfUserCanByProduct() || item.sale}
            onPress={() => action(item)}
          >
            <Cart />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardProductComponent;
