import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../store/favorites";
import { FaPlus, FaCheck } from "react-icons/fa";
import noBackdropAvailable from "../assets/noBackdropAvailable.jpg";

const ShowDetails = () => {
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

  const favoriteHandler = async () => {
    try {
      if (!isInFavorites) {
        const res = await axios.post(`/api/user/${user.id}/favorites?type=tv`, {
          item,
        });        
        const favoritesRes = await axios.get(`/api/user/${user.id}/favorites`);        
        dispatch(setFavorites(favoritesRes.data));
        localStorage.setItem("favorites", JSON.stringify(favoritesRes.data));
      } else {
        const res = await axios.delete(
          `/api/user/${user.id}/favorites?type=tv&mediaId=${item.id}`
        );
        const favoritesRes = await axios.get(`/api/user/${user.id}/favorites`);
        dispatch(setFavorites(favoritesRes.data));
        localStorage.setItem("favorites", JSON.stringify(res.data));
      }
    } catch (err) {
      console.log(err);
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
          alt={item.name}
        />
        <div className="detailTitle">{item.name}</div>
      </div>

      <div className="detailBottomWrapper">
        <div className="detailBottomLeftWrapper">
          <div className="detailBottomLeftUpperWrapper">
            <span className="detailUpperWrapperInfo">
              {item.first_air_date ? item.first_air_date.split("-")[0] : null}
            </span>
            <span className="detailUpperWrapperInfo">
              {!item.adult ? "ATP" : "18+"}
            </span>
            <span className="detailUpperWrapperInfo" style={{cursor:"pointer"}}>
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

export default ShowDetails;
