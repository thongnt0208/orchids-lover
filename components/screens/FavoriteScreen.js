import { View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GetFavoriteList } from "../functions/GetFavoriteList";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../common/ListCard";
import { RemoveOrchidFromFavorite } from "../functions/RemoveOrchidFromFavorite";

const FavoriteScreen = () => {
  const navigation = useNavigation();
  let [favouriteList, setFavouriteList] = useState([]);
  let [listChanged, setListChanged] = useState('');

  useEffect(() => {
    GetFavoriteList()
      .then((result) => {
        setFavouriteList(result);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [listChanged]);

  return (
    <View>
      <Button
        title="Go to Orchid Detail"
        onPress={() => navigation.navigate("FavoriteOrchidDetail")}
      />

      <View>
        <ScrollView horizontal>
          <Button title="Dropdown - Category" />
          <Button title="Tag" />
          <Button title="Tag" />
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 70 }}>
        {favouriteList.map((orchid, i) => (
          <ListCard key={i} orchid={orchid} showDeleteBtn={true} addFavorite={RemoveOrchidFromFavorite} setChanged={setListChanged}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
