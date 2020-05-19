import React from "react";
import { shallow } from "enzyme";
import Line from "../Line";

describe("Line() tests", () => {
  let data;

  beforeEach(function() {
    data = {
      position: "top",
      lineColor: "#000",
      onClick: jest.fn()
    };
  });

  afterEach(function() {
    data = null;
  });

  it("should render correctly in mode", () => {
    const component = shallow(<Line {...data} />);

    expect(component).toMatchSnapshot();
  });
});
