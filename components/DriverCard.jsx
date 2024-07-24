import { useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, Animated } from "react-native";

export function DriverCard({ driver, index }) {
  return (
    <View
      key={driver.driver_number}
      style={[
        styles.card,
        {
          backgroundColor: driver.team_colour,
          marginTop: index === 0 ? 60 : 5,
        },
      ]}
    >
      <Text style={[styles.boldFormulaText, { fontSize: 22 }]}>
        {driver.driver_number}
      </Text>
      <Image source={{ uri: driver.headshot_url }} style={styles.driverPic} />
      <View>
        <Text style={styles.regularFormulaText}>{driver.first_name}</Text>
        <Text style={styles.boldFormulaText}>{driver.last_name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "top",
        }}
      >
        <Text style={styles.regularFormulaText}>Driving for</Text>
        <Text style={styles.boldFormulaText}>{driver.team_name}</Text>
      </View>
    </View>
  );
}

export function AnimatedDriverCard({ driver, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <DriverCard driver={driver} index={index} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  boldFormulaText: {
    color: "#fff",
    fontFamily: "FormulaBold",
  },
  regularFormulaText: {
    color: "#fff",
    fontFamily: "FormulaRegular",
  },
  driverPic: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
