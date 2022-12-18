import { GetLocal, SetLocal } from "../../Utils/localstorage"
import * as types from "./actionType"
import axios from "axios"
let userid = "639f20fe1fd1153bf217827f"

export const getproductrequest = () => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST })
    try {
        return axios.get("https://gold-worried-walkingstick.cyclic.app/cart/" + userid)
            .then((res) => dispatch({ type: types.GET_CART_SUCCESS, payload: res.data })
            )
            .catch((err) => dispatch({ type: types.GET_CART_FAIL }))
        // let cartdata = GetLocal("tempcart")
        // return dispatch({ type: types.GET_CART_SUCCESS, payload: cartdata })
    } catch (err) {
        return dispatch({ type: types.GET_CART_FAIL })
    }
}

export const addproductrequest = (params) => (dispatch) => {
    dispatch({ type: types.ADD_CART_REQUEST })
    let obj = {
        product_id: params,
        user_id: userid
    }
    console.log(obj);
    try {
        return axios.patch("https://gold-worried-walkingstick.cyclic.app/cart/add", obj)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    } catch (err) {
        // console.error("Some thing get wrong :" + err);
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