import React, { Component } from "react";
import ArticuloList from "../components/articulos/ArticuloList";
import eventService from "../api/eventService";
import Paper from "@material-ui/core/Paper";
import { Divider, Grid, Typography } from "@material-ui/core";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DialogArticulo from "../components/articulos/DialogArticulo"

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};


class ArticulosPageLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      openNewDialog: false,
      openUpdateDialog: false,
      dialogType: '',
      selectedArt: '',
      categorias: [],
      generos: [],
      fabricantes: []
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen = () => {
    this.setState({
      openNewDialog: true
    });
  };

  handleClose = () => {
    this.setState({ openNewDialog: false });
  };

  handleClickOpenUpdate = (articulo) => {
    this.setState({
      openUpdateDialog: true,
      selectedArt: articulo
    });
  };

  handleCloseUpdate = () => {
    this.setState({ openUpdateDialog: false });
  };

  componentDidMount() {
    toast.configure();
    eventService.articulo
      .getArticulo()
      .then(articulos => {
        this.setState({ lista: articulos.data.articulos });
      })
      .catch(error => console.log(error));

    eventService.categoria
      .getCategorias()
      .then(categorias => {
        this.setState({ categorias: categorias.data })
      })
      .catch(error => console.log(error))

    eventService.fabricante
      .getFabricantes()
      .then(fabricantes => {
        this.setState({ fabricantes: fabricantes.data })
      })
      .catch(error => console.log(error))

    eventService.genero
      .getGeneros()
      .then(generos => {
        this.setState({ generos: generos.data })
      })
      .catch(error => console.log(error))
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

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className="m-2">
          <Grid container justify="center">
            <Grid item xs={10} className="p-2">
              <Typography variant="h5" color="inherit">Artículos</Typography>
            </Grid>
            <Grid item xs={2} className="p-2">
              <Button
                name="new"
                variant="contained"
                color="primary"
                onClick={this.handleClickOpen}
              >
                Nuevo
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <ArticuloList
            lista={this.state.lista}
            handleEliminar={this.handleEliminar}
            handleClickUpdate={this.handleClickOpenUpdate}
          />
        </Paper>
        <DialogArticulo
          dialogTitle="Nuevo Artículo"
          tipo="new"
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
          categorias={this.state.categorias}
          generos={this.state.generos}
          fabricantes={this.state.fabricantes}
        />
        <DialogArticulo
          dialogTitle="Actualizar Artículo"
          tipo="update"
          open={this.state.openUpdateDialog}
          opendialog={this.handleClickOpenUpdate}
          closedialog={this.handleCloseUpdate}
          articuloUpdate={this.state.selectedArt}
        />
      </React.Fragment>
    );
  }
}

ArticulosPageLista.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticulosPageLista);
