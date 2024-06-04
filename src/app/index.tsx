import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/styles/splashStyle";
import images from "@/constants/images";
import Wallet from "../../assets/icons/Wallet";
import { StatusBar } from "expo-status-bar";
import COLORS from "@/constants/colors";
import TextComponent from "@/components/TextComponent/TextComponent";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { deviceHeight } from "@/constants/device";
import LoginComponent from "@/components/LoginComponent/LoginComponent";

const Splash = () => {
  const [initAnimation, setInitAnimation] = useState(false);
  const offset = useSharedValue<number>(0);
  const opacityValue = useSharedValue<number>(1);

  const animatedLogoStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
    opacity: opacityValue.value,
  }));



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInitAnimation(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (initAnimation) {
      offset.value = withSpring(-(deviceHeight / 2 - 100));
      opacityValue.value = withTiming(0.5, { duration: 50 })
    }

    return () => {};
  }, [initAnimation]);

  return (
    <ImageBackground source={images.coinBackGround} style={styles.background}>
      <StatusBar />

      <View style={styles.page}>
        <Animated.View style={[{ alignItems: "center" }, animatedLogoStyles]}>
          <Wallet />
          <View style={styles.textContainer}>
            <TextComponent text="Listra Coins" type="bold" size={28} />
          </View>
        </Animated.View>
      </View>

      <LoginComponent initAnimation={initAnimation} />
    </ImageBackground>
  );
};

export default Splash;
