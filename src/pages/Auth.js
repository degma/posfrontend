import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AuthContext from "../context/auth-context";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import eventService from "../api/eventService";

const styles = {
  avatar: {
    margin: 12,
    backgroundColor: "grey"
  },
  paper: {
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.stet = {
      email: "",
      password: ""
    };
  }
  static contextType = AuthContext;

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitHandler = () => {
    eventService.auth.userLogin(this.state)
      .then(res => {        
        this.props.loginHandler(res.data)
      })
      .catch(error => {
        return alert("Credenciales incorrectas!")
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"

            autoFocus
            onChange={e => this.handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"

            onChange={e => this.handleChange(e)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.submitHandler()}
          >
            Acceder
          </Button>
        </div>
      </Container>
    );
  }
}

AuthPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthPage);
