import { GetLocal, SetLocal } from "../../Utils/localstorage"
import * as types from "./actionType"

export const getproductrequest = () => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST })
    try {
        let cartdata = GetLocal("tempcart")
        return dispatch({ type: types.GET_CART_SUCCESS, payload: cartdata })
    } catch (err) {
        return dispatch({ type: types.GET_CART_FAIL })
    }
}

export const addproductrequest = (params) => (dispatch) => {
    dispatch({ type: types.ADD_CART_REQUEST })
    try {
        let flag = false
        let data = GetLocal("tempcart") || []
        data.foreach((elem) => {
            if (elem.name === params.name) {
                elem.quantity++
                flag = true
            }
        })
        if (!flag) {
            params.quantity = 1
            data.push(params)
        }
        SetLocal("tempcart", data)
        return dispatch({ type: types.ADD_CART_SUCCESS, payload: data })
    } catch (err) {
        console.error("Some thing get wrong :" + err);
        return dispatch({ type: types.ADD_CART_FAIL })
    }
}

export const removeproductrequest = (params) => (dispatch) => {
    dispatch({ type: types.REMOVE_CART_REQUEST })
    try {
        let data = GetLocal("tempcart") || []
        data.foreach((elem, index) => {
            if (elem.name === params.name) {
                data.splice(index, 1)
            }
        })
        SetLocal("tempcart", data)
        return dispatch({ type: types.REMOVE_CART_SUCCESS, payload: data })
    } catch (err) {
        console.error("Some thing get wrong :" + err);
        return dispatch({ type: types.REMOVE_CART_FAIL })
    }
}

export const adjustproductrequest = (params, val) => (dispatch) => {
    dispatch({ type: types.ADJUST_CART_REQUEST })
    try {
        let data = GetLocal("tempcart") || []
        data.foreach((elem, index) => {
            if (elem.name === params.name) {
                elem.quantity += val
                if (elem.quantity <= 0) {
                    data.splice(index, 1)
                }
                console.log("element found :" + elem.name);
            }
        })
        console.log(data);
        SetLocal("tempcart", data)
        return dispatch({ type: types.ADJUST_CART_SUCCESS, payload: data })
    } catch (err) {
        console.error("Some thing get wrong :" + err);
        return dispatch({ type: types.ADJUST_CART_FAIL })
    }
}