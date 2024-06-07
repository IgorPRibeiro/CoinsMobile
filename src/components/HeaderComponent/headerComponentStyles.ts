import COLORS from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: deviceHeight * 0.16,
    width: deviceWidth,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    color: COLORS.neutral.gray50,
    fontWeight: "400",
    fontFamily: "Sora-Regular",
  },

  
  textName: {
    color: COLORS.neutral.gray50,
    fontWeight: "bold",
    fontFamily: "Sora-Regular",
  },
  

})

export default styles