import { useState } from "react";

import "./App.css";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main>
        <div className="pattern"></div>
        <div className="header_wrapper wrapper">
          <header>
            <img src="./img/hero-img.png" alt="Hero Banner" />
            <h1>
              Trova i <span className="text-gradient">Film</span> Che Ti
              Piacciono Senza Problemi
            </h1>
          </header>
          {/* Sezione ricerca */}
          <Search />
        </div>
      </main>
    </>
  );
}

export default App;
