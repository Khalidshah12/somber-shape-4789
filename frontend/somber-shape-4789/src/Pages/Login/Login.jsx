import React, { useState } from 'react'
import Style from "./Login.module.css"
import {useDispatch} from "react-redux"
import { getUserLogin } from '../../Redux/AuthReducer/action'

export default function Login() {
  let [input, setInput] = useState({
    email : "",
    password : ""
  })
  let dispatch = useDispatch();
  const handleChange = (event) =>{
    let {name, value} = event.target;
    setInput({...input, [name] : value})
  }
  const handleSubmit = (event) =>{
  event.preventDefault();
    dispatch(getUserLogin(input))
  }
  return (
    <>
      <div className={Style.container}>
         <p className={Style.path}><a href="">HOME</a> &nbsp; /  &nbsp; <a href="">SIGN IN OR SIGN UP</a></p>
         <div className={Style.inner_login}>
           <div className={Style.login_poster} style = {{backgroundImage : `url("https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_")`}}></div>

           <div className={Style.login_form}>
              <div className={Style.form_heading}><h1>Sign In or Sign Up</h1></div>

              <div className={Style.forms}>
                  <div>
                  <div className={Style.or}>OR</div>
                  <p>SIGN IN</p>
                  <p>If you already have an account with us, sign in below</p>
                  <div className={Style.inner_form_div}>
                    {/* // Form Start */}
                    <form action="" className={Style.input_form} onSubmit = {handleSubmit}>
                        <div className={Style.div_control}>
                          <p>Email Address</p>
                          <input type="email" name="email" value={input.email} id={Style.input_control} onChange = {handleChange} required/>
                        </div>
                        <div className={Style.div_control}>
                          <p>Password</p>
                          <input type="password" name="password" value={input.password} id={Style.input_control} onChange = {handleChange} required/>
                        </div>
                        {/* <div className={Style.div_control}>
                          <p>Confirm Password</p>
                          <input type="password" name="confirm_password" id={Style.input_control} required/>
                        </div> */}
                        <div className={Style.forgot}>
                          <a href="">Forgot Password?</a>
                          <div><input type="checkbox" name="" id="" /> <span>Remember Me</span></div>
                        </div>
                        <input type='submit' value={"SIGN IN"} className={Style.btn} />
                    </form>
                    {/* // Form End */}
                  </div>
                  </div>

                  <div>
                    <p>SIGN UP</p>
                    <p>Create an account to access the best of your favorite store</p>
                    <div className={Style.inner_form_div}>
                      <div className={Style.inner_form_div_poster}  style = {{backgroundImage : `url("https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_")`}}></div>
                      <a href='#' className={Style.btn}>CREATE AN ACCOUNT</a>
                    </div>
                  </div>
              </div>
           </div>
                
                  <p className={Style.ques}>QUESTIONS?</p>
                  <p>We’re here for you! Call us at 1-800-756-5005.</p>

         </div>
      </div>
    </>
  )
}
