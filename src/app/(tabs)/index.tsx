import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  Platform,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import userStore from "@/store/userStore";
import styles from "@/styles/homeStyles";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import WalletCompoent from "@/components/WalletCompoent/WalletCompoent";
import useNotification from "@/hooks/useNotification";
import NotificationComponent from "@/components/NotificationComponent/NotificationComponent";
import productStore, { IProduct } from "@/store/productStore";
import { getAllProducts, getAllProducts2 } from "@/service/product";
import CardProductComponent, {
  ICardProductComponent,
} from "@/components/CardProductComponent/CardProductComponent";

const Home = () => {
  const { setProducts, products ,productBuy } = productStore();
  const {user,buyItem} = userStore()
  const { notification,sendPushNotification } = useNotification();
  const [refresing, setRefresing] = useState<boolean>(false);

  const getAllProductsList = async () => {
    try {
      let respose = await getAllProducts();

      if (respose.data) {
        respose.data = respose.data.map(item => {
          item.id = Math.random().toString(36).substr(2, 9);
          return item
        })
        setProducts(respose.data);
      }
    } catch (error) {
      console.log("Houve um erro ao carregar os produtos:", error);
      Alert.alert(
        "Houve um erro ao carregar os produtos:",
        error?.message ?? ""
      );
    }
  };


  const handleRefresh = () => {
    setRefresing(true);
  };

  const getMoreProducts = async () => {
    try {
      let respose = await getAllProducts2();

      if (respose.data) {
        respose.data = respose.data.map(item => {
          item.id = Math.random().toString(36).substr(2, 9);
          return item
        })
        setProducts(respose.data);
      }
    } catch (error) {
      console.log("Houve um erro ao carregar os produtos:", error);
      Alert.alert(
        "Houve um erro ao carregar os produtos:",
        error?.message ?? ""
      );
    }
  };

  const addProduct = (item:IProduct) => {
    buyItem(item.value)
    productBuy(item.id)
    sendPushNotification(item.name)
  }

  const renderProductsList = ({ item }: ListRenderItemInfo<IProduct>) => {
    return (
      <View style={{ margin: 8 }}>
        <CardProductComponent
          action={addProduct}
          item={item}
          balanceUser={user?.balance ?? 1}
        />
      </View>
    );
  };


  useLayoutEffect(() => {
    getAllProductsList();

    return () => {};
  }, []);


  return (
    <View style={styles.page}>
      {notification && (
        <NotificationComponent
          title={notification.request.content.body ?? ""}
        />
      )}
      <HeaderComponent />

      <View style={styles.container}>
        <WalletCompoent />
        <View style={{height: "80%"}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 22,
          }}
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={renderProductsList}
          numColumns={2}
          refreshing={refresing}
          onRefresh={() => handleRefresh()}
          onEndReached={() => getMoreProducts()}
          onEndReachedThreshold={0.5}
        />
      </View>
        </View>
       
    </View>
  );
};

export default Home;
