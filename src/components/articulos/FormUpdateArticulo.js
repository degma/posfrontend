import React, { Component } from 'react'
import { AppBar, Paper, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import FormAddArticulo from './FormAddArticulo';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};



class FormUpdateArticulo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            Editar Artículo
                        </Typography>
                        <Button color="inherit" onClick={this.handleClose}>
                            GUARDAR
                        </Button>
                    </Toolbar>
                </AppBar>

                <Paper className="m-2">
                    <div className="col-md-12 p-3">
                        
                    </div>
                </Paper>

            </React.Fragment>

        )
    }

}

FormUpdateArticulo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormUpdateArticulo)