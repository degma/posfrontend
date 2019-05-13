import React, { Component } from "react";
import ListaPrecios from "../components/listadeprecios/ListaPrecios";
import BuscadorPrecio from "../components/listadeprecios/BuscadorPrecio";
import axios from 'axios'


class ListaPreciosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      listaPrecioActual: {
        id: null,
        nombre: null,
        descripcion: null,
        validaFrom: null,
        validaTO: null
      },
    };
  }

  componentDidMount() {
    const header = {
      "Content-Type":"application/json"
    }
    axios.get('http://127.0.0.1:3001/api/v1/articulo',header)
    .then(articulos => {    
      console.log(articulos)             
      this.setState({
        articulos: articulos.data.articulos,
        listaPrecioActual: {
          id: articulos.data.id,
          nombre: articulos.data.nombre,
          descripcion: articulos.data.descripcion,
          validaFrom: articulos.data.validaFrom,
          validaTO: articulos.data.validaTO
        }
      })
    })
    .catch( error => {
      console.log(`Error cargando los productos [$]`,error.name)
    })
    
  }
  
  render() {
    return (
      <div className="col-md-12 mb-5">
        <BuscadorPrecio listaprecio = {this.state.listaPrecioActual}/>
        <div className="text-center"></div>
        <ListaPrecios articulos={this.state.articulos} />
        {console.log(this.state.articulos)}
      </div>
    );
  }
}

export default ListaPreciosPage;
