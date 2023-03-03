import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { setSearchQuery } from "../store/search";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: "#fff", // set text color to white
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff", // set underline color to white
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#fff", // set underline color to white on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff", // set underline color to white on focus
    },
  },
}));

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const searchInput = useInput();
  
  
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
        className={classes.root}
        type="search"
        placeholder="Search"
        {...searchInput}
        variant="standard"
        size="small"
        style={{ marginRight: " 2rem" }}
      />
    </form>
  );
}

export default SearchBar;
