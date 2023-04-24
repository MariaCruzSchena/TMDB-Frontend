import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { setUser } from "../store/user";
import { setFavorites } from "../store/favorites";
import { setDBUsers } from "../store/dbUsers";
import Input from "../commons/Input";
import LoginButton from "../commons/LoginButton";
import LoginExangeable from "../commons/LoginExangeable";

const Login = ({ interaction }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enroll } = useParams();
  const name = useInput();
  const email = useInput();
  const password = useInput();

  //Variables and states
  const [error, setError] = useState("");
  const typeOfEnrollment = enroll ? enroll : interaction;
  const postUserRoute = `/api/user/${typeOfEnrollment}`;
  const postInfo =
    typeOfEnrollment === "login"
      ? { email: email.value, password: password.value }
      : { fullName: name.value, email: email.value, password: password.value };

  //Handler
  const postUserHandler = async (e) => {
    e.preventDefault();
    try {
      //Login request
      const response = await axios.post(postUserRoute, postInfo);
      dispatch(setUser(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));

      //Get users favorites
      const favoritesResponse = await axios.get(
        `/api/user/${response.data.id}/favorites`
      );
      localStorage.setItem("favorites", JSON.stringify(favoritesResponse.data));
      dispatch(setFavorites(favoritesResponse.data));

      //Get users in db
      const DBUsersResponse = await axios.get("/api/user");
      localStorage.setItem("dbUsers", JSON.stringify(DBUsersResponse.data));
      dispatch(setDBUsers(DBUsersResponse.data));

      //Navigate home
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={postUserHandler}>
        <div className="loginWrapper">
          {error ? <h4 className="loginErrorMessage">{error}</h4> : null}
          <div className="loginTitleWrapper">
            <h1 className="loginTitle">
              {typeOfEnrollment === "login" ? "Login" : "Sign up"}
            </h1>
          </div>
          {typeOfEnrollment === "signup" && (
            <Input
              type="text"
              name="name"
              placeholder="Username"
              valueHandler={name}
            />
          )}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            valueHandler={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            valueHandler={password}
          />
          <LoginButton typeOfEnrollment={typeOfEnrollment} />
        </div>
        <LoginExangeable typeOfEnrollment={typeOfEnrollment} />
      </form>
    </div>
  );
};

export default Login;
