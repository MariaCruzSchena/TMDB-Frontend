import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../store/favorites";
import { FaPlus, FaCheck } from "react-icons/fa";
import noBackdropAvailable from "../assets/noBackdropAvailable.jpg";

const MovieDetails = () => {
  const dispatch = useDispatch();

  //States
  const item = useSelector((state) => state.item);
  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);
  const [isInFavorites, setIsInFavorites] = useState(() =>
    favorites.some((element) => element.id === item.id)
  );

  //Variables
  const genres = item.genres
    ? item.genres.map((genre) => genre.name).join(", ")
    : null;

  //Functions
  useEffect(() => {
    setIsInFavorites(favorites.some((element) => element.id === item.id));
    // eslint-disable-next-line
  }, [favorites]);

  const favoriteHandler = () => {
    if (!isInFavorites) {
      axios
        .post(
          `/api/user/${user.id}/favorites?type=movie`,
          { item },
          { withCredentials: true, credentials: "include" }
        )
        .then((res) =>
          axios
            .get(`/api/user/${user.id}/favorites`, {
              withCredentials: true,
              credentials: "include",
            })
            .then((res) => {
              dispatch(setFavorites(res.data));
              localStorage.setItem("favorites", JSON.stringify(res.data));
            })
        )
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(
          `/api/user/${user.id}/favorites?type=movie&mediaId=${item.id}`,
          { withCredentials: true, credentials: "include" }
        )
        .then((res) =>
          axios
            .get(`/api/user/${user.id}/favorites`, {
              withCredentials: true,
              credentials: "include",
            })
            .then((res) => {
              dispatch(setFavorites(res.data));
              localStorage.setItem("favorites", JSON.stringify(res.data));
            })
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="detailContainer">
      <div className="detailTopWrapper">
        <img
          className="detailImg"
          src={
            item.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
              : noBackdropAvailable
          }
          alt={item.title}
        />
        <div className="detailTitle">{item.title}</div>
      </div>

      <div className="detailBottomWrapper">
        <div className="detailBottomLeftWrapper">
          <div className="detailBottomLeftUpperWrapper">
            <span className="detailUpperWrapperInfo">
              {item.release_date ? item.release_date.split("-")[0] : null}
            </span>
            <span className="detailUpperWrapperInfo">
              {!item.adult ? "ATP" : "18+"}
            </span>
            <span
              className="detailUpperWrapperInfo"
              style={{ cursor: "pointer" }}
            >
              {!isInFavorites ? (
                <FaPlus onClick={favoriteHandler} />
              ) : (
                <FaCheck onClick={favoriteHandler} />
              )}
            </span>
          </div>

          <div>
            <p className="detailBottomWrapperInfo">{item.overview}</p>
          </div>
        </div>

        <div className="detailBottomRightWrapper">
          {genres ? (
            <div className="detailExtraInfo">
              {" "}
              Genres: <span className="detailSpans">{genres}</span>{" "}
            </div>
          ) : null}

          {item.tagline ? (
            <div className="detailExtraInfo">
              Tagline: <span className="detailSpans">{item.tagline}</span>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
