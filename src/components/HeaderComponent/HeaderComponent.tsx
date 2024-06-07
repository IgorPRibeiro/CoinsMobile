import { View, Text } from "react-native";
import React from "react";
import styles from "./headerComponentStyles";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import userStore from "@/store/userStore";
import useNotification from "@/hooks/useNotification";
import productStore from "@/store/productStore";
import { useNavigation } from 'expo-router';
import { router } from 'expo-router';

const HeaderComponent = () => {
  const { clearProducts } = productStore();
  const { user,clearUser } = userStore();
  const navigation = useNavigation()

  const logOut = () => {
    clearProducts()
    clearUser()
    router.replace("/")
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, 
        <Text style={styles.textName}>{" "}{user?.name}</Text>
      </Text>
      <ButtonComponent
        title="Sair"
        size="small"
        theme="dark"
        onPress={() => logOut()}
      />
    </View>
  );
};

export default HeaderComponent;
