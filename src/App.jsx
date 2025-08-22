import { useState, useEffect } from "react";

import "./App.css";
import Search from "./components/Search";

// Creo una variabile dove salvo l'indirizzo base per la ricerca di film
const API_BASE_URL = "https://api.themoviedb.org/3";

// Importo la chiave API salvata nel file .env
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Creo una variabile dove salvo le opzioni dell'API
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Errore nel caricamento");
      }

      const data = await response.json();

      alert(response);
    } catch (error) {
      console.error(`Errore nella ricerca del Film: ${error}`);
      setErrorMessage("Errore nella ricerca del film");
    }
  };

  // useEffect è un hook di React che mi serve per il fetch dei dati
  // Scrivendolo in questo modo verrà caricato solo all'inizio, per fare ciò devo fornirgli un array di dipendenze vuoto, altrimenti verrà eseguito ad ogni render del componente
  useEffect(() => {
    fetchMovies();
  }, []);

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

          <section className="movies_section">
            <h2>Tutti i Film</h2>
            {/* Creo un condizionale per stampare l'errore in caso ci sia */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
