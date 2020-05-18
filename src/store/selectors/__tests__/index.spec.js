import { getAStateProp, getUpperCaseAStateProp } from "../index.js";

describe("Sample selector tests", function() {
  let currentState;

  beforeEach(function() {
    currentState = {
      ui: {
        sample: {
          aStateProp: ""
        }
      }
    };
  });

  afterEach(function() {
    currentState = null;
  });

  describe("getAStateProp() tests", function() {
    let statePropVal;
    let rslt;

    beforeEach(function() {
      statePropVal = "foo";
    });

    afterEach(function() {
      rslt = null;
      statePropVal = null;
    });

    test("it returns the default value with no state prop val", function() {
      rslt = getAStateProp(currentState);
      expect(rslt).not.toBeUndefined();
      expect(rslt).not.toBeNull();
    });

    test("it returns the value when one is set", function() {
      currentState.ui.sample.aStateProp = statePropVal;
      rslt = getAStateProp(currentState);
      expect(rslt).toEqual(statePropVal);
    });
  });

  describe("getUpperCaseAStateProp() tests", function() {
    let statePropVal;
    let rslt;

    beforeEach(function() {
      statePropVal = "foo";
    });

    afterEach(function() {
      rslt = null;
      statePropVal = null;
    });

    test("it returns the default value with no state prop val", function() {
      rslt = getUpperCaseAStateProp(currentState);
      expect(rslt).not.toBeUndefined();
      expect(rslt).not.toBeNull();
    });

    test("it returns the uppercase value when one is set", function() {
      currentState.ui.sample.aStateProp = statePropVal;
      rslt = getUpperCaseAStateProp(currentState);
      expect(rslt).toEqual(statePropVal.toUpperCase());
    });
  });
});
