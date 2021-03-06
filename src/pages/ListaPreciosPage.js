import React, { Component } from "react";
import ListaPrecios from "../components/listadeprecios/ListaPrecios";
import Typography from "@material-ui/core/Typography";
import eventService from "../api/eventService";
import CircularProgress from '@material-ui/core/CircularProgress';

class ListaPreciosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articulos: [],
      listaPrecioActual: {
        id: null,
        nombre: null,
        descripcion: null,
        validaFrom: null,
        validaTO: null
      }
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    eventService.articulo
      .getArticulo()
      .then(articulos => {
        this.setState({
          loading: false,
          articulos: articulos.data.articulos,
          listaPrecioActual: {
            id: articulos.data.id,
            nombre: articulos.data.nombre,
            descripcion: articulos.data.descripcion,
            validaFrom: articulos.data.validaFrom,
            validaTO: articulos.data.validaTO
          }
        });
      })
      .catch(error => {
        console.log(`Error cargando los productos [$]`, error.name);
      });
  }

  render() {
    return (
      <div className="col-md-12 mb-5">
        <Typography variant="h4" gutterBottom>
          {this.state.listaPrecioActual.nombre}
        </Typography>
        {/* <BuscadorPrecio listaprecio = {this.state.listaPrecioActual}/> */}
        <div className="text-center" />
        {this.state.loading === true ? (
          <CircularProgress />
        ) : (
          <ListaPrecios articulos={this.state.articulos} />
        )}
      </div>
    );
  }
}

export default ListaPreciosPage;
