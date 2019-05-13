import React, { Component } from "react";
import ArticulosPageLista from "./ArticulosPageLista";
import InputForm from '../components/articulos/InputForm'

class ArticulosPageMain extends Component {
  render() {
    return (
      <React.Fragment>
        <ArticulosPageLista />
      </React.Fragment>

    );
  }
}

export default ArticulosPageMain;
