////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @author Kai
 * @version 1.0.0
 * @exports Line
 *
 * @module Line
 * @description A module that builds a line represented on a game board that can be styled
 *  and have a callback function when clicked.
 * @typedef {Object} Line
 * @property {function} onClick - The function that fires when a line is clicked
 * @property {'top'|'left'|'right'|'bottom'} position - The position of the border line of a
 *  game board grid square
 * @property {string} lineColor - The color of the line. Takes a CSS.color string or hex value
 */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import PropTypes from "prop-types";
import { color } from "@storybook/addon-knobs";
import "./line.scss";

const Line = ({ onClick, position, lineColor }) => {
  if (typeof onClick !== "function") {
    onClick = () => {};
  }

  let className = "kai-line line";
  if (position) {
    className += " kai-shape-pos-" + position;
  }

  let style = {};
  if (color("color", lineColor)) {
    style.color = lineColor;
  }

  return <div className={className} onClick={onClick} style={style}></div>;
};

Line.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.string,
  lineColor: PropTypes.string
};

export default Line;
