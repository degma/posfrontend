import React, { Component } from "react";
import ArticuloPageNew from "../../pages/ArticulosPageNew"
import ArticuloPageUpdate from "../../pages/ArticulosPageUpdate"
import eventService from "../../api/eventService";
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
import InputForm from "./InputForm";


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


class DialogArticulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen = () => {

    this.props.opendialog()
  };

  handleClose = () => {
    this.props.closedialog()
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Dialog
          fullScreen
          open={this.props.open}
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
                {this.props.dialogTitle}
              </Typography>
            </Toolbar>
          </AppBar>

          <InputForm
            cerrarDialog={this.handleClose}
            listadeprecio={this.props.listadeprecio}
            categorias={this.props.categorias}
            fabricantes={this.props.fabricantes}
            generos={this.props.generos}
            handleAddArticulo={this.props.handleAddArticulo}
            articulo={this.props.articuloUpdate}
            action={this.props.action}
          />
          
        </Dialog>
      </React.Fragment>
    );
  }
}

DialogArticulo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogArticulo);
