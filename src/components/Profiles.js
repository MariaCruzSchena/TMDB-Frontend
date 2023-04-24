import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProfileData from "../commons/ProfileData";
import { setSearchedUserId } from "../store/userSearch";

const Profiles = () => {
  const dispatch = useDispatch();

  //States
  const [thisFavs, setThisFavs] = useState([]);
  const userSearch = useSelector((state) => state.userSearch);
  const users = useSelector((state) => state.dbUsers);

  //Variables
  const profileUser = users.find((u) => u.id === parseInt(userSearch));

  //Funcions
  useEffect(() => {
    dispatch(setSearchedUserId(localStorage.getItem("currentId")));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("ESTE ES EL ID", userSearch);
    axios(`https://tmdb-rptq.onrender.com/api/user/${userSearch}/favorites`, {
      withCredentials: true,
      credentials: "include",
    }).then((res) => {
      setThisFavs(res.data);
    });
  }, [userSearch]);

  return <ProfileData thisFavs={thisFavs} item={profileUser} />;
};

export default Profiles;
