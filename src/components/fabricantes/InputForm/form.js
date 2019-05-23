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
import { Typography, Divider } from "@material-ui/core";
// import Select from 'react-select'

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: 'flex-end',
    },
    button: {

    },
    container: {
        padding: 24
    },
    items: {
        paddingTop: 6,
        paddingBottom: 6,
        padding: 12
    },
    savediv: {
        background: '#e0e0e0',
        marginTop: 24,
        marginBottom: 24
    },
    detalleForm: {
        padding: 20
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
                    <Grid item xs={12} className={classes.savediv}>
                        <Grid container justify="center" alignItems="center" >
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
                    <Grid item xs={12} className={classes.items}>
                        <Grid container>
                            <Grid item xs={3} className={classes.detalleForm}>
                                <Typography variant="h5" gutterBottom>Detalles</Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.detalleForm}>
                                <Grid container >
                                    <Grid item xs={6} className={classes.items}>
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
                                    <Grid item xs={6} className={classes.items}>
                                        <TextField
                                            id="nombre"
                                            name="m"
                                            helperText={touched.nombre ? errors.nombre : ""}
                                            error={touched.nombre && Boolean(errors.nombre)}
                                            label="Markup"
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
                                            multiline
                                            value={descripcion}
                                            onChange={change.bind(null, "descripcion")}
                                        />
                                    </Grid>
                                </Grid>


                            </Grid>

                            <Divider />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.items}>
                        <Grid container>
                        <Grid item xs={3} className={classes.detalleForm}>
                            <Typography variant="h5" gutterBottom>Información de Contacto</Typography>
                        </Grid>
                        <Grid item xs={9} className={classes.detalleForm}>
                            <Grid container >
                                <Grid item xs={6} className={classes.items}>
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
                                <Grid item xs={6} className={classes.items}>
                                    <TextField
                                        id="nombre"
                                        name="m"
                                        helperText={touched.nombre ? errors.nombre : ""}
                                        error={touched.nombre && Boolean(errors.nombre)}
                                        label="Markup"
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
                                        multiline
                                        value={descripcion}
                                        onChange={change.bind(null, "descripcion")}
                                    />
                                </Grid>
                            </Grid>


                        </Grid>

                        <Divider />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.items}>
                        <Grid container>                        
                        <Grid item xs={3} className={classes.detalleForm}>
                            <Typography variant="h5" gutterBottom>Dirección</Typography>

                        </Grid>
                        <Grid item xs={9} className={classes.detalleForm}>
                            <Grid container >
                                <Grid item xs={6} className={classes.items}>
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
                                <Grid item xs={6} className={classes.items}>
                                    <TextField
                                        id="nombre"
                                        name="m"
                                        helperText={touched.nombre ? errors.nombre : ""}
                                        error={touched.nombre && Boolean(errors.nombre)}
                                        label="Markup"
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
                                        multiline
                                        value={descripcion}
                                        onChange={change.bind(null, "descripcion")}
                                    />
                                </Grid>
                            </Grid>


                        </Grid>

                        <Divider />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <DisplayFormikState {...props} />
        </React.Fragment>


    );
};