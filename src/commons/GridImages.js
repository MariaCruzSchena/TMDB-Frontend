import React from "react";

const GridImages = ({ img, item }) => {
  return <img className="grid-images" src={img} alt={item.title} />;
};

export default GridImages;
