import React from 'react'
import '../styles/Login.css'

const Login = ({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction}) => {
    console.log(emailInput);
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>{title}</h1>
            <input ref={emailInput} className='login-email' type='email' placeholder='email'></input>
            <input ref={passwordInput} className='login-password' type='password' placeholder='password'></input>
            <button className='login-button' onClick={btnFunction}>{button}</button>
            <div className='links'>
                <p>{headerStatement}</p>
                <a href={href} >{link}</a>    
            </div>
        </div>
    </div>
  )
}

export default Login