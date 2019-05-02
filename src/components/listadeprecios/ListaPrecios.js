import React from "react";
import ArticuloRow from "./ArticuloRow";

const ListaPrecios = (props) => {
    return (
      <div className="table-responsive-sm">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Genero</th>
              <th scope="col">Fabricante</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>             
              {props.articulos.map(articulo =>                    
              <ArticuloRow 
                key={articulo.id} 
                articulo={articulo} />              
              )}              
          </tbody>
        </table>
      </div>
    );

}
export default ListaPrecios;
