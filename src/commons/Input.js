import React from "react";

const Input = ({ type, name, placeholder, valueHandler }) => {  
  return (
    <input
      {...valueHandler}
      type={type}
      name={name}
      placeholder={placeholder}
      className="loginInput"
    />
  );
};

export default Input;
