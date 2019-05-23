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
  },
  encabezado: {
    padding: 12
  },
  paper: {
    margin: 12
  }
};


class ArticulosPageLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      listadeprecio: {
        id: '',
        nombre: '',
        updatedAt: '',
        createdAt: '',
        validaFrom: '',
        validaTo: ''
      },
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
    this.handleAddArticulo = this.handleAddArticulo.bind(this);
  }

  handleClickOpen = () => {
    this.setState({
      openNewDialog: true,
      selectedArt: '',
      actionDialog: "new"
    });
  };

  handleClose = () => {
    this.setState({ openNewDialog: false });
  };

  handleClickOpenUpdate = (articulo) => {
    console.log("ARTICULO A UPDETEAR",articulo)
    this.setState({
      selectedArt: articulo,
      actionDialog: "update",
      openNewDialog: true,
    });
  };

  handleCloseUpdate = () => {
    this.setState({ openUpdateDialog: false });
  };

  componentDidMount() {

    toast.configure();

    /* Articulos */
    eventService.articulo
      .getArticulo()
      .then(articulos => {        
        this.setState({
          lista: articulos.data.articulos,
          listadeprecio: {
            id: articulos.data.id,
            nombre: articulos.data.nombre,
            updatedAt: articulos.data.updatedAt,
            createdAt: articulos.data.createdAt,
            validaFrom: articulos.data.validaFrom,
            validaTo: articulos.data.validaTo
          },
          actionDialog: ''
        });
      })
      .catch(error => console.log(error));

    /* Categorias */
    eventService.categoria
      .getCategorias()
      .then(categorias => {
        this.setState({ categorias: categorias.data })
      })
      .catch(error => console.log(error))

    /* Fabricantes */
    eventService.fabricante
      .getFabricantes()
      .then(fabricantes => {
        this.setState({ fabricantes: fabricantes.data })
      })
      .catch(error => console.log(error))

    /* Generos */
    eventService.genero
      .getGeneros()
      .then(generos => {
        this.setState({ generos: generos.data })
      })
      .catch(error => console.log(error))
  }

  /* Agregar el articulo! */
  handleAddArticulo(args) {

    if (this.state.actionDialog === "new") {
      eventService.articulo.crearArticulo(args)
        .then(articulo => {
          this.setState({
            openNewDialog: false,
            lista: [...this.state.lista, articulo.data]
          });
        })
        .catch(error => console.log(error))
    }

    if (this.state.actionDialog === "update") {
      console.log(args)
      eventService.articulo.editar(args)
        .then(articulo => {
          let updatedLista = this.state.lista.filter( obj => {
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

  render() {
    const { classes } = this.props;
    console.log("lista de articulos", this.state.lista)
    return (
      <React.Fragment>
        <Grid container justify="flex-start">
          <Grid item xs={12}>
            
              <Grid container justify="center">
                <Grid item xs={12} className={classes.encabezado}>
                  
                  <Button
                    name="new"
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                  >
                    + Nuevo
              </Button>
                </Grid>
              </Grid>
              <Divider />
              <Grid container justify="center">
                <Grid item xs={12}>
                  <ArticuloList
                    lista={this.state.lista}
                    handleEliminar={this.handleEliminar}
                    handleClickUpdate={this.handleClickOpenUpdate}
                  />
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        <DialogArticulo
          dialogTitle="Nuevo Articulo"
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
          listadeprecio={this.state.listadeprecio}
          categorias={this.state.categorias}
          generos={this.state.generos}
          fabricantes={this.state.fabricantes}
          handleAddArticulo={this.handleAddArticulo}
          articuloUpdate={this.state.selectedArt}
          action={this.state.actionDialog}
        />        
      </React.Fragment>
    );
  }
}

ArticulosPageLista.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticulosPageLista);
