import React from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import matchSorter from "match-sorter";
import Chip from "@material-ui/core/Chip";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


class ArticuloDataGrid extends React.Component {
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
        Cell: row => <div style={{ textAlign: "left" }}>{row.value}</div>,
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
        id: "fabricante",
        Header: <div style={{ textAlign: "right" }}>Fabricante</div>,
        accessor: "fabricante.nombre",
        Cell: row => <div style={{ textAlign: "right" }}>{row.value}</div>,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["fabricante"] }),
        filterAll: true,
        Filter: ({filter, onChange}) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{             
              float: 'right'
            }}
          />)
      },
      {
        id: "categoria",
        Header: <div style={{ textAlign: "right" }}>Categoría</div>,
        accessor: "categoria.nombre",
        Cell: row => <div style={{ textAlign: "right" }}>{row.value}</div>,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["categoria"] }),
        filterAll: true,
        Filter: ({filter, onChange}) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{             
              float: 'right'
            }}
          />)
      },
      {
        id: "genero",
        Header: <div style={{ textAlign: "right" }}>Genero</div>,
        accessor: "generos",
        Cell: row => (
          <div style={{ textAlign: "right" }}>
            {row.value.map(a => (
              <Chip key={a.id} label={a.nombre} />
            ))}
          </div>          
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["genero"] }),
        filterAll: true,
        Filter: ({filter, onChange}) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{             
              float: 'right'
            }}
          />)

      },
      {
        Header: "",
        sortable: false,
        Cell: row => (
          <div>
            <IconButton style={{ padding: 5 }} onClick={() => this.props.handleUpdateItem(row.original)}>
              <EditIcon />
            </IconButton>
            <IconButton style={{ padding: 5 }} onClick={() => this.props.handleConfirmEliminar(row.original)}>
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
            data={this.props.articulos}
            columns={columns}
            filterable={true}
            defaultPageSize={10}
          />
        </Grid>
      </Grid>
      
    );
  }
}
export default ArticuloDataGrid;
