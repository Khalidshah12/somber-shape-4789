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
    case type.LOGOUT_USER: {
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
      SetLocal("token", payload.auth.email);
      return {
        ...state,
        isAuth: payload.auth.email,
        data: payload,
        isLoading: false,
        isAdmin: payload.auth.isAdmin,
        isSeller: payload.auth.isSeller,
      };
    }
    case types.GET_USER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
