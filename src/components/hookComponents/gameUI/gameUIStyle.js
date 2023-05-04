import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const gameStyles = StyleSheet.create({
  gamecontainer: {
    flex: 1,
    backgroundColor: "#fae8a2",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
  },
  rulesText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gameScore: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
  },
  scoreContainer: {
    flex: 1,
    alignItems: "center",
  },
  scoreLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  modal: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

// const gameStyles = StyleSheet.create({
//   gamecontainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     backgroundColor: "#fae8a2",
//     textAlign: "center",
//     width: width > 500 ? 400 : width - 40, // adjust width based on screen size
//     height: /*width > 500 ? 440 : height * 0.9,*/ height * 1, // adjust height based on screen size
//     margin: 20,
//     borderColor: "black",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderRadius: 20,
//   },
//   rulesText: {
//     fontWeight: 400,
//     marginTop: 20,
//     fontSize: 20,
//   },
//   buttonsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: 20,
//     flexDirection: width > 500 ? "row" : "column", // adjust flexDirection based on screen size
//     backgroundColor: "red",
//     marginBottom: 50,
//   },
//   gameScore: {
//     borderWidth: 1,
//     borderColor: "black",
//     borderStyle: "solid",
//     width: width > 500 ? "60%" : "90%", // adjust width based on screen size
//     margin: 20,
//     flexDirection: width > 500 ? "row" : "column", // adjust flexDirection based on screen size
//   },
//   scoreContainer: {
//     fontSize: 20,
//     display: "flex",
//     justifyContent: "center",
//     margin: width > 500 ? 20 : 10, // adjust margin based on screen size
//     width: width > 500 ? "50%" : "100%", // adjust width based on screen size
//   },
// });

export default gameStyles;
