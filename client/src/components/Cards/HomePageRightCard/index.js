import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f5b869",
    marginRight: "3vw",
    marginLeft: "1vw",
  },
}));

const HomePageLeftCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <h1>Not a user yet?</h1>
      <h3>New accounts are limited to the first 100 people.</h3>
      <p>Grab a parent or signup yourself!</p>
      <p>100% free and no credit card required.</p>
      <br></br>
      <Button variant="contained" color="primary" href="/signup">
        Signup
      </Button>
    </Paper>
  );
};

export default HomePageLeftCard;
