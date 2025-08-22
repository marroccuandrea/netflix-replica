import React from "react";
// Passo lo state come props destrutturandolo, non richiamo tutte le props, ma solo quello che mi serve
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className=" flex items-center">
        <img className=" pl-2.5" src="./img/search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Cerca tra i centinaia di titoli"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
