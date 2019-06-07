import React, { Component } from "react";
import InputForm from "../components/articulos/InputForm/index"
import eventService from "../api/eventService";
import { Divider, Grid } from "@material-ui/core";
import { toast } from "react-toastify";
import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FullScreenDialog from "../components/dialogs/FullScreenDialog"
import ArticuloDataGrid from "../components/articulos/ArticuloDataGrid"

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
  },
  root: {
    background: '#e0e0e0',
    padding: '20px',
  }
};



class ArticulosPageLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      categorias: [],
      generos: [],
      fabricantes:[],
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
      selectedItem: ''
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

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

  handleClickOpenUpdate = (item) => {
    console.log(item)
    this.setState({
      selectedItem: item,
      actionDialog: "update",
      openNewDialog: true,
    });
  };

 handleClose = () => {
    this.setState({ openNewDialog: false });
  };


  componentDidMount() {

    toast.configure();

    eventService.listaprecio
      .getCurrent()
      .then(listaprecio => {
        this.setState({
          listadeprecio: {
            id: listaprecio.data.id,
            nombre: listaprecio.data.nombre,
            updatedAt: listaprecio.data.updatedAt,
            createdAt: listaprecio.data.createdAt,
            validaFrom: listaprecio.data.validaFrom,
            validaTo: listaprecio.data.validaTo
          }
        })
      })
      .catch(error => {
        toast.warn(error.name)
      })

    /* Articulos */
    eventService.articulo
      .getArticulo()
      .then(articulos => {
        this.setState({
          lista: articulos.data.articulos,
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
  handleAddItem(args) {

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

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" gutterBottom>Productos</Typography>
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
            <ArticuloDataGrid
              articulos={this.state.lista}
              handleUpdateItem={this.handleClickOpenUpdate}
            />
          </Grid>
        </Grid>
        <FullScreenDialog
          dialogTitle= {this.state.actionDialog === 'new' ? "Agregar Artículo" : "Editar Artículo"} 
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
        >
          <InputForm
            action={this.state.actionDialog}
            itemUpdate={this.state.selectedItem}
            listadeprecio={this.state.listadeprecio}
            handleAddItem={this.handleAddItem}
            categorias={this.state.categorias}
            generos={this.state.generos}
            fabricantes={this.state.fabricantes}
          />
        </FullScreenDialog>
      </React.Fragment>
    )
  }
}

ArticulosPageLista.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticulosPageLista);
