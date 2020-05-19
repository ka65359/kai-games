import React from "react";
import { shallow } from "enzyme";
import Square from "../Square";

describe("Square() tests", () => {
  let data;

  beforeEach(function() {
    data = {
      content: "Test content",
      bgColor: "blue",
      textColor: "#000",
      onClick: jest.fn()
    };
  });

  afterEach(function() {
    data = null;
  });

  it("should render correctly in mode", () => {
    const component = shallow(<Square {...data} />);

    expect(component).toMatchSnapshot();
  });
});
