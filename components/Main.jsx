import { Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { getDrivers } from "../lib/drivers";
import { useFonts } from "expo-font";
import { AnimatedDriverCard } from "./DriverCard";
import { Screen } from "./Screen";

export function Main() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);

  /* eslint-disable */
  useFonts({
    "FormulaRegular": require("../assets/fonts/formularegular.ttf"),
    "FormulaBold": require("../assets/fonts/formulaboldweb.ttf"),
  });
  /* eslint-enable */

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Screen>
      {
        <Animated.FlatList
          data={drivers}
          keyExtractor={(driver) => driver.driver_number}
          renderItem={({ item, index }) => (
            <AnimatedDriverCard driver={item} index={index} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
        />
      }
    </Screen>
  );
}
