
import COLORS from "@/constants/colors";
import { deviceHeight } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: deviceHeight
  },
  page: {
    justifyContent:"center",
    backgroundColor: COLORS.primary.roxo,
    alignItems: "center",
    opacity: 0.9,
    height: deviceHeight
  },
  textContainer: {
    paddingHorizontal: 24,
    paddingVertical: 7,
    backgroundColor: COLORS.neutral.black,
    borderRadius: 24
  }
})

export default styles