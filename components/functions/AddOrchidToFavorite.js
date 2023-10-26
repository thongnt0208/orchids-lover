import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";

/**
 * Add an orchid to the list "FavoriteOrchidsList" in AsyncStorage.
 *
 * @param {Object} orchid - The orchid object to be added to favorites.
 * @returns {Promise<void>} A Promise that resolves once the orchid is added or shows an error message.
 *
 * @example
 * AddOrchidToFavorite(orchid)
 *   .then(() => {
 *     // Orchid added to favorites
 *   })
 *   .catch((error) => {
 *     console.error(error); // Handle any errors
 *   });
 *
 * @description This function checks if the orchid is already in favorites, adds it if not, and handles success and error notifications.
 * @author ThongNT
 * @version 1.0.0
 */
export const AddOrchidToFavorite = async (orchid) => {
  try {
    // Retrieve the current list of favorite orchids from AsyncStorage
    const currentFavorites = await AsyncStorage.getItem("FavoriteOrchidsList");
    let updatedFavorites = [];

    if (currentFavorites) {
      // If there are existing favorites, parse the JSON and update the list
      updatedFavorites = JSON.parse(currentFavorites);

      //Check if the favorites are already in the list
      const isDuplicate = updatedFavorites.some(
        (favoriteOrchid) => favoriteOrchid.id === orchid.id
      );
      if (isDuplicate) {
        // Show a duplicate orchid notification
        Toast.show({
          type: "error",
          text1: "Duplicate Orchid",
          text2: "This orchid is already in your favorites.",
        });
        ToastAndroid.showWithGravity(
          "This orchid is already in your favorites.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        return; // Don't add the duplicate orchid
      }
    }

    updatedFavorites.push(orchid);

    // Save the updated list back to AsyncStorage
    await AsyncStorage.setItem(
      "FavoriteOrchidsList",
      JSON.stringify(updatedFavorites)
    );
    console.log("Orchid added to favorites:", orchid);
    // Show a success toast notification
    Toast.show({
      type: "success",
      text1: "Orchid Added to Favorites",
      text2: `You added ${orchid.name} to your favorites.`,
    });
    ToastAndroid.showWithGravity(
      "Orchid Added to Favorites",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  } catch (error) {
    console.error("Error adding orchid to favorites:", error);
    // Show an error toast notification
    Toast.show({
      type: "error",
      text1: "Error Adding Orchid",
      text2: "There was an error while adding the orchid to favorites.",
    });
    ToastAndroid.showWithGravity(
      "Error Adding Orchid",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }
};
