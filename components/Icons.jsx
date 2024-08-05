import { Entypo } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function HomeIcon(props) {
  return <Entypo name="home" size={24} color="black" {...props} />;
}

export function InfoIcon(props) {
  return <Entypo name="info-with-circle" size={24} color="black" {...props} />;
}

export function CollectionIcon(props) {
  return (
    <MaterialCommunityIcons name="cards" size={24} color="black" {...props} />
  );
}

export function FantasySectionIcon(props) {
  return (
    <FontAwesome6 name="flag-checkered" size={24} color="black" {...props} />
  );
}

export function ShopIcon(props) {
  return <Feather name="dollar-sign" size={24} color="black" {...props} />;
}

export function TradeIcon(props) {
  return (
    <MaterialIcons name="compare-arrows" size={24} color="black" {...props} />
  );
}
