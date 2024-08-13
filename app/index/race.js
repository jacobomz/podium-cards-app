import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Screen } from "../../components/Screen";
import useLoadFonts from "../../hooks/useLoadFonts";
import { Utils } from "../../lib/Utils";
import SelectCard from "../../components/SelectCard";
import PointsEarned from "../../components/PointsEarned";

export default function Race() {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <Screen>
      <View style={styles.screen}>
        <Text style={styles.title}>Race Page</Text>
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "FormulaBold",
              marginBottom: 5,
              marginTop: 10,
              color: "white",
              fontSize: 14,
            }}
          >
            Grand Prix Name
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "FormulaBold",
              marginBottom: 20,
              marginTop: 5,
              color: "white",
              fontSize: 14,
            }}
          >
            11 dias 23 horas 59 minutos 07 seg
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 20,
              marginHorizontal: 5,
            }}
          >
            <SelectCard order={"driver1"} driverName="Piloto 1" />
            <SelectCard order={"driver2"} driverName="Piloto 2" />
            <SelectCard order={"team"} driverName="Escudería" />
          </View>
        </View>
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "FormulaBold",
              marginBottom: 20,
              marginTop: 10,
              color: "white",
              fontSize: 14,
            }}
          >
            Puntos ganados en la carrera anterior
          </Text>
          <PointsEarned order="driver1" name="VER" rarity="Soft" points="100" />
          <PointsEarned
            order="driver2"
            name="ALO"
            rarity="Medium"
            points="70"
          />
          <PointsEarned
            order="team"
            name="Aston Martin"
            rarity="Hard"
            points="260"
            lastMargin={10}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flexDirection: "column",
    backgroundColor: Utils.SecondaryColor,
    width: "90%",
    borderRadius: 20,
    marginBottom: 25,
    marginTop: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 16,
    fontFamily: "FormulaBold",
  },
});
