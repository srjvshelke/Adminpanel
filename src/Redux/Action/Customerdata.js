import axios from "axios";
import { CUSTOMER_FAIL, CUSTOMER_REQUEST, CUSTOMER_SUCCESS, ALL_CUSTOMER_FAIL, ALL_CUSTOMER_REQUEST, ALL_CUSTOMER_SUCCESS, CLEAR_ERRORS } from "../constants/Customerdata";


// Get All CUSTOMERDATA
export const getallcustomerdata = () => async (dispatch) => {
  try {
    dispatch({ type:CUSTOMER_REQUEST });
    const {data}  = await axios.get(`api/customermanagement/customer`);

    dispatch({
      type: CUSTOMER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_FAIL,
      payload: error.response.data.message,
    });
  }
};





// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};