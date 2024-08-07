import { Tabs } from "expo-router";
import {
  CollectionIcon,
  FantasySectionIcon,
  HomeIcon,
  ShopIcon,
  TradeIcon,
} from "../../components/Icons";
import { Utils } from "../../lib/Utils";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Utils.MainColor,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 5,
          height: 55,
          backgroundColor: "#fff",
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarIcon: ({ color }) => <CollectionIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="race"
        options={{
          title: "Race",
          tabBarIcon: ({ color }) => <FantasySectionIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <ShopIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: "Trades",
          tabBarIcon: ({ color }) => <TradeIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
