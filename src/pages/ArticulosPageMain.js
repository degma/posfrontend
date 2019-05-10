import React, { Component } from "react";
import ArticulosPageLista from "./ArticulosPageLista";
import Grid from "@material-ui/core/Grid";
import InputForm from '../components/articulos/InputForm'

class ArticulosPageMain extends Component {
  render() {
    return (
      <React.Fragment>
          <InputForm/>

          {/* <ArticulosPageLista /> */}
      </React.Fragment>
        
    );
  }
}

export default ArticulosPageMain;
