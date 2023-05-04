"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _gameUIStyle = _interopRequireDefault(require("./gameUIStyle"));
var _index = require("../../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function GameUI(props) {
  var _useState = (0, _react.useState)({
      // showGame: false,
      currentGame: {
        userChoice: "",
        cpuChoice: "",
        userScore: 0,
        cpuScore: 0
      },
      userObj: {
        name: "",
        gamesWon: 0,
        gamesLost: 0,
        totalGames: 0
        // totalCredit: 0,
      },

      cpuWins: 1,
      currentWin: "",
      isModalVisible: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var currentWin = "";

  //-----------------------------------------------------------------------------
  var computerChoices = ["CARTA", "SASSO", "FORBICE"];

  // FUNCTION CALLED ON BUTTON CLICK TO GENERATE CASUAL CHOICE FOR CPU
  function computerchoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  // FUNCTION TO GET VALUE FROM BUTTONS
  function scissors() {
    var cpuChoice = computerchoice();
    var choice = "FORBICE";
    handleScore(choice, cpuChoice);
  }
  function paper() {
    var cpuChoice = computerchoice();
    var choice = "CARTA";
    handleScore(choice, cpuChoice);
  }
  function rock() {
    var cpuChoice = computerchoice();
    var choice = "SASSO";
    handleScore(choice, cpuChoice);
  }
  function roundResult(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
      console.log("pareggio");
      return "Pareggio";
    } else if (userChoice === "CARTA" && cpuChoice === "FORBICE" || userChoice === "FORBICE" && cpuChoice === "SASSO" || userChoice === "SASSO" && cpuChoice === "CARTA") {
      console.log("hai perso");
      return "Hai perso";
    }
    console.log("hai vinto");
    return "Hai vinto";
  }
  function handleScore(userChoice, cpuChoice) {
    var _state$currentGame, _state$currentGame2;
    var userScore = state === null || state === void 0 ? void 0 : (_state$currentGame = state.currentGame) === null || _state$currentGame === void 0 ? void 0 : _state$currentGame.userScore;
    var cpuScore = state === null || state === void 0 ? void 0 : (_state$currentGame2 = state.currentGame) === null || _state$currentGame2 === void 0 ? void 0 : _state$currentGame2.cpuScore;
    var currentWinner = "";
    var modalStatus = false;
    if (roundResult(userChoice, cpuChoice) === "Hai vinto") {
      userScore += 1;
    } else if (roundResult(userChoice, cpuChoice) === "Hai perso") {
      cpuScore += 1;
    }
    currentWinner = winnerProva(userScore, cpuScore);
    console.log("current winner prima del settaggio stato: ", currentWinner);
    currentWinner !== "" ? modalStatus = true : modalStatus = false;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      currentGame: {
        userScore: userScore,
        cpuScore: cpuScore,
        userChoice: userChoice,
        cpuChoice: cpuChoice
      },
      currentWin: currentWinner,
      isModalVisible: modalStatus
    }));
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
    var cpuWins = state.cpuWins;
    var userWins = state.userObj.gamesWon;
    currentWin === "user" ? userWins++ : cpuWins++;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      cpuWins: cpuWins,
      userObj: {
        gamesWon: userWins,
        gamesLost: cpuWins,
        totalGames: cpuWins + userWins
      },
      currentGame: {
        userScore: 0,
        cpuScore: 0
      },
      currentWin: "",
      isModalVisible: false
    }));
    currentWin = "";
    console.log("NEXT GAME");
  }
  function setIsVisible() {
    var modalStatus = state.isModalVisible;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      isModalVisible: !modalStatus
    }));
  }
  function AnimatedModal() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
      animationType: "fade",
      onRequestClose: setIsVisible,
      visible: state.isModalVisible
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _gameUIStyle.default.modal
    }, state.currentWin === "cpu" && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _gameUIStyle.default.resultText
    }, "SCONFITTA"), state.currentWin === "user" && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _gameUIStyle.default.resultText
    }, "VITTORIA"), state.currentWin !== "" && /*#__PURE__*/_react.default.createElement(_index.CustomButton, {
      label: "NEXT GAME",
      callbackInput: nextGame,
      style: {
        marginTop: 100
      }
    }), /*#__PURE__*/_react.default.createElement(_index.CustomButton, {
      callbackInput: setIsVisible,
      label: "Close Modal"
    }))));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, AnimatedModal(), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.gamecontainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.rulesText
  }, "Il gioco termina quando uno dei due giocatori raggiunge il punteggio di 3. Buona fortuna!"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.buttonsContainer
  }, /*#__PURE__*/_react.default.createElement(_index.CustomButton, {
    style: _gameUIStyle.default.button,
    label: "FORBICE",
    callbackInput: scissors
  }), /*#__PURE__*/_react.default.createElement(_index.CustomButton, {
    style: _gameUIStyle.default.button,
    label: "SASSO",
    callbackInput: rock
  }), /*#__PURE__*/_react.default.createElement(_index.CustomButton, {
    style: _gameUIStyle.default.button,
    label: "CARTA",
    callbackInput: paper
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.gameScore
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.scoreContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.scoreLabel
  }, "Punti Utente:"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.scoreText
  }, state.currentGame.userScore)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.scoreContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.scoreLabel
  }, "Punti CPU:"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.scoreText
  }, state.currentGame.cpuScore)))));
}
var _default = GameUI;
exports.default = _default;