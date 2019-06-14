import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import ReactTable from "react-table";
import "react-table-material/Table.css";
import moment from 'moment';
import matchSorter from "match-sorter";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class ListaPrecios extends Component {
  render() {
    const { articulos } = this.props;
    console.log("ARTICULOS", articulos);
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
        Filter: ({ filter, onChange }) => (
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
        Filter: ({ filter, onChange }) => (
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
              <Chip label={a.nombre} />
            ))}
          </div>
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["genero"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              float: 'right'
            }}
          />)

      },
      {
        id: "precio",
        Header: <div style={{ textAlign: "right" }}>Precio $</div>,
        accessor: d => d.precio,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["precio.precio"] }),
        filterAll: true,
        Cell: row => (
          <div style={{ textAlign: "right" }}>$ {row.value.precio}</div>
        ),
        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              float: 'right'
            }}
          />)
      },
      {
        Header: <div style={{ textAlign: "right" }}>Ultima actualización</div>,
        id: "actualizado",
        filterable: false,
        accessor: d => d.precio.updatedAt,
        Cell: row => (<div style={{ textAlign: "right" }}>{moment(new Date()).diff(row.value, 'days')} dias</div>)
      }
    ];

    return (
      <Paper>
        <ReactTable
          data={articulos}
          columns={columns}
          filterable={true}
          resizable={true}
          defaultPageSize={10}
        />
        }
      </Paper>
    );
  }
}

ListaPrecios.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListaPrecios);
