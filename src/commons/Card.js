import React from "react";
import noImgAvailable from "../assets/noImgAvailable.jpg";
import GridImages from "./GridImages";

const Card = ({ item, itemDetailHandler }) => {
  return (
    <div className="itemWrapper"  onClick={() => itemDetailHandler? itemDetailHandler(item) : null} >
        <GridImages img={item.poster_path? `https://image.tmdb.org/t/p/w500${item.poster_path}` : noImgAvailable} item={item} />
    </div>
  );
};

export default Card;
