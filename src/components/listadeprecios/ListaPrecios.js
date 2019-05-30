import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import ReactTable from "react-table";
import { Grid } from "@material-ui/core";

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

    const columns = [
      {
        Header: "Nombre",
        accessor: "nombre"
      },
      {
        id: "fabricante",
        Header: "Fabricante",
        accessor: "fabricante.nombre"
      },
      {
        id: "categoria",
        Header: "Categoria",
        accessor: "categoria.nombre"
      },
      {
        id: "genero",
        Header: "Genero",
        accessor: "generos",
        Cell: props => {
          return props.value.map(genero =><Chip>{genero.nombre}</Chip>)          
        }
      }
      // ,
      // {
      //   id: "precio",
      //   Header: "Precio",
      //   accessor: row => row.listaprecios[0].precio.precio
      // }
    ];

    return (
      <Paper>
        <ReactTable
          data={articulos}
          columns={columns}
          filterable={true}
          defaultPageSize={10}
        />
        {/* <Table className={classes.table}>
  
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Articulo</TableCell>
              <TableCell align="right">Fabricante</TableCell>
              <TableCell align="right">Categoría</TableCell>
              <TableCell align="right">Genero</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.articulos.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
  
                <TableCell align="right">{row.categoria.nombre}</TableCell>
                <TableCell align="right">{row.fabricante.nombre}</TableCell>
                <TableCell align="right">{row.generos.map(row => {
                  return (
                      <Chip
                        key={row.id}
                        label={row.nombre}
                        className={classes.chip}
                      />)})}
                    </TableCell>
                <TableCell align="right">{row.precio.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         */}
      </Paper>
    );
  }
}

ListaPrecios.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListaPrecios);
