import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { WelcomeScreenStyle } from "../styles/WelcomeScreen";
import LoveOrHateButton from "../common/LoveOrHateButton";
import { bgDefault, blackDefault, greenDefault, red } from "../../const/colors";

const OrchidDetail = () => {
  const route = useRoute();
  const { orchid, addFavorite, showDeleteBtn, setChanged } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: orchid.avatar }} style={styles.avatar} />
      <Text style={WelcomeScreenStyle.h2}>{orchid.name}</Text>
      <Text>Thuộc loài: {orchid.category}</Text>
      <Text>{orchid.description}</Text>
      <View style={styles.floatBotton}>
        <LoveOrHateButton
          addFavorite={addFavorite}
          orchid={orchid}
          setChanged={setChanged}
          showDeleteBtn={showDeleteBtn}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: bgDefault,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  floatBotton: {
    width: 35,
    height: 35,
    position: "absolute",
    bottom: 20,
    borderRadius: 50,
    borderColor: red,
    borderWidth: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default OrchidDetail;
