import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { setSelectedItem } from "../store/item";
import { setFavorites } from "../store/favorites";
import Card from "../commons/Card";

const ContentGrid = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //States
  const multimedia = useSelector((state) => state.multimedia);
  const favorites = useSelector((state) => state.favorites);

  //Variables
  const collection = type === "favorites" ? favorites : multimedia[type];

  //Functions
  const itemDetailHandler = async (item) => {
    try {
      const res = await axios.get(
        `/api/search/${item.id}?type=${item.media_type}`,
        { withCredentials: true, credentials: "include" }
      );
      dispatch(setSelectedItem(res.data));
      navigate(`/search/${item.media_type}/${item.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (!collection) return <h5 className="gridTitle">No content</h5>;
  return (
    <div className="gridContainer">
      <div className="gridWrapper">
        {collection.map(
          (item) =>
            (item.title || item.name) && (
              <Card
                key={item.id}
                item={item}
                itemDetailHandler={itemDetailHandler}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ContentGrid;
