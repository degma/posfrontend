
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

ListaPrecios.propTypes = {
  classes: PropTypes.object.isRequired,
};


function ListaPrecios(props) {

  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>

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
      {/* <div className="table-responsive-sm">
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
      </div> */}
    </Paper>


  );

}



export default withStyles(styles)(ListaPrecios);
