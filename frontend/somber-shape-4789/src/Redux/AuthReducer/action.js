import * as types from './actionTypes'
import axios from 'axios'
import { backend_url } from '../../Utils/backendURL'

export const getUserRequest = () => {
    return {
        type: types.GET_USER_REQUEST
    }
}

export const getUserSuccess = (payload) => {
    return {
        type: types.GET_USER_SUCCESS,
        payload 
    }
}

export const getUserFailure = () => {
    return {
        type: types.GET_USER_FAILURE
    }
}

export const getUserSignup = (queryParams) => async (dispatch) => {
    try {
        dispatch(getUserRequest());
        let {data} = await axios.post(`${backend_url}/auth/signup`, queryParams);
        // dispatch(getUserSuccess(data));
        console.log(data)
    } catch (error) {
        dispatch(getUserFailure());
    }
}

export const userLogout = () => (dispatch) => { 
   
}