import { Alert, Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import TextComponent from "../TextComponent/TextComponent";
import styles from "./styleLoginComponent";
import TextInputComponent from "../TextInputComponent/TextInputComponent";
import People from "../../../assets/icons/People";
import Password from "../../../assets/icons/Password";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validateLoginFields";
import { login } from "@/service/user";
import { router } from "expo-router";
import userStore from "@/store/userStore";

type ILoginComponent = {
  initAnimation: boolean;
};

export type IDataLogin = {
  email: string;
  password: string;
};

const LoginComponent = ({ initAnimation }: ILoginComponent) => {
  const { setUser } = userStore();
  const [canSubmitLogin, setCanSubmitLogin] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watchFields = watch(["email", "password"]);

  const opacityValue = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }));

  const loginUser = async (data: IDataLogin) => {
    try {
      let response = await login({
        email: data.email,
        passowrd: data.password,
      });

      if (response.data) {
        let token = response.data.token;

        // setUser({
        //   balance: response.data[0].balance,
        //   email: response.data[0].email,
        //   name: response.data[0].name,
        //   password: response.data[0].password,
        // });
        router.push("(tabs)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (initAnimation) {
      timeoutId = setTimeout(() => {
        opacityValue.value = withTiming(1, { duration: 120 });
      }, 600);
    }

    return () => clearTimeout(timeoutId);
  }, [initAnimation]);

  useEffect(() => {
    if (!watchFields.includes("")) {
      setCanSubmitLogin(true);
    }
  }, [watchFields]);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.inputsContainer}>
        <TextComponent theme="dark" text="Login" type="bold" size={28} />
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInputComponent
                  changeValue={onChange}
                  label="E-mail"
                  Icon={() => <People />}
                />
              </>
            )}
          />
          {errors.email && (
            <TextComponent
              theme="dark"
              text={errors?.email?.message ?? ""}
              type="bold"
              size={28}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInputComponent
                changeValue={onChange}
                label="Senha"
                Icon={() => <Password />}
                secureTextEntry={true}
              />
            )}
          />
          {errors.email && (
            <TextComponent
              theme="dark"
              text={errors?.email?.message ?? ""}
              type="bold"
              size={28}
            />
          )}
        </View>
        <View style={styles.buttonLoginContainer}>
          <ButtonComponent
            onPress={handleSubmit(loginUser)}
            title="Entrar"
            type={!canSubmitLogin ? "disablad" : "default"}
          />
        </View>
      </View>
      <View style={styles.registerContainer}>
        <TextComponent
          onPress={() =>
            Alert.alert(
              "Listra Coins",
              "Opa! Em breve teremos essa funcionalidade no App."
            )
          }
          text="Registrar-se   |   Resetar senha"
          theme="gray"
          size={12}
        />
      </View>
    </Animated.View>
  );
};

export default LoginComponent;
