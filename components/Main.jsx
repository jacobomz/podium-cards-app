import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { getDrivers } from "../lib/drivers";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedDriverCard } from "./DriverCard";
import { Logo } from "./Logo";
import { Screen } from "./Screen";

export function Main() {
  const [drivers, setDrivers] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);

  useFonts({
    FormulaRegular: require("../assets/fonts/formularegular.ttf"),
    FormulaBold: require("../assets/fonts/formulaboldweb.ttf"),
  });

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
