import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import InputLabel from "@material-ui/core/InputLabel"


const useStyles = makeStyles({
  buttons: {
    display: 'flex',
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
    paddingTop: 12,
    paddingBottom: 12,
  }
});


const categorias =
  [
    {
      label: "categoria 1",
      value: "categoria 1"
    },
    {
      label: "categoria 2",
      value: "categoria 2"
    },
    {
      label: "categoria 3",
      value: "categoria 3"
    },
  ]

const generos =
  [
    {
      label: "genero 1",
      value: "genero 1"
    },
    {
      label: "genero 2",
      value: "genero 2"
    },
    {
      label: "genero 3",
      value: "genero 3"
    },
  ]

const fabricantes =
  [
    {
      label: "fabricante 1",
      value: "fabricante 1"
    },
    {
      label: "fabricante 2",
      value: "fabricante 2"
    },
    {
      label: "fabricante 3",
      value: "fabricante 3"
    },
  ]

export const Form = props => {

  const classes = useStyles();

  const {
    values: { nombre, descripcion, precio, listadeprecio, categoria, genero, fabricante },
    errors,
    touched,
    handleChange,
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
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.items}>
          <TextField
            id="nombre"
            name="nombre"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && Boolean(errors.name)}
            label="Nombre"
            value={nombre}
            onChange={change.bind(null, "nombre")}
            fullWidth

          />
        </Grid>
        <Grid item xs={12} className={classes.items}>
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

        <Grid item xs={8} className={classes.items}>
          <TextField
            id="listadeprecio"
            name="listadeprecio"
            helperText={touched.listadeprecio ? errors.listadeprecio : ""}
            error={touched.listadeprecio && Boolean(errors.listadeprecio)}
            label="Lista de Precios"
            fullWidth
            type="password"
            value={listadeprecio}
            onChange={change.bind(null, "listadeprecio")}

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
            type="precio"
            value={precio}
            onChange={change.bind(null, "precio")}

          />
        </Grid>
        <Grid item xs={12} className={classes.items}>
          <InputLabel htmlFor="select-multiple-chip">Categoría</InputLabel>
          <Select
            id="categoria"
            input={<Input name="categoria" id="categoria" />}
            name="categoria"
            helperText={touched.categoria ? errors.categoria : ""}
            error={touched.categoria && Boolean(errors.categoria)}
            label="Categoria"
            fullWidth
            onChange={change.bind(null, "name")}
            value={categoria}
          >
            {categorias.map(name => (
              <MenuItem key={name.label} value={name.label} >
                {name.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} className={classes.items}>
          <InputLabel htmlFor="select-multiple-chip">Genero</InputLabel>
          <Select
            multiple
            value={genero}
            id="genero"
            input={<Input name="genero" id="genero" />}
            name="genero"
            helperText={touched.genero ? errors.genero : ""}
            error={touched.genero && Boolean(errors.genero)}
            label="genero"
            fullWidth
            onChange={change.bind(null, "genero")}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          >
            {generos.map(name => (
              <MenuItem key={name.label} value={name.label} >
                {name.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} className={classes.items}>
          <InputLabel htmlFor="select-multiple-chip">Fabricante</InputLabel>
          <Select
            id="fabricante"
            input={<Input name="fabricante" id="fabricante" />}
            name="fabricante"
            helperText={touched.fabricante ? errors.fabricante : ""}
            error={touched.fabricante && Boolean(errors.fabricante)}
            label="fabricante"
            fullWidth
            onChange={change.bind(null, "name")}
            value={fabricante}
          >
            {fabricantes.map(name => (
              <MenuItem key={name.label} value={name.label} >
                {name.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <Button
            type="submit"
            className={classes.button}
            variant="contained"            
            color="primary"
            disabled={!isValid}
          >
            Submit
      </Button>
        </Grid>

      </Grid>

    </React.Fragment>


  );
};