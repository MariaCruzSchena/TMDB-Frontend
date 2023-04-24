import React from "react";
import TextField from "@mui/material/TextField";
import { setSearchQuery } from "../store/search";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

function SearchBar() {
  //Hooks
  const dispatch = useDispatch();
  const searchInput = useInput();
  const navigate = useNavigate();

  //Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryState = searchInput.value;
    dispatch(setSearchQuery(queryState));
    navigate("/discover/multimedia");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField        
        type="search"
        placeholder="Search"
        {...searchInput}
        variant="standard"
        size="small"
        sx={{
          marginRight: "2rem",
          backgroundColor: "black",
          opacity: "75%",
          "& .MuiInputBase-input": {
            color: "#fff", 
          },
          "& .MuiInputBase-input:after": {
            backgroundColor: "black", 
            opacity: "75%"
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#fff",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#fff", 
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#fff", 
          },
          "& .Mui-focused": {
            backgroundColor: "black",
          },
        }}
      />
    </form>
  );
}

export default SearchBar;
