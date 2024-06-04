import { Alert, Pressable, View } from "react-native";
import React, { useEffect } from "react";
import TextComponent from "../TextComponent/TextComponent";
import styles from "./styleLoginComponent";
import TextInputComponent from "../TextInputComponent/TextInputComponent";
import People from "../../../assets/icons/People";
import Password from "../../../assets/icons/Password";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


interface ILoginComponent {
  initAnimation: boolean
}

const LoginComponent = ({initAnimation}: ILoginComponent) => {

  const opacityValue = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }));


  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (initAnimation) {
      timeoutId = setTimeout(() => {
        opacityValue.value = withTiming(1, { duration: 120 })
      }, 600);
    }
   

    return () => clearTimeout(timeoutId);
  }, [initAnimation]);


  return (
    <Animated.View style={[styles.container,animatedStyles]}>
      <View style={styles.inputsContainer}>
        <TextComponent theme="dark" text="Login" type="bold" size={28} />
        <View style={styles.inputContainer}>
          <TextInputComponent
            changeValue={(e) => console.log(e)}
            label="E-mail"
            Icon={() => <People />}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            changeValue={(e) => console.log(e)}
            label="Senha"
            Icon={() => <Password />}
          />
        </View>
        <View style={styles.buttonLoginContainer}>
          <ButtonComponent
            onPress={() => console.log("first")}
            title="Entrar"
          />
        </View>
      </View>
      <Pressable
        style={styles.registerContainer}
        onPress={() =>
          Alert.alert(
            "Listra Coins",
            "Opa! Em breve teremos essa funcionalidade no App."
          )
        }
      >
        <TextComponent
          text="Registrar-se   |   Resetar senha"
          theme="gray"
          size={12}
        />
      </Pressable>
    </Animated.View>
  );
};

export default LoginComponent;
