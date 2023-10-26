import { View, Button, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GetFavoriteList } from "../functions/GetFavoriteList";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../common/ListCard";
import { RemoveOrchidFromFavorite } from "../functions/RemoveOrchidFromFavorite";
import { CommonStyles } from "../styles/CommonStyles";

const FavoriteScreen = () => {
  const navigation = useNavigation();
  let [favouriteList, setFavouriteList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  let [listChanged, setListChanged] = useState("");

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

  const onRefresh = () => {
    setRefreshing(true);
    GetFavoriteList()
      .then((result) => {
        setFavouriteList(result);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        setRefreshing(false);
      });
  };

  return (
    <View style={CommonStyles.container}>
      {/* <View>
        <ScrollView horizontal>
          <Button title="Dropdown - Category" />
          <Button title="Tag" />
          <Button title="Tag" />
        </ScrollView>
      </View> */}

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 70 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {favouriteList.map((orchid, i) => (
          <ListCard
            key={i}
            orchid={orchid}
            showDeleteBtn={true}
            addFavorite={RemoveOrchidFromFavorite}
            setChanged={setListChanged}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
