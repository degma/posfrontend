import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavigationBar from "./components/navigationbar/NavigationBar";
import ArticulosPage from "./pages/ArticulosPageMain"
import ListaPreciosPage from "./pages/ListaPreciosPage"
import ConfiguracionPage from './pages/ConfiguracionPage'
import Grid from '@material-ui/core/Grid'
class App extends Component {
  state = {
    token: null,
    usuarioId: null
  };
  login = (token, userId, tokenExpiration) => {
    this.setState({token:token, userId: userId});
  };
  logout = () => {
    this.setState({ token: null, userId: null });
  };

  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavigationBar />
          <main className="main-content bg-light">
            <Grid container>
              <Grid item xs={12}>
                  <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/listaprecios" component={ListaPreciosPage} />
                    <Route path="/articulos" component={ArticulosPage} />
                    <Route path="/configuracion" component={ConfiguracionPage} />                
                  </Switch>
              </Grid>
            </Grid>            
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
