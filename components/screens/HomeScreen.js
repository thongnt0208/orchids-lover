import { View, Button, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GetOrchidsList } from "../functions/GetOrchidsList";
import GridCard from "../common/GridCard";
import { AddOrchidToFavorite } from "../functions/AddOrchidToFavorite";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../common/ListCard";
import { WelcomeScreenStyle } from "../styles/WelcomeScreen";
import { CommonStyles } from "../styles/CommonStyles";
import { white } from "../../const/colors";

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
    <ScrollView style={CommonStyles.container}>
      <Text style={{ display: loading ? "flex" : "none" }}>Loading...</Text>

      {/* NEW */}
      <Text></Text>
      <Text style={CommonStyles.labelBlack}>New</Text>
      {/* Horizontal Scrolling area with many <GridCard></GridCard>  */}
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: 10 }}
        style={CommonStyles.cardGreen}
      >
        {orchidsList.slice(0, 4).map((orchid, index) => (
          <GridCard
            key={index}
            orchid={orchid}
            addFavorite={AddOrchidToFavorite}
          />
        ))}
      </ScrollView>
      <Text></Text>

      {/* OTHERS */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <Text style={CommonStyles.labelGreen}>Orthers</Text>
        <Pressable
          style={CommonStyles.button}
          onPress={() =>
            navigation.navigate("OrchidsList", { orchidsList: orchidsList })
          }
        >
          <Text style={CommonStyles.buttonLabel}>More</Text>
        </Pressable>
      </View>
      <View style={CommonStyles.cardDefault}>
        <View style={{ padding: 12 }}>
          {/* Vertical Scrolling area with many <ListCard></ListCard>*/}
          {orchidsList.map((orchid, i) => (
            <ListCard
              key={i}
              orchid={orchid}
              showDeleteBtn={false}
              addFavorite={AddOrchidToFavorite}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
