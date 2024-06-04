import COLORS from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  iconContainer: {
    width: "10%",
  },
  inputContainer: {
    width: "90%",
    color: COLORS.neutral.black,
    fontWeight: "bold",
    fontSize: 16
  }
})

export default styles
