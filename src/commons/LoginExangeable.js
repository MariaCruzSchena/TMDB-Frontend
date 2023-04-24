import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const LoginExangeable = ({typeOfEnrollment}) => {
  return (
    <>
      {typeOfEnrollment === "login" ? (
        <div className="loginNavigateWrapper">
          <h3 className="loginSubtitle">
            First time on TMDB?
          </h3>
          <Link to={"/signup"}>
            <p className="loginParagraph">Sign up</p>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <div className="signUpWrapper">
            <IoIosArrowBack
              className="loginParagraph"
              style={{
                marginRight: "1rem",
              }}
            />
            <h3
              className="loginParagraph"
              style={{
                marginRight: "1rem",
              }}
            >
              Back to login
            </h3>
          </div>
        </Link>
      )}{" "}
    </>
  );
};

export default LoginExangeable;
