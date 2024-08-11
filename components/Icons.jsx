import { Entypo } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export function HomeIcon(props) {
  return <FontAwesome6 name="house" size={20} color="black" {...props} />;
}

export function InfoIcon(props) {
  return <Entypo name="info-with-circle" size={24} color="black" {...props} />;
}

export function CollectionIcon(props) {
  return (
    <MaterialCommunityIcons name="cards" size={28} color="black" {...props} />
  );
}

export function FantasySectionIcon(props) {
  return (
    <FontAwesome6 name="flag-checkered" size={24} color="black" {...props} />
  );
}

export function ShopIcon(props) {
  return <FontAwesome name="dollar" size={24} color="black" {...props} />;
}

export function TradeIcon(props) {
  return (
    <MaterialIcons name="compare-arrows" size={24} color="black" {...props} />
  );
}

export function SupportIcon(props) {
  return (
    <MaterialIcons name="contact-support" size={24} color="black" {...props} />
  );
}

export function PolYPrivIcon(props) {
  return (
    <MaterialIcons name="privacy-tip" size={24} color="black" {...props} />
  );
}

export function LogoutIcon(props) {
  return <AntDesign name="logout" size={24} color="#8B0000" {...props} />;
}

export function SeasonIcon(props) {
  return <AntDesign name="calendar" size={24} color="black" {...props} />;
}

export function RightArrowIcon(props) {
  return <AntDesign name="right" size={60} color="white" {...props} />;
}
