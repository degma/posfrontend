import React from "react";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import eventService from "../api/eventService";
import CategoriasDataGrid from "../components/categorias/CategoriasDataGrid";
import { Button, Typography } from "@material-ui/core";
import FullScreenDialog from "../components/dialogs/FullScreenDialog"
import InputForm from "../components/categorias/InputForm/index"
import { toast } from "react-toastify";
import ResponsiveDialog from "../components/dialogs/ResponsiveDialog";

const styles = {
  root: {
    background: '#e0e0e0',
    padding: '20px',
  },
  button: {

  }
};

class CategoriasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      openNewDialog: false,      
      openConfirmDialog: false,      
      dialogType: '',
      selectedItem: '',
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleConfirmEliminar = this.handleConfirmEliminar.bind(this);
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
  }

  componentDidMount() {
    eventService.categoria.getCategorias().then(categorias => {
      this.setState({
        categorias: categorias.data
      });
    });
  }

  handleAddItem(args) {    
    console.log("ARGSSS",args)
    if (this.state.actionDialog === "new") {
      eventService.categoria.crearCategoria(args)
        .then(item => {
          this.setState({
            openNewDialog: false,
            categorias: [...this.state.categorias, item.data]
          });
        })
        .catch(error => console.log(error))
    }

    if (this.state.actionDialog === "update") {
      console.log(args)
      eventService.categoria.editar(args)
        .then(item => {
          console.log(item.data)
          let updatedLista = this.state.categorias.filter(obj => {
            return obj.id !== args.id;
          })
          updatedLista.push(item.data);
          this.setState({
            openNewDialog: false,
            categorias: updatedLista
          });
        })
        .catch(error => console.log(error))
    }
    console.log(this.state.fabricantes)

  }

  handleEliminar() {
    let item = this.state.selectedItem.id
    eventService.categoria
      .desactivar(item)
      .then(() => {
        let updatedLista = this.state.categorias.filter(function (obj) {
          return obj.id !== item;
        });
        toast.success("Categoría eliminada!");        
        this.setState({ categorias: updatedLista, openConfirmDialog: false });
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

  handleClickOpenUpdate = (item) => {    
    this.setState({
      selectedItem: item,
      actionDialog: "update",
      openNewDialog: true,
    });
  };

  handleClose = () => {
    this.setState({ openNewDialog: false });
  };

  handleConfirmEliminar(args) {
    this.setState({ openConfirmDialog: true, selectedItem: args });
  }
  handleCloseConfirm() {
    this.setState({openConfirmDialog: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" gutterBottom>Categorías</Typography>
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
            <CategoriasDataGrid
              categorias={this.state.categorias}
              handleUpdateItem={this.handleClickOpenUpdate}
              handleConfirmEliminar={this.handleConfirmEliminar}
            />
          </Grid>
        </Grid>
        <FullScreenDialog
          dialogTitle="Agregar Categoria"
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
          title="Eliminar Categoría"
          handleClose={this.handleCloseConfirm}
          confirma={this.handleEliminar}
        >
        ¿Seguro que desea elimiminar la categoría "{this.state.selectedItem.nombre}"?
        </ResponsiveDialog>
      </React.Fragment>
    );
  }
}


CategoriasPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoriasPage);
