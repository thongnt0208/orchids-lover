import { View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const FavoriteScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
    <Button title="Go to Orchid Detail" onPress={() => navigation.navigate('FavoriteOrchidDetail')} />
  </View>
  )
}

export default FavoriteScreen