// import { StyleSheet } from "react-native";

// const gameStyles = StyleSheet.create({
//   gamecontainer: {
//     display: "flex",
//     backgroundColor: "#fae8a2",
//     textAlign: "center",
//     width: 90,
//     height: 98,
//     margin: 20,
//     borderColor: "black",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderRadius: 20,
//   },
//   rulesText: {
//     fontFamily: "Nunito",
//     fontWeight: 400,
//     marginTop: 20,
//     fontSize: 20,
//   },
//   buttonsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: 40,
//   },
//   gameScore: {
//     borderWidth: 1,
//     borderColor: "black",
//     borderStyle: "solid",
//     width: "90%",
//     margin: 40,
//   },
//   scoreContainer: {
//     fontSize: 20,
//     display: "flex",
//     justifyContent: "center",
//   },
// });

// export default gameStyles;

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const gameStyles = StyleSheet.create({
  gamecontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fae8a2",
    textAlign: "center",
    width: width > 500 ? 400 : width - 40, // adjust width based on screen size
    height: /*width > 500 ? 440 : height * 0.9,*/ height * 1, // adjust height based on screen size
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
  },
  rulesText: {
    fontWeight: 400,
    marginTop: 20,
    fontSize: 20,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: width > 500 ? "row" : "column", // adjust flexDirection based on screen size
    backgroundColor: "red",
    marginBottom: 50,
  },
  gameScore: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: width > 500 ? "60%" : "90%", // adjust width based on screen size
    margin: 20,
    flexDirection: width > 500 ? "row" : "column", // adjust flexDirection based on screen size
  },
  scoreContainer: {
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    margin: width > 500 ? 20 : 10, // adjust margin based on screen size
    width: width > 500 ? "50%" : "100%", // adjust width based on screen size
  },
});

export default gameStyles;
