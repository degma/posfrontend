import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


const styles = makeStyles(theme => ({
    paper: {
        height: 130,
        width: 130,
        display: "flex",
        justify: "center",
        alignItems: "center"
    }
}));

const CardFabricante = (props) => {
    const classes = styles();


    return (
        <React.Fragment>
            <Grid key={props.fabricante.id} item>
                <Link
                    component="button"
                    color="inherit"
                    underline="none"
                    onClick={() => props.selectedFab(props.fabricante)}
                >
                    <Paper className={classes.paper}>
                        <Typography variant="button">{props.fabricante.nombre}</Typography>
                    </Paper>
                </Link>
            </Grid>
        </React.Fragment>
    )
}
export default CardFabricante