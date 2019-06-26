import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FabricantePanel from './FabricantePanel';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function IncrementPanel() {
    const classes = useStyles();

    console.log("Increment", this.props.articulos)

    return (
        <div className={classes.root}>

            <FabricantePanel />
        </div>
    );
}