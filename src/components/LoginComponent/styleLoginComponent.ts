import COLORS from "@/constants/colors";
import { deviceHeight } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: deviceHeight * 0.6,
    backgroundColor: COLORS.neutral.gray50,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 24,
    justifyContent: "space-evenly",
  },

  inputsContainer: { flex: 2, alignItems: "center" },

  inputContainer: { width: "100%", marginVertical: 12 },

  buttonLoginContainer: {
    marginTop: 32
  },

  registerContainer: {flex: 1,justifyContent: "center", padding: 12},


});

export default styles;
