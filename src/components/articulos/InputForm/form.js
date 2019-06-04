import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import InputLabel from "@material-ui/core/InputLabel"
import DisplayFormikState from './DisplayFormikState'
// import Select from 'react-select'

const useStyles = makeStyles({
  buttons: {
    display: 'flex',
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: 24,
    marginLeft: 24,
  },
  container: {
    padding: 24
  },
  items: {
    paddingTop: 6,
    paddingBottom: 6,
    padding: 12
  }
});


export const Form = props => {

  console.log(props.categorias, props.fabricantes, props.generos)
  const classes = useStyles();



  const {
    values: { nombre, descripcion, precio, categoriaId, generoId, fabricanteId },
    errors,
    touched,
    handleChange,
    listadeprecioactual,
    handleSubmit,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };


  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
      >
        <Grid container justify="center">
          <Grid item xs={11} className={classes.items}>
          </Grid>
          <Grid item xs={11} className={classes.items}>
            <TextField
              id="nombre"
              name="nombre"
              helperText={touched.nombre ? errors.nombre : ""}
              error={touched.nombre && Boolean(errors.nombre)}
              label="Nombre"
              value={nombre}
              onChange={change.bind(null, "nombre")}
              fullWidth

            />
          </Grid>
          <Grid item xs={11} className={classes.items}>
            <TextField
              id="descripcion"
              name="descripcion"
              helperText={touched.descripcion ? errors.descripcion : ""}
              error={touched.descripcion && Boolean(errors.descripcion)}
              label="Descripción"
              fullWidth
              value={descripcion}
              onChange={change.bind(null, "descripcion")}
            />
          </Grid>
          <Grid container justify="center">
            <Grid item xs={7} className={classes.items}>
              <TextField
                id="listadeprecioId"
                name="listadeprecioId"
                helperText={touched.listadeprecio ? errors.listadeprecio : ""}
                error={touched.listadeprecio && Boolean(errors.listadeprecio)}
                label="Lista de Precios"
                fullWidth
                disabled
                value={listadeprecioactual.nombre}
                onChange={change.bind(null, "listadeprecioId")}

              />
            </Grid>
            <Grid item xs={4} className={classes.items}>
              <TextField
                id="precio"
                name="precio"
                helperText={touched.precio ? errors.precio : ""}
                error={touched.precio && Boolean(errors.precio)}
                label="Precio"
                fullWidth
                type="number"
                value={precio}                                
                onChange={change.bind(null, "precio")}
              />
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.items}>
            <InputLabel htmlFor="select-multiple-chip">Categoría</InputLabel>
            <Select
              id="categoria"
              input={<Input name="categoria" id="categoria" />}
              name="categoria"
              helperText={touched.categoria ? errors.categoria : ""}
              error={touched.categoria && Boolean(errors.categoria)}
              label="Categoria"
              fullWidth
              onChange={handleChange("categoriaId")}
              value={categoriaId}
            >
              {props.categorias.map(item => (
                <MenuItem key={item.id} value={item.id} >
                  {item.nombre}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={11} className={classes.items}>
            <InputLabel htmlFor="select-multiple-chip">Fabricante</InputLabel>
            <Select
              id="fabricante"
              input={<Input name="fabricante" id="fabricante" />}
              name="fabricante"
              helperText={touched.fabricante ? errors.fabricante : ""}
              error={touched.fabricante && Boolean(errors.fabricante)}
              label="fabricante"
              fullWidth
              onChange={handleChange("fabricanteId")}
              value={fabricanteId}
            >
              {props.fabricantes.map(item => (
                <MenuItem key={item.id} value={item.id} >
                  {item.nombre}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={11} className={classes.items}>
            <InputLabel htmlFor="select-multiple-chip">Genero</InputLabel>
            <Select
              multiple
              id="genero"
              input={<Input name="genero" id="genero" />}
              name="genero"
              helperText={touched.genero ? errors.genero : ""}
              error={touched.genero && Boolean(errors.genero)}
              label="genero"
              fullWidth
              onChange={handleChange("generoId")}
              value={generoId}
            >
              {props.generos.map(item => (
                <MenuItem key={item.id} value={item.id} >
                  {item.nombre}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={11} className={classes.buttons}>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={!isValid}

            >
              Guardar
      </Button>
          </Grid>
          <Grid item xs={11} className={classes.items}>
          </Grid>
        </Grid>
      </form>
      {/* <DisplayFormikState {...props} /> */}
    </React.Fragment>


  );
};