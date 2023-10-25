import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OrchidsList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Go to Orchid Detail" onPress={() => navigation.navigate('OrchidDetail')} />
    </View>
  )
}

export default OrchidsList