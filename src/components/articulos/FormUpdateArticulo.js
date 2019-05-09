import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const customStyles = {
  input: styles => {
    return {
      ...styles,
      height: "2.8em"
    };
  }
};

class FormAddArticulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      fabricanteId: "",
      categoriaId: "",
      generoId: [],
      listaprecioId: "",
      precio: ""
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
    this.setState({
      nombre: this.props.articulo.nombre || '',
      descripcion: this.props.articulo.descripcion || '',
      precio: this.props.articulo.precio.precio || '',
      categoriaId: this.props.articulo.categoria.id,
      fabricanteId: this.props.articulo.fabricante.id
    })

  }

  handleSubmit = () => {    
    return this.setState(
      {
        listaprecioId: this.props.listaprecioactual.id,
        categoriaId: this.state.categoriaId.id,
        fabricanteId: this.state.fabricanteId.id,
        generoId: this.state.generoId.map(i => i.id)
      },
      () => {
        this.props.handleSubmit(this.state);
      }
    );
  };

  handleChange = event => {
    console.log(this.state);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleDropDowns = (selectedOptions, event) => {
    this.setState({ [event.name]: selectedOptions });
  };

  render() {
    return (
      <React.Fragment>
        <form id="formulario-alta">
          <TextField
            id="nombre"
            label="Nombre"
            ref={this.nombreRef}
            value={this.state.nombre}
            onChange={this.handleChange}
            style={{
              margin: 8,
              paddingRight: 8
            }}
            margin="normal"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="descripcion"
            label="Descripción"
            value={this.state.descripcion}
            onChange={this.handleChange}
            style={{
              margin: 8,
              paddingRight: 8
            }}
            margin="normal"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <div className="row">
            <div className="col-md-8">
              <TextField
                id="listaprecioId"
                label="Lista de Precios"
                value={this.props.listaprecioactual.nombre}
                onChange={this.handleChange}
                disabled
                style={{
                  margin: 8,
                  paddingRight: 8
                }}
                InputProps={{
                  readOnly: true
                }}
                margin="normal"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="precio"
                label="Precio"
                fullWidth
                value={this.state.precio}
                onChange={this.handleChange}
                style={{
                  margin: 8,
                  paddingRight: 8
                }}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
            </div>
          </div>
          <div className="ml-2 mb-3">
            <InputLabel htmlFor="component-simple">Fabricante</InputLabel>
            <Select
              name="fabricanteId"
              styles={customStyles}
              value= {this.props.fabricantes.filter(opt => opt.id === this.state.fabricanteId)}
              isSearchable={true}
              isClearable={true}
              className="basic-single"
              ref={this.fabricanteRef}
              onChange={this.handleDropDowns}
              options={this.props.fabricantes}
              getOptionLabel={opt => opt.nombre}
              getOptionValue={opt => opt.id}
            />
          </div>
          <div className="ml-2 mb-3">
            <InputLabel htmlFor="component-simple">Categoría</InputLabel>
            <Select
              options={this.props.categorias}
              onChange={this.handleDropDowns}
              value= {this.props.categorias.filter(opt => opt.id === this.state.categoriaId)}
              styles={customStyles}
              ref={this.categoriaRef}
              name="categoriaId"
              isSearchable={true}
              isClearable={true}
              className="basic-single"
              getOptionLabel={opt => opt.nombre}
              getOptionValue={opt => opt.id}
            />
          </div>
          <div className="ml-2 mb-3">
            <InputLabel htmlFor="component-simple">Genero/s</InputLabel>
            <Select
              isMulti
              name="generoId"
              onChange={this.handleDropDowns}
              styles={customStyles}
              isSearchable={true}
              isClearable={true}
              className="basic-single"
              options={this.props.generos}
              getOptionLabel={opt => opt.nombre}
              getOptionValue={opt => opt.id}
            />
          </div>
          <div className="text-right">
            <Button
              variant="contained"
              color="primary"
              className="mt-3"
              onClick={this.handleSubmit}
            >
              GUARDAR
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default FormAddArticulo;