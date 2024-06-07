import COLORS from "@/constants/colors";
import { deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top:0,
    paddingVertical: 32,
    paddingHorizontal: 22,
    width: deviceWidth,
    alignItems: "baseline",
    justifyContent: "flex-end",
    backgroundColor: COLORS.primary.white,
    zIndex: 1
  },

  title: {
    fontFamily: "Sora-Regular",
    color: COLORS.neutral.gray100,
    fontWeight: "400",
    fontSize: 16
  },

  titleContent: {
    fontFamily: "Sora-Regular",
    color: COLORS.neutral.gray100,
    fontWeight: "bold",
    fontSize: 16
  },

  subtitle: {
    fontFamily: "Sora-Regular",
    color: COLORS.neutral.gray100,
    fontWeight: "400",
    fontSize: 12
  }

})

export default styles