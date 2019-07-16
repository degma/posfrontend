import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "../components/compras/List";
import Form from "../components/compras/Form";
import Typography from "@material-ui/core/Typography";
import eventService from "../api/eventService";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  paper: {
    height: 50,
    width: 120,
    display: "flex",
    justify: "center",
    alignItems: "center"
  },
  searchbox: {
    alignItems: "center"
  },
  searchInput: {
    width: "70%"
  },
  inputBox: {
    width: "100%"
  }
}));

const ComprasPage = () => {
  const [fabricantes, setFabricantes] = useState([]);
  const [filterFab, setFilterFab] = useState(fabricantes);
  const classes = styles();

  const handleChange = event => {
    let updatedList = fabricantes;
    updatedList = updatedList.filter(item => {
      return (
        item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    setFilterFab(updatedList);
  };

  useEffect(() => {
    eventService.fabricante
      .getFabricantes()
      .then(({ data }) => {
        setFabricantes(data);
        setFilterFab(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="m-2">
        <Paper>
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
                placeholder="Buscar Fabricantes"
                inputProps={{ "aria-label": "Buscar Fabricantes" }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="left" spacing={2}>
                {filterFab.map(fab => (
                  <Grid key={fab.id} item>
                    <Link
                      component="button"
                      color="inherit"
                      underline="none"                  
                      onClick={() => {
                        alert(fab.nombre);
                      }}
                    >
                      <Paper className={classes.paper}>
                        <Typography variant="button">{fab.nombre}</Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );

};

export default ComprasPage;
