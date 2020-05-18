import { createSelector } from "reselect";

export const getAStateProp = (state) => state.ui.sample.aStateProp;

export const getUpperCaseAStateProp = createSelector(
  [getAStateProp],
  (aStateVal) => {
    return aStateVal.toUpperCase();
  }
);
