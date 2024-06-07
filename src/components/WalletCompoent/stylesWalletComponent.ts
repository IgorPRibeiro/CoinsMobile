import COLORS from "@/constants/colors";
import { deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
    flexDirection: "row",
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.primary.white,
    alignSelf: "center",
    marginTop: -24,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    alignItems: "center"
  },
  textContainer: {
    marginLeft: 6
  }
})

export default styles