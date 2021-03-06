import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";



const styles = {
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class DialogArticulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = (args) => {
        this.props.handleAdd(args)
    }

    handleClickOpen = () => {
        this.props.opendialog() 
    };

    handleClose = () => {
        this.props.closedialog()
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                onClick={this.handleClose}
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                {this.props.dialogTitle}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        {this.props.children}
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

DialogArticulo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogArticulo);
