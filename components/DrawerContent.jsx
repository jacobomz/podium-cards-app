import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Image, View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import { Utils } from "../lib/Utils";

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#303030" }}>
      <DrawerContentScrollView {...props} scrollEnabled={true}>
        <View style={{ backgroundColor: Utils.LightBlue, marginBottom: 20 }}>
          <Image
            source={require("../assets/AMR24.jpg")}
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
              borderColor: Utils.LightBlue,
              borderWidth: 4,
              alignSelf: "center",
              marginTop: -50,
              marginBottom: 10,
            }}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Cerrar sesión"} />
      </DrawerContentScrollView>
    </View>
  );
}
