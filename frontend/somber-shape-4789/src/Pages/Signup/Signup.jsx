import React from 'react'
import { useState } from 'react'
import Style from "./Signup.module.css"
import { getUserSignup } from '../../Redux/AuthReducer/action';
import { useDispatch } from 'react-redux';
export default function Signup() {
  let [input, setInput] = useState({
    first_name : "",
    last_name : "",
    email : "",
    mobile : "",
    password : "",
    confirm_password : ""
  });

  let dispatch = useDispatch();

  const handleChange = (event) =>{
   let {name, value} = event.target;
   setInput({...input, [name] : value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(getUserSignup(input));
  }

  return (
    <>
         <div className={Style.container}>
         <p className={Style.path}><a href="">HOME</a> &nbsp; /  &nbsp; <a href="">CREATE AN ACCOUNT</a></p>
         <div className={Style.inner_login}>
           <div className={Style.login_poster} style = {{backgroundImage : `url("https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_")`}}></div>

           <div className={Style.login_form}>
              <div className={Style.form_heading}><h1>Create an Account</h1></div>

              <form action="" className={Style.form} onSubmit = {handleSubmit}>

                  <div className={Style.div_control}>
                    <p><span>*</span>First Name</p>
                    <input type="text" name="first_name" value={input.first_name} id={Style.input_control} onChange = {handleChange} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Last Name</p>
                    <input type="text" name="last_name" value={input.last_name} id={Style.input_control} onChange = {handleChange}  required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Email</p>
                    <input type="email" name="email" value={input.email} id={Style.input_control} onChange = {handleChange}  required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Phone</p>
                    <input type="number" name="mobile" value={input.mobile} id={Style.input_control} onChange = {handleChange}  required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Password</p>
                    <input type="password" name="password" value={input.password} id={Style.input_control} onChange = {handleChange}  required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Confirm Password</p>
                    <input type="password" name="confirm_password" value={input.confirm_password} id={Style.input_control} onChange = {handleChange}  required/>
                  </div>

                  
                    <input type="submit" value={"CREATE ACCOUNT"}  className={Style.btn} />
               
              </form>
           </div>

           <p className={Style.ques}>QUESTIONS?</p>
                  <p>We’re here for you! Call us at 1-800-756-5005.</p>

         </div>
      </div>
    </>
  )
}
