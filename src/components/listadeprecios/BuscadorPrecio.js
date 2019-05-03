import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    align: 'center'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
    marginLeft:5
  },
  listaprecio: {
    width: '15%',
    height: 28,
  }
};


const BuscadorPrecio = (props) => {
  const { classes } = props;
  return (
    <div className="mt-4">
    <Paper className={classes.root} elevation={1}>
      <ListItem className={classes.listaprecio}>
        <ListItemText primary={props.listaprecio.nombre} />
      </ListItem>    
      <Divider className={classes.divider}/>
      <InputBase className={classes.input} placeholder="Buscar articulos" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>

      {/* <div>
      <div className="input-group input-group-lg mt-3 mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Buscar Artículo
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div> */}
    </Paper>
    </div>
  );
};


BuscadorPrecio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuscadorPrecio);

