import { StyleSheet } from "react-native";
import { bgDefault, blackDefault, greenDefault } from "../../const/colors";

export const WelcomeScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: bgDefault,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -140,
  },
  logo: {
    width: 200,
    height: 200,
  },
  h1: {
    fontSize: 60,
    fontWeight: "bold",
    color: greenDefault,
  },
  h2: {
    fontSize: 40,
    fontWeight: "bold",
    color: greenDefault,
  },
  textContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
    position: "absolute",
    bottom: 20,
  },
});
