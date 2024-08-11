import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, View, Text } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import { LogoutIcon } from "./Icons";
import useLoadFonts from "../hooks/useLoadFonts";

export default function DrawerContent(props) {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <DrawerContentScrollView {...props} scrollEnabled={true}>
        <View style={{ marginBottom: 20 }}>
          <Image
            source={require("../assets/astonmartin.jpg")}
            style={{
              width: "100%",
              height: 140,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../assets/sainz.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 3,
              alignSelf: "center",
              marginTop: -50,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 16,
              marginBottom: 5,
              fontFamily: "FormulaBold",
            }}
          >
            username
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label={"Cerrar sesión"}
        labelStyle={{
          color: "#8B0000",
          marginLeft: -20,
        }}
        icon={() => <LogoutIcon />}
        onPress={() => alert("Cerrar sesión")}
        style={{
          borderTopWidth: 2,
          borderTopColor: "#ccc",
          marginBottom: 30,
          marginTop: 30,
        }}
      />
    </View>
  );
}
