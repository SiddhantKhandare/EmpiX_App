import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FONTS } from "./fonts";

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },

  text: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },

  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
