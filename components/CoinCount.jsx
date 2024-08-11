import React from "react";
import { View, Text, Image } from "react-native";
import useLoadFonts from "../hooks/useLoadFonts";

export default function CoinCount() {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        width: "100%",
        justifyContent: "flex-end",
      }}
    >
      <Text
        style={{
          fontSize: 19,
          color: "#fff",
          fontFamily: "FormulaRegular",
        }}
      >
        200
      </Text>
      <Image
        source={require("../assets/coin.png")}
        style={{ width: 25, height: 25, marginLeft: 5 }}
      />
    </View>
  );
}
