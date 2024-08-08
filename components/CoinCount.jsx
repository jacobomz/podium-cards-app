import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import * as SplashScreen from "expo-splash-screen";

export default function CoinCount() {
  /* eslint-disable */
  const [loaded, error] = useFonts({
    "FormulaRegular": require("../assets/fonts/formularegular.ttf"),
    "FormulaBold": require("../assets/fonts/formulaboldweb.ttf"),
  });
  /* eslint-enable */

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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
