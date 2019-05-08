import React, { Component } from "react";
import ArticuloList from "../components/articulos/ArticuloList";
import eventService from "../api/eventService";
import Paper from "@material-ui/core/Paper";
import { Divider, Grid } from "@material-ui/core";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ArticuloPageNew from "./ArticulosPageNew";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ArticulosPageLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      openNewDialog: false
    };
    this.handleEliminar = this.handleEliminar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen = () => {
    console.log("cickkck");
    this.setState({ openNewDialog: true });
  };

  handleClose = () => {
    console.log("se llamo para cerrarlo!");
    this.setState({ openNewDialog: false });
  };

  componentDidMount() {
    toast.configure();
    eventService.articulo
      .getArticulo()
      .then(articulos => {
        this.setState({ lista: articulos.data.articulos });
      })
      .catch(error => console.log(error));
  }

  handleEliminar(args) {
    console.log(args);
    eventService.articulo
      .desactivarArticulo(args.id)
      .then(() => {
        let updatedLista = this.state.lista.filter(function(obj) {
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
              <h4>Artículos</h4>
            </Grid>
            <Grid item xs={2} className="p-2">
              <Button
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
          />
        </Paper>
        <Dialog
          fullScreen
          open={this.state.openNewDialog}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Nuevo Artículo
              </Typography>
            </Toolbar>
          </AppBar>
          <ArticuloPageNew cerrarDialog={this.handleClose} />
        </Dialog>
      </React.Fragment>
    );
  }
}

ArticulosPageLista.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticulosPageLista);
