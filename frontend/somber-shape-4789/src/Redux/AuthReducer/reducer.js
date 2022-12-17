import { GetLocal, SetLocal } from '../../Utils/localstorage';
import * as types from './actionTypes'

const initialState = {
    isAuth: false,
    data: false,
    isAuthError: false,
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.GET_USER_REQUEST: {
            return {
                ...state, isLoading: true,
            }
        }
        case types.GET_USER_SUCCESS: {
            return {
                ...state, isAuth: true, data : payload
            }
        }
        case types.GET_USER_FAILURE: {
            return {
                ...state,  isAuth: false, error : true
            }
        }
        default: return state
    }
}