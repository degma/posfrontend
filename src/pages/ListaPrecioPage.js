import React from "react";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import eventService from "../api/eventService";
import { Button, Typography } from "@material-ui/core";
import FullScreenDialog from "../components/dialogs/FullScreenDialog";
import InputForm from "../components/listadeprecio/InputForm/index";
import { toast } from "react-toastify";
import ListaPrecioList from "../components/listadeprecio/ListaPrecioList";
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  root: {
    background: "#e0e0e0",
    padding: "20px"
  },
  button: {}
};

class ListaPrecioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaprecio: [],
      articulos: '',
      loading: false,
      openNewDialog: false,
      openUpdateDialog: false,
      dialogType: "",
      selectedItem: ""
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {

    this.setState({ loading: true })

    /* Lista de Precios */
    eventService.listaprecio
      .getAll()
      .then(listaprecio => {
        return this.setState({
          listaprecio: listaprecio.data
        });
      });

    /* Articulos */
    eventService.articulo
      .getArticulo()
      .then(articulos => {
        this.setState({
          articulos: articulos.data.articulos,
          loading: false
        });
        console.log("Articulos", articulos.data.articulos)
        console.log("Articulos", this.state.articulos)
      })
      .catch(error => console.log(error));
  }

  handleAddItem(args) {
    if (this.state.actionDialog === "new") {
      eventService.listaprecio
        .crearListaPrecio(args)
        .then(item => {
          this.setState({
            openNewDialog: false,
            listaprecio: [...this.state.listaprecio, item.data]
          });
        })
        .catch(error => console.log(error));
    }

    if (this.state.actionDialog === "update") {
      console.log(args);
      eventService.listaprecio
        .editar(args)
        .then(item => {
          console.log(item.data);
          let updatedLista = this.state.listaprecio.filter(obj => {
            return obj.id !== args.id;
          });
          updatedLista.push(item.data);
          this.setState({
            openNewDialog: false,
            listaprecio: updatedLista
          });
        })
        .catch(error => console.log(error));
    }
    console.log(this.state.fabricantes);
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

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" gutterBottom>
              Listas de Precios
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
            {this.state.loading ?
              <CircularProgress className={classes.progress} />
              :
              <ListaPrecioList
                listaprecio={this.state.listaprecio}
                handleUpdateItem={this.handleClickOpenUpdate}
              />
            }

          </Grid>
        </Grid>
        <FullScreenDialog
          dialogTitle="Agregar Lista de Precios"
          open={this.state.openNewDialog}
          opendialog={this.handleClickOpen}
          closedialog={this.handleClose}
          action={this.state.actionDialog}
          articulos={this.state.articulos}
        >
          <InputForm
            itemUpdate={this.state.selectedItem}
            handleAddItem={this.handleAddItem}
          />
        </FullScreenDialog>
      </React.Fragment>
    );
  }
}

ListaPrecioPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListaPrecioPage);
