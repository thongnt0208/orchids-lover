import axios from "axios";
import { API_BASE_URL } from "../../const/environment";

/**
 * Fetches a list of orchids from the API.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array of orchid data.
 * @param None.
 * @example
 * // Example of how to use the GetOrchidsList function
 * GetOrchidsList()
 *   .then((orchids) => {
 *     console.log(orchids); // Display the orchids data
 *   })
 *   .catch((error) => {
 *     console.error(error); // Handle any errors
 *   });
 *
 * @description This function makes an API request to retrieve a list of orchids.
 * @author ThongNT
 * @version 1.0.0
 */
export const GetOrchidsList = () => {
  const orchidsEndpoint = "/orchids";

  // Make the API request using axios.get
  return axios
    .get(API_BASE_URL + orchidsEndpoint)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return Promise.reject(new Error("Failed to fetch orchids data"));
      }
    })
    .catch((error) => {
      console.error("API request error:", error);
      throw error;
    });
};
