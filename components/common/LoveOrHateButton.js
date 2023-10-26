// LoveOrHateButton.js
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const LoveOrHateButton = ({ addFavorite, orchid, setChanged, showDeleteBtn }) => {
  return (
    <Pressable
      style={{ /* your button styles here */ }}
      onPress={() =>
        addFavorite(orchid)
          .then(() => {
            setChanged(new Date().getTime());
          })
          .catch((err) => {
            console.log(err);
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
  );
};

export default LoveOrHateButton;
