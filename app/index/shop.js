import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Screen } from "../../components/Screen";
import { Utils } from "../../lib/Utils";
import useLoadFonts from "../../hooks/useLoadFonts";
import { InfoIcon } from "../../components/Icons";

export default function Race() {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }
  return (
    <Screen>
      <View style={styles.screen}>
        <Text style={styles.title}>Shop Page</Text>
        <View style={[styles.container, { flexDirection: "row" }]}>
          <View style={{ flexDirection: "column", width: "30%" }}>
            <Text
              style={{
                color: "white",
                fontFamily: "FormulaBold",
                fontSize: 15,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              HARD
            </Text>
            <Image
              source={require("../../assets/hardpack.png")}
              style={{
                width: 70,
                height: 124,
                alignSelf: "center",
                marginTop: -10,
                marginBottom: -5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "70%",
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%", flexDirection: "row" }}>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    fontFamily: "FormulaRegular",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  100
                </Text>
                <Image
                  source={require("../../assets/coin.png")}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              </View>

              <View style={{ width: "30%" }}>
                <Pressable onPress={() => alert("Información del sobre")}>
                  <InfoIcon style={{ color: "white", marginLeft: 45 }} />
                </Pressable>
              </View>
            </View>
            <Pressable onPress={() => alert("Comprado")}>
              <View
                style={{
                  backgroundColor: "white",
                  marginHorizontal: 10,
                  marginTop: 25,
                  borderRadius: 50,
                  height: 45,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: Utils.SecondaryColor,
                    fontFamily: "FormulaBold",
                    fontSize: 15,
                    alignSelf: "center",
                  }}
                >
                  COMPRAR
                </Text>
              </View>
            </Pressable>
          </View>
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
