import React from "react";

const ArticuloRow = props => {
  return (
    <tr>
      {console.log(props.articulo)}
      <th scope="row">{props.articulo.id}</th>
      <td>{props.articulo.nombre}</td>
      <td>{props.articulo.categoria.nombre}</td>
      <td>{props.articulo.generos.map(genero=>genero.nombre+" ")}</td>
      <td>{props.articulo.fabricante.nombre}</td>
      <td>$ {props.articulo.precio.precio}</td>
    </tr>
  );
};

export default ArticuloRow;
