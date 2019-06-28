import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CategoriaPanel from "./CategoriaPanel";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  incremento: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "green",
    float: "right"
  },
  container: {
    margin: 0
  },
  dense: {
    marginTop: 0,
    width: 70
  }
}));

export default function FabricantePanel(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.fabricantes.map(e => {
        return (
          <ExpansionPanel key={e.id}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container justify="space-between">
                <Grid item>
                  <Typography className={classes.heading}>
                    {e.nombre}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.incremento}>&nbsp;Incrementa: 10%</Typography>
                </Grid>
              </Grid>
            </ExpansionPanelSummary>

            <CategoriaPanel articulos={props.articulos} fabricante={e.id} />
          </ExpansionPanel>
        );
      })}
    </React.Fragment>
  );
}
