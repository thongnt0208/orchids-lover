import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrchidDetail from "../screens/OrchidDetail";
import OrchidsList from "../screens/OrchidsList";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OrchidsList" component={OrchidsList} />
      <Stack.Screen name="OrchidDetail" component={OrchidDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
