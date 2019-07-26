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
    const [currentProd, setCurrentProd] = useState({ articuloId: '', nombre: '', categoriaId: '', generos: [], cantidad: '', precioCompra: '', precioVenta: '' } );
    const [step, setStep] = useState(0);
    const [catProds, setCatProds]= useState([]);
    const clasess = styles()

    const handleSelectedCategory = (item) => {        
        let updatedList = props.productos
        updatedList = updatedList.filter(e => e.categoria.id === item.id )
        setCurrentProd(prevState => {
            return { ...prevState, categoriaId : item.id}
        })
        setCatProds(updatedList)        
        setStep(1)        
    }

    const handleSelectedArticulo = (item) => {        
        setCurrentProd(prevState => {
            return { ...prevState, articuloId : item.id}
        })
        setStep(1)        
    }

    
    const handleAddProduct = (producto) => {

    }

    return (
        <div className={clasess.container}>
            <div className={clasess.paper}>

                <ResumenCompra />
                <div className={clasess.spacer} />

                <Paper>
                    {step === 0 && <BuscadorItems handleSelection={handleSelectedCategory} itemList={props.categorias} textoBuscador="Buscar Categoría"/>}
                    {step === 1 && <BuscadorItems handleSelection={handleSelectedArticulo} itemList={catProds} textoBuscador="Buscar Artículo"/>}
                </Paper>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    categorias: state.lovReducer.categorias.items,
    caterror: state.lovReducer.categorias.error,
    catpending: state.lovReducer.categorias.pending,
    productos: state.lovReducer.productos.items,
    prodegorias: state.lovReducer.productos.items,
    proderror: state.lovReducer.productos.error,
})

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)