import React, { Component } from "react";
import FormAddArticulo from "../components/articulos/formAddArticulo";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const header = {
      "Content-Type": "application/json"
    };
    axios
      .get("http://127.0.0.1:3001/api/v1/listaprecio/current", header)
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
    axios
      .get("http://127.0.0.1:3001/api/v1/categoria", header)
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
    axios
      .get("http://127.0.0.1:3001/api/v1/genero", header)
      .then(generos => {
        console.log(generos.data);
        this.setState({
          generos: generos.data
        });
      })
      .catch(error => {
        console.log(`Error cargando categorias [$]`, error.name);
      });
    //traer fabricantes
    axios
      .get("http://127.0.0.1:3001/api/v1/fabricante", header)
      .then(fabricantes => {
        console.log(fabricantes.data);
        this.setState({
          fabricantes: fabricantes.data
        });
      })
      .catch(error => {
        console.log(`Error cargando categorias [$]`, error.name);
      });
  }

  handleSubmit = args => {
    const header = {
      "Content-Type": "application/json",
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1NjQ5MDQ0MSwiZXhwIjoxNTU3MDk1MjQxfQ.4DOqblMDIkINTlPs7iOuJ5VLX5mHGxCkhuoZE3w1SVU"
    };
    axios
      .post("http://127.0.0.1:3001/api/v1/articulo", args, header)
      .then(() => {
        toast.success("Articulo agregado correctamente!")
        this.resetFormulario()})
      .catch(error => {
        console.log(error)
        toast.error(error.name)
      })
  };

  resetFormulario = () => {
    this.child.resetFormulario() // do stuff
  }
  
  

  render() {
    return (
      <React.Fragment>
        <div className="col-md-7 pr-0 pl-0 ">
          <FormAddArticulo
            categorias={this.state.categorias}
            fabricantes={this.state.fabricantes}
            generos={this.state.generos}
            listaprecioactual={this.state.listaprecioActual}
            handleSubmit={this.handleSubmit}
            onRef={ref => (this.child = ref)} 
          />
        </div>
        <div className="col-md-5">{/* <CardArticulo /> */}</div>
      </React.Fragment>
    );
  }
}

export default ArticulosPage;
