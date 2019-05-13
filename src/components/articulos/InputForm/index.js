import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup"
import PropTypes from 'prop-types';


const validationSchema = Yup.object({
  nombre: Yup.string("Enter a name")
    .required("Name is required"),
  descripcion: Yup.string("Enter your email")
    .required("Email is required"),
  listaprecio: Yup.string("Enter your email")
    .required("Email is required"),
  precio: Yup.string("Enter your email")
    .required("Email is required"),
  gneero: Yup.string("")
    .required("Enter your password"),
  categoria: Yup.string("Enter your password")
    .required("Confirm your password"),
  genero: Yup.string("Enter your password")
    .required("Confirm your password"),
  fabricante: Yup.string("Enter your password")
    .required("Confirm your password")
})

const styles = theme => ({
  demo: {
    height: 240,
    background: "#f00",
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  titulo: {
    paddingTop: 10
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit
  },
});


class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    
    const values = { name: "", descripcion: "", precio: "", listadeprecio: "", categoria: "", genero: [], fabricante: "" };

    return (
      <Paper>        
        <Formik
          render={props => <Form {...props} categorias={this.props.categorias} generos={this.props.generos} fabricantes={this.props.fabricantes}/>}
          initialValues={values}
          validationSchema={validationSchema}
          hola="hola"
        />
      </Paper>

    );
  }
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(InputForm);