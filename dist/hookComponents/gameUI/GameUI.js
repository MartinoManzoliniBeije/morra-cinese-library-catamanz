"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _gameUIStyle = _interopRequireDefault(require("./gameUIStyle"));
var _Button = _interopRequireDefault(require("../../functionalComponents/button/Button"));
var _asyncStorageUtils = require("../../../utils/asyncStorageUtils");
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } //import { buttonCallback } from "../../index.js";
function GameUI(props) {
  var _useState = (0, _react.useState)({
      showGame: false,
      currentGame: {
        userChoice: "",
        cpuChoice: "",
        userScore: 0,
        cpuScore: 0
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var userObj = {
    name: "",
    gamesWon: 0,
    gamesLost: 0,
    totalGames: 0,
    totalCredit: 0
  };

  //-----------------------------------------------------------------------------
  var computerChoices = ["carta", "sasso", "forbice"];
  function startGame(event, storageUsers, userObj, state, setState) {
    event.preventDefault();
    var name = event.target.name.value;
    var ticketcode = event.target.ticketcode.value;
    event.target.reset();
    var showGame = false;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      showGame: showGame
    }));
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
    var cpuChoice = computerchoice();
    console.log("Scelta cpu:", cpuChoice);
    handleScore(e.target.textContent.toLowerCase(), userObj, cpuChoice, state, setState);
  }
  function roundResult(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
      return "Pareggio";
    } else if (userChoice === "carta" && cpuChoice === "forbice" || userChoice === "forbice" && cpuChoice === "sasso" || userChoice === "sasso" && cpuChoice === "carta") {
      return "Hai perso";
    }
    return "Hai vinto";
  }
  function handleScore(userChoice, userObj, cpuChoice, state,
  //storageUsers,
  setState) {
    var userScore = state.currentGame.userScore;
    var cpuScore = state.currentGame.cpuScore;
    var showGame = state.showGame;
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
      alert("Hai vinto! Il tuo credito accumulato \xE8: ".concat(userObj.totalCredit, " crediti!"));
      showGame = !showGame;
    } else if (cpuScore === 3) {
      alert("Hai perso");
      userScore = 0;
      cpuScore = 0;
      userObj.gamesLost += 1;
      userObj.totalGames += 1;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      currentGame: {
        userScore: userScore,
        cpuScore: cpuScore,
        userChoice: userChoice,
        cpuChoice: cpuChoice
      }
    }));
    setTimeout(function () {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        showGame: showGame
      }));
    }, 3000);
  }
  //-----------------------------------------------------------------------------

  function handleButtonCallback(e) {
    buttonCallback(e, userObj, state, setState);
  }
  (0, _react.useEffect)(function () {
    //initializeStorage();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.gamecontainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.rulesText
  }, "Il gioco termina quando uno dei due giocatori raggiunge il punteggio di 3. Buona fortuna!"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.buttonsContainer
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "SASSO",
    callbackInput: handleButtonCallback,
    source: props.stoneImage,
    detail: "SASSO"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "CARTA",
    callbackInput: handleButtonCallback,
    source: props.paperImage
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "FORBICE",
    callbackInput: handleButtonCallback,
    source: props.scissorImage
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.gameScore
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.scoreContainer
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameUIStyle.default.scoreContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Punti Utente:", state.currentGame.userScore), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Punti CPU:", state.currentGame.cpuScore)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Credito accumulato: ", userObj.totalCredit)))));
}
var _default = GameUI;
exports.default = _default;