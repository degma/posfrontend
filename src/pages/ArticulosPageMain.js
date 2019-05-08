import React, { Component } from "react";
import ArticulosPageLista from "./ArticulosPageLista";
import Grid from "@material-ui/core/Grid";


class ArticulosPageMain extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item lg={8} >
          <ArticulosPageLista />
        </Grid>
      </Grid>
    );
  }
}

export default ArticulosPageMain;
