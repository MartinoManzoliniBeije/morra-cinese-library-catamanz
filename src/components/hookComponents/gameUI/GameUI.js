import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import gameStyles from "./gameUIStyle";
import { CustomButton } from "../../index";

function GameUI(props) {
  const [state, setState] = useState({
    // showGame: false,
    currentGame: {
      userChoice: "",
      cpuChoice: "",
      userScore: 0,
      cpuScore: 0,
    },
    userObj: {
      name: "",
      gamesWon: 0,
      gamesLost: 0,
      totalGames: 0,
      // totalCredit: 0,
    },
    cpuWins: 1,
    currentWin: "",
    isModalVisible: false,
  });

  let currentWin = "";

  //-----------------------------------------------------------------------------
  const computerChoices = ["CARTA", "SASSO", "FORBICE"];

  // FUNCTION CALLED ON BUTTON CLICK TO GENERATE CASUAL CHOICE FOR CPU
  function computerchoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  // FUNCTION TO GET VALUE FROM BUTTONS
  function scissors() {
    let cpuChoice = computerchoice();
    let choice = "FORBICE";
    handleScore(choice, cpuChoice);
  }
  function paper() {
    let cpuChoice = computerchoice();
    let choice = "CARTA";
    handleScore(choice, cpuChoice);
  }
  function rock() {
    let cpuChoice = computerchoice();
    let choice = "SASSO";
    handleScore(choice, cpuChoice);
  }

  function roundResult(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
      console.log("pareggio");
      return "Pareggio";
    } else if (
      (userChoice === "CARTA" && cpuChoice === "FORBICE") ||
      (userChoice === "FORBICE" && cpuChoice === "SASSO") ||
      (userChoice === "SASSO" && cpuChoice === "CARTA")
    ) {
      console.log("hai perso");
      return "Hai perso";
    }
    console.log("hai vinto");
    return "Hai vinto";
  }

  function handleScore(userChoice, cpuChoice) {
    let userScore = state?.currentGame?.userScore;
    let cpuScore = state?.currentGame?.cpuScore;
    let currentWinner = "";
    let modalStatus = false;

    if (roundResult(userChoice, cpuChoice) === "Hai vinto") {
      userScore += 1;
    } else if (roundResult(userChoice, cpuChoice) === "Hai perso") {
      cpuScore += 1;
    }

    currentWinner = winnerProva(userScore, cpuScore);
    console.log("current winner prima del settaggio stato: ", currentWinner);
    currentWinner !== "" ? (modalStatus = true) : (modalStatus = false);

    setState({
      ...state,
      currentGame: {
        userScore: userScore,
        cpuScore: cpuScore,
        userChoice: userChoice,
        cpuChoice: cpuChoice,
      },
      currentWin: currentWinner,
      isModalVisible: modalStatus,
    });
  }
  //-----------------------------------------------------------------------------

  function winnerProva(userScore, cpuScore) {
    if (userScore - cpuScore > 1 || userScore === 3) {
      currentWin = "user";
    } else if (cpuScore - userScore > 1 || cpuScore === 3) {
      currentWin = "cpu";
    } else {
      currentWin = "";
    }
    return currentWin;
  }

  function nextGame() {
    let cpuWins = state.cpuWins;
    let userWins = state.userObj.gamesWon;
    currentWin === "user" ? userWins++ : cpuWins++;
    setState({
      ...state,
      cpuWins: cpuWins,
      userObj: {
        gamesWon: userWins,
        gamesLost: cpuWins,
        totalGames: cpuWins + userWins,
      },
      currentGame: {
        userScore: 0,
        cpuScore: 0,
      },
      currentWin: "",
      isModalVisible: false,
    });
    currentWin = "";
    console.log("NEXT GAME");
  }

  function setIsVisible() {
    let modalStatus = state.isModalVisible;
    setState({
      ...state,
      isModalVisible: !modalStatus,
    });
  }

  function AnimatedModal() {
    return (
      <>
        <Modal
          animationType={"fade"}
          onRequestClose={setIsVisible}
          visible={state.isModalVisible}
        >
          <View style={gameStyles.modal}>
            {state.currentWin === "cpu" && (
              <Text style={gameStyles.resultText}>SCONFITTA</Text>
            )}
            {state.currentWin === "user" && (
              <Text style={gameStyles.resultText}>VITTORIA</Text>
            )}
            {state.currentWin !== "" && (
              <CustomButton
                label="NEXT GAME"
                callbackInput={nextGame}
                style={{ marginTop: 100 }}
              />
            )}
            <CustomButton callbackInput={setIsVisible} label={"Close Modal"} />
          </View>
        </Modal>
      </>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {AnimatedModal()}
      <View style={gameStyles.gamecontainer}>
        {/* <CustomButton callbackInput={functionIdiot} label={"Test stato"} /> */}
        <Text style={gameStyles.rulesText}>
          Il gioco termina quando uno dei due giocatori raggiunge il punteggio
          di 3. Buona fortuna!
        </Text>
        <View style={gameStyles.buttonsContainer}>
          <CustomButton
            style={gameStyles.button}
            label="FORBICE"
            callbackInput={scissors}
          />
          <CustomButton
            style={gameStyles.button}
            label="SASSO"
            callbackInput={rock}
          />
          <CustomButton
            style={gameStyles.button}
            label="CARTA"
            callbackInput={paper}
          />
        </View>
        <View style={gameStyles.gameScore}>
          <View style={gameStyles.scoreContainer}>
            <Text style={gameStyles.scoreLabel}>Punti Utente:</Text>
            <Text style={gameStyles.scoreText}>
              {state.currentGame.userScore}
            </Text>
          </View>
          <View style={gameStyles.scoreContainer}>
            <Text style={gameStyles.scoreLabel}>Punti CPU:</Text>
            <Text style={gameStyles.scoreText}>
              {state.currentGame.cpuScore}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GameUI;
