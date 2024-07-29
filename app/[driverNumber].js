import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getDriverByNumber } from "../lib/drivers";
import { ActivityIndicator } from "react-native";

export default function DriverDetail() {
  const { driverNumber } = useLocalSearchParams();
  const [driver, setDriver] = useState(null);

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
          headerStyle: { backgroundColor: driver.team_colour },
          headerTintColor: "#fff",
          headerTitle: `${driver.first_name} ${driver.last_name}`,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          Detalle del piloto con numero {driverNumber}
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
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "lightblue",
  },
});
