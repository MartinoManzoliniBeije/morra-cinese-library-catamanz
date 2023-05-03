// import { React, Component, Fragment } from "react";
// import {
//   getLocalStorage,
//   setLocalStorage,
// } from "../../utils/localStorageUtils";
// import Button from "../functionComponents/Button";
// import "../../../src/styles/game/game.css";
// import { Player } from "@lottiefiles/react-lottie-player";

// class Game extends Component {
//   constructor(props) {
//     super(props);

//     this.computerChoices = ["carta", "sasso", "forbice"];

//     this.userObj = {
//       name: "",
//       gamesWon: 0,
//       gamesLost: 0,
//       totalGames: 0,
//       totalCredit: 0,
//     };

//     this.storageUsers =
//       getLocalStorage("Users") === undefined ||
//       getLocalStorage("Users") === null
//         ? {
//             users: [],
//           }
//         : getLocalStorage("Users");

//     this.state = {
//       showGame: false,
//       currentGame: {
//         userChoice: "",
//         cpuChoice: "",
//         userScore: 0,
//         cpuScore: 0,
//       },
//     };
//   }

//   componentDidMount() {}
//   componentDidUpdate() {}

//   // FUNCTION TO LOG THE USER WITH THE CORRECT CODE AND LET THE GAME VIEW APPEAR
//   startGame = (event) => {
//     event.preventDefault();

//     const name = event.target.name.value;
//     const ticketcode = event.target.ticketcode.value;
//     event.target.reset();

//     let showGame = false;

//     if (ticketcode === "0000") {
//       const userIndex = this.storageUsers.users.findIndex(
//         (user) => user.name === name
//       );

//       if (userIndex !== -1) {
//         // User already exists in localStorage
//         this.userObj = this.storageUsers.users[userIndex];
//         this.storageUsers.users.splice(userIndex, 1);
//       } else {
//         this.userObj.name = name;
//       }
//       showGame = true;
//     }

//     this.setState({ showGame: showGame });
//   };

//   // FUNCTION CALLED ON BUTTON CLICK TO GENERATE CASUAL CHOICE FOR CPU
//   computerchoice() {
//     return this.computerChoices[
//       Math.floor(Math.random() * this.computerChoices.length)
//     ];
//   }

//   // FUNCTION TO GET VALUE FROM BUTTONS
//   buttonCallback = (e) => {
//     console.log("Scelta utente:", e.target.value);
//     const cpuChoice = this.computerchoice();
//     console.log("Scelta cpu:", cpuChoice);

//     this.handleScore(e.target.value, cpuChoice);
//   };

//   roundResult(userChoice, cpuChoice) {
//     if (userChoice === cpuChoice) {
//       return "Pareggio";
//     } else if (
//       (userChoice === "carta" && cpuChoice === "forbice") ||
//       (userChoice === "forbice" && cpuChoice === "sasso") ||
//       (userChoice === "sasso" && cpuChoice === "carta")
//     ) {
//       return "Hai perso";
//     }
//     return "Hai vinto";
//   }

//   handleScore = (userChoice, cpuChoice) => {
//     let userScore = this.state.currentGame.userScore;
//     let cpuScore = this.state.currentGame.cpuScore;
//     let showGame = this.state.showGame;

//     if (this.roundResult(userChoice, cpuChoice) === "Hai vinto") {
//       userScore += 1;
//     } else if (this.roundResult(userChoice, cpuChoice) === "Hai perso") {
//       cpuScore += 1;
//     }

//     if (userScore === 3) {
//       userScore = 0;
//       cpuScore = 0;
//       this.userObj.gamesWon += 1;
//       this.userObj.totalGames += 1;
//       this.userObj.totalCredit += 0.2;
//       alert(
//         `Hai vinto! Il tuo credito accumulato è: ${this.userObj.totalCredit} crediti!`
//       );
//       this.storageUsers.users.push(this.userObj);
//       this.userObj = {
//         name: "",
//         gamesWon: 0,
//         gamesLost: 0,
//         totalGames: 0,
//         totalCredit: 0,
//       };
//       setLocalStorage("Users", this.storageUsers);

//       showGame = !showGame;
//     } else if (cpuScore === 3) {
//       alert("Hai perso");
//       userScore = 0;
//       cpuScore = 0;
//       this.userObj.gamesLost += 1;
//       this.userObj.totalGames += 1;
//       this.storageUsers.users.push(this.userObj);
//       this.userObj = {
//         name: "",
//         gamesWon: 0,
//         gamesLost: 0,
//         totalGames: 0,
//         totalCredit: 0,
//       };
//       setLocalStorage("Users", this.storageUsers);
//       showGame = !showGame;
//     }

//     this.setState({
//       currentGame: {
//         userScore: userScore,
//         cpuScore: cpuScore,
//         userChoice: userChoice,
//         cpuChoice: cpuChoice,
//       },
//     });

//     // !!!!!!!!!! cancellarlo, metterlo nel didMount quando il game finisce
//     setTimeout(() => {
//       this.setState({
//         showGame: showGame,
//       });
//     }, 3000);
//   };

//   // RESET LOCAL STORAGE
//   // resetLocalStorage = () => {
//   //   clearLocalStorage();
//   //   this.storageUsers = {
//   //     users: [],
//   //   };
//   //   this.setState({ storageUsers: this.storageUsers });
//   // };

//   componentWillUnmount() {}

//   render() {
//     return (
//       <div className="mainContainer">
//         {!this.state.showGame && (
//           <div className="welcomeContainer">
//             <h1 className="gameTitle">ROCK PAPER SCISSORS</h1>
//             <h3 className="gameSubTitle">
//               Benvenutә nel gioco della morra cinese<br></br>
//               Inserisci il tuo nome e il codice biglietto per giocare!
//             </h3>
//             <Player
//               autoplay
//               loop
//               src="https://assets4.lottiefiles.com/packages/lf20_aGFno30IGO.json"
//             ></Player>
//             <form onSubmit={this.startGame} className="formContainer">
//               <div>
//                 <p>Inserisci nome:</p>
//                 <input
//                   className="formInput"
//                   name="name"
//                   type="text"
//                   placeholder="nome"
//                 ></input>
//               </div>
//               <div>
//                 <p>Inserisci codice biglietto:</p>
//                 <input
//                   className="formInput"
//                   name="ticketcode"
//                   type="text"
//                   placeholder="biglietto"
//                 ></input>
//               </div>
//               <div>
//                 <input
//                   className="playButton"
//                   type="submit"
//                   value="Gioca"
//                 ></input>
//               </div>
//             </form>
//           </div>
//         )}
//         {/* <button onClick={this.resetLocalStorage}>RESET</button>
//         <button onClick={this.showState}>SHOW STATE</button> */}
//         <Fragment>
//           {this.state.showGame && (
//             <div className="gameContainer">
//               <Player
//                 autoplay
//                 loop
//                 src="https://assets5.lottiefiles.com/packages/lf20_uGzzQB.json"
//               ></Player>
//               <p className="rulesText">
//                 Il gioco termina quando uno dei due giocatori raggiunge il
//                 punteggio di 3. Buona fortuna!
//               </p>
//               <div className="buttonsContainer">
//                 <Button
//                   label="SASSO"
//                   value="sasso"
//                   buttonCallback={this.buttonCallback}
//                   imgSrc={require("../../../src/assets/images/rock.png")}
//                 />
//                 <Button
//                   label="CARTA"
//                   value="carta"
//                   buttonCallback={this.buttonCallback}
//                   imgSrc={require("../../../src/assets/images/paper.png")}
//                 />
//                 <Button
//                   label="FORBICE"
//                   value="forbice"
//                   buttonCallback={this.buttonCallback}
//                   imgSrc={require("../../../src/assets/images/scissors.png")}
//                 />
//               </div>
//               <div className="gameScore">
//                 <div className="flex space-around scoreContainer">
//                   <h2>
//                     <span>
//                       <img
//                         style={{ height: 50, width: 50 }}
//                         src={require("../../../src/assets/images/user.png")}
//                         alt="userIcon"
//                       ></img>
//                     </span>
//                     &nbsp;:&nbsp;
//                     {this.state.currentGame.userChoice}
//                   </h2>
//                   <h2>
//                     <span>
//                       <img
//                         style={{ height: 50, width: 50 }}
//                         src={require("../../../src/assets/images/computer.png")}
//                         alt="userIcon"
//                       ></img>
//                     </span>
//                     &nbsp;:&nbsp;
//                     {this.state.currentGame.cpuChoice}
//                   </h2>
//                 </div>
//                 <div className="flex space-around scoreContainer">
//                   <h2>
//                     Punti Utente:
//                     {this.state.currentGame.userScore}
//                   </h2>
//                   <h2>
//                     Punti CPU:
//                     {this.state.currentGame.cpuScore}
//                   </h2>
//                 </div>
//                 <div>
//                   <h2>Credito accumulato: {this.userObj.totalCredit}</h2>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Fragment>
//       </div>
//     );
//   }
// }

// export { Game };
