import { GetLocal, SetLocal } from "../../Utils/localstorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: GetLocal("token") || false,
  data: GetLocal("token") || false,
  isAuthError: false,
  isLoading: false,
  isAdmin: false,
  isSeller: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
        data: false,
        isAuthError: false,
        isLoading: false,
        isAdmin: false,
        isSeller: false,
      };
    }
    case types.GET_USER_SUCCESS: {

      localStorage.setItem("token", JSON.stringify(payload.data.email))

      return {
        ...state,
        isAuth: payload.data.email,
        data: payload,
        isLoading: false,
        isAdmin: payload.data.isAdmin,
        isSeller: payload.data.isSeller,
      };
    }
    case types.GET_USER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        error: true,
      };
    }
    case "LOGOUT_USER": {
      return {
        isAuth: false,
        data: false,
        isAuthError: false,
        isLoading: false,
        isAdmin: false,
        isSeller: false,
      }
    }
    default:
      return state;
  }
};
