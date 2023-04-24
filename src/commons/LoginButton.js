import React from 'react'

const LoginButton = ({typeOfEnrollment}) => {
  return (
    <button className="loginButton">
    {" "}
    {typeOfEnrollment === "login" ? "Login" : "Sign up"}
  </button>
  )
}

export default LoginButton