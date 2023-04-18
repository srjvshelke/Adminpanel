import axios from "axios";
import { ADDWORKORDER_FAIL, ADDWORKORDER_REQUEST, ADDWORKORDER_SUCCESS, ALL_ADDWORKORDERS_FAIL, ALL_ADDWORKORDERS_REQUEST, ALL_ADDWORKORDERS_SUCCESS, CLEAR_ERRORS } from "../constants/Addworkorder";

export const Addworkorder = (Addworkorderdata) => async (dispatch) => {
  try {
    console.log(Addworkorderdata);
    // const {workorderid,title, assignto,file} = Addworkorderdata
    dispatch({ type: ADDWORKORDER_REQUEST });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.post(
      '/api/workorder/addworkorder',
      Addworkorderdata,
      config
    );
    dispatch({ type: ADDWORKORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADDWORKORDER_FAIL, payload: error.response.data.message });
  }
}

// Get All Users
export const geAllworkorder = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ADDWORKORDERS_REQUEST });
    const { data } = await axios.get(`api/workorder/getallworkorderdata`);

    dispatch({
      type: ALL_ADDWORKORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ADDWORKORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};





// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};