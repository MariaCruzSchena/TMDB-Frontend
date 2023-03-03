import React from "react";
import Card from "./Card";

const ProfileData = ({ item, thisFavs }) => {
  return (
    <div className="profileContainer">
      <h2 className="profileTitle">{item?.fullName}'s favorites</h2>
      <div className="profileMainWrapper">
        <div className="profileSecondaryWrapper">
          {thisFavs.map((item) =>
            (item.title || item.name) && <Card key={item.id} item={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
