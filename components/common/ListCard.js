import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListCard = ({ orchid, addFavorite, showDeleteBtn, setChanged }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => navigation.navigate("OrchidDetail", orchid)}
    >
      <Image source={{ uri: orchid.avatar }} style={styles.avatar} />
      <View style={styles.overlay}>
        <Text style={styles.name}>{orchid.name}</Text>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() =>
          addFavorite(orchid).then(() => {
            setChanged(new Date().getTime());
          })
        }
      >
        <Ionicons
          name="heart"
          size={30}
          color="red"
          style={{ display: showDeleteBtn ? "none" : "flex" }}
        />
        <Ionicons
          name="trash"
          size={30}
          color="red"
          style={{ display: showDeleteBtn ? "flex" : "none" }}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    position: "relative",
    marginBottom: 20,
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

export default ListCard;
