import React from "react";
import { useParams } from "react-router-dom";
import useRenderTitle from "../hooks/useRenderTitle";
import ContentGrid from "./Grid";
import Heading from "../commons/Heading";

const Content = () => {
  const { type } = useParams();
  return (
    <div>
      <Heading text={useRenderTitle(type)} style={{marginLeft: "3rem"}}/>      
      <ContentGrid />
    </div>
  );
};

export default Content;
