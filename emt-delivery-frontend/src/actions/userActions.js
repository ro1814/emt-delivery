import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_LOGOUT
 } from "../constants/userConstants";
import axios from "axios";


 export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      //api/users/token/${userInfo.token}

      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      }, config);
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
  
    } catch (error) {
        
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      });
  
      const { userLogin: { userInfo } } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`
        },
      };
  
      const { data } = await axios.get(`/api/users/${id}`, config);
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
        
      dispatch({
        type: USER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    // dispatch({ type: USER_LIST_RESET })
  }