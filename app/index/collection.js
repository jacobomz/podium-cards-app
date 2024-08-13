import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Screen } from "../../components/Screen";
import useLoadFonts from "../../hooks/useLoadFonts";
import DropdownComponent from "../../components/DropdownComponent";
import {
  CoreCollectionIcon,
  EventsIcon,
  SpecialCardsIcon,
} from "../../components/ExternalIcons";
import { CollectionCard } from "../../components/CollectionCard";

export default function Race() {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Colección</Text>
        <DropdownComponent />
        <CollectionCard
          props={{
            title: "Core",
            icon: <CoreCollectionIcon style={{ padding: 10 }} />,
            completedMessage: "0/5 Completado",
          }}
        />
        <CollectionCard
          props={{
            title: "Eventos",
            icon: <EventsIcon style={{ padding: 10 }} />,
            completedMessage: "Próximamente...",
          }}
        />
        <CollectionCard
          props={{
            title: "Especiales",
            icon: <SpecialCardsIcon style={{ padding: 10 }} />,
            completedMessage: "Próximamente...",
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 16,
    fontFamily: "FormulaBold",
    marginVertical: 10,
  },
});
