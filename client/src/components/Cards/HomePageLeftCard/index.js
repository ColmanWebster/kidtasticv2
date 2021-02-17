import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(7),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f5b869",
    marginLeft: "3vw",
    marginRight: "1vw",
  },
}));

const HomePageLeftCard = () => {
  const classes = useStyles();
  return (
    <>
      <Hidden only={["lg", "xl"]}>
        <img src="./assets/images/simon2.png" alt="simon" className="simon" />
      </Hidden>
      <Paper item xs={12} className={classes.paper}>
        <h3>New Features!</h3>

        <h3>Better Experience</h3>
        <h3>More videos!</h3>
      </Paper>
    </>
  );
};

export default HomePageLeftCard;
