import axios from "axios";
import { ADDUSER_FAIL, ADDUSER_REQUEST, ADDUSER_SUCCESS, ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, CLEAR_ERRORS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constants/Adduser";


//adduser
export const Addauser = (userdata) => async (dispatch) => {
  try {
    // const { firstName, lastName, Employeeid, email, contact, Type, Password, ConfirmPassword } = userdata

    dispatch({ type: ADDUSER_REQUEST });

    // const config = { headers: { "Content-Type": "application/json" } };
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.post(
      '/api/users/addnew',
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
      userdata,
      config
    );
    dispatch({ type: ADDUSER_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: ADDUSER_FAIL, payload: error.response.data.message });
  }

}

//update
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/user/${id}`,
      userData,
      config
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Users
export const getallusers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`api/users/getallusers`);

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