import COLORS from "@/constants/colors";
import { deviceHeight } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 157,
    borderRadius: 16,
    height: deviceHeight * 0.28,
    overflow:"hidden" ,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    backgroundColor: COLORS.primary.white,
  },
  imageContainer: {
    flex: 1,
    zIndex: -1,
    backgroundColor: "transparent"
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between"
  },
  buyContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"

  },
  buyButton: {
    width: 32, 
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
