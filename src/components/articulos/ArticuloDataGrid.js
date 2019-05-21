import React from "react";
import eventService from "../../api/eventService";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


class ArticuloDataGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
      listaprecio: ''
    };
  }

  componentDidMount(){
      /* Articulos */
    eventService.articulo
    .getArticulo()
    .then(articulos => {        
      this.setState({
        lista: articulos.data.articulos,
        listadeprecio: {
          id: articulos.data.id,
          nombre: articulos.data.nombre,
          updatedAt: articulos.data.updatedAt,
          createdAt: articulos.data.createdAt,
          validaFrom: articulos.data.validaFrom,
          validaTo: articulos.data.validaTo
        }
      });
    })
    .catch(error => console.log(error));
  }
  render() {
    const { lista } = this.state;
    return (
      <div>
        <ReactTable
          data={lista}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Nombre",
                  accessor: "nombre"
                },
                {
                  Header: "Descripcion",
                  id: "descripcion",
                  accessor: d => d.descripcion
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default ArticuloDataGrid;
