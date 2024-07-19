import { Text, View, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getDrivers } from "../lib/drivers";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
          <View
            key={driver.driver_number}
            style={{
              backgroundColor: driver.team_colour,
              padding: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "FormulaBold",
              }}
            >
              {driver.driver_number}
            </Text>
            <Image
              source={{ uri: driver.headshot_url }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "FormulaRegular",
                }}
              >
                {driver.first_name}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "FormulaBold",
                }}
              >
                {driver.last_name}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
