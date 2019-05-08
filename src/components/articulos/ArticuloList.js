import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import FormAddArticulo from "./FormAddArticulo";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ArticuloList extends Component {
  state = {
    dense: false,
    secondary: true,
    openEdit: false
  };

  handleEliminar(args) {
    return this.props.handleEliminar(args);
  }

  handleClickOpen = () => {
    this.setState({ openEdit: true });
  };

  handleClose = () => {
    this.setState({ openEdit: false });
  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;
    return (
      <React.Fragment>
        <List dense={dense}>
          {console.log(this.props.lista)}
          {this.props.lista.map(listitem => (
            <ListItem key={listitem.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={listitem.nombre}
                secondary={listitem.descripcion}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => this.handleEliminar(listitem)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Dialog
          fullScreen
          open={this.state.openEdit}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <FormAddArticulo
          />
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ArticuloList;
