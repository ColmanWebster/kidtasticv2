import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#dced98",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
}));

const LetsWatchCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <h1 className="">Let's Watch ＼(≧▽≦)／</h1>{" "}
    </Paper>
  );
};

export default LetsWatchCard;
