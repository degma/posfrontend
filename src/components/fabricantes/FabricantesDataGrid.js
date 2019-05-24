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
        Header: "Id",
        accessor: "id",
        show:false
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
        sortable: false,
        show: false,
        filterable: false
      },
      {
        Header: "",
        sortable: false,
        Cell: row => (
          <div>
            <IconButton style={{ padding: 5 }} onClick={() => this.props.handleUpdateItem(row.original)}>
              <EditIcon />
            </IconButton>
            <IconButton style={{ padding: 5 }} onClick={() => console.log(row.original)}>
              <DeleteIcon />
            </IconButton>
          </div>

        ),
        filterable: false      
      }
    ];


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
