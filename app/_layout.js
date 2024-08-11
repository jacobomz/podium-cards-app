import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { HomeIcon, PolYPrivIcon, SupportIcon } from "../components/Icons";
import { Utils } from "../lib/Utils";
import { Image } from "react-native";
import CoinCount from "../components/CoinCount";
import { QualyIcon } from "../components/ExternalIcons";
import DrawerContent from "../components/DrawerContent";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerInactiveTintColor: "#000",
          drawerActiveBackgroundColor: Utils.LightBlue,
          drawerActiveTintColor: "#fff",
          drawerLabelStyle: { marginLeft: -20 },
          headerStyle: {
            backgroundColor: Utils.MainColor,
            borderColor: Utils.MainColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 75, height: 75 }}
              resizeMode="contain"
            />
          ),
          headerRight: () => <CoinCount />,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />

        <Drawer.Screen
          name="clasificacion"
          options={{
            drawerLabel: "Clasificación",
            drawerIcon: ({ color }) => <QualyIcon color={color} />,
          }}
        />

        <Drawer.Screen
          name="polypriv"
          options={{
            drawerLabel: "Politica y privacidad",
            drawerIcon: ({ color }) => <PolYPrivIcon color={color} />,
          }}
        />

        <Drawer.Screen
          name="soporte"
          options={{
            drawerLabel: "Soporte",
            drawerIcon: ({ color }) => <SupportIcon color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
