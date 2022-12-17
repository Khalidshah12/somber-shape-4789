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
    // return axios.post(`${backend_url}/auth/signup`, queryParams)
    //     .then((r) => {
    //         return dispatch(getUserSuccess(r.data))
    //     })
    //     .catch((e) => {
    //         dispatch(getUserFailure())
    //     })
    try {
        let {data} = await axios.post(`${backend_url}/auth/signup`, queryParams);
        dispatch(getUserSuccess(data))
    } catch (error) {
        dispatch(getUserFailure(data))
    }
}