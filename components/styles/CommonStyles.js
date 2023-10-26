import { StyleSheet } from "react-native";
import {
  bgDefault,
  blackDefault,
  borderDefault,
  greenBg2,
  greenDefault,
  white,
} from "../../const/colors";

import {
  borderRadiusDefault,
  labelDefault,
  paddingDefault,
} from "../../const/measures";

export const CommonStyles = StyleSheet.create({
  container: {
    backgroundColor: bgDefault,
    height: "100%",
  },
  cardGreen: {
    margin: 10,
    padding: 10,
    borderTopLeftRadius: borderRadiusDefault + 12,
    borderBottomLeftRadius: borderRadiusDefault + 12,
    width: "100%",
    borderColor: blackDefault,
    borderWidth: 1,
    backgroundColor: greenBg2,
  },
  cardDefault: {
    margin: 10,
    padding: 10,
    borderRadius: borderRadiusDefault + 12,
    borderColor: blackDefault,
    borderWidth: 1,
  },
  button: {
    minWidth: 100,
    maxWidth: 200,
    minHeight: 45,
    backgroundColor: greenDefault,
    borderRadius: borderRadiusDefault,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    color: white,
    fontSize: 18,
  },
  labelGreen: {
    paddingLeft: paddingDefault,
    color: greenDefault,
    fontWeight: "bold",
    fontSize: labelDefault,
  },
  labelBlack: {
    paddingLeft: paddingDefault,
    color: blackDefault,
    fontWeight: "bold",
    fontSize: labelDefault,
  },
});

export const styleScreenOptionsStack = {
  headerStyle: {
    backgroundColor: greenBg2,
  },
  headerTitleAlign: "center",
  headerTintColor: greenDefault,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
