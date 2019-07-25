import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ResumenCompra from './ResumenCompra';
import { grey } from '@material-ui/core/colors';
import BuscadorItems from '../buscadoritems';
import { connect } from 'react-redux';

const styles = makeStyles(theme => ({
    container: {
        backgroundColor: { grey }
    },
    paper: {
        margin: 10
    },
    spacer: {
        marginTop: 20
    }
}))

const Carrito = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [currentProd, setCurrentProd] = useState({ producto: { articuloId: '', nombre: '', categoriaId: '', generos: [], cantidad: '', precioCompra: '', precioVenta: '' } });
    const clasess = styles()

    // useEffect(() => {

    // }, []);

    const handleSelectedItem = (item) => {
        setCurrentProd(item)
    }

    const handleAddProduct = (producto) => {

    }

    return (
        <div className={clasess.container}>
            <div className={clasess.paper}>

                <ResumenCompra />
                <div className={clasess.spacer} />

                <Paper>
                    <BuscadorItems handleSelection={handleSelectedItem} itemList={props.categoriass} textoBuscador="Buscar Categoría"/>
                </Paper>
                <Paper>
                    Step 2 -  Seleccionar Producto / crear Producto
                </Paper>
                <Paper>
                    Step 3 - Ingresar cantidads
                </Paper>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    error: state.lovReducer.error,
    categoriass: state.lovReducer.categorias,
    pending: state.lovReducer.pending
})

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)