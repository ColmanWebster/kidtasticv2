import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import MButton from "../../components/LoginButton";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "21vw",
    backgroundColor: "#e8b11a",
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
  const handleLoginEvent = () => {
    if (true) {
      console.log("Working");
      API.loginUser({
        username: formObject.username,
        password: formObject.password,
      })

        .then((res) => console.log(res))

        .catch((err) => console.log(err.response.data));
    }
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
                name="username"
                onChange={handleInputChange}
                id="standard-secondary"
                label="username"
                color="secondary"
              />
              <br></br>
              <TextField
                name="password"
                onChange={handleInputChange}
                id="standard-secondary"
                label="password"
                type="password"
                color="secondary"
              />
            </form>
            <br></br>
            <button onClick={handleLoginEvent}>LOGIN</button>
            {/* <MButton /> */}
            <h6 id="para">
              <button id="replace" onClick={hahaha}>
                Forgot your password?
              </button>
            </h6>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
