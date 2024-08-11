import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useLoadFonts() {
  /* eslint-disable */
  const [loaded, error] = useFonts({
    "FormulaRegular": require("../assets/fonts/formularegular.ttf"),
    "FormulaBold": require("../assets/fonts/formulaboldweb.ttf"),
    "GeistSemiBold": require("../assets/fonts/geistsemibold.otf"),
    "GeistRegular": require("../assets/fonts/geistregular.otf"),
  });
  /* eslint-enable */

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return { loaded, error };
}
