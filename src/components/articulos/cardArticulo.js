import React from "react";

const CardArticulo = props => {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-sm-2"><img src="https://via.placeholder.com/100x120"/></div>
          <div className="col-md-4">Nombre & genero</div>
          <div className="col-md-3">Categoria</div>
          <div className="col-md-1">Stock</div>
          <div className="col-md-2">$550</div>
        </div>
      </div>
    </div>
  );
};

export default CardArticulo;
