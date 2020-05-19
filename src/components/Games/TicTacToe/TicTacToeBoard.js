////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @author Kai
 * @version 1.0.0
 * @module TicTacToeBoard
 * @description A module that builds a tictactoe board.
 * @exports TicTacToeBoard
 *
 * @typedef {Object} TicTacToeBoard
 * @property {Object[]} history - An array of boards
 *  ({@link width} by {width} array of {history.squares})
 * @typedef {('X'|'O'|null)} PlayerName - the player's name
 * @property {PlayerName[]} history.squares - an array of the square's contents
 * @property {string} history.player - The current player for that turn
 * @property {string} currentPlayer - The name of the player who's turn it is
 * @property {function} setGameHistory - Update the game history with a new turn's board
 * @property {function} setTurnNumber - Update the turn count
 * @property {function} setCurrentPlayer - Change the current player
 * @property {function} clearGameHistory - Reset game history
 * @property {function} clearTurnNumber - Set turn count back to 0
 * @property {function} clearCurrentPlayer - Reset player back to default
 *
 *
 */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../../constants/tictactoe";

/**
 * @module Square
 * @description A module that builds a square represented on a game board that can be styled
 *  and have a callback when clicked..
 * @typedef {Object} Square
 * @property {string} value - The inner contents of Square
 * @property {function} onClick - The function that fires when a square is clicked
 */
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

/**
 * @typedef {Object} TicTacToeBoard
 * @property {Array} squares - An array of the values of the current square values on the board
 * @property {function} onClick - The function that fires when a square is clicked
 */
const TicTacToeBoard = ({ squares, onClick }) => {
  const width = constants.WIDTH;
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  const buildRow = (startPos) => {
    return (
      <div className="board-row">
        {Array(constants.WIDTH)
          .fill(null)
          .map((item, index) => {
            return renderSquare(startPos + index);
          })}
      </div>
    );
  };

  const buildBoard = () => {
    return (
      <div>
        {Array(constants.WIDTH)
          .fill(null)
          .map((item, index) => {
            return buildRow(width * index);
          })}
      </div>
    );
  };

  return <div>{buildBoard()}</div>;
};

TicTacToeBoard.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TicTacToeBoard;
