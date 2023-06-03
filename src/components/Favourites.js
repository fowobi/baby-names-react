import React from "react";

const Favourites = ({ favourites, handleRemoveFromFavourites }) => {
  return (
    <>
      <h2>Favourites</h2>
      <div className="favourites-container">
        {favourites.map((name) => (
          <div
            key={name.id}
            className={`name ${name.sex === "m" ? "boy" : "girl"}`}
            onClick={() => handleRemoveFromFavourites(name)}
          >
            {name.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
