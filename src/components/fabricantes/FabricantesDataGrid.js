import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Grid } from "@material-ui/core";
import "react-table-material/Table.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class FabricantesDataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
  }

  render() {
    const columns = [
      {
        Header: "Nombre",
        accessor: "nombre"
      },
      {
        Header: "Telefono",
        accessor: "telefono"
      },
      {
        Header: "Contacto",
        accessor: "nombre_contacto"
      },
      {
        Header: "Notas",
        accessor: "notas",
        filterable: false
      },
      {
        Header: "",
        Cell: () => (
          
              <IconButton style={{ verticalAlign: "top" }}>
                <EditIcon />
              </IconButton>
          
        ),
        filterable: false
      }
    ];
    console.log(this.state.lista);
    console.log("FABRICANTES", this.props.fabricantes);
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <ReactTable
            data={this.props.fabricantes}
            columns={columns}
            filterable={true}
            defaultPageSize={10}
          />
        </Grid>
      </Grid>
    );
  }
}

export default FabricantesDataGrid;
