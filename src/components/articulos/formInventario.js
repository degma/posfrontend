import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper"

class FormInventario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventario: null
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center mt-4 mb-5">
                    <Paper className="ml-5 pr-5 pl-5 pt-3 w-100">
                    INVENTARIO
                    </Paper>
                </div>
            </React.Fragment>


        );
    }

}

export default FormInventario;