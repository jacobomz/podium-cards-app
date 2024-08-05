import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { getDriverByNumber } from "../lib/drivers";
import { ActivityIndicator } from "react-native";

export default function DriverDetail() {
  const { driverNumber } = useLocalSearchParams();
  const [driver, setDriver] = useState(null);

  useFonts({
    FormulaRegular: require("../assets/fonts/formularegular.ttf"),
    FormulaBold: require("../assets/fonts/formulaboldweb.ttf"),
  });

  useEffect(() => {
    if (driverNumber) {
      getDriverByNumber(driverNumber).then(setDriver);
    }
  }, [driverNumber]);

  if (!driver) {
    return (
      <Screen>
        <ActivityIndicator color={"#fff"} size={"large"} />
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: driver.team_colour,
            fontFamily: "FormulaBold",
          },
          headerTintColor: "#fff",
          headerTitle: driver
            ? `${driver.first_name} ${driver.last_name}`
            : "Cargando...",
        }}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: driver.headshot_url }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
        <Text style={[styles.title, { marginTop: 20 }]}>Driving for</Text>
        <Text
          style={{
            color: driver.team_colour,
            fontSize: 20,
            fontFamily: "FormulaBold",
          }}
        >
          {driver.team_name}
        </Text>
        <Link href="/" style={styles.link}>
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "FormulaBold",
  },
  link: {
    marginTop: 20,
    color: "lightblue",
  },
});
