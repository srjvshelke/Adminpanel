import axios from "axios";
import { CLEAR_ERRORS, FILTER_FAIL, USERFILTER_TRIGGER } from "../constants/filter";

export const userfilterdata = (userdata,filterval) => async (dispatch) => {
  try {

    dispatch({ type: USERFILTER_TRIGGER, payload: {
        users:userdata,
        filtername:filterval
    } });

  } catch (error) {
    dispatch({ type: FILTER_FAIL, payload:"filter fail" });
  }

}

// Clearing Errors
export const clearErrorsfilter = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };