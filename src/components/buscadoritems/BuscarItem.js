import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 10,
        alignItems: "center"
    },
    searchbox: {
        alignItems: "center"
    },
}))

const BuscarItem = ({searchedText, searchedItems, searchText}) => {
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
                    placeholder={searchText}
                    inputProps={{ "aria-label": {searchText} }}
                    onChange={searchedText}
                    fullWidth
                />
            </Grid>
        </Grid>
    )

}

export default BuscarItem