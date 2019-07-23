import React, {useState, useEffect} from 'react'
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
        marginTop: 10
    }
}))

const Carrito = (props) => {
    const [categorias, setCategorias] = useState([]);
    const clasess = styles()

    useEffect(() => {

    }, []);

    const handleSelectedItem = (item) => {

    }

    return (
        <div className={clasess.container}>
            <div className={clasess.paper}>

                <ResumenCompra />
                <div className={clasess.spacer} />

                <Paper>
                    <BuscadorItems handleSelection={handleSelectedItem} />
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
    error: state.error,
    categorias: state.categorias,
    pending: state.pending
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCategorias: categoria => dispatch(setCategorias(categoria))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)