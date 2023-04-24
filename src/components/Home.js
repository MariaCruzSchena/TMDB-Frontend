import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Banner from "../commons/Banner";

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{!user?.id ? <Login interaction={"login"} /> : <Banner type={"banner"}/>}</>;
};

export default Home;
