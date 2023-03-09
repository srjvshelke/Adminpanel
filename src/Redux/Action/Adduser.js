import axios from "axios";
import { ADDUSER_FAIL, ADDUSER_REQUEST, ADDUSER_SUCCESS, ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, CLEAR_ERRORS } from "../constants/Adduser";

export const Addauser = (userdata) => async (dispatch) => {
  try {
    const { firstName, lastName, Employeeid, email, contact, Type, Password, ConfirmPassword } = userdata
    dispatch({ type: ADDUSER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const data = await fetch("http://192.168.1.178:7000/api/users/addnew", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "firstname": "lastName",
        "lastname": "lastName",
        "employeeid": "Employeeid",
        "emailid": "email",
       "contact":1,
        "type":"fewfew",
        "password": "dffgsdcas",
        "confirmpassword": "fsdfas"
      }
      // body: JSON.stringify(
      //   {
      //     firstName, lastName, Employeeid, email, contact, Type, Password, ConfirmPassword
      //   })
    });
    // const { data } = await axios.post(
    //   `http://192.168.1.178:7000/api/users/addnew`,
      // {
      //   firstname: firstName,
      //   lastname: lastName,
      //   employeeid: Employeeid,
      //   emailid: email,
      //   contact: contact,
      //   type: Type,
      //   password: Password,
      //   confirmpassword: ConfirmPassword
      // },
    //   // config
    // );
    console.log(data);
    dispatch({ type: ADDUSER_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: ADDUSER_FAIL, payload: error.message });
  }

}

// Get All Users
export const getallusers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`/users/getallusers`);

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};





// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};