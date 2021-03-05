import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import MButton from "../../components/LoginButton";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API.js";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/button";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  error: {
    border: "1px solid black",
    color: "red",
    fontWeight: "bold",
    marginTop: "10px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "21vw",
    backgroundColor: "#d7d3e0",
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
export default function Login({ setCurrentUser }) {
  const classes = useStyles();
  const [formObject, setFormObject] = useState({});
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log("Form object from handleInputChange", setFormObject);
  }

  const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const { email, password } = formObject;

    if (email && password) {
      console.log("Login email and password starting now", formObject);
      // Send a POST request to the API endpoint
      try {
        const res = await API.loginUser({
          email: email,
          password: password,
        });
        console.log("Return result from findone api", res);
        setCurrentUser(res.data);
        history.push("/dashboard");
      } catch (err) {
        // catches errors both in fetch and response.json
        console.log("Error from catch", err.response.data);
        setErrorMsg(err.response.data);
      }
      // if (response) {
      //   console.log("Successful login");
      //   document.location.replace("/dashboard");
      // } else {
      //   console.log("Login failed" )
      //   const dispErr = (document.getElementById("dspError").innerHTML =  "Invalid Login credentials.  Please enter a valid email address and password.");
      // }
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
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.4,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3,
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
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
              <Button
                onClick={loginFormHandler}
                style={{
                  backgroundColor: "#9d91c4",
                  color: "black",
                  border: "solid 1px beige",
                  fontWeight: "bolder",
                }}
              >
                LOGIN
              </Button>
              {/* <Button
              onClick={logoutFormHandler}
              style={{
                backgroundColor: "#9d91c4",
                color: "black",
                border: "solid 1px beige",
                fontWeight: "bolder",
              }}
            >
              LOGOUT
            </Button> */}
              {/* <MButton /> */}
              <h6 id="para">
                <Button
                  id="replace"
                  onClick={hahaha}
                  style={{
                    backgroundColor: "#81b7d2",
                    color: "black",
                    border: "solid 1px red",
                  }}
                >
                  Forgot your password?
                </Button>
              </h6>
              <div className={classes.error} id="dspError">
                {errorMsg}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
}
