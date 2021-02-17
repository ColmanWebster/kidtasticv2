import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#a560f0",
    marginLeft: "3vw",
    textAlign: "justify",
  },
}));

const HomePageLeftCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <h2>✅ Over 40 hours of cartoons.</h2>
      <h2>✅ Creative Drawing</h2>
      <h2>✅ Endless Possibilities</h2>

      <h3>No Credit or Debit Card Required*</h3>
    </Paper>
  );
};

export default HomePageLeftCard;
