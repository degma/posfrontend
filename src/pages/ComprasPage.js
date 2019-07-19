import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import eventService from "../api/eventService";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardFabricante from "../components/compras/CardFabricante";
import BuscarFabricante from "../components/compras/BuscarFabricante";
import { setFabricanteCompra } from "../actions/";
import { connect } from "react-redux";
import FullScreenDialog from "../components/dialogs/FullScreenDialog"

const styles = makeStyles(theme => ({
  root: {
    margin: 5
  }
})
);

const mapStateToProps = state => {
  console.log(state.compras)
  return { compra: state.compras };
};

function mapDispatchToProps(dispatch) {
  return {
    setFabricanteCompra: fabricante => dispatch(setFabricanteCompra(fabricante))
  };
}

const ComprasPage = (props) => {

  const [fabricantes, setFabricantes] = useState([]);
  const [filterFab, setFilterFab] = useState(fabricantes);
  const [openFSDialog, setopenFSDialog] = useState(false);

  const classes = styles();

  const handleFabSelection = (fabricante) => {
    props.setFabricanteCompra({ fabricante });
    setopenFSDialog(true)
  }

  const handleChange = event => {
    let updatedList = fabricantes;
    updatedList = updatedList.filter(item => {
      return (
        item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setFilterFab(updatedList);
  };
  const handleClose = () => {
    setopenFSDialog(false)
  }

  useEffect(() => {
    eventService.fabricante
      .getFabricantes()
      .then(({ data }) => {
        setFabricantes(data);
        setFilterFab(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper>
          <BuscarFabricante inputSearchB={handleChange} />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="left" spacing={2}>
                {filterFab.map(fab => (
                  <CardFabricante fabricante={fab} selectedFab={handleFabSelection} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <FullScreenDialog
          dialogTitle={props.compra.fabricante.nombre}
          open={openFSDialog}
          closedialog={handleClose}
        >

        </FullScreenDialog>

      </div>
    </React.Fragment>
  );

};

export default connect(mapStateToProps, mapDispatchToProps)(ComprasPage);
