import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import MButton from "../../components/LoginButton";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API.js";
const useStyles = makeStyles((theme) => ({
  error: {
    border: "1px solid black",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "21vw",
    backgroundColor: "#E8B11A",
  },
  margin: {
    margin: theme.spacing(1),
  },
  font: {
    textAlign: "center",
  },
}));
const hahaha = () => {
  const appender = document.getElementById("para");
  const hello = document.createElement("div");
  appender.append(hello);
  const sorryMan =
    "<h1>Please email admin@kidtastic.com with your associated username and email for further instructions.</h1>";
  hello.innerHTML = sorryMan;
};
export default function Login() {
  const classes = useStyles();
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(setFormObject);
  }

  // const handleLoginEvent = () => {
  //   if (true) {
  //     console.log("Working");
  //     API.loginUser({
  //       email: req.body.email,
  //       password: req.body.password,
  //     })
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err.response.data));
  //   }
  // };

  const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const { email, password } = formObject;

    if (email && password) {
      console.log("working");
      // Send a POST request to the API endpoint
      const response = await API.loginUser({
        email: email,
        password: password,
      });
      if (response) {
        document.location.replace("/dashboard");
      }
    }
  };

  const logoutFormHandler = async (event) => {
    const { email, password } = formObject;
    API.logoutCurrentUser({
      email: email,
      password: password,
    });
    alert("Thank you for visiting Kidtastic, come back again soon!");
    document.location.replace("/");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <h1 className={classes.font}>Login</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                name="email"
                onChange={handleInputChange}
                id="email-login"
                label="email"
                color="secondary"
              />
              <br></br>
              <TextField
                name="password"
                onChange={handleInputChange}
                id="password-login"
                label="password"
                type="password"
                color="secondary"
              />
            </form>
            <br></br>
            <button onClick={loginFormHandler}>LOGIN</button>
            <button onClick={logoutFormHandler}>LOGOUT</button>
            {/* <MButton /> */}
            <h6 id="para">
              <button id="replace" onClick={hahaha}>
                Forgot your password?
              </button>
            </h6>
            <div className={classes.error}>error message here</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
