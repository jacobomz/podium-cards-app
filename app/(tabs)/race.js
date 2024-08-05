import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Screen } from "../../components/Screen";

export default function Race() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Race Page</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
