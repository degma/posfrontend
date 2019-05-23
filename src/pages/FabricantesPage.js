import React from "react";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import eventService from "../api/eventService";
import FabricantesDataGrid from "../components/fabricantes/FabricantesDataGrid";

class FabricantesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabricantes: []
    };
  }
  componentDidMount() {
    eventService.fabricante.getFabricantes().then(fabricantes => {
      this.setState ({
        fabricantes: fabricantes.data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Grid container justify="center">
            <Grid item xs={8} />
            <Grid item xs={4}>
              <InputBase placeholder="Buscar Fabricante" />
              <IconButton aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <FabricantesDataGrid fabricantes={this.state.fabricantes} />
        </div>
      </React.Fragment>
    );
  }
}

FabricantesPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default FabricantesPage;
