import React, { Component } from 'react'
import ArticuloList from '../components/articulos/ArticuloList'
import eventService from '../api/eventService'
import Paper from '@material-ui/core/Paper'
import { Divider } from '@material-ui/core';

class ArticulosPageLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
        this.handleEliminar = this.handleEliminar.bind(this)
    }

    componentDidMount() {
        eventService.articulo.getArticulo()
            .then(articulos => {
                this.setState({ lista: articulos.data.articulos })
            })
            .catch(error => console.log(error))
    }
    handleEliminar(args) {
        console.log(args)
        eventService.articulo.desactivarArticulo(args.id)
            .then(() => {
                let updatedLista = this.state.lista.filter(function (obj) {
                    return obj.id !== args.id;
                });
                this.setState({lista:updatedLista})

            })
    }

    render() {
        return (
            <React.Fragment>
                <Paper className="m-2"  >
                    <h5 className="m-3">Lista</h5>
                    <Divider />
                    <ArticuloList
                        lista={this.state.lista}
                        handleEliminar={this.handleEliminar}
                    />
                </Paper>
            </React.Fragment>
        )
    }

}

export default ArticulosPageLista