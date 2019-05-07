import React, { Component } from "react";
import FormAddArticulo from "../components/articulos/FormAddArticulo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eventService from '../api/eventService'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class ArticulosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      categorias: [],
      generos: [],
      fabricantes: [],
      listaprecioActual: {
        id: "",
        nombre: ""
      }
    };
  }

  componentDidMount() {
    toast.configure();

    eventService.listaprecio.getCurrent()
      .then(listaprecioactual => {
        console.log(listaprecioactual.data.nombre);
        this.setState({
          listaprecioActual: {
            id: listaprecioactual.data.id,
            nombre: listaprecioactual.data.nombre
          }
        });
      })
      .catch(error => {
        console.log(`Error cargando List Precio Actual [$]`, error.name);
      });
    console.log(this.state.listaprecioActual);
    // traer categorias
    eventService.categoria.getCategorias()
      .then(categorias => {
        console.log(categorias.data);
        this.setState({
          categorias: categorias.data
        });
      })
      .catch(error => {
        console.log(`Error cargando categorias [$]`, error.name);
      });
    //traer generos
    eventService.genero.getGeneros()
      .then(generos => {
        console.log(generos.data);
        this.setState({
          generos: generos.data
        });
      })
      .catch(error => {
        console.log(`Error cargando generos [$]`, error.name);
      });
    //traer fabricantes
    eventService.fabricante.getFabricantes()
      .then(fabricantes => {
        console.log(fabricantes.data);
        this.setState({
          fabricantes: fabricantes.data
        });
      })
      .catch(error => {
        console.log(`Error cargando fabricantes [$]`, error.name);
      });
  }

  handleSubmit = args => {
    eventService.articulo.crearArticulo(args)
      .then(() => {
        toast.success("Articulo agregado correctamente!")
        this.resetFormulario()
      })
      .catch(error => {
        console.log(error)
        toast.warn(error)
      })
  };

  resetFormulario = () => {
    this.child.resetFormulario() // do stuff
  }

  render() {
    return (
      <React.Fragment>
        <Paper className="m-2">
          <h5 className="m-3">Form</h5>
          <Divider />
          <div className="col-md-12 p-3">
          <FormAddArticulo
            titulo="INGRESO NUEVO ARTÍCULO"
            categorias={this.state.categorias}
            fabricantes={this.state.fabricantes}
            generos={this.state.generos}
            listaprecioactual={this.state.listaprecioActual}
            handleSubmit={this.handleSubmit}
            onRef={ref => (this.child = ref)}
          />
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

export default ArticulosPage;
