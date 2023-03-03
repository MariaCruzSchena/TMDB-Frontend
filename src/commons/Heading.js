import React from "react";

const Heading = ({ text, style }) => {
  return <h1 className="heading" style={style && style}>{text}</h1>;
};

export default Heading;
