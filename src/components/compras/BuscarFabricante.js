import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 10
    },
    searchbox: {
        alignItems: "center"
    },
}))

const BuscarFabricante = (props) => {
    const classes = styles()
    return (
        <Grid container className={classes.root} spacing={2} alignItems="center">
            <Grid
                item
                justify="center"
                spacing={2}
                xs={9}
                className={classes.searchbox}
            >
                <InputBase
                    placeholder="Buscar Fabricantes"
                    inputProps={{ "aria-label": "Buscar Fabricantes" }}
                    onChange={props.inputSearchB}
                />
            </Grid>
        </Grid>
    )

}

export default BuscarFabricante