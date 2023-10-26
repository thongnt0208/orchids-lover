import { View, Button, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GetOrchidsList } from "../functions/GetOrchidsList";
import GridCard from "../common/GridCard";
import {AddOrchidToFavorite} from "../functions/AddOrchidToFavorite";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../common/ListCard";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [orchidsList, setOrchidsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetOrchidsList()
      .then((result) => {
        setOrchidsList(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Go to Orchids List"
        onPress={() => navigation.navigate("OrchidsList")}
      />
      <Text style={{ display: loading ? "flex" : "none" }}>Loading...</Text>
      <Text style={{ display: loading ? "none" : "flex" }}>
        {orchidsList.length}
      </Text>

      <Text>New:</Text>
      {/* Horizontal Scrolling area with many <GridCard></GridCard>  */}
      <ScrollView horizontal contentContainerStyle={{ padding: 20 }}>
        {orchidsList.slice(0, 4).map((orchid, index) => (
          <GridCard key={index} orchid={orchid} addFavorite={AddOrchidToFavorite}/>
        ))}
      </ScrollView>

      <Text>Orthers:</Text>
      <View style={{ padding: 20 }}>
        {/* Vertical Scrolling area with many <ListCard></ListCard>*/}
        {orchidsList.map((orchid, i) => (
          <ListCard key={i} orchid={orchid} addFavorite={AddOrchidToFavorite}/>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
