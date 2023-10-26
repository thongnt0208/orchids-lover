import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid, Alert } from "react-native";
import Toast from "react-native-toast-message";

export const RemoveOrchidFromFavorite = async (orchid) => {
  let id = orchid.id;

  // Show a confirmation dialog before removing the orchid
  Alert.alert(
    "Xác nhận",
    `Bạn muốn xoá ${orchid.name} khỏi danh sách yêu thích?`,
    [
      {
        text: "Huỷ",
        onPress: () => {
          // User canceled the removal, do nothing.
          return;
        },
        style: "cancel",
      },
      {
        text: "Xoá",
        onPress: async () => {
          try {
            // Get the current FavoriteOrchidsList from AsyncStorage
            const favoriteOrchidsListJSON = await AsyncStorage.getItem(
              "FavoriteOrchidsList"
            );

            if (favoriteOrchidsListJSON) {
              const favoriteOrchidsList = JSON.parse(favoriteOrchidsListJSON);

              // Find the index of the orchid with the specified ID
              const orchidIndex = favoriteOrchidsList.findIndex(
                (orchid) => orchid.id === id
              );

              if (orchidIndex !== -1) {
                // Remove the orchid from the array
                favoriteOrchidsList.splice(orchidIndex, 1);

                // Update AsyncStorage with the modified list
                await AsyncStorage.setItem(
                  "FavoriteOrchidsList",
                  JSON.stringify(favoriteOrchidsList)
                );

                // Show a success toast notification
                Toast.show({
                  type: "success",
                  text1: "Orchid Removed from Favorites",
                  text2: `You removed ${orchid.name} from your favorites.`,
                });
                ToastAndroid.showWithGravity(
                  "Orchid Removed from Favorites",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM
                );
              }
            }
          } catch (error) {
            // Handle errors, e.g., AsyncStorage access errors
            console.error("Error removing orchid from favorite list:", error);
            throw error;
          }
        },
      },
    ]
  );
};
