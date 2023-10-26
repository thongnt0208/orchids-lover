import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';
import { greenBg2, greenDefault, white } from '../../const/colors';

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Favorite') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarInactiveBackgroundColor: greenBg2,
            tabBarActiveBackgroundColor: greenDefault,
            tabBarActiveTintColor: white,
            tabBarInactiveTintColor: 'black',
            headerShown: false,
          })}
      >
        <Tab.Screen name="Home" component={HomeStack}></Tab.Screen>
        <Tab.Screen name="Favorite" component={FavoriteStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomeTab