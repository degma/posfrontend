import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FabricantePanel from "./FabricantePanel";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function IncrementPanel(props) {
  const classes = useStyles();
  // Fabricantes unicos
  const fabris = props.articulos.map(a => a.fabricante);
  const fabricantes = fabris
    .map(e => e["id"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => fabris[e])
    .map(e => fabris[e]);
  console.log(fabricantes);

  return (
    <div className={classes.root}>
      <FabricantePanel fabricantes={fabricantes} articulos={props.articulos}/>
    </div>
  );
}
