import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NavigationBar from "./components/navigationbar/NavigationBar";
import ArticulosPage from "./pages/ArticulosPageMain";
import ListaPreciosPage from "./pages/ListaPreciosPage";
import ConfiguracionPage from "./pages/ConfiguracionPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthPage from "./pages/Auth";
import AuthContext from "./context/auth-context";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing(2)
  }
});

class App extends Component {
  state = {
    token: localStorage.getItem('token') || null,
    userId:  localStorage.getItem('userId') || null
  };

  login = (values) => {    
    localStorage.setItem('token', values.token)
    localStorage.setItem('userId', values.userId)
    this.setState({ token: values.token, userId: values.userId });
    
  };

  logout = () => {
    localStorage.setItem('token', null)
    localStorage.setItem('userId', null)
    this.setState({ token: null, userId: null });
  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            {this.state.token && (
              <div className={classes.root}>
                <CssBaseline />
                  <NavigationBar />
                
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                      <Redirect from="/" to="/home" exact />
                      <Route
                        path="/listaprecios"
                        component={ListaPreciosPage}
                      />
                      <Route path="/articulos" component={ArticulosPage} />
                      <Route
                        path="/configuracion"
                        component={ConfiguracionPage}
                      />
                      <Route path="/login" component={AuthPage} />
                    </Switch>                
                  </main>
              </div>
            )}
            {!this.state.token && <AuthPage loginHandler={this.login} />}
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
