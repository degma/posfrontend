import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

export default function CategoriaPanel(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ExpansionPanelDetails>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre Producto</TableCell>
                  <TableCell align="right">Precio Anterior</TableCell>
                  <TableCell align="right">Precio Nuevo</TableCell>                  
                </TableRow>
              </TableHead>
              <TableBody>
                {props.articulos
                  .filter(e => {
                    return e.fabricanteId === props.fabricante;
                  })
                  .map(j => {
                    return (
                      <TableRow key={j.id}>
                        <TableCell component="th" scope="row">{j.nombre}</TableCell>
                        <TableCell align="right">{j.precio.precio}</TableCell>
                        <TableCell align="right">{j.precio.precio}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </ExpansionPanelDetails>
    </React.Fragment>
  );
}
