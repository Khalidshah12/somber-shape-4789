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
        payload : payload
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
        console.log(data)
        dispatch(getUserSuccess(data));
       
    } catch (error) {
        dispatch(getUserFailure());
    }
}

export const getUserLogin = (queryParams) => async (dispatch) =>{
    try {
        dispatch(getUserRequest());
        let {data} = await axios.post(`${backend_url}/auth/login`, queryParams);
        console.log(data)
        dispatch(getUserSuccess(data));
     
    } catch (error) {
        dispatch(getUserFailure());
    }
}

export const userLogout = () =>{ 
   
    console.log("Hello")
}