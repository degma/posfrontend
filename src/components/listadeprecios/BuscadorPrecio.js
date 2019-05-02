import React, { Component } from "react";

const BuscadorPrecio = () => {
  return (
    <div>
      <div className="input-group input-group-lg mt-3 mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Buscar Artículo
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
  );
};

export default BuscadorPrecio;
