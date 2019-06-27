import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CategoriaPanel from "./CategoriaPanel";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
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
              <Typography className={classes.heading}>
                {e.nombre}
              </Typography>
            </ExpansionPanelSummary>

            <CategoriaPanel articulos ={props.articulos} fabricante={e.id}/>
          </ExpansionPanel>
        );
      })}
    </React.Fragment>
  );
}
