import { View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Go to Orchids List" onPress={() => navigation.navigate('OrchidsList')} />
    </View>
  )
}

export default HomeScreen