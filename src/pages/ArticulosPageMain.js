import React, { Component } from 'react'
import ArticulosPageNew from './ArticulosPageNew'
import ArticulosPageLista from './ArticulosPageLista';
import Grid from '@material-ui/core/Grid'
class ArticulosPageMain extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <ArticulosPageNew />
                </Grid>
                <Grid item xs={6}>
                    <ArticulosPageLista />
                </Grid>
            </Grid>


        )
    }

}

export default ArticulosPageMain