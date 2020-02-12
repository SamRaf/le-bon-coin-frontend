import React from "react";
import "./searching.css";
function Search() {
  return (
    <>
      <div className="ellipse"></div>
      <div className="searching">
        <input type="text" placeholder="Que recherchez-vous?" />
        <button className="buttonS">Rechercher</button>
      </div>
    </>
  );
}
export default Search;
