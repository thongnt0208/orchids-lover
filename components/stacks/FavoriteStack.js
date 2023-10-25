import React from "react";import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrchidDetail from "../screens/OrchidDetail";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="FavoriteOrchidDetail" component={OrchidDetail} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
