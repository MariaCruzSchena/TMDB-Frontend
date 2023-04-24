import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMultimedia, setMovies, setTv } from "./store/multimedia";
import { setSearchedUserId } from "./store/userSearch";
import { setFavorites } from "./store/favorites";
import { setDBUsers } from "./store/dbUsers";
import Home from "./components/Home";
import Login from "./components/Login";
import Content from "./components/Content";
import MovieDetails from "./components/MovieDetails";
import ShowDetails from "./components/ShowDetails";
import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles";

function App() {
  const searchQuery = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/api/search?query=${searchQuery}`, { withCredentials: true,  credentials: 'include'}).then((res) => {
      dispatch(setSearchedMultimedia(res.data));
      dispatch(setMovies(res.data));
      dispatch(setTv(res.data));
    }); // eslint-disable-next-line
  }, [searchQuery]);

  useEffect(() => {
    dispatch(setFavorites(JSON.parse(localStorage.getItem("favorites"))));
    dispatch(setDBUsers(JSON.parse(localStorage.getItem("dbUsers"))));
    dispatch(setSearchedUserId(localStorage.getItem("currentId")));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:enroll" element={<Login />} />
          <Route path="/search/movie/:id" element={<MovieDetails />} />
          <Route path="/search/tv/:id" element={<ShowDetails />} />
          <Route path="/discover/:type" element={<Content />} />
          <Route path="/profile/:id" element={<Profiles />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
