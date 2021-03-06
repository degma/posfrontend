import React, { Component } from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import { Grid } from "@material-ui/core"
import "react-table-material/Table.css"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from "@material-ui/icons/Edit"
import Chip from "@material-ui/core/Chip"
import matchSorter from "match-sorter"

class ListaPrecioList extends Component {
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
        accessor: "nombre",
        filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["nombre"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              float: 'left'
            }}
          />)
      },
      {
        Header: "Descripción",
        accesor: "descripcion",
        show: false,
        filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["descripcion"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              float: 'left'
            }}
          />)
      },{
        Header: "Valida Desde",
        accesor: "validaFrom",
        filterable: false
      },{
        Header: "Valida Hasta",
        accesor: "validaTO",
        filterable: false
        
      },
      {
        Header: "",
        accessor: "activo",        
        filterable: false,
        Cell: row => (
          <div style={{ textAlign: "right" }}>
            {row.value}
            {row.value ?
              <Chip color="primary" label={"Activa"} />
              :
              <Chip label={"Desactiva"} />
            }
          </div>
        )
      }
      ,
      {
        Header: "",
        sortable: false,
        Cell: row => (
          <div>
            <IconButton
              style={{ padding: 5 }}
              onClick={() => this.props.handleUpdateItem(row.original)}
            >
              <EditIcon />
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
            data={this.props.listaprecio}
            columns={columns}
            filterable={true}
            defaultPageSize={10}
          />
        </Grid>
      </Grid>
    );
  }
}

export default ListaPrecioList;
