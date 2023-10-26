import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeTab from "./components/stacks/HomeTab";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import { Alert, BackHandler } from "react-native";
import { useEffect } from "react";
import { bgDefault, greenDefault } from "./const/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Đợi đã!", "Bạn muốn thoát khỏi ứng dụng?", [
        {
          text: "Từ chối",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Thoát", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
