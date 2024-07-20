import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getDrivers } from "../lib/drivers";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DriverCard } from "./DriverCard";

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

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView>
        {drivers.map((driver) => (
          <DriverCard key={driver.driver_number} driver={driver} />
        ))}
      </ScrollView>
    </View>
  );
}
