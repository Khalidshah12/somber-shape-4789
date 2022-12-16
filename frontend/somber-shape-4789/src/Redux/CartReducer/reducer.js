import * as types from "./actionType"

const initial = {
    cartdata: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.GET_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartdata: payload
            }
        case types.GET_CART_FAIL:
            return {
                ...state,
                isError: true
            }
        case types.ADD_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.ADD_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartdata: payload
            }
        case types.ADD_CART_FAIL:
            return {
                ...state,
                isError: true
            }
        case types.ADJUST_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.ADJUST_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartdata: payload
            }
        case types.ADJUST_CART_FAIL:
            return {
                ...state,
                isError: true
            }
        case types.REMOVE_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.REMOVE_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartdata: payload
            }
        case types.REMOVE_CART_FAIL:
            return {
                ...state,
                isError: true
            }
        default:
            break;
    }
    return state
}