import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrchidDetail from "../screens/OrchidDetail";
import FavoriteScreen from "../screens/FavoriteScreen";
import { styleScreenOptionsStack } from "../styles/CommonStyles";
import { OrchidsList } from "../screens/OrchidsList";

const Stack = createNativeStackNavigator();
const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={styleScreenOptionsStack}>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerTitle: "Your favorite" }}
      />
      <Stack.Screen
        name="FavoriteOrchidDetail"
        component={OrchidDetail}
        options={{ headerTitle: "Detail" }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
