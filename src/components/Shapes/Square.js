////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @author Kai
 * @version 1.0.0
 * @exports Square
 *
 * @module Square
 * @description A module that builds a square represented on a game board that can be styled
 *  and have a callback function when clicked.
 * @typedef {Object} Square
 * @property {string} content - The inner contents of Square
 * @property {function} onClick - The function that fires when a square is clicked
 * @property {string} textColor - The color of the inner content. Takes a CSS.color string or hex value
 * @property {string} bgColor - The background color of the square. Takes a CSS.color string or hex value
 */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import PropTypes from "prop-types";
import { color, text } from "@storybook/addon-knobs";
import "./_square.scss";

const Square = ({ onClick, content, textColor, bgColor }) => {
  if (typeof onClick !== "function") {
    onClick = () => {};
  }
  if (!content) {
    content = "";
  }

  let style = {};
  if (color("content color", textColor)) {
    style.color = textColor;
  }
  if (color("background color", bgColor)) {
    style.backgroundColor = bgColor;
  }

  return (
    <div className="kai-square square" onClick={onClick} style={style}>
      {text("content", content)}
    </div>
  );
};

Square.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  bgColor: PropTypes.string
};

export default Square;
