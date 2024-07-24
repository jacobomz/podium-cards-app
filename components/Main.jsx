import { View, FlatList, StyleSheet, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { getDrivers } from "../lib/drivers";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedDriverCard } from "./DriverCard";
import { Logo } from "./Logo";

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
  const logoOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          { top: insets.top, opacity: logoOpacity },
        ]}
      >
        <Logo style={{ margin: 10 }} />
      </Animated.View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0)",
  },
});
