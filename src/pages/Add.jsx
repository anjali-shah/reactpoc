import React from "react";
import { Link } from "react-router-dom";

import {
  IconButton,
  Button,
  TextField,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { Person, Email, Visibility, VisibilityOff } from "@material-ui/icons";


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anjali",
      email: "anjali.shah@gmail.com",
      password: "Anjali123",
      confirmPassword: "Anjali123",
      showPassword: false,
      showConfirmPassword: false,
      loader: false,
      touched: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
    };
  }

  handleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({ showConfirmPassword: !showConfirmPassword });
  };

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  isTouched = (field) => {
    const { touched } = this.state;
    this.setState({ touched: { ...touched, [field]: true } });
  };

  onsubmit = async () => {
    console.log("object");
    const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("----", result);
  };

  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      showPassword,
      showConfirmPassword,
    } = this.state;
    return (
      <>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Name"
              id="Name"
              value={name}
              fullWidth
              onChange={this.handleChange("name")}
              onBlur={() => this.isTouched("name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              id="email"
              value={email}
              fullWidth
              onChange={this.handleChange("email")}
              onBlur={() => this.isTouched("email")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              id="outlined-start-adornment"
              type={showPassword ? "text" : "password"}
              value={password}
              fullWidth
              onChange={this.handleChange("password")}
              onBlur={() => this.isTouched("password")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={this.handleShowPassword} edge="start">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Password"
              id="password"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              value={confirmPassword}
              onChange={this.handleChange("confirmPassword")}
              onBlur={() => this.isTouched("confirmPassword")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={this.handleShowConfirmPassword}
                      edge="start"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button component={Link} to="/" color="inherit">
          Cancel
        </Button>
        <Button onClick={this.onsubmit} color="primary">
          submit
        </Button>
      </>
    );
  }
}

export default Add;
