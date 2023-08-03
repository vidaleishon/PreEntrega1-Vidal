import React, { useEffect, useState } from "react";
import { gFetch } from "../../utils/gFetch";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCounts";
import Galerias from "../Galeria/Galerias";

const ComponenteContainer = ({ catalogo }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch()
      .then((resp) => {
        setDepartamentos(resp);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Departamentos</h1>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="flexarticle">
          {departamentos.map((departamento) => (
            <article key={departamento.id} className="container grid">
              <h2>Apartamento {departamento.name}</h2>
              <div>
                <img src={departamento.foto} className="grid_img" alt={departamento.name} />
              </div>
              <div className="descripcion">
                <p className="grid_p">{departamento.descripcion}</p>
              </div>
              <div>
                <h3>Precio por noche: {departamento.precio}</h3>
              </div>
              <div className="card-footer">
                <Link to={`/galeria`}>
                  <button>Galería</button>
                </Link>
                <div>
                  <ItemCount />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComponenteContainer;
