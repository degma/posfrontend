import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

class FormAddArticulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      fabricanteId: "",
      categoriaId: "",
      generoId: "",
      listaprecioId: "",
      precio: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    console.localStorage(this.state)
    return this.props.handleSubmit(this.state);
  };

  handleChange = event => {
    console.log(this.state);
    
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleDropDowns = (selectedOptions, event) => {
    if (selectedOptions !== null) {
      return this.setState({ [event.name]: selectedOptions.map(i => i.id) });
    } else {
      return this.setState({ [event.name]: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <TextField
          id="nombre"
          label="Nombre"
          value={this.state.nombre}
          onChange={this.handleChange}
          style={{ margin: 8 }}
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
          style={{ margin: 8 }}
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
              value={this.state.listaprecioId}
              onChange={this.handleChange}
              style={{ margin: 8 }}
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
              style={{ margin: 8 }}
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
            onClick={this.handleSubmit}
          >
            GUARDAR
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
export default FormAddArticulo;
