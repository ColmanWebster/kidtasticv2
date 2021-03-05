import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5vw",
    textAlign: "center",
    fontSize: "3vh",
    fontWeight: "900",
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

const getQuote = "https://official-joke-api.appspot.com/random_joke";
const pullit = () => {
  axios.get(getQuote).then((res) => {
    let setup = res.data.setup;
    let punchline = res.data.punchline;
    let setups = (document.getElementById("setup").innerHTML = setup);
    let punchlines = (document.getElementById(
      "punchline"
    ).innerHTML = punchline);
  });
};

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {pullit()}
      {/* <p>Enjoy a random joke while the page is loading!</p> */}
      <h2 id="setup"></h2>
      <h2 id="punchline"></h2>
      <br></br>
      <LinearProgress color="secondary" />
    </div>
  );
}
