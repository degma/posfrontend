import React, { Component } from "react";
import ArticulosPageLista from "./ArticulosPageLista";
import InputForm from "../components/articulos/InputForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ArticuloDataGrid from "../components/articulos/ArticuloDataGrid";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper
  }
});

class ArticulosPageMain extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Productos" />
            <Tab label="Fabricantes" />
            <Tab label="Categorias" />
            <Tab label="Generos" />            
          </Tabs>
        </AppBar>
        {value === 0 && <ArticulosPageLista />}
        {value === 1 && <ArticuloDataGrid />}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>

        
      </React.Fragment>
    );
  }
}

ArticulosPageMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticulosPageMain);
