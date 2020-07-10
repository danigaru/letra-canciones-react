import React, { useState } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Letra from "./components/Letra";
import Artista from "./components/Artista";

function App() {
  const [letraCancion, setLetraCancion] = useState("");
  const [artistaCancion, setArtistaCancion] = useState("");
  const [error, setError] = useState(false);

  const buscarCancion = async ({ artista, cancion }) => {
    setError(false);
    try {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const artistaApi = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, artistaCancion] = await Promise.all([
        axios(url),
        axios(artistaApi),
      ]);

      setLetraCancion(letra.data.lyrics);
      setArtistaCancion(artistaCancion.data.artists[0]);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <Formulario buscarCancion={buscarCancion} />

      {error && <Error message="No se encontraron resultados" />}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Artista artistaCancion={artistaCancion} />
          </div>
          <div className="col-12 col-md-6">
            <Letra letra={letraCancion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
