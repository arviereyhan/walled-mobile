import { createStackNavigator } from "@react-navigation/stack";
import {View} from 'react-native'

const Stack = createStackNavigator();

export default function Header() {
  return (
    <View
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
}
