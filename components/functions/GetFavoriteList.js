import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Retrieve the list of favorite orchids from AsyncStorage from "FavoriteOrchidsList".
 *
 * @returns {Promise<Array>} A Promise that resolves to an array of favorite orchids or an empty array if none exist.
 *
 * @example
 *  GetFavoriteList()
 *   .then((favoriteOrchids) => {
 *     console.log(favoriteOrchids); // Display the favorite orchids list
 *   })
 *   .catch((error) => {
 *     console.error(error); // Handle any errors
 *   });
 *
 * @description This function retrieves the list of favorite orchids stored in AsyncStorage. If no data is found, it returns an empty array. It handles errors, such as AsyncStorage access errors.
 * 
 * @author ThongNT
 * @version 1.0.0
 */

export const GetFavoriteList = async () => {
  try {
    const favoriteOrchidsListJSON = await AsyncStorage.getItem(
      "FavoriteOrchidsList"
    );

    if (favoriteOrchidsListJSON) {
      // Parse the JSON data from AsyncStorage
      const favoriteOrchidsList = JSON.parse(favoriteOrchidsListJSON);

      return favoriteOrchidsList;
    } else {
      // If the data doesn't exist in AsyncStorage, return an empty array or a default value
      return [];
    }
  } catch (error) {
    // Handle errors, e.g., AsyncStorage access errors
    console.error("Error retrieving favorite orchids list:", error);
    throw error;
  }
};
