import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GridCard = ({ orchid, actionFunction }) => {
  const navigation = useNavigation();
  const LoveButton = (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => actionFunction(orchid)}
    >
      <Ionicons name="heart" size={30} color="red" />
    </Pressable>
  );

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("OrchidDetail", {
          orchid: orchid,
          actionFunction: actionFunction,
          showDeleteBtn: false,
          LoveOrHateButton: LoveButton,
        })
      }
    >
      {/* <Text>{actionFunction.toString()}</Text> */}
      <Image source={{ uri: orchid.avatar }} style={styles.avatar} />
      <View style={styles.overlay}>
        <Text style={styles.name}>{orchid.name}</Text>
      </View>
      {LoveButton}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    position: "relative",
    marginRight: 20,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default GridCard;
