import React from "react";
import Heading from "./Heading";
import useRenderTitle from "../hooks/useRenderTitle";

const Banner = () => {  
  return (
    <div className="bannerContainer">
      <div className="bannerWrapper">
        <Heading text={useRenderTitle("banner")} style={{ textAlign: "center" }} />
        <h5 className="bannerSubtitle">{useRenderTitle("subheading")}</h5>
      </div>
    </div>
  );
};

export default Banner;
