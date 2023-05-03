import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import gameStyles from "./gameUIStyle";
import Button from "../../functionalComponents/button/Button";
//import { buttonCallback } from "../../index.js";
//import { getStorage, setStorage } from "../../../utils/asyncStorageUtils";

function GameUI() {
  const [state, setState] = useState({
    showGame: false,
    currentGame: {
      userChoice: "",
      cpuChoice: "",
      userScore: 0,
      cpuScore: 0,
    },
  });

  let userObj = {
    name: "",
    gamesWon: 0,
    gamesLost: 0,
    totalGames: 0,
    totalCredit: 0,
  };

  //-----------------------------------------------------------------------------
  const computerChoices = ["carta", "sasso", "forbice"];

  function startGame(event, storageUsers, userObj, state, setState) {
    event.preventDefault();

    const name = event.target.name.value;
    const ticketcode = event.target.ticketcode.value;
    event.target.reset();

    let showGame = false;

    setState({
      ...state,
      showGame: showGame,
    });
    //this.setState({ showGame: showGame });
  }

  // FUNCTION CALLED ON BUTTON CLICK TO GENERATE CASUAL CHOICE FOR CPU
  function computerchoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  // FUNCTION TO GET VALUE FROM BUTTONS
  function buttonCallback(e, userObj, state, setState) {
    console.log("Seeeeeeeeeeeeeeeeeeee", e.target.textContent);
    //console.log("Scelta utente:", e.target.value);
    let cpuChoice = computerchoice();
    console.log("Scelta cpu:", cpuChoice);

    handleScore(
      e.target.textContent.toLowerCase(),
      userObj,
      cpuChoice,
      state,
      setState
    );
  }

  function roundResult(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
      return "Pareggio";
    } else if (
      (userChoice === "carta" && cpuChoice === "forbice") ||
      (userChoice === "forbice" && cpuChoice === "sasso") ||
      (userChoice === "sasso" && cpuChoice === "carta")
    ) {
      return "Hai perso";
    }
    return "Hai vinto";
  }

  function handleScore(
    userChoice,
    userObj,
    cpuChoice,
    state,
    //storageUsers,
    setState
  ) {
    let userScore = state.currentGame.userScore;
    let cpuScore = state.currentGame.cpuScore;
    let showGame = state.showGame;

    if (roundResult(userChoice, cpuChoice) === "Hai vinto") {
      userScore += 1;
    } else if (roundResult(userChoice, cpuChoice) === "Hai perso") {
      cpuScore += 1;
    }

    if (userScore === 3) {
      userScore = 0;
      cpuScore = 0;
      userObj.gamesWon += 1;
      userObj.totalGames += 1;
      userObj.totalCredit += 0.2;
      alert(
        `Hai vinto! Il tuo credito accumulato è: ${userObj.totalCredit} crediti!`
      );

      showGame = !showGame;
    } else if (cpuScore === 3) {
      alert("Hai perso");
      userScore = 0;
      cpuScore = 0;
      userObj.gamesLost += 1;
      userObj.totalGames += 1;
    }

    setState({
      ...state,
      currentGame: {
        userScore: userScore,
        cpuScore: cpuScore,
        userChoice: userChoice,
        cpuChoice: cpuChoice,
      },
    });

    setTimeout(() => {
      setState({ ...state, showGame: showGame });
    }, 3000);
  }
  //-----------------------------------------------------------------------------

  function handleButtonCallback(e) {
    buttonCallback(e, userObj, state, setState);
  }

  useEffect(() => {
    //initializeStorage();
  }, []);

  return (
    <View>
      {/*{this.state.showGame && (*/}
      <View style={gameStyles.gamecontainer}>
        {/*<Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_uGzzQB.json"
        ></Player>*/}
        <Text style={gameStyles.rulesText}>
          Il gioco termina quando uno dei due giocatori raggiunge il punteggio
          di 3. Buona fortuna!
        </Text>
        <View style={gameStyles.buttonsContainer}>
          <Button
            label="SASSO"
            callbackInput={handleButtonCallback}
            source={props.stoneImage}
            detail={"SASSO"}
          />
          <Button
            label="CARTA"
            callbackInput={handleButtonCallback}
            source={props.paperImage}
          />
          <Button
            label="FORBICE"
            callbackInput={handleButtonCallback}
            source={props.scissorImage}
          />
        </View>
        <View style={gameStyles.gameScore}>
          <View style={gameStyles.scoreContainer}></View>
          <View style={gameStyles.scoreContainer}>
            <Text>
              Punti Utente:
              {state.currentGame.userScore}
            </Text>
            <Text>
              Punti CPU:
              {state.currentGame.cpuScore}
            </Text>
          </View>
          <View>
            <Text>Credito accumulato: {userObj.totalCredit}</Text>
          </View>
        </View>
      </View>
      {/*)}*/}
    </View>
  );
}

export default GameUI;
