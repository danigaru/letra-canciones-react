import React from "react";

const Artista = ({ artistaCancion }) => {
  if (Object.keys(artistaCancion).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES } = artistaCancion;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo artista" />
        <p className="card-text">Género: {strGenre}</p>
        <p className="card-text">Biografía</p>
        <p className="card-text">{strBiographyES}</p>
        <a
          href={`https://${artistaCancion.strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://${artistaCancion.strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`https://${artistaCancion.strLastFMChart}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  );
};

export default Artista;
