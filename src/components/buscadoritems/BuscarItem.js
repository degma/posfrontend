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

const BuscarItem = ({searchedText, searchedItems}) => {
    const classes = styles()
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid
                item
                justify="center"
                alignItems="center"
                spacing={2}
                xs={9}
                className={classes.searchbox}
            >
                <InputBase
                    placeholder={searchedItems}
                    inputProps={{ "aria-label": {searchedItems} }}
                    onChange={searchedText}
                />
            </Grid>
        </Grid>
    )

}

export default BuscarItem