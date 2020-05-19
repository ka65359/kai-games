import React from "react";
import { shallow } from "enzyme";
import Circle from "../Circle";

describe("Circle() tests", () => {
  let data;

  beforeEach(function() {
    data = {
      content: "Test content",
      size: "small",
      position: "top-left",
      bgColor: "blue",
      textColor: "#000",
      onClick: jest.fn()
    };
  });

  afterEach(function() {
    data = null;
  });

  it("should render correctly in mode", () => {
    const component = shallow(<Circle {...data} />);

    expect(component).toMatchSnapshot();
  });
});
