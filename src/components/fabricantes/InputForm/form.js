import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

// import DisplayFormikState from "./DisplayFormikState";
import { Typography, Divider } from "@material-ui/core";
// import Select from 'react-select'

const useStyles = makeStyles({
  buttons: {
    display: "flex",
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: "flex-end"
  },
  button: {},
  container: {
    padding: 24
  },
  items: {
    paddingTop: 6,
    paddingBottom: 6,
    padding: 12
  },
  savediv: {
    background: "#e0e0e0",
    marginTop: 24,
    marginBottom: 24
  },
  detalleForm: {
    padding: 20
  }
});

export const Form = props => {
  
  const classes = useStyles();

  const {
    values: {
      nombre,
      descripcion,
      markup,
      nombre_contacto,
      apellido,
      email,
      celular_contacto,
      telefono_contacto,
      website,
      direccion,
      localidad,
      codigo_postal,
      notas
    },
    errors,
    touched,
    handleChange,    
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
      <form onSubmit={handleSubmit}>
        <Grid container justify="center">
          <Grid item lg={12} className={classes.savediv}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={8} className={classes.detalleForm}>
                Crear un nuevo Fabricante.
              </Grid>
              <Grid item xs={4} className={classes.detalleForm}>
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
            </Grid>
          </Grid>
          <Grid item lg={12} className={classes.items}>
            <Grid container>
              <Grid item lg={3} className={classes.detalleForm}>
                <Typography variant="h5" gutterBottom>
                  Detalles
                </Typography>
              </Grid>
              <Grid item lg={9} className={classes.detalleForm}>
                <Grid container>
                  <Grid item lg={6} className={classes.items}>
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
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="markup"
                      name="markup"
                      helperText={touched.markup ? errors.markup : ""}
                      error={touched.markup && Boolean(errors.markup)}
                      label="Markup"
                      value={markup}
                      onChange={change.bind(null, "markup")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} className={classes.items}>
                    <TextField
                      id="descripcion"
                      name="descripcion"
                      helperText={touched.descripcion ? errors.descripcion : ""}
                      error={touched.descripcion && Boolean(errors.descripcion)}
                      label="Descripción"
                      fullWidth
                      multiline
                      value={descripcion}
                      onChange={change.bind(null, "descripcion")}
                    />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
              <Divider />
          </Grid>
          <Grid item lg={12} className={classes.items}>
            <Grid container>
              <Grid item lg={3} className={classes.detalleForm}>
                <Typography variant="h5" gutterBottom>
                  Información de Contacto
                </Typography>
              </Grid>
              <Grid item lg={9} className={classes.detalleForm}>
                <Grid container>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="nombre_contacto"
                      name="nombre_contacto"
                      helperText={
                        touched.nombre_contacto ? errors.nombre_contacto : ""
                      }
                      error={
                        touched.nombre_contacto &&
                        Boolean(errors.nombre_contacto)
                      }
                      label="Nombre"
                      value={nombre_contacto}
                      onChange={change.bind(null, "nombre_contacto")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="apellido"
                      name="apellido"
                      helperText={touched.apellido ? errors.apellido : ""}
                      error={touched.apellido && Boolean(errors.apellido)}
                      label="Apellido"
                      value={apellido}
                      onChange={change.bind(null, "apellido")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="email"
                      name="email"
                      helperText={touched.email ? errors.email : ""}
                      error={touched.email && Boolean(errors.email)}
                      label="Email"
                      fullWidth
                      multiline
                      value={email}
                      onChange={change.bind(null, "email")}
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="celular_contacto"
                      name="celular_contacto"
                      helperText={
                        touched.celular_contacto ? errors.celular_contacto : ""
                      }
                      error={
                        touched.celular_contacto &&
                        Boolean(errors.celular_contacto)
                      }
                      label="Celular"
                      fullWidth
                      multiline
                      value={celular_contacto}
                      onChange={change.bind(null, "celular_contacto")}
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="telefono_contacto"
                      name="telefono_contacto"
                      helperText={touched.telefono_contacto ? errors.telefono_contacto : ""}
                      error={touched.telefono_contacto && Boolean(errors.telefono_contacto)}
                      label="Teléfono"
                      fullWidth
                      multiline
                      value={telefono_contacto}
                      onChange={change.bind(null, "telefono_contacto")}
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="website"
                      name="website"
                      helperText={touched.website ? errors.website : ""}
                      error={touched.website && Boolean(errors.website)}
                      label="Sitio Web"
                      fullWidth
                      multiline
                      value={website}
                      onChange={change.bind(null, "website")}
                    />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
              <Divider />
          </Grid>
          <Grid item lg={12} className={classes.items}>
            <Grid container>
              <Grid item lg={3} className={classes.detalleForm}>
                <Typography variant="h5" gutterBottom>
                  Dirección
                </Typography>
              </Grid>
              <Grid item lg={9} className={classes.detalleForm}>
                <Grid container>
                  <Grid item lg={12} className={classes.items}>
                    <TextField
                      id="direccion"
                      name="direccion"
                      helperText={touched.direccion ? errors.direccion : ""}
                      error={touched.direccion && Boolean(errors.direccion)}
                      label="Dirección"
                      value={direccion}
                      onChange={change.bind(null, "direccion")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="localidad"
                      name="m"
                      helperText={touched.localidad ? errors.localidad : ""}
                      error={touched.localidad && Boolean(errors.localidad)}
                      label="Localidad"
                      value={localidad}
                      onChange={change.bind(null, "localidad")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} className={classes.items}>
                    <TextField
                      id="codigo_postal"
                      name="codigo_postal"
                      helperText={touched.codigo_postal ? errors.codigo_postal : ""}
                      error={touched.codigo_postal && Boolean(errors.codigo_postal)}
                      label="Codigo Postal"
                      fullWidth
                      multiline
                      value={codigo_postal}
                      onChange={change.bind(null, "codigo_postal")}
                    />
                  </Grid>
                  <Grid item lg={12} className={classes.items}>
                    <TextField
                      id="notas"
                      name="notas"
                      helperText={touched.notas ? errors.notas : ""}
                      error={touched.notas && Boolean(errors.notas)}
                      label="Notas"
                      fullWidth
                      multiline
                      value={notas}
                      onChange={change.bind(null, "notas")}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </form>
      {/* <DisplayFormikState {...props} /> */}
    </React.Fragment>
  );
};
