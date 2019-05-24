import React from "react";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import eventService from "../api/eventService";
import FabricantesDataGrid from "../components/fabricantes/FabricantesDataGrid";
import { Button, Typography } from "@material-ui/core";
import FullScreenDialog from "../components/dialogs/FullScreenDialog"
import InputForm from "../components/fabricantes/InputForm/index"
import { toast } from "react-toastify";

const styles = {
  root: {
    background: '#e0e0e0',
    padding: '20px',
  },
  button: {

  }
};

class FabricantesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabricantes: [],
      openNewDialog: false,
      openUpdateDialog: false,
      dialogType: '',
      selectedItem: '',
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    eventService.fabricante.getFabricantes().then(fabricantes => {
      this.setState({
        fabricantes: fabricantes.data
      });
    });
  }

  handleAddItem(args) {
    alert("por lo menos aca llego!")
    if (this.state.actionDialog === "new") {
      eventService.fabricante.crearFabricante(args)
        .then(item => {
          this.setState({
            openNewDialog: false,
            fabricantes: [...this.state.fabricantes, item.data]
          });
        })
        .catch(error => console.log(error))
    }

    if (this.state.actionDialog === "update") {
      console.log(args)
      eventService.articulo.editar(args)
        .then(articulo => {
          let updatedLista = this.state.lista.filter(obj => {
            return obj.id !== args.id;
          })
          updatedLista.push(articulo.data)
          this.setState({
            openNewDialog: false,
            lista: updatedLista
          });
          console.log("AAAAAA", articulo)
        })
        .catch(error => console.log(error))
    }

  }

  handleEliminar(args) {
    eventService.articulo
      .desactivarArticulo(args.id)
      .then(() => {
        let updatedLista = this.state.lista.filter(function (obj) {
          return obj.id !== args.id;
        });
        this.setState({ lista: updatedLista });
        toast.info("Articulo eliminado!");
      })
      .catch(error => {
        console.log(error);
        toast.error(error.name);
      });
  }



  handleClickOpen = () => {
    this.setState({
      openNewDialog: true,
      selectedItem: '',
      actionDialog: "new"
    });
  };

  handleClose = () => {
    this.setState({ openNewDialog: false });
  };


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="display3" gutterBottom>Fabricantes</Typography>
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Button
              name="new"
              variant="contained"
              color="primary"
              onClick={this.handleClickOpen}
            >
              + Nuevo
              </Button>

          </Grid>
          <Grid item xs={12}>
            <Divider />
            <FabricantesDataGrid fabricantes={this.state.fabricantes} />
          </Grid>
        </Grid>
        <FullScreenDialog
          dialogTitle="Agregar Fabricante"
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
          handleAdd={this.handleAddItem}
          articuloUpdate={this.state.selectedArt}
          action={this.state.actionDialog}
          content={<InputForm />}
        />
      </React.Fragment>
    );
  }
}


FabricantesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FabricantesPage);
