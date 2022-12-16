import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from '../Pages/Address/Address'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Delivery from '../Pages/Delivery/Delivery'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Payment from '../Pages/Payments/Payment'
import Products from '../Pages/Products/Products'
import Search from '../Pages/SearchPage/Search'
import SearchProduct from '../Pages/SearchPage/SearchProduct'
import Signup from '../Pages/Signup/Signup'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/address' element={<Address />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/search' element={<Search />} />
                <Route path='/searchProduct' element={<SearchProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}
