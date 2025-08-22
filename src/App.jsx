import { useState, useEffect } from "react";

import "./App.css";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect è un hook di React che mi serve per il fetch dei dati
  // Scrivendolo in questo modo verrà caricato solo all'inizio, per fare ciò devo fornirgli un array di dipendenze vuoto, altrimenti verrà eseguito ad ogni render del componente
  useEffect(() => {}, []);

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
          {/* Passo al componente lo state, lo passo e lo tratto come una prop */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* Quando passo lo state non lo devo passare come funzione, altrimenti verrà richiamata istantaneamente */}
          {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm()} /> */}
        </div>
      </main>
    </>
  );
}

export default App;
