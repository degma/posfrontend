import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
    backgroundColor: "red"
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
      email : '',
      password: ''
    }
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }
  static contextType = AuthContext;

  handleChange = event => {
    console.log(event)
  }

  submitHandler = event => {
    // event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    alert(console.log({ email, password }));

    eventService.auth.userLogin({ email, password }).then(res => {
      console.log(res.data);
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
          <form noValidate onSubmit={() => this.submitHandler()}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={()=> this.handleChange()}
              
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
              autoComplete="current-password"
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"              
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

AuthPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthPage);
