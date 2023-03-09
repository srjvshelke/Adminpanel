import axios from "axios";
import { ADDUSER_FAIL, ADDUSER_REQUEST, ADDUSER_SUCCESS, CLEAR_ERRORS } from "../constants/Adduser";

export const Addauser = (data) => async (dispatch) => {
    try {
        const { firstname, lastname, employeeid, emailid, contact, type, password, confirmpassword } = data;
        dispatch({ type: ADDUSER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/login`,
            { firstname, lastname, employeeid, emailid, contact, type, password, confirmpassword },
            config
        );
        console.log(data);
        dispatch({ type: ADDUSER_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: ADDUSER_FAIL, payload: error.response.data.message });
    }

}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };