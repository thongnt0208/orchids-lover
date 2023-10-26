import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("HomeTab");
  }, 3000);
  return (
    <View>
      <Text>Welcome to Orchids Lover</Text>
      <Text>a project from Assignment 3 of MMA301</Text>
      <Text>ThongNT - SE160850</Text>
      <Text>You are navigating to Home ...</Text>
    </View>
  );
}
