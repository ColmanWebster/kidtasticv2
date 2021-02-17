import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import InputBox from "../../components/InputBox";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
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
    backgroundColor: "white",
  },
  margin: {
    margin: theme.spacing(9),
    color: "white",
  },
  font: {
    textAlign: "center",
  },
  videoPlayer: {
    marginTop: "30px",
  },
}));

export default function Login() {
  const [formObject, setFormObject] = useState({});
  const classes = useStyles();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value });
    console.log(setFormObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("Working");
    // const yayGif = `
    // <iframe src="https://giphy.com/embed/9PyhoXey73EpW" width="400" height="362" frameBorder="0" class="giphy-embed" allowFullScreen>`;
    // const attachMe = (document.getElementById("attachMe").innerHTML = yayGif);
    if (true) {
      console.log("Working");
      API.saveUser({
        name: formObject.name,
        username: formObject.email,
        email: formObject.username,
        password: formObject.password,
        confirmedPassword: formObject.confirmedPassword,
      })

        .then((res) => console.log(res))

        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <h1 className={classes.font}>Signup here!</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <InputBox
              name="name"
              onChange={handleInputChange}
              label="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            ,<br></br>
            <InputBox
              name="email"
              onChange={handleInputChange}
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br></br>
            <InputBox
              name="username"
              onChange={handleInputChange}
              label="Desired Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AssignmentIndIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br></br>
            <InputBox
              name="password"
              onChange={handleInputChange}
              label="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br></br>
            <InputBox
              name="confirmedPassword"
              onChange={handleInputChange}
              label="Confirm Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br></br>
            <Button
              style={{ backgroundColor: "#63eb9b", color: "black" }}
              variant="contained"
              color="secondary"
              onClick={handleFormSubmit}
            >
              Join
            </Button>
            <div className={classes.videoPlayer} id="attachMe"></div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
