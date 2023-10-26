import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WelcomeScreenStyle } from "../styles/WelcomeScreen";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  // Define a shared value for the animation
  const translateY = useSharedValue(0);

  // Define an animated style for the Text component
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value * 60 }],
    };
  });

  useEffect(() => {
    // Start the animation when the component mounts
    translateY.value = withRepeat(
      withSpring(1, { damping: 8, stiffness: 40 }),
      -1, // -1 means repeat indefinitely
      true // Set the forward direction
    );

    // Navigate to HomeTab after the animation completes
    setTimeout(() => {
      navigation.navigate("HomeTab");
    }, 3000);
  }, [navigation, translateY]);

  return (
    <View style={WelcomeScreenStyle.container}>
      <Text>You are navigating to Home ...</Text>
      <Animated.Text style={[WelcomeScreenStyle.h1, animatedStyle]}>
        Welcome to Orchids Lover
      </Animated.Text>
      <View style={WelcomeScreenStyle.textContainer}>
        <Text>a project from Assignment 3 of MMA301</Text>
        <Text>ThongNT - SE160850</Text>
      </View>
    </View>
  );
}
