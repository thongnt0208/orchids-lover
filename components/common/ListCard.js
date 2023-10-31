import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoveOrHateButton from "./LoveOrHateButton";

const ListCard = ({ orchid, actionFunction, showDeleteBtn, setChanged }) => {
  const navigation = useNavigation();
  console.log("setChanged", JSON.stringify(setChanged));

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("OrchidDetail", {
          orchid: orchid,
          actionFunction: actionFunction,
          showDeleteBtn: showDeleteBtn,
          setChanged: setChanged,
        })
      }
    >
      <Image source={{ uri: orchid.avatar }} style={styles.avatar} />
      <View style={styles.overlay}>
        <Text style={styles.name}>{orchid.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={
            {
              /* your button styles here */
            }
          }
          onPress={() => {
            if (showDeleteBtn) {
              actionFunction(orchid, setChanged)
                .then((dt) => {
                  console.log("Action did");
                  setChanged(new Date().getTime());
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              actionFunction(orchid)
                .then((dt) => {
                  console.log(dt);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }}
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
      </View>
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
