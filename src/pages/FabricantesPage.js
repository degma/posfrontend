import React from "react";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import eventService from "../api/eventService";
import FabricantesDataGrid from "../components/fabricantes/FabricantesDataGrid";
import { Button, Typography } from "@material-ui/core";
import FullScreenDialog from "../components/dialogs/FullScreenDialog";
import InputForm from "../components/fabricantes/InputForm/index";
import { ToastContainer, toast } from "react-toastify";
import ResponsiveDialog from "../components/dialogs/ResponsiveDialog";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
  root: {
    background: "#e0e0e0",
    padding: "20px"
  },
  button: {}
};

class FabricantesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabricantes: [],
      loading: false,
      openNewDialog: false,
      openConfirmDialog: false,
      dialogType: "",
      selectedItem: ""
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleConfirmEliminar = this.handleConfirmEliminar.bind(this);
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    eventService.fabricante.getFabricantes().then(fabricantes => {
      this.setState({
        fabricantes: fabricantes.data,
        loading: false
      });
    });
    toast.configure();
  }

  handleAddItem(args) {
    if (this.state.actionDialog === "new") {
      eventService.fabricante
        .crearFabricante(args)
        .then(item => {
          this.setState({
            openNewDialog: false,
            fabricantes: [...this.state.fabricantes, item.data]
          });
        })
        .catch(error => console.log(error));
    }

    if (this.state.actionDialog === "update") {
      console.log(args);
      eventService.fabricante
        .editar(args)
        .then(item => {
          console.log(item.data);
          let updatedLista = this.state.fabricantes.filter(obj => {
            return obj.id !== args.id;
          });
          updatedLista.push(item.data);
          this.setState({
            openNewDialog: false,
            fabricantes: updatedLista
          });
        })
        .catch(error => console.log(error));
    }
    console.log(this.state.fabricantes);
  }

  handleEliminar() {
    let item = this.state.selectedItem.id;
    eventService.fabricante
      .desactivar(item)
      .then(() => {
        let updatedLista = this.state.fabricantes.filter(function(obj) {
          return obj.id !== item;
        });
        toast.info("Fabricante desactivado!");
        this.setState({ fabricantes: updatedLista, openConfirmDialog: false });
      })
      .catch(error => {
        console.log(error);
        toast.error(error.name);
      });
  }

  handleClickOpen = () => {
    this.setState({
      openNewDialog: true,
      selectedItem: "",
      actionDialog: "new"
    });
  };

  handleClickOpenUpdate = item => {
    this.setState({
      selectedItem: item,
      actionDialog: "update",
      openNewDialog: true
    });
  };

  handleClose = () => {
    this.setState({ openNewDialog: false });
  };

  handleConfirmEliminar(args) {
    this.setState({ openConfirmDialog: true, selectedItem: args });
  }

  handleCloseConfirm() {
    this.setState({ openConfirmDialog: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <ToastContainer />
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" gutterBottom>
              Fabricantes
            </Typography>
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
            {this.state.loading === true ? (
              <CircularProgress className={classes.progress} />
            ) : (
              <FabricantesDataGrid
                fabricantes={this.state.fabricantes}
                handleUpdateItem={this.handleClickOpenUpdate}
                handleConfirmEliminar={this.handleConfirmEliminar}
              />
            )}
          </Grid>
        </Grid>
        <FullScreenDialog
          dialogTitle={
            this.state.dialogType === "new"
              ? "Agregar Fabricante"
              : "Editar Fabricante"
          }
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
          action={this.state.actionDialog}
        >
          <InputForm
            itemUpdate={this.state.selectedItem}
            handleAddItem={this.handleAddItem}
          />
        </FullScreenDialog>
        <ResponsiveDialog
          open={this.state.openConfirmDialog}
          title="Eliminar Fabricante"
          handleClose={this.handleCloseConfirm}
          confirma={this.handleEliminar}
        >
          ¿Seguro que desea elimiminar el fabricante "
          {this.state.selectedItem.nombre}"?
        </ResponsiveDialog>
      </React.Fragment>
    );
  }
}

FabricantesPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FabricantesPage);
