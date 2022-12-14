import React from 'react'
import Style from "./Signup.module.css"

export default function Signup() {
  return (
    <>
         <div className={Style.container}>
         <p className={Style.path}><a href="">HOME</a> &nbsp; /  &nbsp; <a href="">CREATE AN ACCOUNT</a></p>
         <div className={Style.inner_login}>
           <div className={Style.login_poster} style = {{backgroundImage : `url("https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_")`}}></div>

           <div className={Style.login_form}>
              <div className={Style.form_heading}><h1>Create an Account</h1></div>

              <form action="" className={Style.form}>

                  <div className={Style.div_control}>
                    <p><span>*</span>First Name</p>
                    <input type="text" name="first_name" id={Style.input_control} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Last Name</p>
                    <input type="text" name="last_name" id={Style.input_control} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Email</p>
                    <input type="email" name="email" id={Style.input_control} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Phone</p>
                    <input type="number" name="phone" id={Style.input_control} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Password</p>
                    <input type="password" name="password" id={Style.input_control} required/>
                  </div>
                  <div className={Style.div_control}>
                    <p><span>*</span>Phone</p>
                    <input type="password" name="confirm_password" id={Style.input_control} required/>
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
