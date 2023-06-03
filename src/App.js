import React, { useState, useEffect } from "react";
import "./App.css";
import babyNamesData from "./babyNameData.json";
import Search from "./components/Search";
import Favourites from "./components/Favourites";

const App = () => {
  const [names, setNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [genderFilter, setGenderFilter] = useState("all");

  useEffect(() => {
    const sortedNames = [...babyNamesData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setNames(sortedNames);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToFavourites = (name) => {
    setFavourites([...favourites, name]);
    setNames(names.filter((n) => n.id !== name.id));
  };

  const handleRemoveFromFavourites = (name) => {
    setNames([...names, name]);
    setFavourites(favourites.filter((n) => n.id !== name.id));
  };

  const handleGenderFilter = (filter) => {
    setGenderFilter(filter);
  };

  const filteredNames = names.filter((name) =>
    name.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNamesWithGenderFilter =
    genderFilter === "all"
      ? filteredNames
      : filteredNames.filter((name) => name.sex === genderFilter);

  return (
    <div className="App">
      <h1>Baby Names</h1>
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="filter-buttons">
        <button
          className={genderFilter === "all" ? "active" : ""}
          onClick={() => handleGenderFilter("all")}
        >
          All
        </button>
        <button
          className={genderFilter === "m" ? "active" : ""}
          onClick={() => handleGenderFilter("m")}
        >
          Boys
        </button>
        <button
          className={genderFilter === "f" ? "active" : ""}
          onClick={() => handleGenderFilter("f")}
        >
          Girls
        </button>
      </div>
      <div className="names-container">
        {filteredNamesWithGenderFilter.map((name) => (
          <div
            key={name.id}
            className={`name ${name.sex === "m" ? "boy" : "girl"}`}
            onClick={() => handleAddToFavourites(name)}
          >
            {name.name}
          </div>
        ))}
      </div>
      <Favourites
        favourites={favourites}
        handleRemoveFromFavourites={handleRemoveFromFavourites}
      />
    </div>
  );
};

export default App;
