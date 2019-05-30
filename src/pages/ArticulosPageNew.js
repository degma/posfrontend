import React, { Component } from "react";
import InputForm from '../components/articulos/InputForm'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eventService from "../api/eventService";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    
    eventService.listaprecio
      .getCurrent()
      .then(listaprecioactual => {        
        this.setState({
          listaprecioActual: {
            id: listaprecioactual.data.id,
            nombre: listaprecioactual.data.nombre
          }
        }, () => console.log("Lista de Precio", this.state.listaprecioActual));
      })
      .catch(error => {
        console.log(`Error cargando List Precio Actual [$]`, error.name);
      });
    console.log(this.state.listaprecioActual);
    // traer categorias
    eventService.categoria
      .getCategorias()
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
    eventService.genero
      .getGeneros()
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
    eventService.fabricante
      .getFabricantes()
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
    eventService.articulo
      .crearArticulo(args)
      .then(() => {
        toast.success("Articulo agregado correctamente!");
        this.props.cerrarDialog()        
      })
      .catch(error => {
        console.log(error);
        toast.warn(error);
      });
      
  };



  render() {
    return (
      <React.Fragment>
        <Grid container justify="center" className="mt-2">
          <Grid item>                        
              <InputForm
                titulo="INGRESO NUEVO ARTÍCULO"
                categorias={this.state.categorias}
                fabricantes={this.state.fabricantes}
                generos={this.state.generos}
                listaprecioactual={this.state.listaprecioActual}
                handleSubmit={this.handleSubmit}                
                onRef={ref => (this.child = ref)}
              />            
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ArticulosPage;
