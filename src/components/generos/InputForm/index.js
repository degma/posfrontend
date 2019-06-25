import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object({
  nombre: Yup.string("Nombre").required("*campo obligatorio")
});

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
    flexGrow: 1
  },
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit
  }
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render() {
    

    const values = () => {
      if (this.props.action === "new") {
        let val = {
          nombre:'',
          descripcion:''
        };
        return val;
      } else {
        let val = this.props.itemUpdate                
        return val;
      }
    };

    return (
      <Grid container justify="center">
        <Grid item lg={12}>
          <Formik
            render={props => <Form {...props} />}
            initialValues={values()}
            validationSchema={validationSchema}
            onSubmit ={values => {
              this.props.handleAddItem(values)
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputForm);
