import tictactoeReducer, { initialState } from "../index.js";
import {
  clearGameHistory,
  setGameHistory,
  clearTurnNumber,
  setTurnNumber,
  clearCurrentPlayer,
  setCurrentPlayer
} from "store/actions";
import features from "utils/features";

describe("TicTacToe reducer tests", function() {
  let currentState;
  let store;
  let undefinedVal;

  beforeEach(function() {
    jest.spyOn(features, "isEnabled").mockReturnValue(true);
    currentState = tictactoeReducer(undefinedVal, {});
    store = {
      getState: jest.fn(() => currentState),
      dispatch: jest.fn(
        (action) => (currentState = tictactoeReducer(currentState, action))
      )
    };
  });

  afterEach(function() {
    currentState = null;
    store = null;
  });

  describe("setCurrentPlayer()", function() {
    let payload;

    afterEach(function() {
      payload = null;
      store.dispatch(clearCurrentPlayer());
    });

    test("it handles no params", () => {
      store.dispatch(setCurrentPlayer());
      expect(store.getState()).toHaveProperty(
        "currentPlayer",
        initialState.currentPlayer
      );
    });

    test("it can be set", () => {
      payload = "foo";
      store.dispatch(setCurrentPlayer(payload));
      expect(store.getState()).toHaveProperty("currentPlayer", payload);
    });
  });

  describe("clearCurrentPlayer()", function() {
    let payload;

    afterEach(function() {
      payload = null;
    });

    test("it clears with no previous value", () => {
      store.dispatch(setCurrentPlayer());
      store.dispatch(clearCurrentPlayer());
      expect(store.getState()).toHaveProperty(
        "currentPlayer",
        initialState.currentPlayer
      );
    });

    test("it clears with a previous value", () => {
      payload = "foo";
      store.dispatch(setCurrentPlayer(payload));
      store.dispatch(clearCurrentPlayer());
      expect(store.getState()).toHaveProperty(
        "currentPlayer",
        initialState.currentPlayer
      );
    });
  });

  describe("setGameHistory()", function() {
    let payload;

    afterEach(function() {
      payload = null;
      store.dispatch(clearGameHistory());
    });

    test("it handles no params", () => {
      store.dispatch(setGameHistory());
      expect(store.getState()).toHaveProperty("history", initialState.history);
    });

    test("it can be set", () => {
      payload = [
        {
          squares: Array(9).fill(null),
          player: "X"
        },
        {
          squares: Array(["X", null, "O", "X", "X", null, "O", null, null]),
          player: "O"
        }
      ];
      store.dispatch(setGameHistory(payload));
      expect(store.getState()).toHaveProperty("history", payload);
    });
  });

  describe("clearGameHistory()", function() {
    let payload;

    afterEach(function() {
      payload = null;
    });

    test("it clears with no previous value", () => {
      store.dispatch(setGameHistory());
      store.dispatch(clearGameHistory());
      expect(store.getState()).toHaveProperty("history", initialState.history);
    });

    test("it clears with a previous value", () => {
      payload = "foo";
      store.dispatch(setGameHistory(payload));
      store.dispatch(clearGameHistory());
      expect(store.getState()).toHaveProperty("history", initialState.history);
    });
  });

  describe("setTurnNumber()", function() {
    let payload;

    afterEach(function() {
      payload = null;
      store.dispatch(clearTurnNumber());
    });

    test("it handles no params", () => {
      store.dispatch(setTurnNumber());
      expect(store.getState()).toHaveProperty(
        "turnNumber",
        initialState.turnNumber
      );
    });

    test("it can be set", () => {
      payload = "8";
      store.dispatch(setTurnNumber(payload));
      expect(store.getState()).toHaveProperty("turnNumber", payload);
    });
  });

  describe("clearTurnNumber()", function() {
    let payload;

    afterEach(function() {
      payload = null;
    });

    test("it clears with no previous value", () => {
      store.dispatch(setTurnNumber());
      store.dispatch(clearTurnNumber());
      expect(store.getState()).toHaveProperty(
        "turnNumber",
        initialState.turnNumber
      );
    });

    test("it clears with a previous value", () => {
      payload = "8";
      store.dispatch(setTurnNumber(payload));
      store.dispatch(clearTurnNumber());
      expect(store.getState()).toHaveProperty(
        "turnNumber",
        initialState.turnNumber
      );
    });
  });
});
