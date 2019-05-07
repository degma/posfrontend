import React from "react";
import Select from "react-select";
import "./formAddArticulo.css";

class FormAddArticulo extends React.Component {
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
  }

  handleChange = event => {
    let { value } = event.target;
    this.setState({ [event.target.id]: value });
  };

  handleSubmit = () => {
    this.fabricanteRef.current.value = "";
    this.categoriaRef.current.value = "";
    this.generoRef.current.value = "";
    let generos = this.state.generoId.map(a => a.id) || null;
    let fabricante = this.state.fabricanteId.id || null;
    let categoria = this.state.categoriaId.id || null;
    this.setState(
      {
        generoId: generos,
        fabricanteId: fabricante,
        categoriaId: categoria,
        listaprecioId: this.props.listaprecioactual.id
      },
      () => {
        this.props.handleSubmit(this.state);
        this.resetFormulario();
        return console.log("evento enviado");
      }
    );
  };

  handleDropDowns = (selectedOptions, event) => {
    if (selectedOptions !== null) {
      return this.setState({ [event.name]: selectedOptions });
    } else {
      return this.setState({ [event.name]: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form id="formuario-agregar-articulo">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={this.state.nombre}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Nombre del producto"
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Descripción</label>
              <textarea
                type="text"
                id="descripcion"
                value={this.state.descripcion}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Descripción del producto"
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputCity">Fabricante</label>
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
            <div className="form-group col-md-12">
              <label htmlFor="inputCity">Genero</label>
              <Select
                isMulti
                name="generoId"
                ref={this.generoRef}
                onChange={this.handleDropDowns}
                isSearchable={true}
                isClearable={true}
                className="basic-single"
                options={this.props.generos}
                getOptionLabel={opt => opt.nombre}
                getOptionValue={opt => opt.id}
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputState">Categoría</label>
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
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Lista de Precios</label>
              <input
                type="text"
                id="listaprecioId"
                value={this.props.listaprecioactual.nombre}
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Precio</label>
              <input
                type="number"
                id="precio"
                value={this.state.precio}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Precio"
              />
            </div>
            <div className="form-group col-md-12 text-right pt-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleSubmit}
              >
                + Agregar Producto
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormAddArticulo;
