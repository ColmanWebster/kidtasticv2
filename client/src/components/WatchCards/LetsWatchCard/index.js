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
    backgroundColor: "#202124",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
  watcher: {
    width: "50vw",
  },
}));

const LetsWatchCard = () => {
  const classes = useStyles();
  return (
    <article item xs={12} className={classes.paper}>
      <img
        src="./assets/fontpics/kidtasticwatch.png"
        alt="kidtastic watch"
        className={classes.watcher}
      />
    </article>
  );
};

export default LetsWatchCard;
