import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
  gamecontainer: {
    display: "default",
    backgroundColor: "#fae8a2",
    textAlign: "center",
    width: "90%",
    height: "98%",
    margin: "0 auto",
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: 20,
  },
  rulesText: {
    fontFamily: "Nunito",
    fontWeight: 400,
    marginTop: 20,
    fontSize: 20,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
  gameScore: {
    borderWidth: "1px",
    borderColor: "black",
    borderStyle: "solid",
    width: "90%",
    margin: "40px auto",
  },
  scoreContainer: {
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
  },
});

export default gameStyles;
