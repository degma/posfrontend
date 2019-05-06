import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit        
      },
});


class FormAddFabricante extends Component {
    constructor(props){
        super(props)
        this.state = {            
            nombre: '',
            nombre_contacto: '',
            telefono: '',
            notas: ''
        }
        this.baseState = this.state
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = name => event => {        
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit() {
        this.props.handleSubmit(this.state)
        return (this.setState({            
            nombre: '',
            nombre_contacto: '',
            telefono: '',
            notas: ''
        }))
    }
    resetForm(){
        
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>                
                <h6 className="p-2 ml-3">Nuevo Fabricante</h6>
                <Divider />
                {this.props.isLoading ? (
                <div className={classes.root}>
                <LinearProgress variant="query" />                
                </div>
                ) : (
                <div className={classes.root}>
                
                </div>
                )}
                            
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="nombre"
                        label="Nombre"                        
                        value={this.state.nombre}
                        onChange={this.handleChange("nombre")}
                        style={{ margin: 16 }}
                        placeholder="Ingrese el nombre del fabricante"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="telefono"
                        label="Telefono"
                        value={this.state.telefono}
                        onChange={this.handleChange("telefono")}
                        style={{ margin: 16 }}
                        placeholder="Ingrese el nombre del fabricante"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="nombre_contacto"
                        label="Nombre Contacto"
                        value={this.state.nombre_contacto}
                        onChange={this.handleChange("nombre_contacto")}
                        style={{ margin: 16 }}
                        placeholder="Ingrese el nombre del fabricante"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="notas"
                        label="Notas"
                        value={this.state.notas}
                        onChange={this.handleChange("notas")}
                        multiline
                        style={{ margin: 16 }}
                        placeholder="Ingrese el nombre del fabricante"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.handleSubmit}>
                            Guardar
                    </Button>

                </form>
            </Paper>
        )
    }


}


FormAddFabricante.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormAddFabricante);