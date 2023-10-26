import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrchidDetail from "../screens/OrchidDetail";
import OrchidsList from "../screens/OrchidsList";
import { greenBg2, greenDefault } from "../../const/colors";
import { styleScreenOptionsStack } from "../styles/CommonStyles";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={styleScreenOptionsStack}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{ headerTitle: "Home" }}/>
      <Stack.Screen name="OrchidsList" component={OrchidsList} 
        options={{ headerTitle: "All Orchids" }}/>
      <Stack.Screen
        name="OrchidDetail"
        component={OrchidDetail}
        options={{ headerTitle: "Detail" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
