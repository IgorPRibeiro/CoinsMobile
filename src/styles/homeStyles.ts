import COLORS from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: COLORS.primary.roxo,
  },

  container: {
    backgroundColor: COLORS.neutral.gray50,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    paddingHorizontal: 24,
    height: "100%",
  },
});

export default styles;
