////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @author Kai
 * @version 1.0.0
 * @exports Circle
 *
 * @module Circle
 * @description A module that builds a circle represented on a game board that can be styled
 *  and have a callback function when clicked.
 * @typedef {Object} Circle
 * @property {string} content - The inner contents of circle
 * @property {function} onClick - The function that fires when a circle is clicked
 * @property {'top-left'|'top-right'|'center'|'bottom-left'|'bottom-right'} position - The position
 *  within a grid square of the game board. Currently only the corner and center positions are
 *  supported (default is 'center')
 * @property {'small'|'medium'|'large'|'max'} size - Size of the circle to render
 * @property {string} textColor - The color of the inner content. Takes a CSS.color string or hex value
 * @property {string} bgColor - The background color of the square. Takes a CSS.color string or hex value
 */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import PropTypes from "prop-types";
import { color, text } from "@storybook/addon-knobs";
import "./_circle.scss";

const Circle = ({ content, onClick, position, size, textColor, bgColor }) => {
  if (typeof onClick !== "function") {
    onClick = () => {};
  }
  if (!content) {
    content = "";
  }

  let className = "kai-circle circle";
  if (position) {
    className += " kai-shape-pos-" + position;
  }
  if (size) {
    className += " kai-shape-size-" + size;
  }

  let style = {};
  if (color("content color", textColor)) {
    style.color = textColor;
  }
  if (color("background color", bgColor)) {
    style.backgroundColor = bgColor;
  }

  return (
    <div className={className} onClick={onClick} style={style}>
      {text("content", content)}
    </div>
  );
};

Circle.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.string,
  size: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string
};

export default Circle;
