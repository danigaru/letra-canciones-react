import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({buscarCancion}) => {
  // state para los inputs del formulario
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false);

  // obtener los datos del formulario
  const obtenerDatos = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const { artista, cancion } = busqueda;

  // evento cuando se envie el formulario
  const buscarInformacion = (e) => {
    e.preventDefault();

    if (!artista.trim() || !cancion.trim()) {
      setError(true);
      return;
    }

    setError(false);
    // pasar al componente principal
    buscarCancion(busqueda);

  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">
                Buscador letra de canciones
              </legend>

              {error && <Error message="Todos los campos son obligatorios" />}

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      text="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre artista"
                      onChange={obtenerDatos}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      text="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre canción"
                      onChange={obtenerDatos}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
